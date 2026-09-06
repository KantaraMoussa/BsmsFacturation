{% extends "base.php" %}

{% block title %} Détail engin {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row align-items-center">
            <div class="col">
                <h3 class="page-title">Engin {{engin['numero_interne_engins']}}</h3>
            </div>
            <div class="col-auto">
                <a onclick="return NioApp.loadModal({url:'{{ "engins/engin-action/update/#{engin['engin_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addEngin(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-warning">
                    <i class="feather-edit"></i>&nbsp;Modifier
                </a>
                <a onclick="return NioApp.loadModal({url:'{{ "maintenance/engin/#{engin['engin_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addMaintenance(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-outline-secondary">
                    <i class="feather-tool"></i>&nbsp;Maintenance
                </a>
                <a onclick="return NioApp.loadModal({url:'{{ "carburant/engin/#{engin['engin_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addCarburant(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-outline-secondary">
                    <i class="feather-droplet"></i>&nbsp;Carburant
                </a>
                {% if role_utilisateur == 'admin' %}
                <a onclick="return NioApp.loadModal({url:'{{ "engins/engin-action/delete/#{engin['engin_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addEngin(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-danger">
                    <i class="feather-trash-2"></i>&nbsp;Supprimer
                </a>
                {% endif %}
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3"><label>Type</label><h6>{{engin['type_engins']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Catégorie</label><h6>{{engin['categorie_engins']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Statut</label><h6>{{engin['statut_engins']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Marque</label><h6>{{engin['marque_engins']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Modèle</label><h6>{{engin['modele_engins']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Immatriculation</label><h6>{{engin['immatriculation_engins']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>N° de série</label><h6>{{engin['numero_serie_engins']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Localisation</label><h6>{{engin['localisation_engins']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Mise en service</label><h6>{{engin['date_mise_service_engins']}}</h6></div>
                        <div class="col-md-3 mb-3"><label>Tarif horaire</label><h6>{{engin['tarif_horaire_engins'] | number_format}} GNF</h6></div>
                        <div class="col-md-3 mb-3"><label>Tarif journalier</label><h6>{{engin['tarif_journalier_engins'] | number_format}} GNF</h6></div>
                        <div class="col-md-3 mb-3"><label>Tarif hebdomadaire</label><h6>{{engin['tarif_hebdomadaire_engins'] | number_format}} GNF</h6></div>
                        <div class="col-md-3 mb-3"><label>Tarif mensuel</label><h6>{{engin['tarif_mensuel_engins'] | number_format}} GNF</h6></div>
                        <div class="col-md-12 mb-3"><label>Observations</label><p>{{engin['observations_engins']}}</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header"><h5 class="card-title">Changer le statut</h5></div>
                <div class="card-body">
                    <form action="{{ 'factures/crud' | url }}" id="action-engin-statut" data-id="{{engin['engin_id']}}">
                        <div class="form-group mb-3">
                            <select class="form-select" name="statut" id="statut">
                                {% for s in ['disponible', 'loué', 'en chantier', 'en maintenance', 'immobilisé', 'hors service', 'vendu', 'archivé'] %}
                                <option value="{{s}}" {% if engin['statut_engins'] == s %}selected{% endif %}>{{s}}</option>
                                {% endfor %}
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Mettre à jour le statut</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
