{% extends "base.php" %}

{% block title %} Gestion des Commandes {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header invoices-page-header">
        <div class="row align-items-center">
            <div class="col">
                {% if facture['valide_factures']== 'true'  or facture['statut_factures']== 'payée' %}
                <a class="btn btn-success" href="{{"factures/detail/preview/#{facture['facture_id']}" | url}}"><i class="fe fe-eye"></i> Prévisualiser </a>
                {%endif%}

                {%if role_utilisateur=='admin' and facture['statut_factures']!= 'payée' and facture['valide_factures'] != 'true' %}
                <a onclick="return NioApp.loadModal({url:'{{ "factureLignes/factureLigne-action/validate/#{facture['facture_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addFactureLigne(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-danger">
                    Valider la facture
                </a>
                {%endif%}
            </div>
            <div class="col-auto">
                <div class="invoices-create-btn">
                    {% if facture['statut_factures']!= 'payée' and facture['valide_factures']== 'false' %}
                    <a onclick="return NioApp.loadModal({url:'{{ "factureLignes/factureLigne-action/add/#{facture['facture_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addFactureLigne(myModal)}},{hi:this,type:'modal-lg'})" class="btn save-invoice-btn  btn-warning">
                        Ajouté articles
                    </a>
                    {%endif%}
                </div>
            </div>
        </div>

    </div>
    <div class="row">
        {% if facture['statut_factures'] == 'payée' %}
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Bonne nouvelle !</strong> Cette facture à été completement payée
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        {% endif %}
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="card invoices-add-card">
                <div class="card-body">
                    <form action="#" class="invoices-form">
                        <div class="invoices-main-form">
                            <div class="row">
                                <div class="col-xl-4 col-md-6 col-sm-12 col-12">
                                    <h4 class="invoice-details-title">Moyen de paiement</h4>
                                    <label class="custom_check w-100">
                                        <input type="checkbox" id="enableTax" name="invoice" {%if paiements['mode_paiements']=="Espèce" %} checked {%endif%}>
                                        <span class="checkmark"></span> Espèce
                                    </label>
                                    <label class="custom_check w-100">
                                        <input type="checkbox" id="chkYes" name="invoice" {%if paiements['mode_paiements']=="Chèque" %} checked {%endif%}>
                                        <span class="checkmark"></span> Chèque
                                    </label>
                                    <label class="custom_check w-100">
                                        <input type="checkbox" id="chkYes" name="invoice" {%if paiements['mode_paiements']=="Virement" %} checked {%endif%}>
                                        <span class="checkmark"></span> Virement
                                    </label>
                                    <label> {{entreprise['numerodeCompte']}}</label>
                                </div>
                                <div class="col-xl-6 col-md-6 col-sm-12 col-12">
                                    <h4 class="invoice-details-title">facture details</h4>
                                    <div class="invoice-details-box">
                                        <div class="invoice-inner-head">
                                            <span>Facture No. <a
                                                    href="#"> {{facture['reference_factures']}} ({{facture['libelle_factures']}}) </a></span>
                                        </div>
                                        <div class="invoice-inner-footer">
                                            <div class="row align-items-center">
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="invoice-inner-date">
                                                        <span>
                                                            Date Emission <input class="form-control datetimepicker"
                                                                type="text" value=" {{facture['date_emission_factures']}}" disabled readonly>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="invoice-inner-date invoice-inner-datepic">
                                                        <span>
                                                            Date Echéance <input
                                                                class="form-control datetimepicker"
                                                                type="text" value=" {{facture['date_echeance_factures']}}" disabled readonly>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-2 col-md-12 col-sm-12 col-12">
                                    <div class="">
                                        <div class="form-group mb-0">
                                            <img src="../../public/assets/img/qr/{{facture['facture_id']}}.png" alt="{{facture['facture_id']}}" class="img-responsive">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="invoice-item">
                            <div class="row">
                                <div class="col-xl-4 col-lg-6 col-md-6">
                                    <div class="invoice-info">
                                        <strong class="customer-text">Emis par : </strong>
                                        <h6 class="invoice-name">{{entreprise['name']}}</h6>
                                        <p class="invoice-details invoice-details-two">
                                            {{entreprise['telephone']}} <br>
                                            <a href="mailto:{{entreprise['email']}}">{{entreprise['email']}}</a><br>
                                            {{entreprise['BP']}} , {{entreprise['ville']}}
                                        </p>

                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6">
                                    <div class="invoice-info">
                                        <strong class="customer-text-one">Facturé à</strong>
                                        <h6 class="invoice-name">{{facture['noms_clients']}}</h6>
                                        <p class="invoice-details invoice-details-two">
                                            {{facture['telephone_clients']}} <br>
                                            <a href="mailto: {{facture['email_clients']}} "> {{facture['email_clients']}} </a><br>
                                            {{facture['rue_addresses']}} , <br>
                                            BP {{facture['code_postal_addresses']}} , {{facture['ville_addresses']}} - {{facture['pays_addresses']}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="invoice-add-table mb-5">
                            <h4> Listes des Produits </h4>
                            <div class="table-responsive">
                                <table class="table table-center add-table-items" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>Article</th>

                                            <th>Quantite</th>
                                            <th>Prix</th>
                                            <th>Type de Pointage</th>
                                            <th>Début </th>
                                            <th>Fin </th>
                                            <th>Total index </th>
                                            <th>Montant Total </th>

                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>


                                        {% for produit in factureLignes[0] %}
                                        <tr>
                                            <td>{{produit['libelle_articles']}}</td>
                                            <td>{{produit['quantite_facture_lignes']}}</td>
                                            <th>{{produit['prix_unitaire_facture_lignes'] | number_format }} GNF</th>
                                            <td>{{produit['type_pointagefacture_lignes']}}</td>
                                            <td>{{produit['date_emission_factures'] | date('d/m/Y')}}</td>
                                            <td>{{produit['date_echeance_factures'] | date('d/m/Y')}}</td>
                                             <td>{{produit['SumIndex']}}</td>
                                              <td>{{produit['montantFactureLigne'] | number_format }}</td>
                                           
                                            <td>
                                                <a href="{{"factureLignes/detail/pointage/#{produit['ligne_id']}" | url}}" class="btn save-invoice-btn  btn-primary"> <i class="fas fa-eye"></i></a>&nbsp;
                                                {% if facture['statut_factures'] != 'payée' and facture['valide_factures'] != 'true' %}
                                                <a title="Faire une mise à jour" onclick="return NioApp.loadModal({url:'{{ "factureLignes/factureLigne-action/update/#{produit['ligne_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addFactureLigne(myModal)}},{hi:this,type:'modal-lg'})" class="btn save-invoice-btn  btn-warning">
                                                    <i class="fas fa-edit"></i></a>
                                                <a title="Supprimer l'article  sur la facture" onclick="return NioApp.loadModal({url:'{{ "factureLignes/factureLigne-action/delete/#{produit['ligne_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addFactureLigne(myModal)}},{hi:this,type:'modal-lg'})" class="btn save-invoice-btn  btn-danger">
                                                    <i class="fa fa-trash"></i></a>
                                                {% else %}
                                                <i class="fa fa-cog"></i>&nbsp;Aucune
                                                {% endif %}
                                            </td>
                                        </tr>
                                        {%endfor%}
                                    </tbody>
                                </table>
                            </div>
                            <div class="row mt-5">
                                <div class="col-lg-7 col-md-6">
                                    <div class="invoice-fields">
                                        <h6 class="field-title">Nous apprécions votre clientèle</h6>
                                        <div class="field-box">
                                            <p>
                                                Si vous-avez des questions sur cette facture,
                                                n'hésitez pas à nous contacter.
                                            </p>

                                        </div>
                                    </div>


                                </div>
                                <div class="col-lg-5 col-md-6">
                                    <div class="invoice-total-card">
                                        <div class="invoice-total-box">
                                            <div class="invoice-total-inner">
                                                <p>Montant : <span>{{factureLignes['montantFacture'] | number_format }} GNF</span></p>
                                                <p>Montant TVA : <span>{{factureLignes['montantTva'] | number_format }} GNF</span></p>

                                            </div>
                                            <div class="invoice-total-footer">
                                                <h4>Montant TTC <span>{{ factureLignes['montantTTC'] | number_format }} GNF</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="invoice-sign text-end">
                                    <img class="img-fluid d-inline-block" src="{{base_url()}}assets/img/cachet.png" alt="sign">
                                    <span class="d-block">Ibrahima CAMARA</span>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

{% endblock %}