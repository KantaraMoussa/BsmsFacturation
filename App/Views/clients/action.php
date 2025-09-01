<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">
    <h3 class="modal-title">{{title}}</h3>
    <hr>
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
</div><!-- .modal-body -->