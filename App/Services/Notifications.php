<?php

namespace App\Services;

use App\Models\Notifications as NotificationsModel;
use App\Models\Clients;
use App\Utils\Helpers;
use Core\Helpers as CoreHelpers;

/**
 * Notification architecture - cahier des charges §38. Builds and logs the
 * notifications the business asked for (facture par email, rappel
 * d'échéance, facture impayée, contrat arrivant à expiration, maintenance
 * d'un engin). Every attempt is journalized (statut + erreur), whether or
 * not delivery actually succeeds - no SMTP relay is configured on this
 * environment, so "en_attente"/"échec" entries are expected until a real
 * mail transport (SMTP credentials) is wired into send().
 */
class Notifications
{
    private $model;
    private $clientModel;

    public function __construct()
    {
        $this->model = new NotificationsModel();
        $this->clientModel = new Clients();
    }

    public function queue(string $type, string $canal, ?string $destinataire, ?string $objetType, ?string $objetId, string $sujet, string $message): bool
    {
        if ($objetType && $objetId && $this->model->existsFor($objetType, $objetId, $type)) {
            return false;
        }

        return (bool) $this->model->add(array(
            'notification_id' => CoreHelpers::generateString(32),
            'type_notifications' => $type,
            'canal_notifications' => $canal,
            'destinataire_notifications' => $destinataire ?? '',
            'objet_type_notifications' => $objetType ?? '',
            'objet_id_notifications' => $objetId ?? '',
            'sujet_notifications' => $sujet,
            'message_notifications' => $message,
            'statut_notifications' => 'en_attente',
            'created_at_notifications' => time(),
        ));
    }

    /**
     * Scans the same signals already surfaced on the dashboard (contrats
     * expirant, maintenances à prévoir, factures échues) and queues one
     * notification per object that doesn't already have one, so repeated
     * runs don't spam duplicates.
     */
    public function generateAll(AppServices $appService): int
    {
        $queued = 0;

        foreach ($appService->getContratsExpirantBientot() as $commande) {
            $client = $this->clientModel->get_1_0('client_id', $commande['client_id_commandes'], 0, 1);
            $ok = $this->queue(
                'contrat_expiration',
                'email',
                $client['email_clients'] ?? null,
                'commande',
                $commande['commande_id'],
                "Contrat {$commande['reference_commandes']} arrivant à expiration",
                "Le contrat {$commande['reference_commandes']} arrive à expiration le {$commande['date_fin_commandes']}."
            );
            if ($ok) {
                $queued++;
            }
        }

        foreach ($appService->getMaintenancesAPrevoir() as $item) {
            $ok = $this->queue(
                'maintenance',
                'email',
                Helpers::information()['email'],
                'engin',
                $item['engin']['engin_id'],
                "Maintenance à prévoir - {$item['engin']['numero_interne_engins']}",
                "L'engin {$item['engin']['numero_interne_engins']} a atteint le compteur prévu pour sa prochaine maintenance ({$item['prochain_compteur']})."
            );
            if ($ok) {
                $queued++;
            }
        }

        foreach ($appService->getCreances() as $creance) {
            if ($creance['tranche'] === 'non échue') {
                continue;
            }
            $ok = $this->queue(
                'facture_impayee',
                'email',
                $creance['email_clients'] ?: null,
                'facture',
                $creance['facture_id'],
                "Facture impayée - {$creance['reference_factures']}",
                "La facture {$creance['reference_factures']} de {$creance['noms_clients']} présente un solde impayé de {$creance['solde']} GNF ({$creance['tranche']})."
            );
            if ($ok) {
                $queued++;
            }
        }

        return $queued;
    }

    /**
     * Best-effort delivery of every "en_attente" notification. Uses PHP's
     * built-in mail() - on an environment without a configured MTA/SMTP
     * relay this will fail, and the failure is recorded rather than
     * silently dropped, which is the point: the journal (§38 "L'envoi doit
     * être journalisé") stays accurate either way.
     */
    public function dispatchPending(): array
    {
        $pending = array_filter($this->model->get_(0, 500), fn($n) => $n['statut_notifications'] === 'en_attente');
        $sent = 0;
        $failed = 0;

        foreach ($pending as $notification) {
            $ok = false;
            $error = '';

            if (empty($notification['destinataire_notifications'])) {
                $error = "Aucun destinataire connu";
            } elseif ($notification['canal_notifications'] === 'email') {
                try {
                    $ok = @mail(
                        $notification['destinataire_notifications'],
                        $notification['sujet_notifications'],
                        $notification['message_notifications']
                    );
                    if (!$ok) {
                        $error = "Échec d'envoi (aucun relais SMTP configuré sur cet environnement)";
                    }
                } catch (\Throwable $e) {
                    $error = $e->getMessage();
                }
            }

            $this->model->update(array(
                'statut_notifications' => $ok ? 'envoyée' : 'échec',
                'erreur_notifications' => $error,
                'sent_at_notifications' => time(),
            ), 'notification_id', $notification['notification_id']);

            $ok ? $sent++ : $failed++;
        }

        return array('sent' => $sent, 'failed' => $failed);
    }

    public function getAll(int $limit = 200): array
    {
        return $this->model->get_(0, $limit);
    }
}
