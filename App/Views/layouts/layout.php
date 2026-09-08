<?php

namespace App\Views\layouts;

use App\Utils\Helpers;
use Core\Helpers as CoreHelpers;

class layout
{
    /**
     * These methods build raw HTML fragments interpolated into Twig with
     * |raw (autoescape is off for this app's templates), so any user-supplied
     * free-text field (client name, description, motif, etc.) must be
     * escaped here - this is the only place that stands between it and a
     * stored XSS.
     */
    private static function esc($value): string
    {
        return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
    }

    public static function select(array $model)
    {
        $ret = '';
        for ($i = 0; $i < count($model); $i++) {
            $ret .= '<option value="' . self::esc($model[$i]) . '">' . self::esc($model[$i]) . '</option>';
        }
        return $ret;
    }
    public static function LayoutListArticles(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            $ret .= '
                <tr>
                 <td><span>' . self::esc($model['libelle_articles']) . ' </span></td>
                 <td><span>' . self::esc($model['marque_articles']) . ' </span></td>
                 <td><span>' . self::esc($model['type_articles']) . ' </span></td>
                 <td><span>' . self::esc($model['quantite_articles']) . ' </span></td>
                 <td><span>' . self::esc($model['cathegorie_articles']) . ' </span></td>
                  <td class="text-end">
                                     
                                        <div class="actions ">
                                           <a href="' . CoreHelpers::url('articles/article-action/detail/' . $model['article_id'] . '/' . $model['type_articles'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a href="' . CoreHelpers::url('articles/article-action/update/' . $model['article_id'] . '/' . $model['type_articles'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-edit"></i>
                                            </a>
                                        </div>
                                    </td>
                </tr>
            ';
        }

        return $ret;
    }
    public static function LayoutListAddresses(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            $ret .= '
                <tr>
                  <td><a href="' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id'] . '') . '" class="fw-bolder text-primary"  >' . self::esc(Helpers::getAcronym($model['noms_clients'])) . ' </a></td>

                 <td><a href="mailto:' . self::esc($model['email_clients']) . '">' . self::esc($model['email_clients']) . ' </a></td>
                 <td><span>' . self::esc($model['telephone_clients']) . ' </span></td>
                 <td><span>' . self::esc($model['type_addresses']) . ' </span></td>
                 <td><span>' . self::esc($model['rue_addresses']) . ' </span></td>
                 <td><span>' . self::esc($model['ville_addresses']) . ' </span></td>
                 <td><span>' . self::esc($model['code_postal_addresses']) . ' </span></td>
                 <td><span>' . self::esc($model['pays_addresses']) . ' </span></td>
                                    <td class="text-end">
                                        <div class="actions ">
                                           <a href="' . CoreHelpers::url('addresses/addresse-action/detail/' . $model['adresse_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a href="' . CoreHelpers::url('addresses/addresse-action/update/' . $model['adresse_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-edit"></i>
                                            </a>
                                        </div>
                                    </td>
                </tr>
            ';
        }

        return $ret;
    }
    public static function LayoutListClients(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            $ret .= '
                <tr>
                 <td><span>' . self::esc($model['noms_clients']) . ' </span></td>
                 <td><span>' . self::esc($model['email_clients']) . ' </span></td>
                 <td><span>' . self::esc($model['telephone_clients']) . ' </span></td>
                <td class="text-end">
                                        <div class="actions ">
                                           <a href="' . CoreHelpers::url('Clients/detail/' . $model['client_id']) . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            
                                        </div>
                                    </td>
                
                </tr>
            ';
        }

        return $ret;
    }
    public static function LayoutListCommandes(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            if ($model['etat_commandes'] == "en attente") {
                $textColor = "text-danger";
            } else if ($model['etat_commandes'] == "retardée") {
                $textColor = "text-warning";
            } else {
                $textColor = "text-success";
            }
            $ret .= '
                <tr>
                 <td><span class="fw-bolder">' . self::esc($model['reference_commandes']) . ' </span></td>
                 <td><span>' . self::esc($model['date_commandes']) . ' </span></td>
                   <td><span>' . Helpers::formatMoney($model['mttc']) . '  </span></td>
                     <td><span>' . Helpers::formatMoney($model['mpc']) . '  </span></td>
                       <td><span>' . Helpers::formatMoney($model['reste']) . '  </span></td>
                         <td><span>' . self::esc($model['taux']) . '  </span></td>
                        <td><a href="' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id_commandes'] . '') . '" class="fw-bolder text-primary"  >' . self::esc(Helpers::getAcronym($model['noms_clients'])) . ' </a></td>
                 <td><span class="fw-bolder ' . $textColor . '">' . self::esc($model['etat_commandes']) . ' </span></td>
               
                  <td class="text-end">
                     <div class="actions ">
                        <a href="' . CoreHelpers::url('commandes/detail/' . $model['commande_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                               
                                             <a href="' . CoreHelpers::url('commandes/commande-action/update/' . $model['commande_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-edit"></i>
                                            </a>
                                            
                                        </div>
                                    </td>
                
                </tr>
            ';
        }

        return $ret;
    }
    public static function LayoutListCommandesHistoriques(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            $ret .= '
                <tr>
                 <td><span>' . self::esc($model['commande_id']) . ' </span></td>
                 <td><span>' . self::esc($model['libelle_articles']) . ' </span></td>
                 <td><span>' . self::esc($model['noms_clients']) . ' </span></td>
                 <td><span>' . self::esc($model['statut_factures']) . ' </span></td>
                 <td><span>' . self::esc($model['quantite_facture_lignes']) . ' </span></td>
                 <td><span>' . Helpers::formatMoney($model['prix_unitaire_facture_lignes']) . ' </span></td>
                 <td><span>' . self::esc($model['tva_factures'] ?? '') . ' </span></td>
                 <td><span>' . self::esc($model['reference_facture_lignes']) . ' </span></td>
                 <td><span>' . Helpers::formatMoney($model['montant_total_facture_lignes'] ?? 0) . ' </span></td>
                 <td><span>' . self::esc($model['description_facture_lignes']) . ' </span></td>
              </tr>
            ';
        }

        return $ret;
    }
    public static function LayoutListFactures(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            if ($model['valide_factures'] == 'false') {
                $txtColor = "text-danger";
                $txt = "Facture en attante de validation";
            } else {
                $txtColor = "text-success";
                $txt = "Facture validée";
            }
            $taux =    (floatval($model['taux']));
            $ret .= '
                <tr>
                   <td><a href="' . CoreHelpers::url('commandes/detail/' . $model['commande_id_factures'] . '') . '" class="fw-bolder text-primary"  >' . self::esc($model['reference_commandes']) . ' </a></td>
                      <td><span>' . self::esc($model['reference_factures']) . ' </span></td>

                          <td><span>' . Helpers::formatMoney($model['mttc']) . ' </span></td>
                          <td><span>' .  Helpers::formatMoney($model['mpc']) . ' </span></td>
                          <td><span>' .  Helpers::formatMoney($model['reste']) . ' </span></td>
                            <td><span>' . self::esc($taux) . ' % </span></td>
                      <td><a href="' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id_commandes'] . '') . '" class="fw-bolder text-primary"  >' . self::esc(Helpers::getAcronym($model['noms_clients'])) . ' </a></td>

                  <td><span class="fw-bolder ' . $txtColor . '">' . $txt . ' </span></td>
                 <td class="text-end">
                                        <div class="actions ">
                                            <a href="' . CoreHelpers::url('factures/detail/' . $model['facture_id']) . '"
                                                class="btn btn-sm bg-success-light me-2 ">
                                                <i class="feather-eye"></i>
                                            </a>
                                         <a href="' . CoreHelpers::url('factures/facture-action/update/' . $model['facture_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                           <i class="feather-edit"></i>
                                            </a>
                                        </div>
                                    </td>
              </tr>
            ';
        }

        return $ret;
    }


    public static function LayoutListLigneFactures(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            if ($model['statut_factures'] == 'non payée') {
                $txtColor = "text-danger";
            } else  if ($model['statut_factures'] == 'partiellement payée') {
                $txtColor = "text-warning";
            } else {
                $txtColor = "text-success";
            }
            $ret .= '
                <tr>

                    <td><a href="' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id_commandes'] . '') . '" class="fw-bolder text-primary"  >' . self::esc(Helpers::getAcronym($model['noms_clients'])) . ' </a></td>
                 <td><span>' . self::esc($model['libelle_articles']) . ' </span></td>
                  <td><span>' . self::esc($model['type_articles']) . ' </span></td>
                   <td><span class="fw-bolder ' . $txtColor . '">' . self::esc($model['statut_factures']) . ' </span></td>
                      <td><span>' . self::esc($model['quantite_facture_lignes']) . ' </span></td>
                    <td><span>' . Helpers::formatMoney($model['prix_unitaire_facture_lignes']) . ' </span></td>
                    <td><span>' . self::esc($model['tva_factures'] ?? '') . ' </span></td>
                   <td><span>' . Helpers::formatMoney($model['montant_total_facture_lignes'] ?? 0) . ' </span></td>
                   <td><span>' . self::esc($model['reference_facture_lignes']) . ' </span></td>
                 <td class="text-end">
                                        <div class="actions ">
                                            <a href="' . CoreHelpers::url('factureLignes/detail/' . $model['ligne_id']) . '"
                                                class="btn btn-sm bg-success-light me-2 ">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a href="#" class="btn btn-sm bg-danger-light">
                                                <i class="feather-edit"></i>
                                            </a>
                                        </div>
                                    </td>    
              </tr>
            ';
        }





        return $ret;
    }
    public static function LayoutListLivraisons(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            $ret .= '
                <tr>
                  <td>  <a href="' . CoreHelpers::url('commandes/detail/' . $model['commande_id'] . '') . '" class="fw-bolder text-primary"  >' . self::esc($model['reference_commandes']) . ' </a></td>
                  <td><a href="' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id_commandes'] . '') . '" class="fw-bolder text-primary"  >' . self::esc(Helpers::getAcronym($model['noms_clients'])) . ' </a></td>
                 <td><span>' . self::esc($model['libelle_articles']) . ' </span></td>

                 <td><span>' . self::esc($model['date_commandes']) . ' </span></td>
                 <td><span>' . self::esc($model['noms_personnelles']) . ' </span></td>
                <td><span>' . self::esc($model['telephone_personnelles']) . ' </span></td>
                 <td><span>' . self::esc($model['email_personnelles']) . ' </span></td>
                 <td><span>' . self::esc($model['etat_livraisons']) . ' </span></td>
                 <td class="text-end">
                                   
                                        <div class="actions ">
                                           <a href="' . CoreHelpers::url('livraisons/livraison-action/detail/' . $model['livraison_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a href="' . CoreHelpers::url('livraisons/livraison-action/update/' . $model['livraison_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-edit"></i>
                                            </a>
                                        </div>
                                    </td>
              </tr>
            ';
        }

        return $ret;
    }
    public static function LayoutListTransporteur(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            $expiration = $model['date_expiration_permis_personnelles'] ?? null;
            if ($expiration && $expiration <= date('Y-m-d')) {
                $permisBadge = '<span class="badge bg-danger">Permis expiré (' . self::esc($expiration) . ')</span>';
            } elseif ($expiration && $expiration <= date('Y-m-d', strtotime('+30 days'))) {
                $permisBadge = '<span class="badge bg-warning">Expire le ' . self::esc($expiration) . '</span>';
            } elseif ($expiration) {
                $permisBadge = self::esc($expiration);
            } else {
                $permisBadge = '<span class="text-muted">-</span>';
            }
            $ret .= '
                <tr>
                 <td><span>' . self::esc($model['noms_personnelles']) . ' </span></td>
                 <td><span>' . self::esc($model['email_personnelles']) . ' </span></td>
                 <td><span>' . self::esc($model['telephone_personnelles']) . ' </span></td>
                 <td><span>' . self::esc($model['poste_personnelles']) . ' </span></td>
                 <td><span>' . self::esc($model['matricule_personnelles'] ?? '') . ' </span></td>
                 <td>' . $permisBadge . '</td>

                                        <td class="text-end">
                                        <div class="actions ">
                                           <a href="' . CoreHelpers::url('personnelle/transporteur-action/detail/' . $model['personnelle_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a  href="' . CoreHelpers::url('personnelle/transporteur-action/update/' . $model['personnelle_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-edit"></i>
                                            </a>
                                        </div>
                                    </td>
                
           
            </tr>
            ';
        }

        return $ret;
    }
    public static function LayoutListPaiement(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            $ret .= '
                <tr>
                 <td><a href="' . CoreHelpers::url('commandes/detail/' . $model['commande_id_factures'] . '') . '" class="fw-bolder text-primary"  >' . self::esc($model['reference_commandes']) . ' </a></td>
                      <td><span>' . self::esc($model['reference_factures']) . ' </span></td>



                                         <td><a href="' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id_commandes'] . '') . '" class="fw-bolder text-primary"  >' . self::esc(Helpers::getAcronym($model['noms_clients'])) . ' </a></td>
                 <td><span>' . self::esc($model['date_paiements']) . ' </span></td>
                 <td><span>' . Helpers::formatMoney($model['montant_paiements']) . ' </span></td>
                 <td><span>' . self::esc($model['mode_paiements']) . ' </span></td>
                 
              </tr>
            ';
        }

        return $ret;
    }

    public static function LayoutListFactureParCommande(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            $ret .= '
                <tr>
                 <td><span>' . self::esc($model['reference_factures']) . ' </span></td>
                 <td><span>' . self::esc($model['libelle_factures']) . ' </span></td>
                 <td><span>' . self::esc($model['statut_factures']) . ' </span></td>
                 <td class="text-end">
                      <a href="' . CoreHelpers::url('factures/detail/' . $model['facture_id']) . '"
                        class="btn btn-sm bg-success-light me-2 ">
                        <i class="feather-eye"></i>
                          </a>
                 </td>
              </tr>
            ';
        }

        return $ret;
    }

    public static function navStyle()
    {
        $data = Helpers::layoutState();
        $ret = '<div class="row">
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Total Comandes</h6>
                                        <h3>' .  $data['commande'] . '</h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="assets/img/icons/teacher-icon-01.svg" alt="Dashboard Icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Total Factures</h6>
                                        <h3>' .  $data['facture'] . '</h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="assets/img/icons/teacher-icon-02.svg" alt="Dashboard Icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Facture en attente de paiement</h6>
                                        <h3>' .  $data['facture_impayer'] . '</h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="assets/img/icons/student-icon-01.svg" alt="Dashboard Icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Total Facture / Facture payée</h6>
                                        <h3><span class="text-danger">' . $data['facture'] . '</span> / <span class="text-success">' . $data['facture_payer'] . '</span> </h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="assets/img/icons/student-icon-02.svg" alt="Dashboard Icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="card invoices-tabs-card border-0">
        <div class="card-body card-body pt-0 pb-0">
            <div class="invoices-main-tabs">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-md-8">
                        <div class="invoices-tabs">
                            <ul>
                                <li><a href="' . CoreHelpers::url('commandes') . '" class="active">Commandes</a></li>
                                <li><a href="' . CoreHelpers::url('factures') . '" >Factures</a></li>
                                <li><a href="' . CoreHelpers::url('clients') . ' ">Clients</a></li>
                                <li><a href="' . CoreHelpers::url('articles') . ' ">Articles</a></li>
                                <li><a href="' . CoreHelpers::url('livraisons') . ' ">Livraisons</a></li>
                                <li><a href="' . CoreHelpers::url('paiements') . '">Paiements</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="invoices-settings-btn">
                         <a href="' . CoreHelpers::url('commandes/commande-action/add/null') . '"   class="btn">
                                                <i class="feather feather-plus-circle"></i> New Commande
                                            </a>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                ';

        return $ret;
    }

    public static function navStyleClient($data)
    {

        $ret = '<div class="row">
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Total Comandes</h6>
                                        <h3>' .  $data['commande'] . '</h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="../../assets/img/icons/teacher-icon-01.svg" alt="Dashboard Icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Total Factures</h6>
                                        <h3>' .  $data['facture'] . '</h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="../../assets/img/icons/teacher-icon-02.svg" alt="Dashboard Icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Facture en attente de paiement</h6>
                                        <h3>' .  $data['facture_impayer'] . '</h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="../../assets/img/icons/student-icon-01.svg" alt="Dashboard Icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Total Facture / Facture payée</h6>
                                        <h3><span class="text-danger">' . $data['facture'] . '</span> / <span class="text-success">' . $data['facture_payer'] . '</span> </h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="../../assets/img/icons/student-icon-02.svg" alt="Dashboard Icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>';

        return $ret;
    }

    public static function LayoutListFacturesFromClient(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            if ($model['valide_factures'] == 'false') {
                $txtColor = "text-danger";
                $txt = "Facture en attante de validation";
            } else {
                $txtColor = "text-success";
                $txt = "Facture validée";
            }
            $taux = (($model['taux']));
            $ret .= '
                <tr>
                   <td><a href="' . CoreHelpers::url('commandes/detail/' . $model['commande_id_factures'] . '') . '" class="fw-bolder text-primary"  >' . self::esc($model['reference_commandes']) . ' </a></td>
                      <td><span>' . self::esc($model['reference_factures']) . ' </span></td>

                          <td><span>' . Helpers::formatMoney($model['mttc']) . ' </span></td>
                          <td><span>' .  Helpers::formatMoney($model['mpc']) . ' </span></td>
                          <td><span>' .  Helpers::formatMoney($model['reste']) . ' </span></td>
                            <td><span>' . self::esc($taux) . ' % </span></td>


                  <td><span class="fw-bolder ' . $txtColor . '">' . $txt . ' </span></td>
                 <td class="text-end">
                                        <div class="actions ">
                                            <a href="' . CoreHelpers::url('factures/detail/' . $model['facture_id']) . '"
                                                class="btn btn-sm bg-success-light me-2 ">
                                                <i class="feather-eye"></i>
                                            </a>
                                         <a href="' . CoreHelpers::url('factures/facture-action/update/' . $model['facture_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                           <i class="feather-edit"></i>
                                            </a>
                                            <a href="' . CoreHelpers::url('paiements/paiement-action/add/' . $model['facture_id'] . '') . '"   class="btn btn-sm bg-success-light me-2">
                                           <i class="feather-credit-card"></i>
                                            </a>

                                             <a  class="btn btn-sm bg-success-light me-2">
                                           <i class="fa fa-print"></i>
                                            </a>
                                        </div>
                                    </td>
              </tr>
            ';
        }

        return $ret;
    }
}
