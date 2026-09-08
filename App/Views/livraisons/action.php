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
                        <li class="breadcrumb-item"><a href="{{'livraisons' | url}}">Livraisons</a></li>
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
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-livraison" data-type="{{type}}">
                        {%if type =='add'%}
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="commande">Information Commande</label>
                                <select class="form-select" name="commande" id="commande">
                                    {% for commande in commandes %}
                                    <option value="{{commande['commande_id']}}">{{commande['reference_commandes']}} / {{commande['etat_commandes']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="transporteur">Information Livreur</label>
                                <select class="form-select" name="transporteur" id="transporteur">
                                    {% for transporteur in personnelle %}
                                    <option value="{{transporteur['personnelle_id']}}">{{transporteur['noms_personnelles']}} / {{transporteur['telephone_personnelles']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                             <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="etat">Etat livraison</label>
                                <select class="form-select" name="etat" id="etat" data-required="yes">
                                      <option value="Programmer">Programmer</option>
                                  <option value="en cours">en cours</option>
                                  <option value="retardée">retardée</option>
                                  <option value="livrée">livrée</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date">Date de livraisson</label>
                                <input type="date" class="form-control" name="date" id="date" data-required="yes" placeholder="{{deliveryDate}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                 <button type="submit" class="btn btn-primary">Programmer la Livraison</button>
                            </div>

                        </div>
                        {%else %}
                        <div class="row" data-id="">

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
                    <p>Une livraison associe une commande à un chauffeur/livreur et suit son état (programmée, en cours, retardée, livrée). Elle permet de tracer la mise à disposition de l'engin ou du matériel sur le chantier.</p>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
