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
                        <li class="breadcrumb-item"><a href="{{'factureLignes' | url}}">Lignes de facture</a></li>
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
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-facture-ligne" data-type="{{type}}" data-id="{{id}}" data-pointage="{{factures['type_pointagefacture_lignes']}}" data-facture="{% if type == 'add' or type == 'add-pointage' %}{{id}}{% else %}{{factures['facture_id_facture_lignes']}}{% endif %}">
                        {%if type =='add'%}
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="client">Article(s)</label>
                                <select class="form-select" name="article" id="article" data-atype="{{article['type_articles']}}">
                                    {% for article in articles %}
                                    <option value="{{article['article_id']}}">{{article['libelle_articles']}} / {{article['type_articles']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="ttc">Type de Pointage</label>
                                <select name="type_pointage" id="type_pointage" class="form-select">
                                    <option value="jour">POINTAGE PAR NOMBRE DE JOUR TRAVAILLER </option>
                                    <option value="heure">POINTAGE PAR HEURE TRAVAILLER </option>
                                    <option value="index">POINTAGE PAR INDEX - COMPTEUR DE LA MACHINE </option>
                                </select>
                            </div>

                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="quantite">Quantité</label>
                                <input type="number" class="form-control" name="quantite" id="quantite" data-required="yes" data-min-length="1">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="prix">Prix</label>
                                <input type="number" class="form-control" name="prix" id="prix" data-required="yes" data-min-length="1">
                            </div>

                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="description">Description de la ligne de facture</label>
                                <textarea name="description" id="description" class="form-control"></textarea>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <button type="submit" class="btn btn-primary">Enregistrer</button>
                            </div>
                        </div>
                        {%elseif type =='update' or type =='delete' %}
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="facture">Facture(s)</label>
                                <select class="form-select" name="facture" id="facture">
                                    <option value="{{factures['facture_id']}}">{{factures['reference_factures']}}</option>
                                </select>
                            </div>

                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="client">Article(s)</label>
                                <select class="form-select" name="article" id="article">
                                    <option value="{{factures['article_id']}}">{{factures['libelle_articles']}} / {{factures['type_articles']}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="quantite">Quantité</label>
                                <input type="number" class="form-control" name="quantite" data-min-length="1" id="quantite" data-required="yes" value="{{factures['quantite_facture_lignes']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="prix">Prix</label>
                                <input type="number" class="form-control" name="prix" data-min-length="1" id="prix" data-required="yes" value="{{factures['prix_unitaire_facture_lignes']}}">
                            </div>


                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="description">Description de la commande</label>
                                <textarea name="description" id="description" class="form-control">{{factures['description_facture_lignes']}}</textarea>
                            </div>
                            {%if type =='update' %}
                            <div class=" form-group">
                                <button type="submit" class="btn btn-warning fw-bolder"> <i class="fas fa-edit"></i>&nbsp; Mise à jour</button>
                            </div>
                            {%elseif type =='delete' %}
                            <div class=" form-group">
                                <button type="submit" class="btn btn-danger">Supprimer</button>
                            </div>
                            {% endif %}
                        </div>
                        {%elseif type =='add-pointage'%}
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Date Pointage <span class="login-danger">*</span></label>
                                <input class="form-control" required="required" type="date" name="date" id="date" data-required="yes">
                            </div>
                            <div class="form-group col-md-6">
                                <label>Poste Pointage <span class="login-danger">*</span></label>
                                <select name="poste" id="poste" class="form-select">
                                    <option value="jour">Jour</option>
                                    <option value="nuit">Nuit</option>
                                </select>
                            </div>
                        </div>
                        {% if factures['type_pointagefacture_lignes'] =='index'%}
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Départ Index <span class="login-danger">*</span></label>
                                <input class="form-control" data-min-length="1" required="required" type="text" name="depart" id="depart" data-required="yes">
                            </div>
                            <div class="form-group col-md-6">
                                <label>Fin Index <span class="login-danger">*</span></label>
                                <input class="form-control" name="fin" id="fin" type="text" data-min-length="1">
                            </div>
                        </div>
                        {%elseif factures['type_pointagefacture_lignes']=='heure'%}
                        <div class="form-group col-md-12">
                            <label>Indiquer le nomnbre d'heure travailler <span class="login-danger">*</span></label>
                            <input class="form-control" name="heure" id="heure" type="number" data-min-length="1">
                        </div>
                        {%else%}
                        {%endif%}
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Opérateur <span class="login-danger">*</span></label>
                                <select name="operateur" id="operateur" class="form-select" data-required="yes">
                                    {% for transporteur in personnels %}
                                    <option value="{{transporteur['personnelle_id']}}">{{transporteur['noms_personnelles']}} / {{transporteur['telephone_personnelles']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label>Superviseur <span class="login-danger">*</span></label>
                                <select name="superviseur" id="superviseur" class="form-select" data-required="yes">
                                    {% for transporteur in personnels %}
                                    <option value="{{transporteur['personnelle_id']}}">{{transporteur['noms_personnelles']}} / {{transporteur['telephone_personnelles']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>


                        <div class="row">
                            <div class="form-group col-md-12">
                                <label>Site <span class="login-danger">*</span></label>
                                <input class="form-control" required="required" type="text" name="site" id="site" data-required="yes">
                            </div>
                            <div class="form-group col-md-12">
                                <label>Remarque ? <span class="login-danger">*</span></label>
                                <textarea name="remarque" id="remarque" class="form-control" data-required="yes"></textarea>
                            </div>
                        </div>

                        <div class="form-group col-lg-6">
                            <button class="btn btn-primary fw-bolder" type="submit">
                                <i class="fa fa-pencil"></i>&nbsp;
                                Pointage</button>
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
                    <p>Une ligne de facture précise l'article/prestation facturé et son mode de suivi : par jour, par heure ou par index (compteur de la machine). Les montants réels seront calculés à partir des relevés de pointage saisis ensuite.</p>
                    {% elseif type == 'add-pointage' %}
                    <p>Un pointage enregistre une période de travail réelle (index de compteur ou heures) pour cette ligne, avec l'opérateur et le superviseur concernés. La facture se met à jour automatiquement à partir de ces relevés.</p>
                    {% elseif type == 'update' %}
                    <p>La modification de la ligne recalculera le montant facturé.</p>
                    {% else %}
                    <p>La suppression de la ligne est définitive.</p>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
