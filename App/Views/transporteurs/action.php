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
                        <li class="breadcrumb-item"><a href="{{'personnelle' | url}}">Personnel</a></li>
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
                    <form action="{{ 'factureS/crud' | url }}" class="pt-2" id="action-transporteur" data-type="{{type}}" data-id="{{id}}">
                        {%if type =='add'%}
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="nom">Nom Complet</label>
                                <input type="text" class="form-control" name="nom" id="nom" data-required="yes">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="email">Email</label>
                                <input type="email" class="form-control" name="email" id="email" data-required="yes">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="telephone">Téléphone</label>
                                <input type="text" class="form-control" name="telephone" id="telephone" data-required="yes">
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="poste">Poste occupé</label>
                                <select name="poste" id="poste" class="form-select" data-required="yes">
                                    <option value="Opérateur">Opérateur</option>
                                    <option value="Superviseur">Superviseur</option>
                                    <option value="Chauffeur">Chauffeur</option>
                                    <option value="Controlleur">Controlleur</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="matricule">Matricule</label>
                                <input type="text" class="form-control" name="matricule" id="matricule">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="permis">N° de permis</label>
                                <input type="text" class="form-control" name="permis" id="permis">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="categorie_permis">Catégorie de permis</label>
                                <input type="text" class="form-control" name="categorie_permis" id="categorie_permis" placeholder="ex: C, D, CE">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date_expiration_permis">Expiration du permis</label>
                                <input type="date" class="form-control" name="date_expiration_permis" id="date_expiration_permis">
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="habilitations">Habilitations</label>
                                <input type="text" class="form-control" name="habilitations" id="habilitations" placeholder="ex: CACES, travail en hauteur">
                            </div>
                            <div class="form-group col-md-6 mt-3">
                                <button type="submit" class="btn btn-primary">Enregistrer</button>
                            </div>

                        </div>
                        {%else %}
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="nom">Transporteur </label>
                                <input type="text" class="form-control" name="nom" id="nom" required value="{{transporteur['noms_personnelles']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="email">Email</label>
                                <input type="email" class="form-control" name="email" id="email" value="{{transporteur['email_personnelles']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="telephone">Téléphone</label>
                                <input type="text" class="form-control" name="telephone" id="telephone" value="{{transporteur['telephone_personnelles']}}">
                            </div>

                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="poste">Poste occupé</label>
                                <select name="poste" id="poste" class="form-select" data-required="yes">
                                    <option {% if transporteur['poste_personnelles']=='Opérateur' %} selected {%endif%}   value="Opérateur">Opérateur</option>
                                    <option {% if transporteur['poste_personnelles']=='Superviseur' %} selected {%endif%}   value="Superviseur">Superviseur</option>
                                    <option {% if transporteur['poste_personnelles']=='Chauffeur' %} selected {%endif%}  value="Chauffeur">Chauffeur</option>
                                    <option {% if transporteur['poste_personnelles']=='Controlleur' %} selected {%endif%}   value="Controlleur">Controlleur</option>
                                </select>
                            </div>
                            {% if type == 'update' %}
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="matricule">Matricule</label>
                                <input type="text" class="form-control" name="matricule" id="matricule" value="{{transporteur['matricule_personnelles']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="permis">N° de permis</label>
                                <input type="text" class="form-control" name="permis" id="permis" value="{{transporteur['permis_personnelles']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="categorie_permis">Catégorie de permis</label>
                                <input type="text" class="form-control" name="categorie_permis" id="categorie_permis" value="{{transporteur['categorie_permis_personnelles']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date_expiration_permis">Expiration du permis</label>
                                <input type="date" class="form-control" name="date_expiration_permis" id="date_expiration_permis" value="{{transporteur['date_expiration_permis_personnelles']}}">
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="habilitations">Habilitations</label>
                                <input type="text" class="form-control" name="habilitations" id="habilitations" value="{{transporteur['habilitations_personnelles']}}">
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="statut">Statut</label>
                                <select class="form-select" name="statut" id="statut">
                                    <option value="actif" {% if transporteur['statut_personnelles'] == 'actif' %}selected{% endif %}>Actif</option>
                                    <option value="inactif" {% if transporteur['statut_personnelles'] == 'inactif' %}selected{% endif %}>Inactif</option>
                                </select>
                            </div>
                            {% endif %}
                            <div class="form-group mb-3">
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
                    <p>Cette fiche regroupe les chauffeurs, opérateurs, superviseurs et contrôleurs. Elle suit aussi les habilitations et la validité du permis, utile pour anticiper un renouvellement.</p>
                    {% elseif type == 'update' %}
                    <p>Vous pouvez aussi désactiver ce membre du personnel (statut) sans supprimer son historique.</p>
                    {% else %}
                    <p>La suppression est définitive.</p>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
