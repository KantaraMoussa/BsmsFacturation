{% extends "base.php" %}

{% block title %} Journal d'audit {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Journal d'audit</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item active">Journal d'audit</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <div class="card card-table comman-shadow">
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="dataTable" class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>Date</th>
                                    <th>Utilisateur</th>
                                    <th>Action</th>
                                    <th>Objet</th>
                                    <th>Adresse IP</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for entry in entries %}
                                <tr>
                                    <td>{{entry['created_at_audit_log'] | date('d/m/Y H:i:s')}}</td>
                                    <td>{{entry['user_id_audit_log']}}</td>
                                    <td>{{entry['action_audit_log']}}</td>
                                    <td>{{entry['object_type_audit_log']}} {{entry['object_id_audit_log']}}</td>
                                    <td>{{entry['ip_audit_log']}}</td>
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
