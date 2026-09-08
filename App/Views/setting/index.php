{% extends "base.php" %}

{% block title %} Paramètres {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Paramètres</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item active">Paramètres</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <div class="card card-table comman-shadow">
                <div class="card-header">
                    <h4 class="card-title">Taxes (TVA)</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive mb-4">
                        <table class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>Libellé</th>
                                    <th>Taux (%)</th>
                                    <th>Statut</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for taxe in taxes %}
                                <tr>
                                    <td>{{taxe['libelle_taxes']}}</td>
                                    <td>{{taxe['taux_taxes']}}</td>
                                    <td>
                                        {% if taxe['actif_taxes'] == 'true' %}
                                        <span class="badge bg-success">Active</span>
                                        {% else %}
                                        <span class="badge bg-secondary">Désactivée</span>
                                        {% endif %}
                                    </td>
                                    <td class="text-end">
                                        <button type="button" class="btn btn-sm btn-outline-danger toggle-taxe-btn" data-id="{{taxe['tax_id']}}">
                                            {% if taxe['actif_taxes'] == 'true' %}Désactiver{% else %}Activer{% endif %}
                                        </button>
                                    </td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>

                    <hr>
                    <h5>Ajouter une taxe</h5>
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-taxe" data-type="add">
                        <div class="row">
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="libelle">Libellé</label>
                                <input type="text" class="form-control" name="libelle" id="libelle" data-required="yes" placeholder="TVA standard">
                            </div>
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="taux">Taux (%)</label>
                                <input type="number" step="0.01" class="form-control" name="taux" id="taux" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-12">
                                <button type="submit" class="btn btn-primary">Ajouter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
