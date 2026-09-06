{% extends "base.php" %}

{% block title %} Consommation carburant {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Consommation de carburant</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{'engins' | url }}">Engins</a></li>
                        <li class="breadcrumb-item active">Carburant</li>
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
                                    <th>Quantité totale (L)</th>
                                    <th>Coût total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for row in consommation %}
                                <tr>
                                    <td><a href="{{ "engins/detail/#{row['engin']['engin_id']}" | url }}">{{row['engin']['numero_interne_engins']}} - {{row['engin']['type_engins']}}</a></td>
                                    <td>{{row['quantite_totale']}}</td>
                                    <td>{{row['cout_total'] | number_format}} GNF</td>
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
