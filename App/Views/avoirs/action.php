{% extends "base.php" %}

{% block title %} Avoirs {% endblock %}

{% block body %}
<div class="content container-fluid">
    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Avoirs sur facture</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{'factures' | url}}">Factures</a></li>
                        <li class="breadcrumb-item"><a href="{{ "factures/detail/#{id}" | url }}">Détail facture</a></li>
                        <li class="breadcrumb-item active">Avoirs</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8">
            <div class="card comman-shadow">
                <div class="card-header bg-dark">
                    <h3 class="invoice-name text-white fw-bolder">Historique des avoirs</h3>
                </div>
                <div class="card-body">
                    <div class="table-responsive table-primary mb-4">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Montant</th>
                                    <th>Motif</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for avoir in avoirs %}
                                <tr>
                                    <td>{{avoir['montant_avoirs'] | number_format }} GNF</td>
                                    <td>{{avoir['motif_avoirs']}}</td>
                                    <td>{{avoir['date_avoirs'] | date('d/m/Y')}}</td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>

                    {% if montantRestant > 0 %}
                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label>Solde restant pouvant faire l'objet d'un avoir</label>
                            <h6 class="customer-text-one fw-bolder">{{montantRestant | number_format }} GNF</h6>
                        </div>
                    </div>
                    <hr>
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-avoir" data-id="{{id}}">
                        <h5>Émettre un avoir</h5>
                        <div class="row">
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="montant">Montant</label>
                                <input type="number" step="0.01" class="form-control" name="montant" id="montant" data-required="yes" max="{{montantRestant}}">
                            </div>
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="date">Date</label>
                                <input type="date" class="form-control" name="date" id="date" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-12">
                                <label class="form-label" for="motif">Motif</label>
                                <input type="text" class="form-control" name="motif" id="motif" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-12">
                                <button type="submit" class="btn btn-primary">Émettre l'avoir</button>
                            </div>
                        </div>
                    </form>
                    {% else %}
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Facture entièrement couverte.</strong> Aucun avoir supplémentaire n'est possible.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    {% endif %}
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card comman-shadow">
                <div class="card-header"><h5 class="card-title"><i class="feather-help-circle"></i>&nbsp;Guide</h5></div>
                <div class="card-body">
                    <p>Un avoir permet de créditer partiellement ou totalement une facture déjà validée (remise, erreur de facturation...), sans jamais modifier ou supprimer la facture d'origine — conformément aux règles de traçabilité comptable. Le solde restant dû est automatiquement réduit du montant de l'avoir.</p>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
