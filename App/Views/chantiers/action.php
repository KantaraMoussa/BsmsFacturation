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
                        <li class="breadcrumb-item"><a href="{{'chantiers' | url}}">Chantiers</a></li>
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
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-chantier" data-type="{{type}}" data-id="{{id}}">
                        {% if type == 'delete' %}
                        <p>Confirmez-vous la suppression du chantier <strong>{{chantier['nom_chantiers']}}</strong> ?</p>
                        <button type="submit" class="btn btn-danger">Supprimer</button>
                        {% else %}
                        <div class="row">
                            <div class="form-group col-md-8 mb-3">
                                <label class="form-label" for="nom">Nom du chantier <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="nom" id="nom" data-required="yes" value="{{chantier['nom_chantiers']}}">
                            </div>
                            <div class="form-group col-md-4 mb-3">
                                <label class="form-label" for="code">Code chantier</label>
                                <input type="text" class="form-control" name="code" id="code" value="{{chantier['code_chantiers']}}">
                            </div>
                            {% if type == 'add' %}
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="client">Client <span class="text-danger">*</span></label>
                                <select class="form-select" name="client" id="client" data-required="yes">
                                    {% for client_ in clients %}
                                    <option value="{{client_['client_id']}}">{{client_['noms_clients']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            {% endif %}
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="responsable">Responsable</label>
                                <input type="text" class="form-control" name="responsable" id="responsable" value="{{chantier['responsable_chantiers']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="telephone">Téléphone</label>
                                <input type="text" class="form-control" name="telephone" id="telephone" value="{{chantier['telephone_chantiers']}}">
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="localisation">Localisation</label>
                                <input type="text" class="form-control" name="localisation" id="localisation" value="{{chantier['localisation_chantiers']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date_debut">Date de début</label>
                                <input type="date" class="form-control" name="date_debut" id="date_debut" value="{{chantier['date_debut_chantiers']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date_fin">Date de fin</label>
                                <input type="date" class="form-control" name="date_fin" id="date_fin" value="{{chantier['date_fin_chantiers']}}">
                            </div>
                            {% if type == 'update' %}
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="statut">Statut</label>
                                <select class="form-select" name="statut" id="statut">
                                    <option value="actif" {% if chantier['statut_chantiers'] == 'actif' %}selected{% endif %}>Actif</option>
                                    <option value="terminé" {% if chantier['statut_chantiers'] == 'terminé' %}selected{% endif %}>Terminé</option>
                                    <option value="suspendu" {% if chantier['statut_chantiers'] == 'suspendu' %}selected{% endif %}>Suspendu</option>
                                </select>
                            </div>
                            {% endif %}
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="observations">Observations</label>
                                <textarea class="form-control" name="observations" id="observations">{{chantier['observations_chantiers']}}</textarea>
                            </div>
                            <div class="form-group col-md-6 mt-3">
                                <button type="submit" class="btn btn-primary">
                                    {% if type == 'update' %}Mettre à jour{% else %}Enregistrer{% endif %}
                                </button>
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
                    <p>Un chantier (ou site) appartient à un client et peut être rattaché à un ou plusieurs contrats. Il complète la chaîne Client → Contrat → Engin → Opérateur → Chantier.</p>
                    {% elseif type == 'update' %}
                    <p>Vous pouvez faire évoluer le statut du chantier au fil de son avancement (actif, suspendu, terminé).</p>
                    {% else %}
                    <p>La suppression n'est possible que si aucun contrat n'est encore rattaché à ce chantier.</p>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
