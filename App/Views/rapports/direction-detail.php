{% extends "base.php" %}

{% block title %} Détail KPI {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">{{label}}</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{'rapports/direction' | url}}">Pilotage Direction</a></li>
                        <li class="breadcrumb-item active">Détail</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="alert alert-info">
        Cette liste correspond exactement aux factures qui composent l'indicateur cliqué, avec les mêmes filtres actifs sur le tableau de bord
        ({{filters['date_from']}} &rarr; {{filters['date_to']}}{% if filters['client'] %}, client filtré{% endif %}{% if filters['chantier'] %}, chantier filtré{% endif %}{% if filters['engin'] %}, engin filtré{% endif %}{% if filters['statut'] %}, statut = {{filters['statut']}}{% endif %}).
    </div>

    <div class="row">
        <div class="col-sm-12">
            <div class="card card-table comman-shadow">
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="dataTable" class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>Référence</th>
                                    <th>Client</th>
                                    <th>Chantier</th>
                                    <th>Engin</th>
                                    <th>Émission</th>
                                    <th>Échéance</th>
                                    <th>Montant TTC</th>
                                    <th>Payé</th>
                                    <th>Solde</th>
                                    <th>Statut</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for f in factures %}
                                <tr>
                                    <td><span class="fw-bolder">{{f['reference_factures']}}</span></td>
                                    <td>{{f['noms_clients']}}</td>
                                    <td>{{f['nom_chantiers'] ?? '-'}}</td>
                                    <td>{{f['numero_interne_engins'] ?? '-'}}</td>
                                    <td>{{f['date_emission_factures'] | date('d/m/Y')}}</td>
                                    <td>{{f['date_echeance_factures'] | date('d/m/Y')}}</td>
                                    <td>{{f['montant_ttc'] | number_format}} GNF</td>
                                    <td>{{f['montant_paye'] | number_format}} GNF</td>
                                    <td class="{% if f['solde'] > 0.01 %}text-danger{% else %}text-success{% endif %} fw-bolder">{{f['solde'] | number_format}} GNF</td>
                                    <td><span class="badge bg-{% if f['statut_factures']=='payée' %}success{% elseif f['statut_factures']=='partiellement payée' %}warning{% else %}danger{% endif %}">{{f['statut_factures']}}</span></td>
                                    <td class="text-end">
                                        <a href="{{ "factures/detail/#{f['facture_id']}" | url }}" class="btn btn-sm bg-success-light me-2">
                                            <i class="feather-eye"></i>
                                        </a>
                                    </td>
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
