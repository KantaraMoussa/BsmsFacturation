{% extends "base.php" %}

{% block title %} Gestion du parc d'engins {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Parc d'engins</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Engins</a></li>
                        <li class="breadcrumb-item active">Liste des engins</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <div class="card card-table comman-shadow">
                <div class="card-body">
                    <div class="page-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="page-title">Liste des engins</h3>
                            </div>
                            <div class="col-auto text-end float-end ms-auto download-grp">
                                <a href="{{ 'engins/engin-action/add/null' | url }}" class="btn btn-primary"><i class="fas fa-plus"></i>&nbsp;Ajouter un engin</a>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table id="dataTable" class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>N° interne</th>
                                    <th>Type</th>
                                    <th>Marque / Modèle</th>
                                    <th>Immatriculation</th>
                                    <th>Statut</th>
                                    <th>Tarif journalier</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for engin in engins %}
                                <tr>
                                    <td><a href="{{ "engins/detail/#{engin['engin_id']}" | url }}" class="fw-bolder text-primary">{{engin['numero_interne_engins']}}</a></td>
                                    <td>{{engin['type_engins']}}</td>
                                    <td>{{engin['marque_engins']}} {{engin['modele_engins']}}</td>
                                    <td>{{engin['immatriculation_engins']}}</td>
                                    <td>
                                        {% if engin['statut_engins'] == 'disponible' %}
                                        <span class="badge bg-success">{{engin['statut_engins']}}</span>
                                        {% elseif engin['statut_engins'] == 'en maintenance' or engin['statut_engins'] == 'immobilisé' or engin['statut_engins'] == 'hors service' %}
                                        <span class="badge bg-danger">{{engin['statut_engins']}}</span>
                                        {% else %}
                                        <span class="badge bg-warning">{{engin['statut_engins']}}</span>
                                        {% endif %}
                                    </td>
                                    <td>{{engin['tarif_journalier_engins'] | number_format}} GNF</td>
                                    <td class="text-end">
                                        <div class="actions">
                                            <a href="{{ "engins/detail/#{engin['engin_id']}" | url }}" class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a href="{{ "engins/engin-action/update/#{engin['engin_id']}" | url }}"  class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-edit"></i>
                                            </a>
                                        </div>
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
