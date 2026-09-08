{% extends "base.php" %}

{% block title %} Facture ligne - gestion pointage {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header invoices-page-header">
        <div class="row align-items-center">
            <div class="col"></div>
            <div class="col-auto">
                <div class="invoices-create-btn">
                    <a href="{{ "factureLignes/factureLigne-action/add-pointage/#{factureLigne['ligne_id']}" | url }}" class="btn save-invoice-btn  btn-warning">
                        Faire le Pointage
                    </a>

                </div>
            </div>
        </div>

    </div>
    <div class="row">

        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Bonne nouvelle !</strong> Cette facture à été completement payée
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="card invoices-add-card">
                <div class="card-body">
                    <form action="#" class="invoices-form">
                        <div class="invoices-main-form">
                            <div class="row">
                                <div class="col-xl-6 col-md-6 col-sm-12 col-12">
                                    <h4 class="invoice-details-title">Ligne de Facture / <span class="text-primary">{{factureLigne['libelle_articles']}}</span></h4>
                                    <div class="invoice-details-box">
                                        <div class="invoice-inner-head">
                                            <span>Client : <a href="#"> {{factureLigne['noms_clients']}} </a></span>
                                        </div>
                                        <div class="invoice-inner-footer">
                                            <div class="row align-items-center">
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="invoice-inner-date">
                                                        <span>
                                                            Prix unitaire <input class="form-control datetimepicker"
                                                                type="text" value=" {{factureLigne['prix_unitaire_facture_lignes'] | number_format}} GNF" disabled readonly>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="invoice-inner-date invoice-inner-datepic">
                                                        <span>
                                                            Total Pointage : <input
                                                                class="form-control datetimepicker"
                                                                type="text" value="{{factureLigne['type_pointagefacture_lignes']}} " disabled readonly>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-md-6 col-sm-12 col-12">
                                    <h4 class="invoice-details-title">Facture details</h4>
                                    <div class="invoice-details-box">
                                        <div class="invoice-inner-head">
                                            <span>Facture No. <a
                                                    href="#"> {{factureLigne['reference_factures']}} ({{factureLigne['libelle_factures']}}) </a></span>
                                        </div>
                                        <div class="invoice-inner-footer">
                                            <div class="row align-items-center">
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="invoice-inner-date">
                                                        <span>
                                                            Date Emission <input class="form-control datetimepicker"
                                                                type="text" value=" {{factureLigne['date_emission_factures'] | date('d/m/Y') }}" disabled readonly>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="invoice-inner-date invoice-inner-datepic">
                                                        <span>
                                                            Date Echéance <input
                                                                class="form-control datetimepicker"
                                                                type="text" value=" {{factureLigne['date_echeance_factures'] | date('d/m/Y') }}" disabled readonly>
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

                        <div class="invoice-add-table mb-5">
                            <h4> Listes des Produits </h4>
                            <div class="table-responsive">
                                <table class="table table-center add-table-items" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Depart </th>
                                            <th>Fin </th>
                                            <th>  <span class="fw-bolder text-danger fs-12">Total - {{factureLigne['type_pointagefacture_lignes']}}s </span>   </th>
                                            <th>Poste</th>
                                            <th>Operateur</th>
                                            <th>Supperviseur</th>
                                            <th>Site</th>
                                            <th>Remarque</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {% for pointage in pointages[0] %}
                                            <tr>
                                                <td>{{pointage['date_pointage'] | date('d/m/Y')}}</td>
                                                <td>{{pointage['index_depart_pointage']}}</td>
                                                <td>{{pointage['index_fin_pointage']}}</td>
                                                <td>{{pointage['index_total_pointage']}}</td>
                                                <td>{{pointage['poste_pointage']}}</td>
                                                <td>{{pointage['operateur_pointage']}}</td>
                                                <td>{{pointage['superviseur_pointage']}}</td>
                                                <td>{{pointage['site_pointage']}}</td>
                                                <td>{{pointage['remarque_pointage']}}</td>
                                                <td></td>
                                            </tr>
                                        {%endfor %}
                                    </tbody>
                                </table>
                            </div>
                            <div class="row mt-5">
                                <div class="col-lg-7 col-md-6"></div>
                                <div class="col-lg-5 col-md-6">
                                    <div class="invoice-total-card">
                                        <div class="invoice-total-box">
                                            <div class="invoice-total-inner"> <p>Total Index/Jour(s) : <span class="">{{ pointages['TotalIndex']}}</span></p></div>
                                            <div class="invoice-total-footer">
                                                <h4>Montant  <span>{{ pointages['MontantTotalLigne'] | number_format }} GNF</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

{% endblock %}