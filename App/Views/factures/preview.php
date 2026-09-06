{% extends "base.php" %}

{% block title %} Gestion des lignes de factures {% endblock %}

{% block body %}
<script>
    var facture = {'facuteId': "{{facture['facture_id']}}" };
</script>
<div class="content container-fluid">
    <div class="row justify-content-center">

        <div class="col-xl-10">

            <div class="card invoice-info-card">
                <div class="card-body">
                    <div class="invoice-item invoice-item-one">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="invoice-logo">
                                    <img src="{{base_url()}}/assets/img/logo-bsms/logo.png" alt="logo">
                                </div>
                                <div class="invoice-head">
                                    <h2>Facture</h2>
                                    <p>Numéro Facture : {{factureLigne['reference_facture_lignes']}} <button id="pritFacture" class="btn btn-warning" data-factureId="{{facture['facture_id']}}"><i class="fa fa-print"></i></button></p>

                                </div>
                            </div>
                            <div class="col-md-3">
                                <img src="../../../public/assets/img/qr/{{facture['facture_id']}}.png" alt="{{facture['facture_id']}}" class="img-responsive">
                            </div>
                            <div class="col-md-4">
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
                                    <h6 class="invoice-name">{{facture['noms_clients']}}</h6>
                                    <p class="invoice-details invoice-details-two">
                                        {{facture['telephone_clients']}} <br>
                                        <a href="mailto: {{facture['email_clients']}} "> {{facture['email_clients']}} </a><br>
                                        {{facture['rue_addresses']}} , <br>
                                        BP {{facture['code_postal_addresses']}} , {{facture['ville_addresses']}} - {{facture['pays_addresses']}}
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="invoice-info invoice-info2">
                                    <strong class="customer-text-one">Paiement Details</strong>
                                    {%if facture['statut_factures']=='payée' %}
                                    <h6 class="invoice-name text-success">Montant payer : {{paiements['montant_paiements'] | number_format  }} GNF </h6>
                                    <h6 class="invoice-name text-success">Date paiement : {{paiements['date_paiements'] | date('d/m/Y')}} </h6>
                                    {%else %}
                                    <h4 class="invoice-name text-danger">Cette facture n'est pas encore payée</h4>
                                    <p> <a href="#" onclick="return NioApp.loadModal({url:'{{ "paiements/paiement-action/add/#{facture['facture_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addPaiement(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-danger text-white fw-bolder">
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
                            <div class="col-lg-6 col-md-6">
                                <div class="invoice-issues-date">
                                    <p class="text-dark  fw-bolder fs-15"> Date d'émission : {{facture['date_emission_factures'] | date('d/m/Y') }} </p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="invoice-issues-date">
                                    <p class="text-dark  fw-bolder fs-15">Date d'échéance : {{facture['date_echeance_factures'] | date('d/m/Y')}} </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="invoice-item invoice-table-wrap">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-center add-table-items">
                                        <thead>
                                            <tr>
                                                <th>Article</th>

                                                <th>Quantite</th>
                                                <th>Prix</th>
                                                <th>Type de Pointage</th>

                                                <th>Total index </th>
                                                <th>Montant Total </th>



                                            </tr>
                                        </thead>
                                        <tbody>


                                            {% for produit in factureLignes[0] %}
                                            <tr>
                                                <td>{{produit['libelle_articles']}}</td>
                                                <td>{{produit['quantite_facture_lignes']}}</td>
                                                <th>{{produit['prix_unitaire_facture_lignes'] | number_format }} GNF</th>
                                                <td>{{produit['type_pointagefacture_lignes']}}</td>

                                                <td>{{produit['SumIndex']}}</td>
                                                <td>{{produit['montantFactureLigne'] | number_format }}</td>


                                            </tr>
                                            {%endfor%}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <h6 class="mb-2">Type de Paiement:</h6>
                            {%if facture['statut_factures']=='payée' %}
                            <div class="invoice-terms">
                                <p class="mb-2 fw-bolder"><span>Espèce</span>&nbsp;<input type="checkbox" {%if paiements['mode_paiements']=="Espèce" %} checked {%endif%}></p>
                                <p class="mb-2 fw-bolder"><span>Chèque</span>&nbsp;<input type="checkbox" {%if paiements['mode_paiements']=="Chèque" %} checked {%endif%}></p>
                                <p class="mb-2 fw-bolder"><span>Virement</span>&nbsp;<input type="checkbox" {%if paiements['mode_paiements']=="Virement" %} checked {%endif%}></p>
                            </div>
                            {%else %}
                            <h4 class="invoice-name text-danger">Cette facture n'est pas encore payée</h4>
                            <p> <a href="#" onclick="return NioApp.loadModal({url:'{{ "paiements/paiement-action/add/#{facture['facture_id']}" | url }}',afterLoad:function(myModal){ UGEST.facturation.addPaiement(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-danger text-white fw-bolder">
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
                                        <p>Montant : <span>{{factureLignes['montantFacture'] | number_format }} GNF</span></p>
                                        <p>Montant TVA : <span>{{factureLignes['montantTva'] | number_format }} GNF</span></p>

                                    </div>
                                    <div class="invoice-total-footer">
                                        <h4>Montant TTC <span>{{ factureLignes['montantTTC'] | number_format }} GNF</span></h4>
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