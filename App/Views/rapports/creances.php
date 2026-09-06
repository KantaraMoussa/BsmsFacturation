{% extends "base.php" %}

{% block title %} Rapport créances {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Suivi des créances</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Rapports</a></li>
                        <li class="breadcrumb-item active">Créances</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        {% set trancheColors = {'non échue': 'bg-secondary', '0-30 jours': 'bg-success', '31-60 jours': 'bg-warning', '61-90 jours': 'bg-warning', '91-120 jours': 'bg-danger', 'plus de 120 jours': 'bg-danger'} %}
        {% for tranche, montant in aging %}
        <div class="col-xl-2 col-sm-4 col-12 d-flex mb-3">
            <div class="card bg-comman w-100">
                <div class="card-body">
                    <h6>{{tranche}}</h6>
                    <h4><span class="badge text-wrap {{trancheColors[tranche]}}" style="max-width: 100%;">{{montant | number_format}} GNF</span></h4>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>

    <div class="row">
        <div class="col-sm-12">
            <div class="card card-table comman-shadow">
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="dataTable" class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>Référence facture</th>
                                    <th>Client</th>
                                    <th>Échéance</th>
                                    <th>Statut</th>
                                    <th>Solde dû</th>
                                    <th>Ancienneté</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for c in creances %}
                                <tr>
                                    <td><a href="{{ "factures/detail/#{c['facture_id']}" | url }}" class="fw-bolder text-primary">{{c['reference_factures']}}</a></td>
                                    <td>{{c['noms_clients']}}</td>
                                    <td>{{c['date_echeance_factures']}}</td>
                                    <td>{{c['statut_factures']}}</td>
                                    <td>{{c['solde'] | number_format}} GNF</td>
                                    <td>{{c['tranche']}}</td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
