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
                        <li class="breadcrumb-item"><a href="{{'clients' | url}}">Clients</a></li>
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
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-client" data-type="{{type}}" data-id="{{id}}">
                        {%if type =='add' %}
                        <div class="row">

                            <div class="form-group col-md-12  mb-3">
                                <label class="form-label" for="libelle">Nom de l'entreprise</label>
                                <input type="text" class="form-control" name="libelle" id="libelle" data-required="yes">
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="email">Email</label>
                                <input type="email" class="form-control" name="email" id="email" data-required="yes">
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="telephone">Téléphone</label>
                                <input type="text" class="form-control" name="telephone" id="telephone" data-required="yes">
                            </div>
                            <div class=" form-group ">
                                <button type="submit" class="btn btn-primary"> <span class="fa fa-plus"></span>&nbsp;Enregistrer le client</button>
                            </div>
                        </div>
                        {% else %}
                        <div class="row">
                            <div class=" form-group col-md-12 mb-3">
                                <label class="form-label" for="libelle">Nom de l'entreprise</label>
                                <input type="text" class="form-control" name="libelle" id="libelle" data-required="yes" value="{{clientData['noms_clients']}}">
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="email">Email</label>
                                <input type="email" class="form-control" name="email" id="email" data-required="yes" value="{{clientData['email_clients']}}">
                            </div>
                            <div class=" form-group col-md-6 mb-4">
                                <label class="form-label" for="telephone">Téléphone</label>
                                <input type="text" class="form-control" name="telephone" data-required="yes" id="telephone" value="{{clientData['telephone_clients']}}">
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
                    <p>Un client représente une entreprise cliente (société minière, BTP...). Une fois créé, vous pourrez lui associer une adresse, des chantiers, des contrats et des factures.</p>
                    {% elseif type == 'update' %}
                    <p>Modifiez les coordonnées de ce client. Cela n'affecte pas les factures déjà émises, qui conservent les informations telles qu'elles étaient au moment de leur création.</p>
                    {% else %}
                    <p>La suppression d'un client est définitive. Elle n'est possible que si aucune commande, facture ou chantier n'y est encore rattaché.</p>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
