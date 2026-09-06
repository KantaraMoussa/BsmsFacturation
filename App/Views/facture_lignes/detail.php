{% extends "base.php" %}

{% block title %} Gestion des lignes de factures {% endblock %}

{% block body %}
<div class="content container-fluid">
    <div class="row justify-content-center">
      
        <div class="col-xl-10">
             
            <div class="card invoice-info-card">
                <div class="card-body">
                    <div class="invoice-item invoice-item-one">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="invoice-logo">
                                    <img src="{{base_url()}}/assets/img/logo-bsms/logo.png" alt="logo">
                                </div>
                                <div class="invoice-head">
                                    <h2>Facture</h2>
                                    <p>Numéro Facture : {{factureLigne['reference_facture_lignes']}} <button id="pritFacture"  class="btn btn-warning"><i class="fa fa-print"></i></button></p>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="invoice-info">
                                    <strong class="customer-text-one">Emis par : </strong>
                                    <h6 class="invoice-name">{{entreprise['name']|raw}}</h6>
                                    <p class="invoice-details">
                                        {{entreprise['telephone']}} <br>
                                        <a href="mailto:{{entreprise['email']}}">{{entreprise['email']}}</a><br>
                                        {{entreprise['BP']}} , {{entreprise['ville']}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="invoice-item invoice-item-two">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="invoice-info">
                                    <strong class="customer-text-one">Facturé à</strong>
                                    <h6 class="invoice-name">{{factureLigne['noms_clients']}}</h6>
                                    <p class="invoice-details invoice-details-two">
                                        {{factureLigne['telephone_clients']}} <br>
                                        <a href="mailto: {{factureLigne['email_clients']}} "> {{factureLigne['email_clients']}} </a><br>
                                        {{factureLigne['rue_addresses']}} , <br>
                                        BP {{factureLigne['code_postal_addresses']}} , {{factureLigne['ville_addresses']}} - {{factureLigne['pays_addresses']}}
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="invoice-info invoice-info2">
                                    <strong class="customer-text-one">Paiement Details</strong>
                                    {%if paiement['montant_paiements'] %}
                                    <h6 class="invoice-name text-danger">Montant payer : {{paiement['montant_paiements'] | number_format  }} GNF </h6>
                                    <h6 class="invoice-name text-danger">Date paiement : {{paiement['date_paiements'] | date('d/m/Y')}} </h6>
                                    {%else %}
                                    <h4 class="invoice-name text-danger">Cette facture n'est pas encore payée</h4>
                                    <p> <a href="#" onclick="return NioApp.loadModal({url:'{{ "paiements/paiement-action/add/#{factureLigne['ligne_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addPaiement(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-danger text-white fw-bolder">
                                            <i class="fas fa-plus"></i>&nbsp;Procedé au paiement</a></p>

                                    {% endif %}
                                    <div class="invoice-item-box">
                                        <p class="mb-0">{{entreprise['numerodeCompte']}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="invoice-issues-box bg-warning ">
                        <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <div class="invoice-issues-date">
                                    <p class="text-dark  fw-bolder"> Date d'émission : {{factureLigne['date_emission_factures'] | date('d/m/Y') }} </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="invoice-issues-date">
                                    <p class="text-dark  fw-bolder">Date d'échéance : {{factureLigne['date_echeance_factures'] | date('d/m/Y')}} </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="invoice-issues-date">
                                    <p class="text-dark  fw-bolder">Montant dû : {{factureLigne['montant_ttc_facture_lignes'] | number_format }} GNF </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="invoice-item invoice-table-wrap">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive" id="dataTable">
                                    <table class="invoice-table table table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Article</th>
                                                <th>Description</th>
                                                <th>Quantite</th>
                                                <th>Prix</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{{factureLigne['libelle_articles']}}</td>
                                                <td>{{factureLigne['description_facture_lignes']}}</td>
                                                <td>{{factureLigne['quantite_facture_lignes']}}</td>
                                                <th>{{factureLigne['prix_unitaire_facture_lignes'] | number_format }}</th>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <h6 class="mb-2">Type de Paiement:</h6>
                            {%if paiement['montant_paiements'] %}
                            <div class="invoice-terms">
                                <p class="mb-2 fw-bolder"><span>Espèce</span>&nbsp;<input type="checkbox" {%if paiement['mode_paiements']=="Espèce" %} checked {%endif%}></p>
                                <p class="mb-2 fw-bolder"><span>Chèque</span>&nbsp;<input type="checkbox" {%if paiement['mode_paiements']=="Chèque" %} checked {%endif%}></p>
                                <p class="mb-2 fw-bolder"><span>Virement</span>&nbsp;<input type="checkbox" {%if paiement['mode_paiements']=="Virement" %} checked {%endif%}></p>
                            </div>
                            {%else %}
                            <h4 class="invoice-name text-danger">Cette facture n'est pas encore payée</h4>
                            <p> <a href="#" onclick="return NioApp.loadModal({url:'{{ "paiements/paiement-action/add/#{factureLigne['ligne_id']}" | url }}',afterLoad:function(myModal){ UGEST.facturation.addPaiement(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-danger text-white fw-bolder">
                                    <i class="fas fa-plus"></i>&nbsp;Procedé au paiement</a></p>

                            {% endif %}
                            <hr>
                            <div class="invoice-terms">
                                <h6>Nous apprécions votre clientèle</h6>
                                <p class="mb-0">
                                    Si vous-avez des questions sur cette facture,
                                    n'hésitez pas à nous contacter.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="invoice-total-card">
                                <div class="invoice-total-box">
                                    <div class="invoice-total-inner">
                                        <p>Montant : <span>{{factureLigne['montant_total_facture_lignes'] | number_format }} GNF</span></p>
                                        <p>Taux TVA : <span>{{factureLigne['taux_tva_facture_lignes']}}</span></p>
                                        <p>Montant TVA : <span>{{factureLigne['montant_tva_facture_lignes'] | number_format }} GNF</span></p>

                                    </div>
                                    <div class="invoice-total-footer">
                                        <h4>Montant TTC <span>{{factureLigne['montant_ttc_facture_lignes'] | number_format }} GNF</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="invoice-sign text-end">
                        <img class="img-fluid d-inline-block" src="{{base_url()}}assets/img/cachet.png" alt="sign">
                        <span class="d-block">Ibrahima CAMARA</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


{% endblock %}