{% extends "base.php" %}

{% block title %} Détail chantier {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row align-items-center">
            <div class="col">
                <h3 class="page-title">Chantier {{chantier['nom_chantiers']}}</h3>
            </div>
            <div class="col-auto">
                <a onclick="return NioApp.loadModal({url:'{{ "chantiers/chantier-action/update/#{chantier['chantier_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addChantier(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-warning">
                    <i class="feather-edit"></i>&nbsp;Modifier
                </a>
                {% if role_utilisateur == 'admin' %}
                <a onclick="return NioApp.loadModal({url:'{{ "chantiers/chantier-action/delete/#{chantier['chantier_id']}" | url }}',afterLoad:function(myModal){UGEST.facturation.addChantier(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-danger">
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
                        <div class="col-md-4 mb-3"><label>Code</label><h6>{{chantier['code_chantiers']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Responsable</label><h6>{{chantier['responsable_chantiers']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Téléphone</label><h6>{{chantier['telephone_chantiers']}}</h6></div>
                        <div class="col-md-12 mb-3"><label>Localisation</label><h6>{{chantier['localisation_chantiers']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Date de début</label><h6>{{chantier['date_debut_chantiers']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Date de fin</label><h6>{{chantier['date_fin_chantiers']}}</h6></div>
                        <div class="col-md-4 mb-3"><label>Statut</label><h6>{{chantier['statut_chantiers']}}</h6></div>
                        <div class="col-md-12 mb-3"><label>Observations</label><p>{{chantier['observations_chantiers']}}</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
