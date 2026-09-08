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
                        <li class="breadcrumb-item"><a href="{{'commandes' | url}}">Commandes</a></li>
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
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-commande" data-type="{{type}}" data-id="{{id}}">
                        {%if type =='add'%}
                        <div class="row mt-1">
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="client">Client</label>
                                <select class="form-select" name="client" id="client" data-required="yes">
                                    {% for client_ in clients %}
                                    <option value="{{client_['client_id']}}">{{client_['noms_clients']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date">Date de commande</label>
                                <input type="date" class="form-control" name="date" id="date" data-required="yes">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="type_location">Type de location</label>
                                <select class="form-select" name="type_location" id="type_location">
                                    <option value="horaire">Horaire</option>
                                    <option value="journalier">Journalier</option>
                                    <option value="hebdomadaire">Hebdomadaire</option>
                                    <option value="mensuel">Mensuel</option>
                                    <option value="forfait">Forfait</option>
                                    <option value="prestation">Prestation</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="engin">Engin concerné</label>
                                <select class="form-select" name="engin" id="engin">
                                    <option value="">Aucun</option>
                                    {% for engin_ in engins %}
                                    <option value="{{engin_['engin_id']}}">{{engin_['numero_interne_engins']}} - {{engin_['type_engins']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="chantier">Chantier</label>
                                <select class="form-select" name="chantier" id="chantier">
                                    <option value="">Aucun</option>
                                    {% for chantier_ in chantiers %}
                                    <option value="{{chantier_['chantier_id']}}">{{chantier_['nom_chantiers']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date_debut">Date de début du contrat</label>
                                <input type="date" class="form-control" name="date_debut" id="date_debut">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date_fin">Date de fin du contrat</label>
                                <input type="date" class="form-control" name="date_fin" id="date_fin">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="tarif">Tarif convenu</label>
                                <input type="number" step="0.01" class="form-control" name="tarif" id="tarif">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="caution">Caution</label>
                                <input type="number" step="0.01" class="form-control" name="caution" id="caution">
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="conditions_paiement">Conditions de paiement</label>
                                <input type="text" class="form-control" name="conditions_paiement" id="conditions_paiement" placeholder="ex: 30% à la signature, solde à 30 jours">
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <button type="submit" class="btn btn-primary">Enregistrer la commande</button>
                            </div>

                        </div>
                        {%else %}
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="commande">#Commande</label>
                                <select class="form-select" name="commande" id="commande">
                                    <option value="{{commande['commande_id']}}">{{commande['reference_commandes']}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date">Date de commande</label>
                                <input type="date" class="form-control" name="date" id="date" value="{{commande['date_commandes']}}" required>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="etat">État</label>
                                <select class="form-select" name="etat" id="etat">
                                    <option {% if commande['etat_commandes']== "en attente" %} selected {%endif%} value="en attente">en attente</option>
                                    <option {% if commande['etat_commandes']=="validée"  %} selected {%endif%} value="validée">validée</option>
                                    <option {% if commande['etat_commandes']=="annulée"  %} selected {%endif%} value="annulée">annulée</option>
                                    <option {% if commande['etat_commandes']=="livrée"  %} selected {%endif%} value="livrée">livrée</option>
                                </select>
                            </div>
                            {% if type == 'update' %}
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="type_location">Type de location</label>
                                <select class="form-select" name="type_location" id="type_location">
                                    {% for tl in ['horaire', 'journalier', 'hebdomadaire', 'mensuel', 'forfait', 'prestation'] %}
                                    <option value="{{tl}}" {% if commande['type_location_commandes'] == tl %}selected{% endif %}>{{tl}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="engin">Engin concerné</label>
                                <select class="form-select" name="engin" id="engin">
                                    <option value="">Aucun</option>
                                    {% for engin_ in engins %}
                                    <option value="{{engin_['engin_id']}}" {% if commande['engin_id_commandes'] == engin_['engin_id'] %}selected{% endif %}>{{engin_['numero_interne_engins']}} - {{engin_['type_engins']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="chantier">Chantier</label>
                                <select class="form-select" name="chantier" id="chantier">
                                    <option value="">Aucun</option>
                                    {% for chantier_ in chantiers %}
                                    <option value="{{chantier_['chantier_id']}}" {% if commande['chantier_id_commandes'] == chantier_['chantier_id'] %}selected{% endif %}>{{chantier_['nom_chantiers']}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date_debut">Date de début du contrat</label>
                                <input type="date" class="form-control" name="date_debut" id="date_debut" value="{{commande['date_debut_commandes']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="date_fin">Date de fin du contrat</label>
                                <input type="date" class="form-control" name="date_fin" id="date_fin" value="{{commande['date_fin_commandes']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="tarif">Tarif convenu</label>
                                <input type="number" step="0.01" class="form-control" name="tarif" id="tarif" value="{{commande['tarif_commandes']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="caution">Caution</label>
                                <input type="number" step="0.01" class="form-control" name="caution" id="caution" value="{{commande['caution_commandes']}}">
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="conditions_paiement">Conditions de paiement</label>
                                <input type="text" class="form-control" name="conditions_paiement" id="conditions_paiement" value="{{commande['conditions_paiement_commandes']}}">
                            </div>
                            {% endif %}
                            <div class="form-group col-md-12 mb-3">
                                {%if type =='update' %}
                                <button type="submit" class="btn btn-primary">Mise à jour</button>
                                {%else %}
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
                    <p>Une commande représente le contrat de location conclu avec le client : engin, chantier, dates, tarif et conditions de paiement. C'est sur cette base que les factures seront émises.</p>
                    {% elseif type == 'update' %}
                    <p>Vous pouvez ajuster les termes du contrat (dates, tarif, engin, chantier) ou son état. Les factures déjà émises ne sont pas modifiées rétroactivement.</p>
                    {% else %}
                    <p>La suppression n'est possible que si aucune facture n'est encore rattachée à cette commande.</p>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
