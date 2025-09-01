<?php

namespace App\Views\layouts;

use App\Utils\Helpers;
use Core\Helpers as CoreHelpers;

class layout
{
    public static function select(array $model)
    {
        $ret = '';
        for ($i = 0; $i < count($model); $i++) {
            $ret .= '<option value="' . $model[$i] . '">' . $model[$i] . '</option>';
        }
        return $ret;
    }
    public static function LayoutListArticles(array $models)
    {
        $ret = '';
        foreach ($models as $model) {
            $ret .= '
                <tr>
                 <td><span>' . $model['libelle_articles'] . ' </span></td>
                 <td><span>' . $model['marque_articles'] . ' </span></td>
                 <td><span>' . $model['type_articles'] . ' </span></td>
                 <td><span>' . $model['quantite_articles'] . ' </span></td>
                 <td><span>' . $model['cathegorie_articles'] . ' </span></td>
                  <td class="text-end">
                                     
                                        <div class="actions ">
                                           <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('articles/article-action/detail/' . $model['article_id'] . '/' . $model['type_articles'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addArticle(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('articles/article-action/update/' . $model['article_id'] . '/' . $model['type_articles'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addArticle(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
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
                  <td><a a href="#" onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})" class="fw-bolder text-primary"  >' . Helpers::getAcronym($model['noms_clients']) . ' </a></td>

                 <td><a href="mailto:' . $model['email_clients'] . '">' . $model['email_clients'] . ' </a></td>
                 <td><span>' . $model['telephone_clients'] . ' </span></td>
                 <td><span>' . $model['type_addresses'] . ' </span></td>
                 <td><span>' . $model['rue_addresses'] . ' </span></td>
                 <td><span>' . $model['ville_addresses'] . ' </span></td>
                 <td><span>' . $model['code_postal_addresses'] . ' </span></td>
                 <td><span>' . $model['pays_addresses'] . ' </span></td>
                                    <td class="text-end">
                                        <div class="actions ">
                                           <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('addresses/addresse-action/detail/' . $model['adresse_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addAddresse(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('addresses/addresse-action/update/' . $model['adresse_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addAddresse(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
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
                 <td><span>' . $model['noms_clients'] . ' </span></td>
                 <td><span>' . $model['email_clients'] . ' </span></td>
                 <td><span>' . $model['telephone_clients'] . ' </span></td>
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
                 <td><span class="fw-bolder">' . $model['reference_commandes'] . ' </span></td>
                 <td><span>' . ($model['date_commandes']) . ' </span></td>
                   <td><span>' . Helpers::formatMoney($model['mttc']) . '  </span></td>
                     <td><span>' . Helpers::formatMoney($model['mpc']) . '  </span></td>
                       <td><span>' . Helpers::formatMoney($model['reste']) . '  </span></td>
                         <td><span>' . $model['taux'] . '  </span></td>
                        <td><a a href="#" onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id_commandes'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})" class="fw-bolder text-primary"  >' . Helpers::getAcronym($model['noms_clients']) . ' </a></td>
                 <td><span class="fw-bolder ' . $textColor . '">' . $model['etat_commandes'] . ' </span></td>
               
                  <td class="text-end">
                     <div class="actions ">
                        <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('commandes/detail/' . $model['commande_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                               
                                             <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('commandes/commande-action/update/' . $model['commande_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addCommande(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-edit"></i>
                                            </a>
                                            
                                        </div>
                                    </td>
                
                </tr>
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
                 <td><span>' . $model['commande_id'] . ' </span></td>
                 <td><span>' . $model['libelle_articles'] . ' </span></td>
                 <td><span>' . $model['noms_clients'] . ' </span></td>
                 <td><span>' . $model['statut_factures'] . ' </span></td>
                 <td><span>' . $model['quantite_facture_lignes'] . ' </span></td>
                 <td><span>' . Helpers::formatMoney($model['prix_unitaire_facture_lignes']) . ' </span></td>
                 <td><span>' . $model['taux_tva_facture_lignes'] . ' </span></td>
                 <td><span>' . $model['reference_facture_lignes'] . ' </span></td>
                 <td><span>' . Helpers::formatMoney($model['montant_ttc_facture_lignes']) . ' </span></td>
                 <td><span>' . $model['description_facture_lignes'] . ' </span></td>
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
            $taux = number_format(floatval($model['taux']), 2);
            $ret .= '
                <tr>
                   <td><a href="#" onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('commandes/detail/' . $model['commande_id_factures'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})" class="fw-bolder text-primary"  >' . $model['reference_commandes'] . ' </a></td>
                      <td><span>' . $model['reference_factures'] . ' </span></td>
            
                          <td><span>' . Helpers::formatMoney($model['mttc']) . ' </span></td>
                          <td><span>' .  Helpers::formatMoney($model['mpc']) . ' </span></td>
                          <td><span>' .  Helpers::formatMoney($model['reste']) . ' </span></td>
                            <td><span>' . $taux . ' % </span></td>
                      <td><a a href="#" onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id_commandes'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})" class="fw-bolder text-primary"  >' . Helpers::getAcronym($model['noms_clients']) . ' </a></td>
                
                  <td><span class="fw-bolder ' . $txtColor . '">' . $txt . ' </span></td>
                 <td class="text-end">
                                        <div class="actions ">
                                            <a href="' . CoreHelpers::url('factures/detail/' . $model['facture_id']) . '"
                                                class="btn btn-sm bg-success-light me-2 ">
                                                <i class="feather-eye"></i>
                                            </a>
                                         <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('factures/facture-action/update/' . $model['facture_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
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

                    <td><a a href="#" onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id_commandes'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})" class="fw-bolder text-primary"  >' . Helpers::getAcronym($model['noms_clients']) . ' </a></td>
                 <td><span>' . $model['libelle_articles'] . ' </span></td>
                  <td><span>' . $model['type_articles'] . ' </span></td>
                   <td><span class="fw-bolder ' . $txtColor . '">' . $model['statut_factures'] . ' </span></td>
                      <td><span>' . $model['quantite_facture_lignes'] . ' </span></td>
                    <td><span>' . Helpers::formatMoney($model['prix_unitaire_facture_lignes']) . ' </span></td>
                    <td><span>' . $model['taux_tva_facture_lignes'] . ' </span></td>
                   <td><span>' . Helpers::formatMoney($model['montant_ttc_facture_lignes']) . ' </span></td>
                   <td><span>' . $model['reference_facture_lignes'] . ' </span></td>
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
                  <td>  <a href="#" onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('commandes/detail/' . $model['commande_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})" class="fw-bolder text-primary"  >' . $model['reference_commandes'] . ' </a></td>
                  <td><a a href="#" onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id_commandes'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})" class="fw-bolder text-primary"  >' . Helpers::getAcronym($model['noms_clients']) . ' </a></td>
                 <td><span>' . $model['libelle_articles'] . ' </span></td>
               
                 <td><span>' . $model['date_commandes'] . ' </span></td>
                 <td><span>' . $model['noms_personnelles'] . ' </span></td>
                <td><span>' . $model['telephone_personnelles'] . ' </span></td>
                 <td><span>' . $model['email_personnelles'] . ' </span></td>
                 <td><span>' . $model['etat_livraisons'] . ' </span></td>
                 <td class="text-end">
                                   
                                        <div class="actions ">
                                           <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('livraisons/livraison-action/detail/' . $model['livraison_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addLivraison(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('livraisons/livraison-action/update/' . $model['livraison_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addLivraison(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
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
            $ret .= '
                <tr>
                 <td><span>' . $model['noms_personnelles'] . ' </span></td>
                 <td><span>' . $model['email_personnelles'] . ' </span></td>
                 <td><span>' . $model['telephone_personnelles'] . ' </span></td>
                 <td><span>' . $model['poste_personnelles'] . ' </span></td>
           
                                        <td class="text-end">
                                        <div class="actions ">
                                           <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('personnelle/transporteur-action/detail/' . $model['personnelle_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addTransporteur(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a  onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('personnelle/transporteur-action/update/' . $model['personnelle_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addTransporteur(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
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
                 <td><a href="#" onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('commandes/detail/' . $model['commande_id_factures'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})" class="fw-bolder text-primary"  >' . $model['reference_commandes'] . ' </a></td>
                      <td><span>' . $model['reference_factures'] . ' </span></td>
              
           
                                         <td><a a href="#" onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('clients/client-action/detail/' . $model['client_id_commandes'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})" class="fw-bolder text-primary"  >' . Helpers::getAcronym($model['noms_clients']) . ' </a></td>
                 <td><span>' . $model['date_paiements'] . ' </span></td>
                 <td><span>' . Helpers::formatMoney($model['montant_paiements']) . ' </span></td>
                 <td><span>' . $model['mode_paiements'] . ' </span></td>  
                 
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
                 <td><span>' . $model['reference_factures'] . ' </span></td>
                 <td><span>' . $model['libelle_factures'] . ' </span></td>
                 <td><span>' . $model['statut_factures'] . ' </span></td>
                 <td class="text-end">
                      <a href="' . CoreHelpers::url('factures/detail/' . $model['facture_id']) . '"
                        class="btn btn-sm bg-success-light me-2 ">
                        <i class="feather-eye"></i>
                          </a>                         
                 </div>
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
                         <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('commandes/commande-action/add/null') . '\',afterLoad:function(myModal){UGEST.facturation.addCommande(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn">
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
            $taux = number_format(floatval($model['taux']), 2);
            $ret .= '
                <tr>
                   <td><a href="#" onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('commandes/detail/' . $model['commande_id_factures'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})" class="fw-bolder text-primary"  >' . $model['reference_commandes'] . ' </a></td>
                      <td><span>' . $model['reference_factures'] . ' </span></td>
            
                          <td><span>' . Helpers::formatMoney($model['mttc']) . ' </span></td>
                          <td><span>' .  Helpers::formatMoney($model['mpc']) . ' </span></td>
                          <td><span>' .  Helpers::formatMoney($model['reste']) . ' </span></td>
                            <td><span>' . $taux . ' % </span></td>
                    
                
                  <td><span class="fw-bolder ' . $txtColor . '">' . $txt . ' </span></td>
                 <td class="text-end">
                                        <div class="actions ">
                                            <a href="' . CoreHelpers::url('factures/detail/' . $model['facture_id']) . '"
                                                class="btn btn-sm bg-success-light me-2 ">
                                                <i class="feather-eye"></i>
                                            </a>
                                         <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('factures/facture-action/update/' . $model['facture_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addFacture(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
                                           <i class="feather-edit"></i>
                                            </a>
                                             </a>
                                            <a onclick="return NioApp.loadModal({url:\'' . CoreHelpers::url('paiements/paiement-action/add/' . $model['facture_id'] . '') . '\',afterLoad:function(myModal){UGEST.facturation.addPaiement(myModal)}},{hi:this,type:\'modal-lg\'})"   class="btn btn-sm bg-success-light me-2">
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
