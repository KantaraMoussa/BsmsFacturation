{% extends "base.php" %}

{% block title %} {{title}} {% endblock %}

{% block body %}
<div class="content container-fluid">
    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">{{title}}</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{'paiements' | url}}">Paiements</a></li>
                        <li class="breadcrumb-item active">{{title}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8">
            <div class="card comman-shadow">
                <div class="card-header">
                    <h4 class="card-title">Historique Paiement</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive table-primary mb-4">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Montant</th>
                                    <th>Date Paiement</th>
                                    <th>Mode Paiement</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% set sum = 0 %}
                                {%for paiement in paiements %}
                                {% set sum = sum + paiement['montant_paiements']  %}
                                <tr>
                                    <td>{{paiement['montant_paiements'] | number_format }} GNF</td>
                                    <td>{{paiement['date_paiements'] | date('d/m/Y')}}</td>
                                    <td>{{paiement['mode_paiements']}}</td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>
                    <div class="row mb-4">
                        {% set rest = totalApayer- sum  %}
                        <div class="col-md-4">
                            <label for="">Montant Total</label>
                            <h6 class="customer-text-one fw-bolder"> {{totalApayer | number_format }} GNF</h6>
                        </div>
                        <div class="col-md-4">
                            <label for="">Montant Payé</label>
                            <h6 class="customer-text-one fw-bolder">{{sum | number_format }} GNF</h6>
                        </div>
                        <div class="col-md-4">
                            <label for="">Reste à Payé</label>
                            <h6 class="customer-text-one fw-bolder">{{ rest | number_format }} GNF</h6>
                        </div>
                    </div>
                    <hr>
                    {% if statusFacture != 'payée' %}
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-paiements" data-type="{{type}}" data-id="{{id}}">
                        {%if type =='add'%}
                        <h5>Effectuer un paiement</h5>
                        <div class="row">
                            <div class="mb-3 form-group col-md-12">
                                <label class="form-label" for="paiement">Mode de Paiement</label>
                                <select class="form-select" name="paiement" id="paiement" data-required="yes">
                                    <option value="Virement">Virement</option>
                                    <option value="Espèce">Espèce</option>
                                    <option value="Chèque">Chèque</option>
                                </select>
                            </div>
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="prix">Prix</label>
                                <input type="number" class="form-control" name="prix" id="prix" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="date">Date Paiement</label>
                                <input type="date" class="form-control" name="date" id="date" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-12">
                                <button type="submit" class="btn btn-primary ">Procéder au Paiement</button>
                            </div>

                        </div>
                        {%else %}
                        <div class="row" data-id="">

                        </div>
                        {% endif %}
                    </form>
                    {% else %}
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Bonne nouvelle !</strong> Cette facture à été completement payée
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
                    <p>Enregistrez ici les paiements reçus du client pour cette facture. Le solde restant se met à jour automatiquement, et le statut de la facture (non payée / partiellement payée / payée) est recalculé après chaque paiement.</p>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
