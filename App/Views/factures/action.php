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
                        <li class="breadcrumb-item"><a href="{{'factures' | url}}">Factures</a></li>
                        <li class="breadcrumb-item active">{{title}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8">
            <div class="card comman-shadow">
                <div class="card-body">
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-facture" data-type="{{type}}"  data-id="{{id}}">
                        {%if type =='add'%}
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label">Commande </label>
                                <select class="form-select" name="commande" id="commande" data-required="yes">
                                    {% for commande in commandes %}
                                    <option value="{{commande['commande_id']}}">{{commande['noms_clients']}} - <span class="text-primary">{{commande['reference_commandes']}}</span> </option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="dateEmission">Date émission</label>
                                <input type="date" class="form-control" name="dateEmission" id="dateEmission" data-required="yes">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="dateEcheance">Date échéance</label>
                                <input type="date" class="form-control" name="dateEcheance" id="dateEcheance" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="tva">Taxe applicable</label>
                                <select class="form-select" name="tva" id="tva" data-required="yes">
                                    {% for taxe in taxes %}
                                    <option value="{{taxe['taux_taxes']}}">{{taxe['libelle_taxes']}} ({{taxe['taux_taxes']}}%)</option>
                                    {% endfor %}
                                    {% if taxes is empty %}
                                    <option value="0">Aucune taxe (0%)</option>
                                    {% endif %}
                                </select>
                            </div>
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="devise">Devise</label>
                                <select class="form-select" name="devise" id="devise" data-required="yes">
                                    <option value="GNF" selected>GNF</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="libelle">Libelle de la facture (Bref description de la nature de cette facture)</label>
                                <input type="text" class="form-control" name="libelle" id="libelle" placeholder="en 140 mots" data-required="yes">
                            </div>

                            <div class="form-group col-md-6 mb-3">
                                <button type="submit" class="btn btn-primary">Enregistrer la facture</button>
                            </div>
                        </div>
                        {%else %}
                        <div class="row">
                            <div class="mb-3 form-group col-md-12">
                                <label class="form-label">Réference de la facture </label>
                                <select class="form-select" name="facture" id="facture" data-required="yes">
                                    <option value="{{facture['facture_id']}}"><span class="text-primary">{{facture['reference_factures']}}</span> </option>
                                </select>
                            </div>
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="date_emission">Date émission</label>
                                <input type="date" class="form-control" name="date_emission" id="date_emission" value="{{facture['date_emission_factures']}}" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-6">
                                <label class="form-label" for="date_echeance">Date échéance</label>
                                <input type="date" class="form-control" name="date_echeance" id="date_echeance" value="{{facture['date_echeance_factures']}}" data-required="yes">
                            </div>
                            <div class="mb-3 form-group col-md-12">
                                <label class="form-label" for="tva">Taxe applicable</label>
                                <select class="form-select" name="tva" id="tva" data-required="yes">
                                    {% for taxe in taxes %}
                                    <option value="{{taxe['taux_taxes']}}" {% if taxe['taux_taxes'] == facture['tva_factures'] %}selected{% endif %}>{{taxe['libelle_taxes']}} ({{taxe['taux_taxes']}}%)</option>
                                    {% endfor %}
                                    {% if taxes is empty %}
                                    <option value="0" {% if facture['tva_factures'] == 0 %}selected{% endif %}>Aucune taxe (0%)</option>
                                    {% endif %}
                                </select>
                            </div>
                            <div class="mb-3 form-group col-md-12">
                                <label class="form-label" for="statut">Libelle de la facture (Bref description de la nature de cette facture)</label>
                                <textarea name="libelle" id="libelle" class="form-control mb-3" data-required="yes">{{facture['libelle_factures']}}</textarea>
                            </div>
                            <div class="mb-3 form-group ">
                                {%if type =='update' %}
                                <button type="submit" class="btn btn-primary">Mise à jour</button>
                                {%elseif type =='delete' %}
                                <button type="submit" class="btn btn-danger">Supprimer</button>
                                {% endif %}
                            </div>
                        </div>
                        {% endif %}
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card comman-shadow">
                <div class="card-header"><h5 class="card-title"><i class="feather-help-circle"></i>&nbsp;Guide</h5></div>
                <div class="card-body">
                    {% if type == 'add' %}
                    <p>Une facture est créée à partir d'une commande validée. Une fois créée, vous pourrez y ajouter des lignes (articles/prestations), la valider puis enregistrer les paiements reçus.</p>
                    {% elseif type == 'update' %}
                    <p>Modifiez les dates ou la taxe applicable. Une facture déjà validée ne peut plus être supprimée, seule une modification contrôlée ou un avoir est possible.</p>
                    {% else %}
                    <p>La suppression n'est possible que si la facture n'a ni ligne, ni paiement, ni avoir, et n'est pas encore validée.</p>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
