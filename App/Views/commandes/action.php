<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">

    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-commande" data-type="{{type}}" data-id="{{id}}">
        <h3 class="card-title">{{title}}</h3>
        <hr>
        {%if type =='add'%}
        <div class="row mt-1">
            <div class="form-group col-md-12 mb-3">
                <label class="form-label" for="client">Client ID</label>
                <select class="form-select" name="client" id="client" data-required="yes">
                    {% for client_ in clients %}
                    <option value="{{client_['client_id']}}">{{client_['noms_clients']}}</option>
                    {% endfor %}
                </select>
            </div>
            <div class="form-group col-md-12 mb-3">
                <label class="form-label" for="date">Date de commande</label>
                <input type="date" class="form-control" name="date" id="date" data-required="yes">
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

</div><!-- .modal-body -->