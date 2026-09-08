{% extends "base.php" %}

{% block title %} Carburant {% endblock %}

{% block body %}
<div class="content container-fluid">
    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Suivi carburant</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{'engins' | url}}">Engins</a></li>
                        <li class="breadcrumb-item"><a href="{{ "engins/detail/#{enginId}" | url }}">Détail engin</a></li>
                        <li class="breadcrumb-item active">Carburant</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8">
            <div class="card comman-shadow">
                <div class="card-header bg-dark">
                    <h3 class="invoice-name text-white fw-bolder">Historique carburant</h3>
                </div>
                <div class="card-body">
                    <div class="table-responsive table-primary mb-4">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Quantité</th>
                                    <th>Prix unitaire</th>
                                    <th>Coût total</th>
                                    <th>Fournisseur</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for c in historique %}
                                <tr>
                                    <td>{{c['date_carburant']}}</td>
                                    <td>{{c['quantite_carburant']}}</td>
                                    <td>{{c['prix_unitaire_carburant'] | number_format}} GNF</td>
                                    <td>{{c['cout_total_carburant'] | number_format}} GNF</td>
                                    <td>{{c['fournisseur_carburant']}}</td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>

                    <hr>
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-carburant" data-id="{{enginId}}">
                        <h5>Enregistrer un plein</h5>
                        <div class="row">
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="date">Date</label>
                                <input type="date" class="form-control" name="date" id="date" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="fournisseur">Fournisseur</label>
                                <input type="text" class="form-control" name="fournisseur" id="fournisseur">
                            </div>
                            <div class="mb-3 form-group col-md-4">
                                <label class="form-label" for="quantite">Quantité (L)</label>
                                <input type="number" step="0.01" class="form-control" name="quantite" id="quantite" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-4">
                                <label class="form-label" for="prix">Prix unitaire</label>
                                <input type="number" step="0.01" class="form-control" name="prix" id="prix" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-4">
                                <label class="form-label" for="compteur">Compteur actuel</label>
                                <input type="number" step="0.01" class="form-control" name="compteur" id="compteur">
                            </div>
                            <div class="mb-3 form-group col-md-12">
                                <label class="form-label" for="chantier">Chantier</label>
                                <select class="form-select" name="chantier" id="chantier">
                                    <option value="">Aucun</option>
                                    {% for chantier_ in chantiers %}
                                    <option value="{{chantier_['chantier_id']}}">{{chantier_['nom_chantiers']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="mb-3 form-group col-md-12">
                                <button type="submit" class="btn btn-primary">Enregistrer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card comman-shadow">
                <div class="card-header"><h5 class="card-title"><i class="feather-help-circle"></i>&nbsp;Guide</h5></div>
                <div class="card-body">
                    <p>Enregistrez chaque plein de carburant de cet engin : quantité, prix, chantier concerné. Ces coûts alimentent automatiquement le rapport de rentabilité du parc d'engins.</p>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
