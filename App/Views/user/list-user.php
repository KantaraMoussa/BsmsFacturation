{% extends "base.php" %}

{% block title %} Utilisateurs {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Gestion des utilisateurs</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item active">Utilisateurs</li>
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
                                <h3 class="page-title">Liste des utilisateurs</h3>
                            </div>
                            <div class="col-auto text-end float-end ms-auto download-grp">
                                <a href="{{ 'user/create' | url }}" class="btn btn-primary"><i class="fas fa-plus"></i>&nbsp;Nouvel utilisateur</a>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table id="dataTable" class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>Nom complet</th>
                                    <th>Email</th>
                                    <th>Téléphone</th>
                                    <th>Rôle</th>
                                    <th>Statut</th>
                                    <th>Dernière activité</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for u in Users %}
                                <tr>
                                    <td>
                                        {% if is_online(u) %}
                                        <span class="badge bg-success" title="En ligne">●</span>
                                        {% else %}
                                        <span class="badge bg-secondary" title="Hors ligne">●</span>
                                        {% endif %}
                                        {{u['fname_users']}} {{u['lname_users']}}
                                    </td>
                                    <td>{{u['email_users']}}</td>
                                    <td>{{u['phone_users']}}</td>
                                    <td><span class="badge bg-info">{{u['type_users']}}</span></td>
                                    <td>
                                        {% if u['status_users'] == 'actif' %}
                                        <span class="badge bg-success">actif</span>
                                        {% else %}
                                        <span class="badge bg-danger">inactif</span>
                                        {% endif %}
                                    </td>
                                    <td>
                                        {% if u['date_last_login_users'] %}
                                        {{u['date_last_login_users'] | date('d/m/Y H:i')}}
                                        {% else %}
                                        Jamais connecté
                                        {% endif %}
                                    </td>
                                    <td class="text-end">
                                        <div class="actions">
                                            <a href="{{ "user/manage/#{u['id_users']}" | url }}" class="btn btn-sm bg-success-light me-2">
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
