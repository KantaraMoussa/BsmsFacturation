{% extends "base.php" %}

{% block title %} Rentabilité des engins {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Rentabilité du parc d'engins</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Rapports</a></li>
                        <li class="breadcrumb-item active">Rentabilité</li>
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
                                    <th>Engin</th>
                                    <th>Chiffre d'affaires</th>
                                    <th>Coût maintenance</th>
                                    <th>Coût carburant</th>
                                    <th>Marge</th>
                                    <th>Taux d'utilisation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for r in rentabilite %}
                                <tr>
                                    <td><a href="{{ "engins/detail/#{r['engin']['engin_id']}" | url }}" class="fw-bolder text-primary">{{r['engin']['numero_interne_engins']}} - {{r['engin']['type_engins']}}</a></td>
                                    <td>{{r['chiffre_affaires'] | number_format}} GNF</td>
                                    <td>{{r['cout_maintenance'] | number_format}} GNF</td>
                                    <td>{{r['cout_carburant'] | number_format}} GNF</td>
                                    <td class="{% if r['marge'] >= 0 %}text-success{% else %}text-danger{% endif %} fw-bolder">{{r['marge'] | number_format}} GNF</td>
                                    <td>
                                        <div class="progress" style="height: 18px;">
                                            <div class="progress-bar" role="progressbar" style="width: {{r['taux_utilisation']}}%">{{r['taux_utilisation']}}%</div>
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
