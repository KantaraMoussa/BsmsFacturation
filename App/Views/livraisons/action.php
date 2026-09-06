<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">
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

</div><!-- .modal-body -->