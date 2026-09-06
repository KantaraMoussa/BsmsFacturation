{% extends "base.php" %}

{% block title %} Notifications {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row align-items-center">
            <div class="col">
                <h3 class="page-title">Notifications</h3>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Administration</a></li>
                    <li class="breadcrumb-item active">Notifications</li>
                </ul>
            </div>
            <div class="col-auto">
                <button type="button" id="btn-generate-notif" class="btn btn-warning">
                    <i class="feather-plus-circle"></i>&nbsp;Générer les notifications
                </button>
                <button type="button" id="btn-dispatch-notif" class="btn btn-primary">
                    <i class="feather-send"></i>&nbsp;Envoyer les notifications en attente
                </button>
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
                                    <th>Type</th>
                                    <th>Canal</th>
                                    <th>Destinataire</th>
                                    <th>Sujet</th>
                                    <th>Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for n in notifications %}
                                <tr>
                                    <td>{{n['created_at_notifications'] | date('d/m/Y H:i')}}</td>
                                    <td>{{n['type_notifications']}}</td>
                                    <td>{{n['canal_notifications']}}</td>
                                    <td>{{n['destinataire_notifications']}}</td>
                                    <td>{{n['sujet_notifications']}}</td>
                                    <td>
                                        {% if n['statut_notifications'] == 'envoyée' %}
                                        <span class="badge bg-success">{{n['statut_notifications']}}</span>
                                        {% elseif n['statut_notifications'] == 'échec' %}
                                        <span class="badge bg-danger" title="{{n['erreur_notifications']}}">{{n['statut_notifications']}}</span>
                                        {% else %}
                                        <span class="badge bg-secondary">{{n['statut_notifications']}}</span>
                                        {% endif %}
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

<script>
document.getElementById('btn-generate-notif').addEventListener('click', async function () {
    let res = await fetch('{{ 'notifications/generate' | url }}', { method: 'POST' });
    let data = await res.json();
    Main.notify(data.msg);
    location.reload();
});
document.getElementById('btn-dispatch-notif').addEventListener('click', async function () {
    let res = await fetch('{{ 'notifications/dispatch' | url }}', { method: 'POST' });
    let data = await res.json();
    Main.notify(data.msg);
    location.reload();
});
</script>
{% endblock %}
