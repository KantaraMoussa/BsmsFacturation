<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">
    <h3 class="modal-title">{{title}}</h3>
    <hr>
    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-article" data-type="{{type}}"  data-id="{{id}}">
        {%if type =='add'%}
        <div class="row mt-1">
            <div class="form-group col-md-12 mb-4">
                <label class="form-label" for="libelle">Libelle article</label>
                <input type="text" class="form-control" name="libelle" id="libelle" data-required="yes">
            </div>
            <div class="form-group col-md-6 mb-4">
                <label class="form-label" for="cathegorie">Cathégorie</label>
                <input name="cathegorie" id="cathegorie" class="form-control" data-required="yes">
            </div>
            <div class="form-group col-md-6 mb-4">
                <label class="form-label" for="marque">Marque</label>
                <input type="text" class="form-control" name="marque" id="marque" data-required="yes">
            </div>
            <div class="form-group col-md-6 mb-4">
                <label class="form-label" for="type_art">Type *</label>
                <input type="text" class="form-control" name="type_art" id="type_art" data-required="yes" data-min-length="1">
            </div>

            <div class="form-group col-md-6 mb-4">
                <label class="form-label" for="quantite">Quantité</label>
                <input type="number" step="1" class="form-control" name="quantite" id="quantite" data-min-length="1">
            </div>
        
            <div class=" form-group col-md-12 mt-">
                <button type="submit" class="btn btn-primary text-white fw-bolder"> <span class="fa fa-plus"></span>&nbsp;Enregistrer</button>
            </div>

        </div>
        {%else %}
        <div class="row">
            <div class="form-group col-md-12 mb-4">
                <label class="form-label" for="libelle">Libelle</label>
                <input type="text" class="form-control" name="libelle" id="libelle" data-required="yes" value="{{article['libelle_articles']}}">
            </div>
            <div class="form-group col-md-6 mb-4">
                <label class="form-label" for="cathegorie">Cathégorie </label>
                <select name="cathegorie" id="cathegorie" class="form-select">
                    <option value="{{article['cathegorie_articles']}}">{{article['cathegorie_articles']}}</option>
                </select>
            </div>
            <div class="form-group col-md-6 mb-4">
                <label class="form-label" for="marque">Marque</label>
                <input type="text" class="form-control" name="marque" id="marque" value="{{article['marque_articles']}}">
            </div>
           
            <div class="form-group col-md-6 mb-4">
                <label class="form-label" for="type_art">Type </label>
                <input type="text"  class="form-control" name="type_art" id="type_art" value="{{article['type_articles']}}" data-min-length="1">
            </div>
            <div class="form-group col-md-6 mb-4">
                <label class="form-label" for="quantite">Quantité</label>
                <input type="number" step="1" class="form-control" name="quantite" id="quantite" value="{{article['quantite_articles']}}">
            </div>

            <div class="form-group mb-4">
                {%if type =='update' %}
                <button type="submit" class="btn btn-primary fw-bolder text-white "> <i class="fa fa-edit"></i> &nbsp;Mise à jour</button>
                {%elseif type =='delete' %}
                <button type="submit" class="btn btn-danger fw-bolder text-white "><i class="fa fa-trash"></i> &nbsp;Supprimer</button>
                {% endif %}
            </div>
        </div>
        {% endif %}
    </form>

</div><!-- .modal-body -->