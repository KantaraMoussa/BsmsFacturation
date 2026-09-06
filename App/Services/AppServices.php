<?php

namespace App\Services;

use App\Config\Constant;
use Core\Helpers as CoreHelpers;
use App\Models\Addresses;
use App\Models\Articles;
use App\Models\Clients;
use App\Models\FactureLignes;
use App\Models\Factures;
use App\Models\Livraisons;
use App\Models\Paiements;
use App\Models\Pointage;
use App\Models\Transporteurs;
use App\Models\Utilisateurs;
use App\Models\Commandes;
use App\Models\Avoirs;
use App\Models\Taxes;
use App\Models\Engins;
use App\Models\Chantiers;
use App\Models\Maintenances;
use App\Models\Carburant;
use App\Utils\Helpers as utileHelpers;
use App\Utils\Certificate;


class AppServices
{

    private $addresseModel;
    private $articleModel;
    private $clientModel;
    private $factureLigneModel;
    private $factureModel;
    private $livraisonModel;
    private $paiementModel;
    private $transporteurModel;
    private $utilisateurModel;
    private $commandeModel;
    private $pointageModel;
    private $avoirModel;
    private $taxModel;
    private $enginModel;
    private $chantierModel;
    private $maintenanceModel;
    private $carburantModel;
    private $pathTmp;


    public function __construct()
    {
        $this->addresseModel = new Addresses();
        $this->articleModel = new Articles();
        $this->clientModel = new Clients();
        $this->factureLigneModel = new FactureLignes();
        $this->factureModel = new Factures();
        $this->livraisonModel = new Livraisons();
        $this->paiementModel = new Paiements();
        $this->transporteurModel = new Transporteurs();
        $this->utilisateurModel = new Utilisateurs();
        $this->commandeModel = new Commandes();
        $this->pointageModel = new Pointage();
        $this->avoirModel = new Avoirs();
        $this->taxModel = new Taxes();
        $this->enginModel = new Engins();
        $this->chantierModel = new Chantiers();
        $this->maintenanceModel = new Maintenances();
        $this->carburantModel = new Carburant();
        $this->pathTmp = realpath('../public/tmp');
    }

    /**
     * Runs $fn inside a DB transaction holding a Postgres advisory lock keyed
     * by $key, so that "read the last number, then insert the next one"
     * sequences (invoice/order/line references) can't race between two
     * concurrent requests and produce a duplicate document number.
     */
    private function withSequenceLock(string $key, callable $fn)
    {
        $pdo = \Core\Database::getInstance();
        $pdo->beginTransaction();
        try {
            $pdo->prepare('SELECT pg_advisory_xact_lock(hashtext(:key))')->execute(array('key' => $key));
            $result = $fn();
            $pdo->commit();
            return $result;
        } catch (\Throwable $e) {
            if ($pdo->inTransaction()) {
                $pdo->rollBack();
            }
            throw $e;
        }
    }
    public function crud($data)
    {
        // Deleting, validating, issuing an avoir, or changing tax config are
        // elevated operations: only admin can do them, regardless of which
        // resource is targeted.
        $elevatedType = in_array($data['type'] ?? '', array('delete', 'validate'), true);
        $elevatedAction = in_array($data['action'] ?? '', array('add_avoir', 'add_taxe'), true);
        if (($elevatedType || $elevatedAction) && ($_SESSION['role_utilisateur'] ?? '') !== 'admin') {
            return json_encode(array('success' => false, 'msg' => "Action réservée aux administrateurs"));
        }

        if ($data['action'] == "add_addresse") {
            return json_encode($this->addAddresse($data));
        } else if ($data['action'] == "add_article") {
            return json_encode($this->addArticle($data));
        } else if ($data['action'] == "add_client") {
            return json_encode($this->addClient($data));
        } else if ($data['action'] == "add_commande") {
            return json_encode($this->addCommande($data));
        } else if ($data['action'] == "add_facture_ligne") {
            return json_encode($this->addFactureLigne($data));
        } else if ($data['action'] == "add_facture") {
            return json_encode($this->addFacture($data));
        } else if ($data['action'] == "add_avoir") {
            return json_encode($this->addAvoir($data));
        } else if ($data['action'] == "add_taxe") {
            return json_encode($this->addTaxe($data));
        } else if ($data['action'] == "add_engin") {
            return json_encode($this->addEngin($data));
        } else if ($data['action'] == "add_chantier") {
            return json_encode($this->addChantier($data));
        } else if ($data['action'] == "add_maintenance") {
            return json_encode($this->addMaintenance($data));
        } else if ($data['action'] == "add_carburant") {
            return json_encode($this->addCarburant($data));
        } else if ($data['action'] == "add_livraison") {
            return json_encode($this->addLivraison($data));
        } else if ($data['action'] == "add_paiement") {
            return json_encode($this->addPaiement($data));
        } else if ($data['action'] == "add_transporteur") {
            return json_encode($this->addPersonnelle($data));
        } else {
            return json_encode($data);
        }
    }
    private function addClient(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $client = $this->clientModel->get_2('email_clients', $data['email'], 'telephone_clients', $data['telephone'], 0, 1);
            if (count($client) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter le client , Email ou Téléphone existe déjàs ";
                return $ret;
            }
            $sql = $this->clientModel->add(array(
                'client_id' => CoreHelpers::generateString(32),
                'noms_clients' => $data['libelle'],
                'email_clients' => $data['email'],
                'telephone_clients' => $data['telephone'],
                'created_at_clients' => time(),
            ));
        } else if ($data['type'] == "update") {

            $client = $this->clientModel->get_1_0('client_id', $data['id'], 0, 1);
            if (count($client) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , Client introuvable ";
                return $ret;
            }
            $sql = $this->clientModel->update(array(
                'noms_clients' => $data['libelle'],
                'email_clients' => $data['email'],
                'telephone_clients' => $data['telephone'],
            ), 'client_id', $data['id']);
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addAddresse(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');

        if ($data['type'] == "add") {
            // vérifier que le client existe dans la table client
            $client = $this->clientModel->get_1_0('client_id', $data['client'], 0, 1);
            if (count($client) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter l'addresse car le client n'existe pas ";
                return $ret;
            }
            //  vérifié si le client dispose déjàs une adresse
            $client = $this->addresseModel->get_1_1('client_id_addresse', $data['client'], 0, 1);
            if (count($client) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Cet client à déjàs un addresse Enregistré ";
                return $ret;
            }

            $sql = $this->addresseModel->add(array(
                'adresse_id' => CoreHelpers::generateString(32),
                'client_id_addresse' => $data['client'],
                'type_addresses' => $data['type_addr'],
                'rue_addresses' => $data['rue'],
                'ville_addresses' => $data['ville'],
                'code_postal_addresses' => $data['code'],
                'pays_addresses' => $data['pays'],
            ));
        } else if ($data['type'] == "update") {

            $addr = $this->addresseModel->get_1_0('addresse_id', $data['id'], 0, 1);
            if (count($addr) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , addresse introuvable ";
                return $ret;
            }
            $sql = $this->addresseModel->update(array(
                'client_id_addresse' => $data['client'],
                'type_addresses' => $data['type_addr'],
                'rue_addresses' => $data['rue'],
                'ville_addresses' => $data['ville'],
                'code_postal_addresses' => $data['code'],
                'pays_addresses' => $data['pays'],
            ), 'adresse_id', $data['id']);
        }

        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addArticle(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');

        if ($data['type'] == "add") {
            // vérifier que le client existe dans la table client
            $sql = $this->articleModel->add(array(
                'article_id' => CoreHelpers::generateString(32),
                'libelle_articles' => $data['libelle'],
                'cathegorie_articles' => $data['cathegorie'],
                'type_articles' => $data['type_art'],
                'marque_articles' => $data['marque'],
                'quantite_articles' => $data['quantite'],
                'created_at_articles' => time(),
            ));
        } else if ($data['type'] == "update") {
            //  vérifié si le client dispose déjàs une adresse
            $article = $this->articleModel->get_1_1('article_id', $data['id'], 0, 1);
            if (count($article) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , article introuvable ";
                return $ret;
            }

            $sql = $this->articleModel->update(array(
                'libelle_articles' => $data['libelle'],
                'type_articles' => $data['type_art'],
                'marque_articles' => $data['marque'],
                'quantite_articles' => $data['quantite'],
                'cathegorie_articles' => $data['cathegorie'],
            ), 'article_id', $data['id']);
        } else if ($data['type'] == "delete") {
            $sql = $this->articleModel->delete('article_id', $data['id']);
        }

        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addFactureLigne(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $facture = $this->factureModel->get_1_1('facture_id', $data['id'], 0, 1);
            if (count($facture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter la ligne car la facture n'a pas été créer ";
                return $ret;
            }
            $article = $this->articleModel->get_1_1('article_id', $data['article'], 0, 1);
            if (count($article) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter la ligne car l'article n'existe pas  ";
                return $ret;
            }
            $mt = $data['quantite'] * $data['prix'];
            $sql = $this->withSequenceLock('facture_ligne_ref_seq', function () use ($data, $mt) {
                $lastRef = $this->factureLigneModel->getNumberRef();
                $ref = empty($lastRef) ? '001/BSM/' . date('y') : utileHelpers::refFacture($lastRef);

                return $this->factureLigneModel->add(array(
                    'ligne_id' => CoreHelpers::generateString(32),
                    'facture_id_facture_lignes' => $data['id'],
                    'article_id_facture_lignes' => $data['article'],
                    'quantite_facture_lignes' => $data['quantite'],
                    'prix_unitaire_facture_lignes' => $data['prix'],
                    'description_facture_lignes' => $data['description'],
                    'reference_facture_lignes' => $ref,
                    'montant_total_facture_lignes' => $mt,
                    'type_pointagefacture_lignes' => $data['type_pointage'],
                    'created_at_facture_lignes' => time(),
                    'user_facture_lignes' => $_SESSION['id_user'],
                ));
            });
        } else if ($data['type'] == "update") {
            //  vérifié si le client dispose déjàs une adresse
            $article = $this->articleModel->get_1_1('article_id', $data['article'], 0, 1);
            $ligneFacture = $this->factureLigneModel->get_1_0('ligne_id', $data['id'], 0, 1);
            if (count($ligneFacture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , Ligne de facture introuvable ";
                return $ret;
            }
            if ($article['type_articles'] == 'produit') {

                $data['prix'] = $article['prix_unitaire_articles'];
                $data['taux_tva'] = $article['taux_tva_articles'];

                if ($article['quantite_articles'] < $data['quantite']) {
                    $ret['success'] = false;
                    $ret['msg'] = "Impossible d'ajouter la ligne car la quantité demandé n'existe pas";
                    return $ret;
                }
                $newQuantity = $article['quantite_articles'] - $data['quantite'];
                $mt = $data['quantite'] * $data['prix'];
                $mtva = ($mt * ($data['taux_tva'] / 100));
                $mttc =  $mt + $mtva;
                $this->articleModel->update(array(
                    'quantite_articles' => $newQuantity,
                ), 'article_id', $data['article']);
            } else {
                $mt = $data['quantite'] * $data['prix'];
                $mtva = ($mt * ($data['taux_tva'] / 100));
                $mttc =  $mt + $mtva;
            }
            $sql = $this->factureLigneModel->update(array(
                'quantite_facture_lignes' => $data['quantite'],
                'prix_unitaire_facture_lignes' => $data['prix'],
                'description_facture_lignes' => $data['description'],
                'montant_total_facture_lignes' => $mt,
                'montant_tva_facture_lignes' => $mtva,
                'montant_ttc_facture_lignes' => $mttc,
            ), 'ligne_id', $data['id']);
        } else if ($data['type'] == "delete") {
            $sql = $this->factureLigneModel->delete('ligne_id', $data['id']);
        } else if ($data['type'] == "validate") {
            $facture = $this->factureModel->get_1_1('facture_id', $data['id'], 0, 1);
            if (count($facture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Aucune validation n'est possible , car la facture n'a pas été créer ";
                return $ret;
            }
            $factureLigneModel = $this->factureLigneModel->get_1_0('facture_id_facture_lignes', $data['id'], 0, 1);
            if (count($factureLigneModel) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible de validé cette facture , car elle ne contien pas d' article ";
                return $ret;
            }
            if ($data['email'] == $_SESSION['login']) {
                if (utileHelpers::verifyPassword($data['password'], $_SESSION['pwd'])) {
                    if ($_SESSION['role_utilisateur'] == "admin") {
                        $sql = $this->factureModel->update(array('valide_factures' => "true"), 'facture_id', $data['id']);
                        if ($sql == true) {
                            Audit::log('validate_facture', 'facture', $data['id']);
                        }
                    } else {
                        $ret['success'] = false;
                        $ret['msg'] = "Aucune validation n'est possible , car vous ne disposez pas de se droit ";
                        return $ret;
                    }
                } else {
                    $ret['success'] = false;
                    $ret['msg'] = "Aucune validation n'est possible , car le mot de passe est incorrecte ";
                    return $ret;
                }
            } else {
                $ret['success'] = false;
                $ret['msg'] = "Aucune validation n'est possible , car le nom d'utilisateur est incorrecte ";
                return $ret;
            }
        } else if ($data['type'] == "add-pointage") {
            $ligneFacture = $this->factureLigneModel->get_1_0('ligne_id', $data['id'], 0, 1);
            if (count($ligneFacture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Pointage impossible , ligne de facture introuvable ";
                return $ret;
            }
            if ($ligneFacture['type_pointagefacture_lignes'] == 'index') {
                $indexTotal = ($data['fin'] - $data['depart']);
                $data['depart'] = $data['depart'];
                $data['fin'] = $data['fin'];
            } else if ($ligneFacture['type_pointagefacture_lignes'] == 'heure') {
                $indexTotal = $data['heure'];
                $data['depart'] = 0;
                $data['fin'] = 0;
            } else {
                $indexTotal = 1;
                $data['depart'] = 0;
                $data['fin'] = 0;
            }
            $sql = $this->pointageModel->create(array(
                'pointage_id' => CoreHelpers::generateString(32),
                'date_pointage' => $data['date'],
                'index_depart_pointage' => $data['depart'],
                'index_fin_pointage' => $data['fin'],
                'index_total_pointage' => $indexTotal,
                'poste_pointage' => $data['poste'],
                'operateur_pointage' => $data['operateur'],
                'superviseur_pointage' => $data['superviseur'],
                'site_pointage ' => $data['site'],
                'remarque_pointage' => $data['remarque'],
                'user_created_at_pointage' => $_SESSION['id_user'],
                'created_at_pointage' => time(),
                '_id_facture_ligne_pointage' => $data['id'],
            ));
        } else if ($data['type'] == "update-pointage") {
            $ligneFacture = $this->pointageModel->get_1('pointage_id', $data['id'], 0, 1);
            if (count($ligneFacture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Pointage impossible , ligne de facture introuvable ";
                return $ret;
            }
            $indexTotal = ($data['fin'] - $data['depart']);
            $sql = $this->pointageModel->update(array(
                'date_pointage' => $data['date'],
                'index_depart_pointage' => $data['depart'],
                'index_fin_pointage' => $data['fin'],
                'index_total_pointage' => $indexTotal,
                'poste_pointage' => $data['poste'],
                'operateur_pointage' => $data['operateur'],
                'superviseur_pointage' => $data['superviseur'],
                'site_pointage ' => $data['site'],
                'remarque_pointage' => $data['remarque'],
                'update_at_pointage' => time(),
            ), 'pointage_id', $data['id']);
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addPaiement(array $data): array
    {

        $ret = array('msg' => 'unexpected error happen');
        if ($data['prix'] <= 0) {
            $ret['success'] = false;
            $ret['msg'] = "Impossible d'effectuer le paiement le prix doit étre supérieur a 0 ";
            return $ret;
        }
        if ($data['type'] == "add") {
            // Locked and re-checked inside the closure so two concurrent payments
            // on the same invoice can't both read the same "amount already paid"
            // and jointly overpay it (classic TOCTOU race on financial state).
            return $this->withSequenceLock('paiement_seq_' . $data['id'], function () use ($data) {
                $ret = array('msg' => 'unexpected error happen');

                $facture = $this->factureModel->get_1_0('facture_id', $data['id'], 0, 1);
                if (count($facture) == 0) {
                    $ret['success'] = false;
                    $ret['msg'] = "Impossible d'effectuer le paiement car la facture n'a pas été créer ";
                    return $ret;
                }

                $existingPaiements = $this->paiementModel->get_1('facture_id_paiements', $data['id']);
                $somme = 0;
                foreach ($existingPaiements as $element) {
                    $somme += $element['montant_paiements'];
                }
                $somTotal = round($data['prix'] + $somme, 2);

                // Round both sides and compare with a small tolerance instead of an
                // exact float equality check, which unreliably never matches once
                // rounding differences accumulate across lines/payments.
                $factureLignes = $this->getFactureLineByFacture($data['id']);
                $montantDu = round($factureLignes['montantTTC'] - $factureLignes['montantAvoir'], 2);
                $epsilon = 0.01;

                if ($somTotal > $montantDu + $epsilon) {
                    $ret['success'] = false;
                    $ret['msg'] = "Le montant de la facture à été depassé il reste " . utileHelpers::numberPrecision($montantDu - $somme) . " à payé ";
                    return $ret;
                }
                $statusFacture = (abs($montantDu - $somTotal) <= $epsilon) ? 'payée' : 'partiellement payée';

                $sql = $this->paiementModel->add(array(
                    'paiement_id' => CoreHelpers::generateString(32),
                    'facture_id_paiements' => $data['id'],
                    'montant_paiements' => $data['prix'],
                    'date_paiements' => $data['date'],
                    'mode_paiements' => $data['paiement'],
                    'created_at_paiements' => time(),
                    'user_paiements' => $_SESSION['id_user'],
                ));
                $this->factureModel->update(array(
                    'statut_factures' => $statusFacture,
                ), 'facture_id', $facture['facture_id']);

                $ret['success'] = $sql == true;
                if ($ret['success']) {
                    Audit::log('create_paiement', 'facture', $data['id'], null, array('montant' => $data['prix'], 'statut_factures' => $statusFacture));
                }
                return $ret;
            });
        } else if ($data['type'] == "update") {
            $paiement = $this->paiementModel->get_1_1('paiement_id', $data['id'], 0, 1);
            if (count($paiement) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour ,paiement introuvable ";
                return $ret;
            }
            $sql = $this->addresseModel->update(array(
                'facture_id_paiements' => $data['facture'],
                'montant_paiements' => $data['montant'],
                'date_paiement' => $data['date'],
                'mode_paiements' => $data['mode'],
            ), 'paiement_id', $data['id']);
        } else if ($data['type'] == "delete") {
        }
        $ret['success'] = $sql == true;
        return $ret;
    }

    /**
     * Issues an avoir (credit note) against a validated invoice. Admin-only
     * (enforced in crud()). The invoice is never deleted or edited in place -
     * the avoir is a separate, traceable record that keeps a link to the
     * original facture, per cahier des charges §18.
     */
    private function addAvoir(array $data): array
    {
        return $this->withSequenceLock('avoir_seq_' . $data['id'], function () use ($data) {
            $ret = array('msg' => 'unexpected error happen');

            if ($data['montant'] <= 0) {
                $ret['success'] = false;
                $ret['msg'] = "Le montant de l'avoir doit être supérieur à 0 ";
                return $ret;
            }

            $facture = $this->factureModel->get_1_1('facture_id', $data['id'], 0, 1);
            if (count($facture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible de créer un avoir , facture introuvable ";
                return $ret;
            }
            if (trim((string) $facture['valide_factures']) !== 'true') {
                $ret['success'] = false;
                $ret['msg'] = "Un avoir ne peut être émis que sur une facture validée ";
                return $ret;
            }

            $factureLignes = $this->getFactureLineByFacture($data['id']);
            $montantRestant = round($factureLignes['montantTTC'] - $factureLignes['montantAvoir'], 2);

            if ($data['montant'] > $montantRestant + 0.01) {
                $ret['success'] = false;
                $ret['msg'] = "Le montant de l'avoir dépasse le solde restant de la facture (" . utileHelpers::numberPrecision($montantRestant) . ") ";
                return $ret;
            }

            $sql = $this->avoirModel->add(array(
                'avoir_id' => CoreHelpers::generateString(32),
                'facture_id_avoirs' => $data['id'],
                'montant_avoirs' => $data['montant'],
                'motif_avoirs' => $data['motif'] ?? '',
                'date_avoirs' => $data['date'] ?? date('Y-m-d'),
                'user_avoirs' => $_SESSION['id_user'],
                'created_at_avoirs' => time(),
            ));

            // Fully credited invoices are marked "avoirée"; a partial avoir
            // just reduces the balance used by future payment checks and is
            // left visible in the invoice's avoir history.
            if ($sql && abs($montantRestant - $data['montant']) <= 0.01) {
                $this->factureModel->update(array('statut_factures' => 'avoirée'), 'facture_id', $data['id']);
            }

            $ret['success'] = $sql == true;
            if ($ret['success']) {
                Audit::log('create_avoir', 'facture', $data['id'], null, array('montant' => $data['montant'], 'motif' => $data['motif'] ?? ''));
            }
            return $ret;
        });
    }

    /**
     * Admin-only tax rate configuration (cahier des charges §36) - a single
     * place to add/edit/deactivate a tax rate instead of typing a raw
     * percentage by hand on every invoice.
     */
    private function addTaxe(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');

        if ($data['type'] == "add") {
            if (!is_numeric($data['taux']) || $data['taux'] < 0) {
                $ret['success'] = false;
                $ret['msg'] = "Le taux doit être un nombre positif ";
                return $ret;
            }
            $sql = $this->taxModel->add(array(
                'tax_id' => CoreHelpers::generateString(32),
                'libelle_taxes' => $data['libelle'],
                'taux_taxes' => $data['taux'],
                'actif_taxes' => 'true',
                'created_at_taxes' => time(),
            ));
        } else if ($data['type'] == "update") {
            $taxe = $this->taxModel->get_1('tax_id', $data['id'], 0, 1);
            if (count($taxe) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Taxe introuvable ";
                return $ret;
            }
            $sql = $this->taxModel->update(array(
                'libelle_taxes' => $data['libelle'],
                'taux_taxes' => $data['taux'],
            ), 'tax_id', $data['id']);
        } else if ($data['type'] == "toggle") {
            $taxe = $this->taxModel->get_1('tax_id', $data['id'], 0, 1);
            if (count($taxe) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Taxe introuvable ";
                return $ret;
            }
            $newState = trim((string) $taxe['actif_taxes']) === 'true' ? 'false' : 'true';
            $sql = $this->taxModel->update(array('actif_taxes' => $newState), 'tax_id', $data['id']);
        }

        $ret['success'] = $sql == true;
        if ($ret['success']) {
            Audit::log('update_taxe', 'taxe', $data['id'] ?? null);
        }
        return $ret;
    }

    public function getTaxes(): array
    {
        return $this->taxModel->get_();
    }

    public function getActiveTaxes(): array
    {
        return $this->taxModel->get_actives();
    }

    /**
     * Fleet (engins) CRUD - cahier des charges §7. Statuses follow the same
     * list as the document: disponible, loué, en chantier, en maintenance,
     * immobilisé, hors service, vendu, archivé.
     */
    private function addEngin(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');

        if ($data['type'] == "add") {
            if (trim((string) $data['numero_interne']) === '' || trim((string) $data['type_engin']) === '') {
                $ret['success'] = false;
                $ret['msg'] = "Le numéro interne et le type de l'engin sont obligatoires ";
                return $ret;
            }
            $sql = $this->enginModel->add(array(
                'engin_id' => CoreHelpers::generateString(32),
                'numero_interne_engins' => $data['numero_interne'],
                'code_engins' => $data['code'] ?? '',
                'immatriculation_engins' => $data['immatriculation'] ?? '',
                'type_engins' => $data['type_engin'],
                'categorie_engins' => $data['categorie'] ?? '',
                'marque_engins' => $data['marque'] ?? '',
                'modele_engins' => $data['modele'] ?? '',
                'annee_engins' => $data['annee'] ?? null,
                'numero_serie_engins' => $data['numero_serie'] ?? '',
                'puissance_engins' => $data['puissance'] ?? '',
                'capacite_engins' => $data['capacite'] ?? '',
                'localisation_engins' => $data['localisation'] ?? '',
                'date_mise_service_engins' => $data['date_mise_service'] ?? null,
                'cout_acquisition_engins' => $data['cout_acquisition'] ?? 0,
                'tarif_horaire_engins' => $data['tarif_horaire'] ?? 0,
                'tarif_journalier_engins' => $data['tarif_journalier'] ?? 0,
                'tarif_hebdomadaire_engins' => $data['tarif_hebdomadaire'] ?? 0,
                'tarif_mensuel_engins' => $data['tarif_mensuel'] ?? 0,
                'observations_engins' => $data['observations'] ?? '',
                'statut_engins' => 'disponible',
                'created_at_engins' => time(),
                'user_engins' => $_SESSION['id_user'],
            ));
        } else if ($data['type'] == "update") {
            $engin = $this->enginModel->get_1('engin_id', $data['id'], 0, 1);
            if (count($engin) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Engin introuvable ";
                return $ret;
            }
            $sql = $this->enginModel->update(array(
                'numero_interne_engins' => $data['numero_interne'],
                'code_engins' => $data['code'] ?? '',
                'immatriculation_engins' => $data['immatriculation'] ?? '',
                'type_engins' => $data['type_engin'],
                'categorie_engins' => $data['categorie'] ?? '',
                'marque_engins' => $data['marque'] ?? '',
                'modele_engins' => $data['modele'] ?? '',
                'annee_engins' => $data['annee'] ?? null,
                'numero_serie_engins' => $data['numero_serie'] ?? '',
                'puissance_engins' => $data['puissance'] ?? '',
                'capacite_engins' => $data['capacite'] ?? '',
                'localisation_engins' => $data['localisation'] ?? '',
                'cout_acquisition_engins' => $data['cout_acquisition'] ?? 0,
                'tarif_horaire_engins' => $data['tarif_horaire'] ?? 0,
                'tarif_journalier_engins' => $data['tarif_journalier'] ?? 0,
                'tarif_hebdomadaire_engins' => $data['tarif_hebdomadaire'] ?? 0,
                'tarif_mensuel_engins' => $data['tarif_mensuel'] ?? 0,
                'observations_engins' => $data['observations'] ?? '',
            ), 'engin_id', $data['id']);
        } else if ($data['type'] == "changer-statut") {
            $engin = $this->enginModel->get_1('engin_id', $data['id'], 0, 1);
            if (count($engin) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Engin introuvable ";
                return $ret;
            }
            $validStatuts = array('disponible', 'loué', 'en chantier', 'en maintenance', 'immobilisé', 'hors service', 'vendu', 'archivé');
            if (!in_array($data['statut'], $validStatuts, true)) {
                $ret['success'] = false;
                $ret['msg'] = "Statut invalide ";
                return $ret;
            }
            $sql = $this->enginModel->update(array('statut_engins' => $data['statut']), 'engin_id', $data['id']);
        } else if ($data['type'] == "delete") {
            $engin = $this->enginModel->get_1('engin_id', $data['id'], 0, 1);
            if (count($engin) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Engin introuvable ";
                return $ret;
            }
            $sql = $this->enginModel->delete('engin_id', $data['id']);
        }

        $ret['success'] = $sql == true;
        if ($ret['success']) {
            Audit::log('update_engin', 'engin', $data['id'] ?? null, null, array('type' => $data['type']));
        }
        return $ret;
    }

    public function getEngins(): array
    {
        return $this->enginModel->get_();
    }

    public function getEnginsDisponibles(): array
    {
        return $this->enginModel->get_disponibles();
    }

    /**
     * Chantiers/sites (cahier des charges §9). A client can have several,
     * and a commande (contrat) can be attached to one via
     * chantier_id_commandes, completing the Client → Contrat → Engin →
     * Opérateur → Chantier chain from §8.
     */
    private function addChantier(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');

        if ($data['type'] == "add") {
            $client = $this->clientModel->get_1_0('client_id', $data['client'], 0, 1);
            if (count($client) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter le chantier , le client n'existe pas ";
                return $ret;
            }
            if (trim((string) $data['nom']) === '') {
                $ret['success'] = false;
                $ret['msg'] = "Le nom du chantier est obligatoire ";
                return $ret;
            }
            $sql = $this->chantierModel->add(array(
                'chantier_id' => CoreHelpers::generateString(32),
                'nom_chantiers' => $data['nom'],
                'code_chantiers' => $data['code'] ?? '',
                'client_id_chantiers' => $data['client'],
                'localisation_chantiers' => $data['localisation'] ?? '',
                'responsable_chantiers' => $data['responsable'] ?? '',
                'telephone_chantiers' => $data['telephone'] ?? '',
                'date_debut_chantiers' => $data['date_debut'] ?? null,
                'date_fin_chantiers' => $data['date_fin'] ?? null,
                'statut_chantiers' => 'actif',
                'observations_chantiers' => $data['observations'] ?? '',
                'created_at_chantiers' => time(),
                'user_chantiers' => $_SESSION['id_user'],
            ));
        } else if ($data['type'] == "update") {
            $chantier = $this->chantierModel->get_1('chantier_id', $data['id'], 0, 1);
            if (count($chantier) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Chantier introuvable ";
                return $ret;
            }
            $sql = $this->chantierModel->update(array(
                'nom_chantiers' => $data['nom'],
                'code_chantiers' => $data['code'] ?? '',
                'localisation_chantiers' => $data['localisation'] ?? '',
                'responsable_chantiers' => $data['responsable'] ?? '',
                'telephone_chantiers' => $data['telephone'] ?? '',
                'date_debut_chantiers' => $data['date_debut'] ?? null,
                'date_fin_chantiers' => $data['date_fin'] ?? null,
                'statut_chantiers' => $data['statut'] ?? $chantier['statut_chantiers'],
                'observations_chantiers' => $data['observations'] ?? '',
            ), 'chantier_id', $data['id']);
        } else if ($data['type'] == "delete") {
            $chantier = $this->chantierModel->get_1('chantier_id', $data['id'], 0, 1);
            if (count($chantier) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Chantier introuvable ";
                return $ret;
            }
            $commandesLiees = $this->commandeModel->get_1_1_NO_LIMIT('chantier_id_commandes', $data['id']);
            if (count($commandesLiees) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible de supprimer ce chantier , des contrats y sont rattachés ";
                return $ret;
            }
            $sql = $this->chantierModel->delete('chantier_id', $data['id']);
        }

        $ret['success'] = $sql == true;
        return $ret;
    }

    public function getChantiers(): array
    {
        return $this->chantierModel->get_();
    }

    public function getChantiersByClient($clientId): array
    {
        return $this->chantierModel->get_1_no_limit('client_id_chantiers', $clientId);
    }

    /**
     * Maintenance history per engin (cahier des charges §23). Logging a
     * reading also bumps the engin's own compteur_horaire_engins so the
     * fleet list always reflects the latest known reading.
     */
    private function addMaintenance(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');

        if ($data['type'] == "add") {
            $engin = $this->enginModel->get_1('engin_id', $data['engin'], 0, 1);
            if (count($engin) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Engin introuvable ";
                return $ret;
            }
            if (!in_array($data['type_maintenance'], array('préventive', 'corrective'), true)) {
                $ret['success'] = false;
                $ret['msg'] = "Type de maintenance invalide ";
                return $ret;
            }
            $sql = $this->maintenanceModel->add(array(
                'maintenance_id' => CoreHelpers::generateString(32),
                'engin_id_maintenances' => $data['engin'],
                'type_maintenances' => $data['type_maintenance'],
                'nature_maintenances' => $data['nature'] ?? '',
                'pieces_maintenances' => $data['pieces'] ?? '',
                'date_maintenances' => $data['date'],
                'cout_maintenances' => $data['cout'] ?? 0,
                'compteur_horaire_maintenances' => $data['compteur'] ?? 0,
                'prochain_compteur_maintenances' => $data['prochain_compteur'] ?? null,
                'observations_maintenances' => $data['observations'] ?? '',
                'created_at_maintenances' => time(),
                'user_maintenances' => $_SESSION['id_user'],
            ));
            if ($sql && !empty($data['compteur']) && $data['compteur'] > $engin['compteur_horaire_engins']) {
                $this->enginModel->update(array('compteur_horaire_engins' => $data['compteur']), 'engin_id', $data['engin']);
            }
        } else if ($data['type'] == "delete") {
            $sql = $this->maintenanceModel->delete('maintenance_id', $data['id']);
        }

        $ret['success'] = $sql == true;
        return $ret;
    }

    public function getMaintenancesByEngin($enginId): array
    {
        return $this->maintenanceModel->get_1_no_limit('engin_id_maintenances', $enginId);
    }

    /**
     * Engins whose next planned maintenance reading has been reached or
     * passed - cahier des charges §23: "Maintenance à prévoir".
     */
    public function getMaintenancesAPrevoir(): array
    {
        $engins = $this->enginModel->get_();
        $result = array();
        foreach ($engins as $engin) {
            $historique = $this->maintenanceModel->get_1_no_limit('engin_id_maintenances', $engin['engin_id']);
            if (empty($historique)) {
                continue;
            }
            $derniere = $historique[0];
            if (!empty($derniere['prochain_compteur_maintenances']) && $engin['compteur_horaire_engins'] >= $derniere['prochain_compteur_maintenances']) {
                $result[] = array(
                    'engin' => $engin,
                    'prochain_compteur' => $derniere['prochain_compteur_maintenances'],
                );
            }
        }
        return $result;
    }

    /**
     * Fuel log per engin (cahier des charges §24). cout_total is computed
     * server-side from quantité × prix unitaire rather than trusted from
     * the client.
     */
    private function addCarburant(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');

        if ($data['type'] == "add") {
            $engin = $this->enginModel->get_1('engin_id', $data['engin'], 0, 1);
            if (count($engin) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Engin introuvable ";
                return $ret;
            }
            if (!is_numeric($data['quantite']) || $data['quantite'] <= 0 || !is_numeric($data['prix']) || $data['prix'] <= 0) {
                $ret['success'] = false;
                $ret['msg'] = "La quantité et le prix doivent être des nombres positifs ";
                return $ret;
            }
            $cout = $data['quantite'] * $data['prix'];
            $sql = $this->carburantModel->add(array(
                'carburant_id' => CoreHelpers::generateString(32),
                'engin_id_carburant' => $data['engin'],
                'date_carburant' => $data['date'],
                'quantite_carburant' => $data['quantite'],
                'prix_unitaire_carburant' => $data['prix'],
                'cout_total_carburant' => $cout,
                'fournisseur_carburant' => $data['fournisseur'] ?? '',
                'compteur_carburant' => $data['compteur'] ?? 0,
                'chantier_id_carburant' => $data['chantier'] ?? '',
                'created_at_carburant' => time(),
                'user_carburant' => $_SESSION['id_user'],
            ));
            if ($sql && !empty($data['compteur']) && $data['compteur'] > $engin['compteur_horaire_engins']) {
                $this->enginModel->update(array('compteur_horaire_engins' => $data['compteur']), 'engin_id', $data['engin']);
            }
        } else if ($data['type'] == "delete") {
            $sql = $this->carburantModel->delete('carburant_id', $data['id']);
        }

        $ret['success'] = $sql == true;
        return $ret;
    }

    public function getCarburantByEngin($enginId): array
    {
        return $this->carburantModel->get_1_no_limit('engin_id_carburant', $enginId);
    }

    /**
     * Fuel consumption/cost totals per engin - cahier des charges §24.
     */
    public function getConsommationCarburantParEngin(): array
    {
        $engins = $this->enginModel->get_();
        $result = array();
        foreach ($engins as $engin) {
            $logs = $this->carburantModel->get_1_no_limit('engin_id_carburant', $engin['engin_id']);
            if (empty($logs)) {
                continue;
            }
            $quantiteTotale = 0;
            $coutTotal = 0;
            foreach ($logs as $log) {
                $quantiteTotale += $log['quantite_carburant'];
                $coutTotal += $log['cout_total_carburant'];
            }
            $result[] = array(
                'engin' => $engin,
                'quantite_totale' => $quantiteTotale,
                'cout_total' => $coutTotal,
            );
        }
        return $result;
    }

    private function addFacture(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $id = CoreHelpers::generateString(32);
            $commande = $this->commandeModel->get_1_1('commande_id', $data['commande'], 0, 1);
            if (count($commande) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'élaboré la facture car la commande n'existe pas ";
                return $ret;
            }
            $sql = $this->withSequenceLock('facture_seq_' . $data['commande'], function () use ($data, $commande, $id) {
                $factureNumber = $this->factureModel->count('commande_id_factures', $data['commande'], 0, 1);
                $order = str_pad($factureNumber + 1, 2, '0', STR_PAD_LEFT);
                $ref = stripslashes($commande['reference_commandes'] . '-FACT/' . $order);
                utileHelpers::qr_code($ref, "../public/assets/img/qr/{$id}.png");
                $created = $this->factureModel->add(array(
                    'facture_id' => $id,
                    'commande_id_factures' => $data['commande'],
                    'date_emission_factures' => $data['dateEmission'],
                    'date_echeance_factures' => $data['dateEcheance'],
                    'tva_factures' => $data['tva'],
                    'devise_factures' => $data['devise'] ?? 'GNF',
                    'created_at_factures' => time(),
                    'libelle_factures' => $data['libelle'],
                    'user_factures' => $_SESSION['id_user'],
                    'reference_factures' => $ref,
                ));
                if ($created) {
                    Audit::log('create_facture', 'facture', $id, null, array('reference' => $ref));
                }
                return $created;
            });
        } else if ($data['type'] == "update") {
            //  vérifié si le client dispose déjàs une adresse
            $facture = $this->factureModel->get_1_1('facture_id', $data['id'], 0, 1);
            if (count($facture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , facture introuvable ";
                return $ret;
            }
            $sql = $this->factureModel->update(array(
                'date_emission_factures' => $data['date_emission'],
                'date_echeance_factures' => $data['date_echeance'],
                'libelle_factures' => $data['libelle'],
                'tva_factures' => $data['tva'],
            ), 'facture_id', $data['id']);
            if ($sql == true) {
                Audit::log('update_facture', 'facture', $data['id'], $facture, $data);
            }
        } else if ($data['type'] == "delete") {
            $facture = $this->factureModel->get_1_1('facture_id', $data['id'], 0, 1);
            if (count($facture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec suppression , facture introuvable ";
                return $ret;
            }
            /** VERIFIER QUE LA FACTURE N'EST PAS VALIDÉE */
            if (trim((string) $facture['valide_factures']) === 'true') {
                $ret['success'] = false;
                $ret['msg'] = "Impossible de supprimer cette facture , elle a déjà été validée ";
                return $ret;
            }
            /** VERIFIER QU'AUCUN PAIEMENT N'A ÉTÉ ENREGISTRÉ */
            $paiements = $this->paiementModel->get_1('facture_id_paiements', $data['id']);
            if (count($paiements) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible de supprimer cette facture , des paiements y sont déjà enregistrés ";
                return $ret;
            }
            /** VERIFIER QU'AUCUN AVOIR N'A ÉTÉ ÉMIS */
            $avoirs = $this->avoirModel->get_1('facture_id_avoirs', $data['id']);
            if (count($avoirs) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible de supprimer cette facture , des avoirs y sont déjà rattachés ";
                return $ret;
            }
            /** VERIFIER QUE LA FACTURE NE CONTIENS PAS D'ARTICLE */
            $factureLigneModel = $this->factureLigneModel->get_1_0('facture_id_facture_lignes', $data['id'], 0, 1);
            if (count($factureLigneModel) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible de supprimé cette facture , car elle contien au minimum un article ";
                return $ret;
            }
            $sql = $this->factureModel->delete('facture_id', $data['id']);
            if ($sql == true) {
                Audit::log('delete_facture', 'facture', $data['id'], $facture, null);
            }
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addLivraison(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $livraison = $this->livraisonModel->get_1('commande_id_livraisons', $data['commande'], 0, 1);
            if (count($livraison) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "La commande est " . $livraison['etat_livraisos'];
                return $ret;
            }
            $commande = $this->commandeModel->get_1_1('commande_id', $data['commande'], 0, 1);
            if (count($commande) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'effectuer cette livraison car la commande n'existe pas ";
                return $ret;
            }

            $livreur = $this->transporteurModel->get_1_1('personnelle_id', $data['transporteur'], 0, 1);
            if (count($livreur) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'effectuuer cette livraison car le livreur n'existe pas ";
                return $ret;
            }
            $sql = $this->livraisonModel->add(array(
                'livraison_id' => CoreHelpers::generateString(32),
                'commande_id_livraisons' => $data['commande'],
                'transporteur_id_livraisons' => $data['transporteur'],
                'date_livraisons' => $data['date'],
                'etat_livraisons' => $data['etat'],
                'created_at_livraisons' => time(),
            ));

            $this->commandeModel->update(array(
                'etat_commandes' => $data['etat'],
            ), 'commande_id', $data['commande']);
        } else if ($data['type'] == "update") {
            $livraison = $this->livraisonModel->get_1_1('livraison_id ', $data['id'], 0, 1);
            if (count($livraison) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , livraison introuvable ";
                return $ret;
            }
            $sql = $this->livraisonModel->update(array(
                'commande_id_livraison' => $data['commande'],
                'transporteur_id_livraison' => $data['transporteur'],
                'date_livraison' => $data['date'],
                'etat_livraison' => $data['etat'],
            ), 'livraison_id', $data['id']);
        } else if ($data['type'] == "delete") {
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    /**
     * Personnel/opérateurs (cahier des charges §8) share one table:
     * "poste_personnelles" already distinguishes drivers, operators and
     * supervisors, so the qualification fields (matricule, permis,
     * habilitations) live on the same record rather than a parallel
     * "operateurs" entity.
     */
    private function addPersonnelle(array $data): array
    {

        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $transporteur = $this->transporteurModel->get_2('email_personnelles', $data['email'], 'telephone_personnelles', $data['telephone'], 0, 1);
            if (count($transporteur) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter le transporteur , Email ou Téléphone existe déjàs ";
                return $ret;
            }
            $sql = $this->transporteurModel->add(array(
                'personnelle_id' => CoreHelpers::generateString(32),
                'noms_personnelles' => $data['nom'],
                'email_personnelles' => $data['email'],
                'telephone_personnelles' => $data['telephone'],
                'poste_personnelles' => $data['poste'],
                'matricule_personnelles' => $data['matricule'] ?? '',
                'permis_personnelles' => $data['permis'] ?? '',
                'categorie_permis_personnelles' => $data['categorie_permis'] ?? '',
                'date_expiration_permis_personnelles' => $data['date_expiration_permis'] ?? null,
                'habilitations_personnelles' => $data['habilitations'] ?? '',
                'statut_personnelles' => 'actif',
            ));
        } else if ($data['type'] == "update") {
            $transporteur = $this->transporteurModel->get_1_1('personnelle_id', $data['id'], 0, 1);
            if (count($transporteur) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , transporteur introuvable ";
                return $ret;
            }
            $sql = $this->transporteurModel->update(array(
                'noms_personnelles' => $data['nom'],
                'email_personnelles' => $data['email'],
                'telephone_personnelles' => $data['telephone'],
                'poste_personnelles' => $data['poste'],
                'matricule_personnelles' => $data['matricule'] ?? $transporteur['matricule_personnelles'],
                'permis_personnelles' => $data['permis'] ?? $transporteur['permis_personnelles'],
                'categorie_permis_personnelles' => $data['categorie_permis'] ?? $transporteur['categorie_permis_personnelles'],
                'date_expiration_permis_personnelles' => $data['date_expiration_permis'] ?? $transporteur['date_expiration_permis_personnelles'],
                'habilitations_personnelles' => $data['habilitations'] ?? $transporteur['habilitations_personnelles'],
                'statut_personnelles' => $data['statut'] ?? $transporteur['statut_personnelles'],
            ), 'personnelle_id', $data['id']);
        } else if ($data['type'] == "delete") {
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    /**
     * Commandes double as the rental contract entity (cahier des charges
     * §10) - client, engin, contract period, rate, payment terms and
     * deposit are attached directly here rather than through a separate
     * "contrats" table, since every order already carries the client/date/
     * status/reference that a contract needs and Factures/Paiements/
     * Livraisons already hang off commande_id.
     */
    private function addCommande(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $client = $this->clientModel->get_1_0('client_id', $data['client'], 0, 1);
            if (count($client) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter la commande , le client n'existe pas ";
                return $ret;
            }
            if (!empty($data['date_fin']) && !empty($data['date_debut']) && $data['date_fin'] < $data['date_debut']) {
                $ret['success'] = false;
                $ret['msg'] = "La date de fin du contrat ne peut pas être antérieure à la date de début ";
                return $ret;
            }
            $sql = $this->withSequenceLock('commande_seq_' . $data['client'], function () use ($data, $client) {
                $getNumberLastCommande = count($this->commandeModel->get_1_1_NO_LIMIT('client_id_commandes', $data['client']));
                $order = str_pad($getNumberLastCommande + 1, 2, '0', STR_PAD_LEFT);
                $refCommande = ($order . '/' . utileHelpers::getAcronym($client['noms_clients']) . '/BSMS/' . date('Y') . '/CMD');
                return $this->commandeModel->add(array(
                    'commande_id' => CoreHelpers::generateString(32),
                    'client_id_commandes' => $data['client'],
                    'date_commandes' => $data['date'],
                    'created_at_commandes' => time(),
                    'reference_commandes' => $refCommande,
                    'user_commandes' => $_SESSION['id_user'],
                    'type_location_commandes' => $data['type_location'] ?? '',
                    'engin_id_commandes' => $data['engin'] ?? '',
                    'chantier_id_commandes' => $data['chantier'] ?? '',
                    'date_debut_commandes' => $data['date_debut'] ?? $data['date'],
                    'date_fin_commandes' => $data['date_fin'] ?? null,
                    'tarif_commandes' => $data['tarif'] ?? 0,
                    'devise_commandes' => $data['devise'] ?? 'GNF',
                    'conditions_paiement_commandes' => $data['conditions_paiement'] ?? '',
                    'caution_commandes' => $data['caution'] ?? 0,
                ));
            });
        } else if ($data['type'] == "update") {

            $commande = $this->commandeModel->get_1_1('commande_id', $data['id'], 0, 1);

            if (count($commande) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , Commande introuvable ";
                return $ret;
            }
            if (!empty($data['date_fin']) && !empty($data['date_debut']) && $data['date_fin'] < $data['date_debut']) {
                $ret['success'] = false;
                $ret['msg'] = "La date de fin du contrat ne peut pas être antérieure à la date de début ";
                return $ret;
            }

            $sql = $this->commandeModel->update(array(
                'date_commandes' => $data['date'],
                'etat_commandes' => $data['etat'],
                'type_location_commandes' => $data['type_location'] ?? $commande['type_location_commandes'],
                'engin_id_commandes' => $data['engin'] ?? $commande['engin_id_commandes'],
                'chantier_id_commandes' => $data['chantier'] ?? $commande['chantier_id_commandes'],
                'date_debut_commandes' => $data['date_debut'] ?? $commande['date_debut_commandes'],
                'date_fin_commandes' => $data['date_fin'] ?? $commande['date_fin_commandes'],
                'tarif_commandes' => $data['tarif'] ?? $commande['tarif_commandes'],
                'conditions_paiement_commandes' => $data['conditions_paiement'] ?? $commande['conditions_paiement_commandes'],
                'caution_commandes' => $data['caution'] ?? $commande['caution_commandes'],
            ), 'commande_id', $data['id']);
        }
        $ret['success'] = $sql == true;
        return $ret;
    }

    /**
     * Contracts (commandes) whose date_fin_commandes falls within the next
     * $days days - cahier des charges §10: "signaler les contrats arrivant
     * à expiration".
     */
    public function getContratsExpirantBientot(int $days = 15): array
    {
        $all = $this->commandeModel->get_();
        $limit = date('Y-m-d', strtotime("+{$days} days"));
        $today = date('Y-m-d');
        $result = array();
        foreach ($all as $commande) {
            $fin = $commande['date_fin_commandes'] ?? null;
            if ($fin && $fin >= $today && $fin <= $limit) {
                $result[] = $commande;
            }
        }
        return $result;
    }
    public function printFees($param): array
    {



        $ret = array('msg' => 'unexpected error happen');
        $data_ = $this->getSingleFactureClient($param['facture']);
        // var_dump($data_ ["articles"][0]);exit();
        $cert = new Certificate(false);
        $cert->setData($data_);
        $cert->setAutoBreakPage(true);
        $cert = new Certificate(false, false);
        $cert->setData($data_);
        $cert->setFont('arialuni', 8);
        $cert->setType(Constant::FEES_PRINT);
        $cert->setTitle(false);
        $cert->generate($this->pathTmp . "/1_card.pdf");
        //$ret['urls'] = [$this->printableTMPUrl($fn . '.pdf')];
        $ret['base64'] = chunk_split(base64_encode(file_get_contents($this->pathTmp . "/1_card.pdf")));
        unlink($this->pathTmp . "/1_card.pdf");


        $ret['success'] =  true;

        return $ret;
    }
    public function getCommande($id): array
    {

        $data = [];
        $commande = $this->commandeModel->get_1_2('commande_id', $id, 0, 1);
        if (count($commande) == 0) {
            $commande = $this->commandeModel->get_1_1('commande_id', $id, 0, 1);
        }
        $data['commande_id'] = $commande['commande_id'];
        $data['client_id_commandes'] = $commande['client_id_commandes'];
        $data['noms_clients'] = $commande['noms_clients'];
        $data['date_commandes'] = $commande['date_commandes'];
        $data['etat_commandes'] = $commande['etat_commandes'];
        $data['reference_commandes'] = $commande['reference_commandes'];
        if (count($this->getFactureByCommandeCalculus($commande['commande_id'])) != 0) {
            $data['mttc'] = $this->getFactureByCommandeCalculus($commande['commande_id'])['mttc'];
        } else {
            $data['mttc'] = 0;
        }
        $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('commande_id', $commande['commande_id'], 0, 1)['sum'];

        $data['reste'] =   $data['mttc'] -  $data['mpc'];
        ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
        //***** client */
        $data['client_id'] = $commande['client_id'];
        $data['noms_clients'] = $commande['noms_clients'];
        $data['email_clients'] = $commande['email_clients'];
        $data['telephone_clients'] = $commande['telephone_clients'];
        //***** addrsses */
        if (isset($data['adresse_id'])) {
            $data['adresse_id'] = $commande['adresse_id'];
            $data['type_addresses'] = $commande['type_addresses'];
            $data['rue_addresses'] = $commande['rue_addresses'];
            $data['ville_addresses'] = $commande['ville_addresses'];
            $data['code_postal_addresses'] = $commande['code_postal_addresses'];
            $data['pays_addresses'] = $commande['pays_addresses'];
        }

        $data['ChiffreEnLettre'] = utileHelpers::ChiffreEnLettre($data['mttc']);

        return $data;
    }
    public function getCommandeClient($id): array
    {
        $data_ = [];
        $data = [];
        $commandes = $this->commandeModel->get_1_2('client_id_commandes', $id, 0, 5);
        foreach ($commandes as $commande) {
            # code...
            $data['commande_id'] = $commande['commande_id'];
            $data['client_id_commandes'] = $commande['client_id_commandes'];
            $data['noms_clients'] = $commande['noms_clients'];
            $data['date_commandes'] = $commande['date_commandes'];
            $data['etat_commandes'] = $commande['etat_commandes'];
            $data['reference_commandes'] = $commande['reference_commandes'];
            //$data['mttc'] = ($this->factureLigneModel->SumTtcCommande('commande_id', $commande['commande_id'], 0, 1)['sum']);
            // $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('commande_id', $commande['commande_id'], 0, 1)['sum'];
            // $data['reste'] =   $data['mttc'] -  $data['mpc'];

            $data['mttc'] = 0;
            $data['mpc'] =   0;
            $data['reste'] =   $data['mttc'] -  $data['mpc'];

            ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
            //***** client */

            //***** addrsses */

            array_push($data_, $data);
        }

        return $data_;
    }
    public function getPointageLigneFacture($id): array
    {
        $data_ = [];
        $ret_ = [];
        $data = [];
        $data['SumIndex'] = 0;
        $pointages = $this->pointageModel->get_1_1_FactureLigne('_id_facture_ligne_pointage', $id);
        foreach ($pointages as $pointage) {
            $operateur = $this->transporteurModel->get_1_1('personnelle_id', $pointage['operateur_pointage'], 0, 1);
            $superviseur = $this->transporteurModel->get_1_1('personnelle_id', $pointage['superviseur_pointage'], 0, 1);
            $data['date_pointage'] = $pointage['date_pointage'];
            $data['index_depart_pointage'] = $pointage['index_depart_pointage'];
            $data['index_fin_pointage'] = $pointage['index_fin_pointage'];
            $data['index_total_pointage'] = $pointage['index_total_pointage'];
            $data['poste_pointage'] = $pointage['poste_pointage'];
            $data['operateur_pointage'] =  $operateur['noms_personnelles'] . ' / ' . $operateur['telephone_personnelles'];
            $data['superviseur_pointage'] =  $superviseur['noms_personnelles'] . ' / ' . $superviseur['telephone_personnelles'];
            $data['site_pointage'] = $pointage['site_pointage'];
            $data['remarque_pointage'] = $pointage['remarque_pointage'];
            $data['pointage_id'] = $pointage['pointage_id'];
            $data['SumIndex'] += $pointage['index_total_pointage'];
            array_push($data_, $data);
        }
        if (isset($pointages[0]['prix_unitaire_facture_lignes'])) {
            $pointages[0]['prix_unitaire_facture_lignes'] = $pointages[0]['prix_unitaire_facture_lignes'];
        } else {
            $pointages[0]['prix_unitaire_facture_lignes'] = 0;
        }
        $ret_['MontantTotalLigne'] = ($data['SumIndex'] * $pointages[0]['prix_unitaire_facture_lignes']);
        $ret_['TotalIndex'] = ($data['SumIndex']);
        array_push($ret_, $data_);
        return $ret_;
    }

    public function getFactureLineByFacture($factureId): array
    {
        $data_ = [];
        $data = [];
        $ret_ = [];
        $data['montantFacture'] = 0;

        $factureLignes = $this->factureModel->get_1_2_('facture_id_facture_lignes', $factureId, 0, 1000);
        $montantTotalPayerFacture = $this->paiementModel->SumTotalPayerCommande('facture_id', $factureId, 0, 1);
        foreach ($factureLignes as $factureLigne) {
            $data['ligne_id'] = $factureLigne['ligne_id'];
            $data['libelle_articles'] = $factureLigne['libelle_articles'];
            $data['quantite_facture_lignes'] = $factureLigne['quantite_facture_lignes'];
            $data['prix_unitaire_facture_lignes'] = $factureLigne['prix_unitaire_facture_lignes'];
            $data['type_pointagefacture_lignes'] = $factureLigne['type_pointagefacture_lignes'];
            $data['date_emission_factures'] = $factureLigne['date_emission_factures'];
            $data['date_echeance_factures'] = $factureLigne['date_echeance_factures'];
            $data['description_facture_lignes'] = $factureLigne['description_facture_lignes'];
            $data['SumIndex'] = $this->pointageModel->SumTotalIndexPointageParLigneDeFacture_1('_id_facture_ligne_pointage', $factureLigne['ligne_id'])[0]['sum'];
            $data['montantFactureLigne'] = ($data['SumIndex'] * $factureLigne['prix_unitaire_facture_lignes']);
            $data['montantFacture'] += $data['montantFactureLigne'];
            array_push($data_, $data);
        }
        $ret_['montantFacture'] = $data['montantFacture'];
        $ret_['montantTotalPayerFacture'] = $montantTotalPayerFacture['sum'];
        if (isset($factureLignes[0]['tva_factures'])) {
            $ret_['montantTva'] = ($ret_['montantFacture'] * ($factureLignes[0]['tva_factures'] / 100));
        } else {
            $ret_['montantTva'] = 0;
        }
        $ret_['montantTTC'] = ($ret_['montantFacture'] + $ret_['montantTva']);
        $ret_['montantAvoir'] = $this->avoirModel->sumByFacture($factureId);
        array_push($ret_, $data_);
        return $ret_;
    }
    public function getState()
    {
        $data = [];
        $data['commande'] = $this->commandeModel->count();
        $data['facture'] = $this->factureModel->count();
        $data['facture_impayer'] = $this->factureModel->count_1_diff('statut_factures', 'payée');
        $data['facture_payer'] = $this->factureModel->count_1('statut_factures', 'payée');
        return $data;
    }
    public function getStateByClient($client)
    {
        $data = [];
        $data['commande'] = $this->commandeModel->count1('client_id_commandes', $client);
        $data['facture'] = $this->factureModel->count_1_1('client_id_commandes', $client);
        $data['facture_impayer'] = $this->factureModel->count_1_diff('statut_factures', 'payée');
        $data['facture_payer'] = $this->factureModel->count_1_2('client_id_commandes', $client, 'statut_factures', 'payée');
        return $data;
    }

    private function getSingleFactureClient($id): array
    {
        $data_ = [];
        $data = [];
        $ret = [];
        $ret_ = [];
        $facture = $this->factureModel->get_1_3('facture_id', $id, 0, 1);

        $factureLignes = $this->getFactureLineByFacture($id);
        // ---------- client
        $data['noms_clients'] = $facture['noms_clients'];
        $data['email_clients'] = $facture['email_clients'];
        $data['telephone_clients'] = $facture['telephone_clients'];
        // ----------  ADDRESS client
        $data['type_addresses'] = $facture['type_addresses'];
        $data['rue_addresses'] = $facture['rue_addresses'];
        $data['ville_addresses'] = $facture['ville_addresses'];
        $data['code_postal_addresses'] = $facture['code_postal_addresses'];
        $data['pays_addresses'] = $facture['pays_addresses'];
        // ----------  facture client
        $data['date_emission_factures'] = $facture['date_emission_factures'];
        $data['date_echeance_factures'] = $facture['date_echeance_factures'];
        $data['statut_factures'] = $facture['statut_factures'];
        $data['reference_factures'] = $facture['reference_factures'];
        $data['libelle_factures'] = $facture['libelle_factures'];
        $data['valide_factures'] = $facture['valide_factures'];
        $data['tva_factures'] = $facture['tva_factures'];
        $data['facture_id'] = $facture['facture_id'];
        if (count($factureLignes) != 1) {
            $data['facturesLigneFacture'] = $factureLignes[0];
        }
        $data['montant_total_facture'] = ($factureLignes['montantFacture']);
        $data['montant_tva'] = $factureLignes['montantTva'];
        $data['montant_ttc_facture'] = ($factureLignes['montantTTC']);
        $data['montant_ttc_facture_lignes_en_lettre'] = utileHelpers::ChiffreEnLettre($data['montant_ttc_facture']);
        return $data;
    }
    public function getCommandeListe(): array
    {
        $data_ = [];
        $data = [];
        $commandes = $this->commandeModel->get_();
        foreach ($commandes as $commande) {
            var_dump($this->getFactureByCommandeCalculus($commande['commande_id']));
            $data['commande_id'] = $commande['commande_id'];
            $data['client_id_commandes'] = $commande['client_id_commandes'];
            $data['noms_clients'] = $commande['noms_clients'];
            $data['date_commandes'] = $commande['date_commandes'];
            $data['etat_commandes'] = $commande['etat_commandes'];
            $data['reference_commandes'] = $commande['reference_commandes'];
            if (count($this->getFactureByCommandeCalculus($commande['commande_id'])) != 0) {
                $data['mttc'] = $this->getFactureByCommandeCalculus($commande['commande_id'])['mttc'];
            } else {
                $data['mttc'] = 0;
            }
            $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('commande_id', $commande['commande_id'], 0, 1)['sum'];
            $data['reste'] =   $data['mttc'] -  $data['mpc'];
            ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
            array_push($data_, $data);
        }

        return  $data_;
    }
    public function getCommandeListeByClient($client): array
    {
        $data_ = [];
        $data = [];
        $commandes = $this->commandeModel->get_1_1('client_id_commandes', $client, 0, 4);
        foreach ($commandes as $commande) {
            $data['commande_id'] = $commande['commande_id'];
            $data['client_id_commandes'] = $commande['client_id_commandes'];
            $data['noms_clients'] = $commande['noms_clients'];
            $data['date_commandes'] = $commande['date_commandes'];
            $data['etat_commandes'] = $commande['etat_commandes'];
            $data['reference_commandes'] = $commande['reference_commandes'];
            if (count($this->getFactureByCommandeCalculus($commande['commande_id'])) != 0) {
                $data['mttc'] = $this->getFactureByCommandeCalculus($commande['commande_id'])['mttc'];
            } else {
                $data['mttc'] = 0;
            }
            $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('commande_id', $commande['commande_id'], 0, 1)['sum'];
            $data['reste'] =   $data['mttc'] -  $data['mpc'];
            ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
            array_push($data_, $data);
        }

        return  $data_;
    }
    private function getFactureByCommandeCalculus($commandeId): array
    {
        $data_ = [];
        $data = [];
        $ret_ = [];
        $data['mttc'] = 0;
        $data['mtva'] = 0;
        $factureCommandes = $this->factureModel->get_1_2('commande_id_factures', $commandeId, 0, 1000);
        foreach ($factureCommandes as $factureCommande) {
            $facture = $this->getFactureLineByFacture($factureCommande['facture_id']);
            $data['mttc'] += $facture['montantTTC'];
            $data['mtva'] += $facture['montantTva'];
        }
        array_push($data_, $data);
        if (isset($data_[0])) {
            return $data_[0];
        } else {
            return array();
        }
    }
    private function getFactureByFactureCalculus($factureId): array
    {
        $data = [];
        $facture = $this->getFactureLineByFacture($factureId);
        $data['mttc'] = $facture['montantTTC'];
        $data['mtva'] = $facture['montantTva'];
        return $data;
    }
    public function getFactureListe(): array
    {
        $data_ = [];
        $data = [];
        $factures = $this->factureModel->get_();
        foreach ($factures as $facture) {
            $data['valide_factures'] = $facture['valide_factures'];
            $data['commande_id_factures'] = $facture['commande_id_factures'];
            $data['client_id_commandes'] = $facture['client_id_commandes'];
            $data['libelle_factures'] = $facture['libelle_factures'];
            $data['facture_id'] = $facture['facture_id'];
            $data['reference_commandes'] = $facture['reference_commandes'];
            $data['reference_factures'] = $facture['reference_factures'];
            $data['tva_factures'] = $facture['tva_factures'];
            $data['noms_clients'] = $facture['noms_clients'];
            $data['mttc'] = $this->getFactureByFactureCalculus($facture['facture_id'])['mttc'];
            $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('facture_id', $facture['facture_id'], 0, 1)['sum'];
            $data['reste'] =   $data['mttc'] -  $data['mpc'];
            ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100)  :  $data['taux'] = 0;


            array_push($data_, $data);
        }

        return  $data_;
    }
    public function getFactureListeClient($client): array
    {
        $data_ = [];
        $data = [];
        $factures = $this->factureModel->get_1_2('client_id_commandes', $client, 0, 1000000);
        foreach ($factures as $facture) {
            $data['valide_factures'] = $facture['valide_factures'];
            $data['commande_id_factures'] = $facture['commande_id_factures'];
            $data['client_id_commandes'] = $facture['client_id_commandes'];
            $data['libelle_factures'] = $facture['libelle_factures'];
            $data['facture_id'] = $facture['facture_id'];
            $data['reference_commandes'] = $facture['reference_commandes'];
            $data['reference_factures'] = $facture['reference_factures'];
            $data['tva_factures'] = $facture['tva_factures'];
            $data['noms_clients'] = $facture['noms_clients'];
            $data['mttc'] = $this->getFactureByFactureCalculus($facture['facture_id'])['mttc'];
            $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('facture_id', $facture['facture_id'], 0, 1)['sum'];
            $data['reste'] =   $data['mttc'] -  $data['mpc'];
            ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
            array_push($data_, $data);
        }

        return  $data_;
    }

    /**
     * Outstanding invoices with an aging bucket - cahier des charges §20.
     * A "solde" already net of avoirs and payments, bucketed by days past
     * date_echeance_factures: non échue, 0-30, 31-60, 61-90, 91-120, +120.
     */
    public function getCreances(): array
    {
        $factures = $this->factureModel->get_();
        $result = array();
        $today = time();

        foreach ($factures as $facture) {
            if (in_array($facture['statut_factures'], array('annulée', 'avoirée'), true)) {
                continue;
            }
            $lignes = $this->getFactureLineByFacture($facture['facture_id']);
            $solde = round($lignes['montantTTC'] - $lignes['montantAvoir'] - $lignes['montantTotalPayerFacture'], 2);
            if ($solde <= 0.01) {
                continue;
            }

            $echeance = $facture['date_echeance_factures'];
            $joursRetard = $echeance ? (int) floor(($today - strtotime($echeance)) / 86400) : 0;

            if ($joursRetard <= 0) {
                $tranche = 'non échue';
            } else if ($joursRetard <= 30) {
                $tranche = '0-30 jours';
            } else if ($joursRetard <= 60) {
                $tranche = '31-60 jours';
            } else if ($joursRetard <= 90) {
                $tranche = '61-90 jours';
            } else if ($joursRetard <= 120) {
                $tranche = '91-120 jours';
            } else {
                $tranche = 'plus de 120 jours';
            }

            $result[] = array(
                'facture_id' => $facture['facture_id'],
                'reference_factures' => $facture['reference_factures'],
                'noms_clients' => $facture['noms_clients'],
                'email_clients' => $facture['email_clients'] ?? '',
                'date_echeance_factures' => $echeance,
                'statut_factures' => $facture['statut_factures'],
                'solde' => $solde,
                'jours_retard' => $joursRetard,
                'tranche' => $tranche,
            );
        }

        return $result;
    }

    /**
     * Aging summary: total outstanding per bucket, for the tableau
     * d'ancienneté required by §20.
     */
    public function getCreancesAging(): array
    {
        $tranches = array('non échue' => 0, '0-30 jours' => 0, '31-60 jours' => 0, '61-90 jours' => 0, '91-120 jours' => 0, 'plus de 120 jours' => 0);
        foreach ($this->getCreances() as $creance) {
            $tranches[$creance['tranche']] += $creance['solde'];
        }
        return $tranches;
    }

    /**
     * Fleet profitability - cahier des charges §22: revenue per engin
     * (through the commandes/contrats it was assigned to), maintenance and
     * fuel costs, margin, and a utilization rate (days under contract vs.
     * days available since it entered service).
     */
    public function getRentabiliteEngins(): array
    {
        $engins = $this->enginModel->get_();
        $result = array();
        $today = time();

        foreach ($engins as $engin) {
            $commandes = $this->commandeModel->get_1_1_NO_LIMIT('engin_id_commandes', $engin['engin_id']);
            $chiffreAffaires = 0;
            $joursLoues = 0;
            foreach ($commandes as $commande) {
                $chiffreAffaires += $this->getFactureByCommandeCalculus($commande['commande_id'])['mttc'] ?? 0;
                if (!empty($commande['date_debut_commandes']) && !empty($commande['date_fin_commandes'])) {
                    $joursLoues += max(0, (int) floor((strtotime($commande['date_fin_commandes']) - strtotime($commande['date_debut_commandes'])) / 86400));
                }
            }

            $coutMaintenance = 0;
            foreach ($this->maintenanceModel->get_1_no_limit('engin_id_maintenances', $engin['engin_id']) as $m) {
                $coutMaintenance += $m['cout_maintenances'];
            }

            $coutCarburant = 0;
            foreach ($this->carburantModel->get_1_no_limit('engin_id_carburant', $engin['engin_id']) as $c) {
                $coutCarburant += $c['cout_total_carburant'];
            }

            $debutService = $engin['date_mise_service_engins'] ? strtotime($engin['date_mise_service_engins']) : $engin['created_at_engins'];
            $joursDisponibles = max(1, (int) floor(($today - $debutService) / 86400));
            $tauxUtilisation = round(min(100, ($joursLoues / $joursDisponibles) * 100), 1);

            $result[] = array(
                'engin' => $engin,
                'chiffre_affaires' => $chiffreAffaires,
                'cout_maintenance' => $coutMaintenance,
                'cout_carburant' => $coutCarburant,
                'marge' => $chiffreAffaires - $coutMaintenance - $coutCarburant,
                'jours_loues' => $joursLoues,
                'jours_disponibles' => $joursDisponibles,
                'taux_utilisation' => $tauxUtilisation,
            );
        }

        return $result;
    }
}
