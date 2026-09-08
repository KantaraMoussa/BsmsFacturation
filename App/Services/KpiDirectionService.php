<?php

namespace App\Services;

use Core\Database;
use PDO;

/**
 * Dashboard KPI Direction - cahier des charges "MODULE KPI DASHBOARD DIRECTION".
 *
 * All amounts are computed with the same formula the rest of the app uses
 * for a single facture (AppServices::getFactureLineByFacture):
 *   montant_ht  = SUM(pointage.index_total_pointage) * facture_lignes.prix_unitaire_facture_lignes
 *   montant_tva = montant_ht * (tva_factures / 100)
 *   montant_ttc = montant_ht + montant_tva
 *   solde       = montant_ttc - avoirs - paiements
 * reproduced here in SQL (CTEs) instead of the per-facture PHP loop, so the
 * dashboard can aggregate/group across the whole dataset in one query.
 *
 * "Contrat" = commandes row (no dedicated contracts table exists).
 * "Type de prestation" = commandes.type_location_commandes.
 * "Coûts d'exploitation" = maintenance + carburant only (the only cost
 * sources that actually exist in the schema) - never invented.
 */
class KpiDirectionService
{
    private PDO $pdo;
    private AppServices $appService;
    private const CACHE_TTL = 90;

    public function __construct()
    {
        $this->pdo = Database::getInstance();
        $this->appService = new AppServices();
    }

    // ------------------------------------------------------------------
    // Filters
    // ------------------------------------------------------------------

    /**
     * Normalizes raw request input into a filter array with resolved
     * date_from/date_to (period presets are resolved here, once).
     */
    public function normalizeFilters(array $raw): array
    {
        $today = new \DateTimeImmutable('today');
        $period = $raw['period'] ?? 'year';
        $dateFrom = null;
        $dateTo = null;

        // An explicit date_from/date_to pair (e.g. from a drilldown link built
        // off an already-resolved period) is authoritative regardless of
        // which period preset produced it - otherwise a drilldown link that
        // forgot to also pass period=custom would silently snap back to the
        // current year and show numbers that don't match the KPI it came from.
        if (!empty($raw['date_from']) && !empty($raw['date_to'])) {
            return array(
                'period' => $raw['period'] ?? 'custom',
                'date_from' => $raw['date_from'],
                'date_to' => $raw['date_to'],
                'client' => $raw['client'] ?? '',
                'chantier' => $raw['chantier'] ?? '',
                'engin' => $raw['engin'] ?? '',
                'categorie' => $raw['categorie'] ?? '',
                'contrat' => $raw['contrat'] ?? '',
                'prestation' => $raw['prestation'] ?? '',
                'statut' => $raw['statut'] ?? '',
            );
        }

        switch ($period) {
            case 'month':
                $dateFrom = $today->modify('first day of this month')->format('Y-m-d');
                $dateTo = $today->modify('last day of this month')->format('Y-m-d');
                break;
            case 'quarter':
                $q = (int) ceil((int) $today->format('n') / 3);
                $startMonth = ($q - 1) * 3 + 1;
                $dateFrom = $today->setDate((int) $today->format('Y'), $startMonth, 1)->format('Y-m-d');
                $dateTo = (new \DateTimeImmutable($dateFrom))->modify('+2 months')->modify('last day of this month')->format('Y-m-d');
                break;
            case 'last12':
                $dateFrom = $today->modify('-11 months')->modify('first day of this month')->format('Y-m-d');
                $dateTo = $today->format('Y-m-d');
                break;
            case 'custom':
                $dateFrom = !empty($raw['date_from']) ? $raw['date_from'] : null;
                $dateTo = !empty($raw['date_to']) ? $raw['date_to'] : null;
                break;
            case 'year':
            default:
                $period = 'year';
                $dateFrom = $today->format('Y') . '-01-01';
                $dateTo = $today->format('Y') . '-12-31';
                break;
        }

        return array(
            'period' => $period,
            'date_from' => $dateFrom,
            'date_to' => $dateTo,
            'client' => $raw['client'] ?? '',
            'chantier' => $raw['chantier'] ?? '',
            'engin' => $raw['engin'] ?? '',
            'categorie' => $raw['categorie'] ?? '',
            'contrat' => $raw['contrat'] ?? '',
            'prestation' => $raw['prestation'] ?? '',
            'statut' => $raw['statut'] ?? '',
        );
    }

    /**
     * Previous period of equal length, immediately preceding date_from -
     * used by the "baisse importante" alerts to compare against.
     */
    private function previousPeriod(array $f): array
    {
        if (!$f['date_from'] || !$f['date_to']) {
            return array('date_from' => null, 'date_to' => null);
        }
        $from = new \DateTimeImmutable($f['date_from']);
        $to = new \DateTimeImmutable($f['date_to']);
        $days = $to->diff($from)->days + 1;
        $prevTo = $from->modify('-1 day');
        $prevFrom = $prevTo->modify('-' . ($days - 1) . ' days');
        return array('date_from' => $prevFrom->format('Y-m-d'), 'date_to' => $prevTo->format('Y-m-d'));
    }

    /**
     * WHERE fragment + bound params for queries built on top of
     * factureBase()/factureLignesBase() - both flatten their join into a
     * derived table with plain (unqualified) column names, so the filter
     * fragment must NOT table-prefix these columns.
     */
    private function factureWhere(array $f, ?string $dateFrom = null, ?string $dateTo = null): array
    {
        $dateFrom = $dateFrom ?? $f['date_from'];
        $dateTo = $dateTo ?? $f['date_to'];
        $sql = array('1=1');
        $params = array();

        if ($dateFrom) {
            $sql[] = 'date_emission_factures >= :date_from';
            $params['date_from'] = $dateFrom;
        }
        if ($dateTo) {
            $sql[] = 'date_emission_factures <= :date_to';
            $params['date_to'] = $dateTo;
        }
        if (!empty($f['client'])) {
            $sql[] = 'client_id_commandes = :client';
            $params['client'] = $f['client'];
        }
        if (!empty($f['chantier'])) {
            $sql[] = 'chantier_id_commandes = :chantier';
            $params['chantier'] = $f['chantier'];
        }
        if (!empty($f['engin'])) {
            $sql[] = 'engin_id_commandes = :engin';
            $params['engin'] = $f['engin'];
        }
        if (!empty($f['categorie'])) {
            $sql[] = 'categorie_engins = :categorie';
            $params['categorie'] = $f['categorie'];
        }
        if (!empty($f['contrat'])) {
            $sql[] = 'commande_id = :contrat';
            $params['contrat'] = $f['contrat'];
        }
        if (!empty($f['prestation'])) {
            $sql[] = 'type_location_commandes = :prestation';
            $params['prestation'] = $f['prestation'];
        }
        if (!empty($f['statut'])) {
            $sql[] = 'statut_factures = :statut';
            $params['statut'] = $f['statut'];
        }

        return array(implode(' AND ', $sql), $params);
    }

    /**
     * WHERE fragment for the encaissement-by-payment-date query in
     * getCaEvolution(), which joins the real tables directly (aliases
     * p=paiements, f=factures, c=commandes, e=engins) instead of going
     * through factureBase() - dates filter on p.date_paiements, not the
     * invoice's emission date, since we're bucketing by when cash came in.
     */
    private function paiementWhere(array $f): array
    {
        $sql = array('1=1');
        $params = array();

        if ($f['date_from']) {
            $sql[] = 'p.date_paiements >= :date_from';
            $params['date_from'] = $f['date_from'];
        }
        if ($f['date_to']) {
            $sql[] = 'p.date_paiements <= :date_to';
            $params['date_to'] = $f['date_to'];
        }
        if (!empty($f['client'])) {
            $sql[] = 'c.client_id_commandes = :client';
            $params['client'] = $f['client'];
        }
        if (!empty($f['chantier'])) {
            $sql[] = 'c.chantier_id_commandes = :chantier';
            $params['chantier'] = $f['chantier'];
        }
        if (!empty($f['engin'])) {
            $sql[] = 'c.engin_id_commandes = :engin';
            $params['engin'] = $f['engin'];
        }
        if (!empty($f['categorie'])) {
            $sql[] = 'e.categorie_engins = :categorie';
            $params['categorie'] = $f['categorie'];
        }
        if (!empty($f['contrat'])) {
            $sql[] = 'c.commande_id = :contrat';
            $params['contrat'] = $f['contrat'];
        }
        if (!empty($f['prestation'])) {
            $sql[] = 'c.type_location_commandes = :prestation';
            $params['prestation'] = $f['prestation'];
        }
        if (!empty($f['statut'])) {
            $sql[] = 'f.statut_factures = :statut';
            $params['statut'] = $f['statut'];
        }

        return array(implode(' AND ', $sql), $params);
    }

    /** WHERE fragment for engins-only queries (parc KPIs). */
    private function enginWhere(array $f): array
    {
        $sql = array('1=1');
        $params = array();
        if (!empty($f['engin'])) {
            $sql[] = 'e.engin_id = :engin';
            $params['engin'] = $f['engin'];
        }
        if (!empty($f['categorie'])) {
            $sql[] = 'e.categorie_engins = :categorie';
            $params['categorie'] = $f['categorie'];
        }
        return array(implode(' AND ', $sql), $params);
    }

    /**
     * The shared CTEs computing per-facture montant_ht/tva/ttc/paye/avoir,
     * joined to commande/client/engin/chantier. Every financial query below
     * selects "FROM " . $this->factureBase() . " WHERE " . $where.
     */
    private function factureBase(): string
    {
        return "(
            SELECT
                f.facture_id, f.reference_factures, f.date_emission_factures, f.date_echeance_factures,
                f.statut_factures, f.tva_factures,
                c.commande_id, c.client_id_commandes, c.chantier_id_commandes, c.engin_id_commandes,
                c.type_location_commandes,
                cl.noms_clients,
                e.engin_id AS eng_id, e.numero_interne_engins, e.categorie_engins,
                ch.chantier_id AS chant_id, ch.nom_chantiers,
                COALESCE(lt.montant_ht, 0) AS montant_ht,
                COALESCE(lt.montant_ht, 0) * (COALESCE(f.tva_factures, 0) / 100) AS montant_tva,
                COALESCE(lt.montant_ht, 0) * (1 + COALESCE(f.tva_factures, 0) / 100) AS montant_ttc,
                COALESCE(pt.total_paye, 0) AS montant_paye,
                COALESCE(av.total_avoir, 0) AS montant_avoir,
                (COALESCE(lt.montant_ht, 0) * (1 + COALESCE(f.tva_factures, 0) / 100)) - COALESCE(av.total_avoir, 0) - COALESCE(pt.total_paye, 0) AS solde
            FROM factures f
            JOIN commandes c ON c.commande_id = f.commande_id_factures
            LEFT JOIN clients cl ON cl.client_id = c.client_id_commandes
            LEFT JOIN engins e ON e.engin_id = c.engin_id_commandes
            LEFT JOIN chantiers ch ON ch.chantier_id = c.chantier_id_commandes
            LEFT JOIN (
                SELECT fl.facture_id_facture_lignes AS facture_id,
                       SUM(COALESCE(pt2.total_index, 0) * fl.prix_unitaire_facture_lignes) AS montant_ht
                FROM facture_lignes fl
                LEFT JOIN (
                    SELECT _id_facture_ligne_pointage, SUM(index_total_pointage) AS total_index
                    FROM pointage GROUP BY _id_facture_ligne_pointage
                ) pt2 ON pt2._id_facture_ligne_pointage = fl.ligne_id
                GROUP BY fl.facture_id_facture_lignes
            ) lt ON lt.facture_id = f.facture_id
            LEFT JOIN (
                SELECT facture_id_paiements AS facture_id, SUM(montant_paiements) AS total_paye
                FROM paiements GROUP BY facture_id_paiements
            ) pt ON pt.facture_id = f.facture_id
            LEFT JOIN (
                SELECT facture_id_avoirs AS facture_id, SUM(montant_avoirs) AS total_avoir
                FROM avoirs GROUP BY facture_id_avoirs
            ) av ON av.facture_id = f.facture_id
        ) x";
    }

    private function run(string $sql, array $params = array()): array
    {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // ------------------------------------------------------------------
    // Cache (short TTL file cache, keyed by method + filters)
    // ------------------------------------------------------------------

    private function cacheGet(string $key)
    {
        $dir = dirname(__DIR__, 2) . '/tmp/cache';
        $file = $dir . '/kpi_' . md5($key) . '.json';
        if (is_file($file) && (time() - filemtime($file)) < self::CACHE_TTL) {
            $data = json_decode(file_get_contents($file), true);
            if (is_array($data)) {
                return $data;
            }
        }
        return null;
    }

    private function cacheSet(string $key, array $data): void
    {
        $dir = dirname(__DIR__, 2) . '/tmp/cache';
        if (!is_dir($dir)) {
            @mkdir($dir, 0775, true);
        }
        $file = $dir . '/kpi_' . md5($key) . '.json';
        @file_put_contents($file, json_encode($data));
    }

    private function cached(string $name, array $filters, callable $compute): array
    {
        $key = $name . '|' . json_encode($filters);
        $hit = $this->cacheGet($key);
        if ($hit !== null) {
            return $hit;
        }
        $result = $compute();
        $this->cacheSet($key, $result);
        return $result;
    }

    // ------------------------------------------------------------------
    // KPI FINANCIERS
    // ------------------------------------------------------------------

    public function getFinancialKpis(array $f): array
    {
        return $this->cached('financial', $f, function () use ($f) {
            list($where, $params) = $this->factureWhere($f);
            $today = date('Y-m-d');

            $row = $this->run(
                "SELECT
                    COALESCE(SUM(montant_ht), 0) AS ca_ht,
                    COALESCE(SUM(montant_tva), 0) AS taxes,
                    COALESCE(SUM(montant_ttc), 0) AS ca_ttc,
                    COALESCE(SUM(montant_paye), 0) AS encaisse,
                    COALESCE(SUM(CASE WHEN solde > 0.01 THEN solde ELSE 0 END), 0) AS creances,
                    COUNT(*) FILTER (WHERE solde > 0.01) AS factures_impayees,
                    COUNT(*) FILTER (WHERE solde > 0.01 AND date_echeance_factures < :today) AS factures_en_retard,
                    COUNT(*) AS nb_factures
                FROM " . $this->factureBase() . " WHERE $where",
                $params + array('today' => $today)
            )[0];

            $row['taux_recouvrement'] = $row['ca_ttc'] > 0 ? round(($row['encaisse'] / $row['ca_ttc']) * 100, 1) : 0.0;
            $row['panier_moyen'] = $row['nb_factures'] > 0 ? round($row['ca_ttc'] / $row['nb_factures'], 2) : 0.0;

            foreach (array('ca_ht', 'taxes', 'ca_ttc', 'encaisse', 'creances') as $k) {
                $row[$k] = round((float) $row[$k], 2);
            }

            return $row;
        });
    }

    /** Monthly CA (HT/TTC) + encaissement series for the évolution charts. */
    public function getCaEvolution(array $f): array
    {
        return $this->cached('evolution', $f, function () use ($f) {
            list($where, $params) = $this->factureWhere($f);

            $facture = $this->run(
                "SELECT to_char(date_emission_factures, 'YYYY-MM') AS mois,
                        COALESCE(SUM(montant_ht), 0) AS ca_ht,
                        COALESCE(SUM(montant_ttc), 0) AS ca_ttc
                 FROM " . $this->factureBase() . " WHERE $where
                 GROUP BY mois ORDER BY mois",
                $params
            );

            // Encaissement is keyed on the payment date, not the invoice
            // date, so it needs its own grouping over the same dimensional
            // filters (same commande/client/chantier/engin scope).
            list($whereEnc, $paramsEnc) = $this->paiementWhere($f);
            $encaissement = $this->run(
                "SELECT to_char(p.date_paiements, 'YYYY-MM') AS mois,
                        COALESCE(SUM(p.montant_paiements), 0) AS encaisse
                 FROM paiements p
                 JOIN factures f ON f.facture_id = p.facture_id_paiements
                 JOIN commandes c ON c.commande_id = f.commande_id_factures
                 LEFT JOIN engins e ON e.engin_id = c.engin_id_commandes
                 WHERE $whereEnc
                 GROUP BY mois ORDER BY mois",
                $paramsEnc
            );

            return array('facturation' => $facture, 'encaissement' => $encaissement);
        });
    }

    /**
     * Outstanding créances at the end of each month in the period - a true
     * historical snapshot: for a given month-end M, the balance still due on
     * invoices already payable by M is montant_ttc minus avoirs minus every
     * payment recorded up to M (payments after M haven't happened yet from
     * that month's point of view).
     */
    public function getCreancesEvolution(array $f): array
    {
        return $this->cached('creances_evolution', $f, function () use ($f) {
            list($where, $params) = $this->factureWhere($f);

            $rows = $this->run(
                "SELECT facture_id, date_echeance_factures, montant_ttc, montant_avoir
                 FROM " . $this->factureBase() . " WHERE $where AND date_echeance_factures IS NOT NULL",
                $params
            );
            if (empty($rows)) {
                return array();
            }

            $factureIds = array_column($rows, 'facture_id');
            $placeholders = implode(',', array_fill(0, count($factureIds), '?'));
            $paiementRows = $this->run(
                "SELECT facture_id_paiements AS facture_id, date_paiements, montant_paiements
                 FROM paiements WHERE facture_id_paiements IN ($placeholders)",
                $factureIds
            );
            $paiementsParFacture = array();
            foreach ($paiementRows as $p) {
                $paiementsParFacture[$p['facture_id']][] = $p;
            }

            $from = $f['date_from'] ? new \DateTimeImmutable($f['date_from']) : new \DateTimeImmutable(min(array_column($rows, 'date_echeance_factures')));
            $to = $f['date_to'] ? new \DateTimeImmutable($f['date_to']) : new \DateTimeImmutable('today');

            $series = array();
            $cursor = $from->modify('first day of this month');
            while ($cursor <= $to) {
                $monthEnd = $cursor->modify('last day of this month');
                $moisKey = $cursor->format('Y-m');
                $solde = 0.0;
                foreach ($rows as $r) {
                    if ($r['date_echeance_factures'] > $monthEnd->format('Y-m-d')) {
                        continue; // not yet due at this month-end
                    }
                    $paye = 0.0;
                    foreach ($paiementsParFacture[$r['facture_id']] ?? array() as $p) {
                        if ($p['date_paiements'] <= $monthEnd->format('Y-m-d')) {
                            $paye += (float) $p['montant_paiements'];
                        }
                    }
                    $solde += max(0, (float) $r['montant_ttc'] - (float) $r['montant_avoir'] - $paye);
                }
                $series[] = array('mois' => $moisKey, 'creances' => round($solde, 2));
                $cursor = $cursor->modify('+1 month');
            }

            return $series;
        });
    }

    // ------------------------------------------------------------------
    // CREANCES
    // ------------------------------------------------------------------

    public function getCreancesAgeing(array $f): array
    {
        return $this->cached('ageing', $f, function () use ($f) {
            list($where, $params) = $this->factureWhere($f);
            $today = date('Y-m-d');

            $rows = $this->run(
                "SELECT facture_id, reference_factures, noms_clients, date_echeance_factures, solde,
                        (:today::date - date_echeance_factures) AS jours_retard
                 FROM " . $this->factureBase() . "
                 WHERE $where AND solde > 0.01",
                $params + array('today' => $today)
            );

            $tranches = array(
                'non échue' => 0.0, '0-30 jours' => 0.0, '31-60 jours' => 0.0,
                '61-90 jours' => 0.0, '91-120 jours' => 0.0, 'plus de 120 jours' => 0.0,
            );
            foreach ($rows as $r) {
                $j = (int) $r['jours_retard'];
                if ($j <= 0) {
                    $t = 'non échue';
                } elseif ($j <= 30) {
                    $t = '0-30 jours';
                } elseif ($j <= 60) {
                    $t = '31-60 jours';
                } elseif ($j <= 90) {
                    $t = '61-90 jours';
                } elseif ($j <= 120) {
                    $t = '91-120 jours';
                } else {
                    $t = 'plus de 120 jours';
                }
                $tranches[$t] += (float) $r['solde'];
            }
            return $tranches;
        });
    }

    public function getTopDebiteurs(array $f, int $limit = 10): array
    {
        return $this->cached('topdebiteurs_' . $limit, $f, function () use ($f, $limit) {
            list($where, $params) = $this->factureWhere($f);
            $limit = max(1, min(100, $limit));
            return $this->run(
                "SELECT client_id_commandes AS client_id, noms_clients,
                        SUM(solde) AS total_creance, COUNT(*) AS nb_factures
                 FROM " . $this->factureBase() . "
                 WHERE $where AND solde > 0.01
                 GROUP BY client_id_commandes, noms_clients
                 ORDER BY total_creance DESC
                 LIMIT $limit",
                $params
            );
        });
    }

    // ------------------------------------------------------------------
    // KPI PARC
    // ------------------------------------------------------------------

    public function getParcKpis(array $f): array
    {
        return $this->cached('parc', $f, function () use ($f) {
            list($whereE, $paramsE) = $this->enginWhere($f);

            $counts = $this->run(
                "SELECT
                    COUNT(*) AS total,
                    COUNT(*) FILTER (WHERE statut_engins = 'disponible') AS disponibles,
                    COUNT(*) FILTER (WHERE statut_engins = 'loué') AS loues,
                    COUNT(*) FILTER (WHERE statut_engins = 'en maintenance') AS en_maintenance,
                    COUNT(*) FILTER (WHERE statut_engins IN ('immobilisé', 'hors service')) AS immobilises
                 FROM engins e WHERE $whereE",
                $paramsE
            )[0];

            // Heures facturées: SUM(index_total_pointage) for lines billed
            // as 'heure', scoped to the same client/chantier/engin/period.
            list($where, $params) = $this->factureWhere($f);
            $heures = $this->run(
                "SELECT COALESCE(SUM(pt.total_index), 0) AS heures
                 FROM " . $this->factureBase() . "
                 JOIN facture_lignes fl ON fl.facture_id_facture_lignes = x.facture_id AND fl.type_pointagefacture_lignes = 'heure'
                 JOIN (
                    SELECT _id_facture_ligne_pointage, SUM(index_total_pointage) AS total_index
                    FROM pointage GROUP BY _id_facture_ligne_pointage
                 ) pt ON pt._id_facture_ligne_pointage = fl.ligne_id
                 WHERE $where",
                $params
            )[0]['heures'];

            // Jours facturés: rental duration of commandes billed 'journalier',
            // clipped to the selected period.
            $jours = $this->joursLouesTotal($f, 'journalier');

            $counts['heures_facturees'] = round((float) $heures, 1);
            $counts['jours_factures'] = $jours;
            $counts['taux_utilisation'] = $counts['total'] > 0
                ? round((($counts['loues'] + $counts['en_maintenance']) / $counts['total']) * 100, 1)
                : 0.0;

            return $counts;
        });
    }

    private function joursLouesTotal(array $f, ?string $typeLocation = null): int
    {
        $sql = array('1=1');
        $params = array();
        if (!empty($f['engin'])) {
            $sql[] = 'engin_id_commandes = :engin';
            $params['engin'] = $f['engin'];
        }
        if (!empty($f['client'])) {
            $sql[] = 'client_id_commandes = :client';
            $params['client'] = $f['client'];
        }
        if (!empty($f['chantier'])) {
            $sql[] = 'chantier_id_commandes = :chantier';
            $params['chantier'] = $f['chantier'];
        }
        if (!empty($f['contrat'])) {
            $sql[] = 'commande_id = :contrat';
            $params['contrat'] = $f['contrat'];
        }
        if ($typeLocation) {
            $sql[] = 'type_location_commandes = :type_loc';
            $params['type_loc'] = $typeLocation;
        } elseif (!empty($f['prestation'])) {
            $sql[] = 'type_location_commandes = :prestation';
            $params['prestation'] = $f['prestation'];
        }
        $sql[] = 'date_debut_commandes IS NOT NULL';
        $sql[] = 'date_fin_commandes IS NOT NULL';

        if ($f['date_from']) {
            $sql[] = 'date_fin_commandes >= :period_from';
            $params['period_from'] = $f['date_from'];
        }
        if ($f['date_to']) {
            $sql[] = 'date_debut_commandes <= :period_to';
            $params['period_to'] = $f['date_to'];
        }

        $rows = $this->run(
            "SELECT date_debut_commandes, date_fin_commandes FROM commandes WHERE " . implode(' AND ', $sql),
            $params
        );

        $total = 0;
        foreach ($rows as $r) {
            $debut = max(strtotime($r['date_debut_commandes']), $f['date_from'] ? strtotime($f['date_from']) : 0);
            $fin = $f['date_to'] ? min(strtotime($r['date_fin_commandes']), strtotime($f['date_to'])) : strtotime($r['date_fin_commandes']);
            if ($fin > $debut) {
                $total += (int) floor(($fin - $debut) / 86400);
            }
        }
        return $total;
    }

    public function getRepartitionEnginsParStatut(array $f): array
    {
        return $this->cached('repartition_statut', $f, function () use ($f) {
            list($whereE, $paramsE) = $this->enginWhere($f);
            return $this->run(
                "SELECT statut_engins, COUNT(*) AS nb FROM engins e WHERE $whereE GROUP BY statut_engins ORDER BY nb DESC",
                $paramsE
            );
        });
    }

    // ------------------------------------------------------------------
    // KPI COMMERCIAUX
    // ------------------------------------------------------------------

    public function getCommercialKpis(array $f): array
    {
        return $this->cached('commercial', $f, function () use ($f) {
            list($where, $params) = $this->factureWhere($f);
            $today = date('Y-m-d');

            $clientsActifs = $this->run(
                "SELECT COUNT(DISTINCT client_id_commandes) AS n FROM " . $this->factureBase() . " WHERE $where",
                $params
            )[0]['n'];

            list($sqlC, $paramsC) = $this->commandeWhere($f);
            $contratsActifs = $this->run(
                "SELECT COUNT(*) AS n FROM commandes WHERE $sqlC
                 AND date_debut_commandes <= :today1
                 AND (date_fin_commandes IS NULL OR date_fin_commandes >= :today2)",
                $paramsC + array('today1' => $today, 'today2' => $today)
            )[0]['n'];

            $contratsExpirant = count($this->appService->getContratsExpirantBientot(15));

            $prestations = $this->run(
                "SELECT COUNT(*) AS n FROM " . $this->factureLignesBase() . " WHERE $where",
                $params
            )[0]['n'] ?? 0;

            return array(
                'clients_actifs' => (int) $clientsActifs,
                'contrats_actifs' => (int) $contratsActifs,
                'contrats_expirant' => $contratsExpirant,
                'prestations_realisees' => (int) $prestations,
            );
        });
    }

    private function commandeWhere(array $f): array
    {
        $sql = array('1=1');
        $params = array();
        if (!empty($f['client'])) {
            $sql[] = 'client_id_commandes = :client';
            $params['client'] = $f['client'];
        }
        if (!empty($f['chantier'])) {
            $sql[] = 'chantier_id_commandes = :chantier';
            $params['chantier'] = $f['chantier'];
        }
        if (!empty($f['engin'])) {
            $sql[] = 'engin_id_commandes = :engin';
            $params['engin'] = $f['engin'];
        }
        if (!empty($f['contrat'])) {
            $sql[] = 'commande_id = :contrat';
            $params['contrat'] = $f['contrat'];
        }
        if (!empty($f['prestation'])) {
            $sql[] = 'type_location_commandes = :prestation';
            $params['prestation'] = $f['prestation'];
        }
        return array(implode(' AND ', $sql), $params);
    }

    /** facture_lignes joined to the same facture/commande scope, for counting prestations. */
    private function factureLignesBase(): string
    {
        return "(
            SELECT fl.ligne_id, f.facture_id, c.client_id_commandes, c.chantier_id_commandes,
                   c.engin_id_commandes, c.type_location_commandes, c.commande_id, f.date_emission_factures,
                   f.statut_factures, e.categorie_engins
            FROM facture_lignes fl
            JOIN factures f ON f.facture_id = fl.facture_id_facture_lignes
            JOIN commandes c ON c.commande_id = f.commande_id_factures
            LEFT JOIN engins e ON e.engin_id = c.engin_id_commandes
        ) fx";
    }

    public function getCaParDimension(array $f, string $dimension, int $limit = 10): array
    {
        return $this->cached('ca_par_' . $dimension, $f, function () use ($f, $dimension, $limit) {
            list($where, $params) = $this->factureWhere($f);
            $map = array(
                'client' => array('client_id_commandes', 'noms_clients'),
                'chantier' => array('chant_id', 'nom_chantiers'),
                'engin' => array('eng_id', 'numero_interne_engins'),
                'prestation' => array('type_location_commandes', 'type_location_commandes'),
            );
            if (!isset($map[$dimension])) {
                return array();
            }
            list($idCol, $labelCol) = $map[$dimension];
            $stmt = $this->pdo->prepare(
                "SELECT $idCol AS id, $labelCol AS label, SUM(montant_ttc) AS ca
                 FROM " . $this->factureBase() . "
                 WHERE $where AND $idCol IS NOT NULL
                 GROUP BY $idCol, $labelCol
                 ORDER BY ca DESC
                 LIMIT $limit"
            );
            $stmt->execute($params);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        });
    }

    // ------------------------------------------------------------------
    // KPI RENTABILITE
    // ------------------------------------------------------------------

    public function getRentabiliteEngins(array $f): array
    {
        return $this->cached('rentabilite', $f, function () use ($f) {
            list($whereE, $paramsE) = $this->enginWhere($f);
            $engins = $this->run("SELECT * FROM engins e WHERE $whereE ORDER BY numero_interne_engins", $paramsE);

            list($where, $params) = $this->factureWhere($f);
            $caParEngin = $this->run(
                "SELECT eng_id, SUM(montant_ttc) AS ca FROM " . $this->factureBase() . "
                 WHERE $where AND eng_id IS NOT NULL GROUP BY eng_id",
                $params
            );
            $caMap = array();
            foreach ($caParEngin as $r) {
                $caMap[$r['eng_id']] = (float) $r['ca'];
            }

            $dateCond = '1=1';
            $dateParams = array();
            if ($f['date_from']) {
                $dateCond .= ' AND date_maintenances >= :date_from';
                $dateParams['date_from'] = $f['date_from'];
            }
            if ($f['date_to']) {
                $dateCond .= ' AND date_maintenances <= :date_to';
                $dateParams['date_to'] = $f['date_to'];
            }
            $maintCosts = $this->run(
                "SELECT engin_id_maintenances AS engin_id, COALESCE(SUM(cout_maintenances), 0) AS cout
                 FROM maintenances WHERE $dateCond GROUP BY engin_id_maintenances",
                $dateParams
            );
            $maintMap = array();
            foreach ($maintCosts as $r) {
                $maintMap[$r['engin_id']] = (float) $r['cout'];
            }

            $dateCondC = '1=1';
            $dateParamsC = array();
            if ($f['date_from']) {
                $dateCondC .= ' AND date_carburant >= :date_from';
                $dateParamsC['date_from'] = $f['date_from'];
            }
            if ($f['date_to']) {
                $dateCondC .= ' AND date_carburant <= :date_to';
                $dateParamsC['date_to'] = $f['date_to'];
            }
            $fuelCosts = $this->run(
                "SELECT engin_id_carburant AS engin_id, COALESCE(SUM(cout_total_carburant), 0) AS cout
                 FROM carburant WHERE $dateCondC GROUP BY engin_id_carburant",
                $dateParamsC
            );
            $fuelMap = array();
            foreach ($fuelCosts as $r) {
                $fuelMap[$r['engin_id']] = (float) $r['cout'];
            }

            $heuresDateCond = '1=1';
            $heuresParams = array();
            if ($f['date_from']) {
                $heuresDateCond .= ' AND fac.date_emission_factures >= :hdf';
                $heuresParams['hdf'] = $f['date_from'];
            }
            if ($f['date_to']) {
                $heuresDateCond .= ' AND fac.date_emission_factures <= :hdt';
                $heuresParams['hdt'] = $f['date_to'];
            }
            $heuresParEngin = $this->run(
                "SELECT c.engin_id_commandes AS engin_id, COALESCE(SUM(pt.total_index), 0) AS heures
                 FROM facture_lignes fl
                 JOIN factures fac ON fac.facture_id = fl.facture_id_facture_lignes
                 JOIN commandes c ON c.commande_id = fac.commande_id_factures
                 JOIN (
                    SELECT _id_facture_ligne_pointage, SUM(index_total_pointage) AS total_index
                    FROM pointage GROUP BY _id_facture_ligne_pointage
                 ) pt ON pt._id_facture_ligne_pointage = fl.ligne_id
                 WHERE fl.type_pointagefacture_lignes = 'heure' AND c.engin_id_commandes IS NOT NULL AND $heuresDateCond
                 GROUP BY c.engin_id_commandes",
                $heuresParams
            );
            $heuresMap = array();
            foreach ($heuresParEngin as $r) {
                $heuresMap[$r['engin_id']] = (float) $r['heures'];
            }

            $today = time();
            $result = array();
            foreach ($engins as $engin) {
                $id = $engin['engin_id'];
                $ca = $caMap[$id] ?? 0.0;
                $coutMaintenance = $maintMap[$id] ?? 0.0;
                $coutCarburant = $fuelMap[$id] ?? 0.0;
                $marge = $ca - $coutMaintenance - $coutCarburant;

                $joursLoues = $this->joursLouesTotal(array_merge($f, array('engin' => $id)));
                $heures = $heuresMap[$id] ?? 0.0;

                $debutService = $engin['date_mise_service_engins'] ? strtotime($engin['date_mise_service_engins']) : (int) $engin['created_at_engins'];
                $joursDisponibles = max(1, (int) floor(($today - $debutService) / 86400));
                $tauxUtilisation = round(min(100, ($joursLoues / $joursDisponibles) * 100), 1);

                $result[] = array(
                    'engin' => $engin,
                    'chiffre_affaires' => round($ca, 2),
                    'cout_maintenance' => round($coutMaintenance, 2),
                    'cout_carburant' => round($coutCarburant, 2),
                    'marge' => round($marge, 2),
                    'jours_loues' => $joursLoues,
                    'jours_disponibles' => $joursDisponibles,
                    'taux_utilisation' => $tauxUtilisation,
                    'marge_par_jour' => $joursLoues > 0 ? round($marge / $joursLoues, 2) : null,
                    'marge_par_heure' => $heures > 0 ? round($marge / $heures, 2) : null,
                );
            }

            usort($result, fn($a, $b) => $b['chiffre_affaires'] <=> $a['chiffre_affaires']);
            return $result;
        });
    }

    // ------------------------------------------------------------------
    // ALERTES
    // ------------------------------------------------------------------

    public function getAlertes(array $f): array
    {
        list($where, $params) = $this->factureWhere($f);
        $today = date('Y-m-d');

        $echues = $this->run(
            "SELECT facture_id, reference_factures, noms_clients, date_echeance_factures, solde
             FROM " . $this->factureBase() . "
             WHERE $where AND solde > 0.01 AND date_echeance_factures < :today
             ORDER BY date_echeance_factures ASC LIMIT 20",
            $params + array('today' => $today)
        );

        $fortRetard = $this->run(
            "SELECT facture_id, reference_factures, noms_clients, date_echeance_factures, solde,
                    (:today2::date - date_echeance_factures) AS jours_retard
             FROM " . $this->factureBase() . "
             WHERE $where AND solde > 0.01 AND (:today3::date - date_echeance_factures) > 90
             ORDER BY jours_retard DESC LIMIT 20",
            $params + array('today2' => $today, 'today3' => $today)
        );

        $contratsExpirant = $this->appService->getContratsExpirantBientot(15);

        list($whereE) = $this->enginWhere($f);
        $enginsImmobilises = $this->run(
            "SELECT engin_id, numero_interne_engins, statut_engins FROM engins e
             WHERE $whereE AND statut_engins IN ('immobilisé', 'hors service')"
        );

        $maintenanceAPrevoir = $this->appService->getMaintenancesAPrevoir();

        // Baisse importante du CA / du taux d'utilisation: current period vs
        // the immediately preceding period of equal length.
        $prev = $this->previousPeriod($f);
        $baisseCa = null;
        $baisseUtilisation = null;
        if ($prev['date_from'] && $prev['date_to']) {
            $curKpi = $this->getFinancialKpis($f);
            $prevFilters = array_merge($f, array('date_from' => $prev['date_from'], 'date_to' => $prev['date_to']));
            $prevKpi = $this->getFinancialKpis($prevFilters);
            if ($prevKpi['ca_ttc'] > 0) {
                $variation = (($curKpi['ca_ttc'] - $prevKpi['ca_ttc']) / $prevKpi['ca_ttc']) * 100;
                if ($variation <= -20) {
                    $baisseCa = array('variation' => round($variation, 1), 'ca_actuel' => $curKpi['ca_ttc'], 'ca_precedent' => $prevKpi['ca_ttc']);
                }
            }

            $curParc = $this->getParcKpis($f);
            $prevParc = $this->getParcKpis($prevFilters);
            if ($prevParc['taux_utilisation'] > 0) {
                $variationU = $curParc['taux_utilisation'] - $prevParc['taux_utilisation'];
                if ($variationU <= -15) {
                    $baisseUtilisation = array('variation_points' => round($variationU, 1), 'taux_actuel' => $curParc['taux_utilisation'], 'taux_precedent' => $prevParc['taux_utilisation']);
                }
            }
        }

        return array(
            'factures_echues' => $echues,
            'factures_fortement_en_retard' => $fortRetard,
            'clients_plafond_depasse' => null, // gap: no plafond de crédit field on clients
            'contrats_expirant' => $contratsExpirant,
            'engins_immobilises' => $enginsImmobilises,
            'maintenance_a_prevoir' => $maintenanceAPrevoir,
            'baisse_ca' => $baisseCa,
            'baisse_utilisation' => $baisseUtilisation,
        );
    }

    // ------------------------------------------------------------------
    // Filter options (populated once, used by the filter bar selects)
    // ------------------------------------------------------------------

    public function getFilterOptions(): array
    {
        return array(
            'clients' => $this->run("SELECT client_id, noms_clients FROM clients ORDER BY noms_clients"),
            'chantiers' => $this->run("SELECT chantier_id, nom_chantiers FROM chantiers ORDER BY nom_chantiers"),
            'engins' => $this->run("SELECT engin_id, numero_interne_engins FROM engins ORDER BY numero_interne_engins"),
            'categories' => $this->run("SELECT DISTINCT categorie_engins FROM engins WHERE categorie_engins IS NOT NULL ORDER BY categorie_engins"),
            'contrats' => $this->run("SELECT commande_id, reference_commandes FROM commandes ORDER BY reference_commandes DESC LIMIT 200"),
            'prestations' => $this->run("SELECT DISTINCT type_location_commandes FROM commandes WHERE type_location_commandes IS NOT NULL ORDER BY type_location_commandes"),
            'statuts' => $this->run("SELECT DISTINCT statut_factures FROM factures WHERE statut_factures IS NOT NULL ORDER BY statut_factures"),
        );
    }

    /**
     * Drilldown behind every KPI card/chart click - cahier des charges
     * "chaque KPI doit pouvoir être relié à ses données sources": the same
     * filters as the dashboard, optionally narrowed to one ageing bucket
     * (tranche) or to outstanding-only invoices, returned as facture rows.
     */
    public function getFilteredFactures(array $f, ?string $tranche = null, bool $onlyOutstanding = false): array
    {
        list($where, $params) = $this->factureWhere($f);
        if ($onlyOutstanding || $tranche !== null) {
            $where .= ' AND solde > 0.01';
        }

        $rows = $this->run(
            "SELECT facture_id, reference_factures, noms_clients, nom_chantiers, numero_interne_engins,
                    date_emission_factures, date_echeance_factures, statut_factures,
                    montant_ht, montant_tva, montant_ttc, montant_paye, montant_avoir, solde
             FROM " . $this->factureBase() . "
             WHERE $where
             ORDER BY date_emission_factures DESC",
            $params
        );

        if ($tranche === null) {
            return $rows;
        }

        $today = time();
        return array_values(array_filter($rows, function ($r) use ($tranche, $today) {
            $j = $r['date_echeance_factures'] ? (int) floor(($today - strtotime($r['date_echeance_factures'])) / 86400) : 0;
            if ($tranche === 'non échue') {
                return $j <= 0;
            }
            if ($tranche === '0-30 jours') {
                return $j > 0 && $j <= 30;
            }
            if ($tranche === '31-60 jours') {
                return $j > 30 && $j <= 60;
            }
            if ($tranche === '61-90 jours') {
                return $j > 60 && $j <= 90;
            }
            if ($tranche === '91-120 jours') {
                return $j > 90 && $j <= 120;
            }
            if ($tranche === 'plus de 120 jours') {
                return $j > 120;
            }
            return true;
        }));
    }

    /** Everything the direction dashboard needs, in one call (used by both the first render and the AJAX refresh). */
    public function getAll(array $rawFilters): array
    {
        $f = $this->normalizeFilters($rawFilters);
        return array(
            'filters' => $f,
            'financier' => $this->getFinancialKpis($f),
            'evolution' => $this->getCaEvolution($f),
            'creances_evolution' => $this->getCreancesEvolution($f),
            'ageing' => $this->getCreancesAgeing($f),
            'top_debiteurs' => $this->getTopDebiteurs($f, 10),
            'parc' => $this->getParcKpis($f),
            'repartition_engins' => $this->getRepartitionEnginsParStatut($f),
            'commercial' => $this->getCommercialKpis($f),
            'ca_par_client' => $this->getCaParDimension($f, 'client', 10),
            'ca_par_chantier' => $this->getCaParDimension($f, 'chantier', 10),
            'ca_par_engin' => $this->getCaParDimension($f, 'engin', 10),
            'ca_par_prestation' => $this->getCaParDimension($f, 'prestation', 10),
            'rentabilite' => $this->getRentabiliteEngins($f),
            'alertes' => $this->getAlertes($f),
        );
    }
}
