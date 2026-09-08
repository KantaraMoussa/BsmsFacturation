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
                        <li class="breadcrumb-item"><a href="{{'addresses' | url}}">Adresses</a></li>
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
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-addresse" data-type="{{type}}" data-id="{{id}}">
                        {%if type =='add'%}
                        <div class="row mt-1">
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="client">Client</label>
                                <select class="form-select" name="client" id="client" data-required="yes">
                                    {% for client in clients %}
                                    <option value="{{client['client_id']}}">{{client['noms_clients']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="type_addr">Type (facturation/livraison)</label>
                                <select class="form-select" name="type_addr" id="type_addr" data-required="yes">
                                    <option value="facturation">Facturation</option>
                                    <option value="livraison">Livraison</option>
                                </select>
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="rue">Rue</label>
                                <input type="text" class="form-control" name="rue" id="rue">
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="ville">Ville</label>
                                <input type="text" class="form-control" name="ville" id="ville" data-required="yes">
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="code">Code Postal</label>
                                <input type="text" class="form-control" name="code" id="code">
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="pays">Pays</label>
                                <input type="text" class="form-control" name="pays" id="pays" data-required="yes">
                            </div>
                        </div>
                        <div class=" form-group col-md-6 mb-3">
                            <button type="submit" class="btn btn-primary"> <span class="fa fa-plus"></span>&nbsp;Enregistrer l'adresse</button>
                        </div>
                        {%else %}
                        <div class="row">
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="client">Client ID</label>
                                <select class="form-select" name="client" id="client" data-required="yes">
                                    {% for client in clients %}
                                    <option value="{{client['client_id']}}" {% if addresse['client_id_addresse']== client['client_id'] %} selected {%endif%}>{{client['noms_clients']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="type">Type (facturation/livraison)</label>
                                <select class="form-select" name="type_addr" id="type_addr" data-required="yes">
                                    <option value="facturation" {% if addresse['type_addresses']== "Facturation" %} selected {%endif%}>Facturation</option>
                                    <option value="livraison" {% if addresse['type_addresses']== "Livraison" %} selected {%endif%}>Livraison</option>
                                </select>
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="rue">Rue</label>
                                <input type="text" class="form-control" name="rue" id="rue" value="{{addresse['rue_addresses']}}">
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="ville">Ville</label>
                                <input type="text" class="form-control" name="ville" id="ville" value="{{ addresse['ville_addresses']}}" data-required="yes">
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="code">Code Postal</label>
                                <input type="text" class="form-control" name="code" id="code" value="{{ addresse['code_postal_addresses']}}">
                            </div>
                            <div class=" form-group col-md-6 mb-3">
                                <label class="form-label" for="pays">Pays</label>
                                <input type="text" class="form-control" name="pays" id="pays" value="{{ addresse['pays_addresses']}}" data-required="yes">
                            </div>
                            <div class=" form-group col-md-6 mb-3">
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
                    <p>Chaque client peut avoir une adresse de facturation ou de livraison. Elle apparaîtra sur les documents (factures, bons) émis pour ce client.</p>
                    {% elseif type == 'update' %}
                    <p>La modification de l'adresse s'applique immédiatement aux prochains documents générés pour ce client.</p>
                    {% else %}
                    <p>La suppression de l'adresse est définitive.</p>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
