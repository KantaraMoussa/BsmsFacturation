{% extends "base.php" %}

{% block title %} Gestion des chantiers {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Chantiers / Sites</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Chantiers</a></li>
                        <li class="breadcrumb-item active">Liste des chantiers</li>
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
                                <h3 class="page-title">Liste des chantiers</h3>
                            </div>
                            <div class="col-auto text-end float-end ms-auto download-grp">
                                <a href="#" onclick="return NioApp.loadModal({url:'{{ 'chantiers/chantier-action/add/null' | url }}',afterLoad:function(myModal){UGEST.facturation.addChantier(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-primary"><i class="fas fa-plus"></i>&nbsp;Ajouter un chantier</a>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table id="dataTable" class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>Nom</th>
                                    <th>Code</th>
                                    <th>Responsable</th>
                                    <th>Localisation</th>
                                    <th>Statut</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for chantier in chantiers %}
                                <tr>
                                    <td><a href="{{ "chantiers/detail/#{chantier['chantier_id']}" | url }}" class="fw-bolder text-primary">{{chantier['nom_chantiers']}}</a></td>
                                    <td>{{chantier['code_chantiers']}}</td>
                                    <td>{{chantier['responsable_chantiers']}}</td>
                                    <td>{{chantier['localisation_chantiers']}}</td>
                                    <td>
                                        {% if chantier['statut_chantiers'] == 'actif' %}
                                        <span class="badge bg-success">{{chantier['statut_chantiers']}}</span>
                                        {% else %}
                                        <span class="badge bg-secondary">{{chantier['statut_chantiers']}}</span>
                                        {% endif %}
                                    </td>
                                    <td class="text-end">
                                        <div class="actions">
                                            <a href="{{ "chantiers/detail/#{chantier['chantier_id']}" | url }}" class="btn btn-sm bg-success-light me-2">
                                                <i class="feather-eye"></i>
                                            </a>
                                            <a onclick="return NioApp.loadModal({url:'{{ "chantiers/chantier-action/update/#{chantier['chantier_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addChantier(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-sm bg-success-light me-2">
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
