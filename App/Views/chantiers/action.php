<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">
    <h3 class="modal-title">{{title}}</h3>
    <hr>
    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-chantier" data-type="{{type}}" data-id="{{id}}">
        {% if type == 'delete' %}
        <p>Confirmez-vous la suppression du chantier <strong>{{chantier['nom_chantiers']}}</strong> ?</p>
        <button type="submit" class="btn btn-danger">Supprimer</button>
        {% else %}
        <div class="row">
            <div class="form-group col-md-8 mb-3">
                <label class="form-label" for="nom">Nom du chantier <span class="text-danger">*</span></label>
                <input type="text" class="form-control" name="nom" id="nom" data-required="yes" value="{{chantier['nom_chantiers']}}">
            </div>
            <div class="form-group col-md-4 mb-3">
                <label class="form-label" for="code">Code chantier</label>
                <input type="text" class="form-control" name="code" id="code" value="{{chantier['code_chantiers']}}">
            </div>
            {% if type == 'add' %}
            <div class="form-group col-md-12 mb-3">
                <label class="form-label" for="client">Client <span class="text-danger">*</span></label>
                <select class="form-select" name="client" id="client" data-required="yes">
                    {% for client_ in clients %}
                    <option value="{{client_['client_id']}}">{{client_['noms_clients']}}</option>
                    {% endfor %}
                </select>
            </div>
            {% endif %}
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="responsable">Responsable</label>
                <input type="text" class="form-control" name="responsable" id="responsable" value="{{chantier['responsable_chantiers']}}">
            </div>
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="telephone">Téléphone</label>
                <input type="text" class="form-control" name="telephone" id="telephone" value="{{chantier['telephone_chantiers']}}">
            </div>
            <div class="form-group col-md-12 mb-3">
                <label class="form-label" for="localisation">Localisation</label>
                <input type="text" class="form-control" name="localisation" id="localisation" value="{{chantier['localisation_chantiers']}}">
            </div>
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="date_debut">Date de début</label>
                <input type="date" class="form-control" name="date_debut" id="date_debut" value="{{chantier['date_debut_chantiers']}}">
            </div>
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="date_fin">Date de fin</label>
                <input type="date" class="form-control" name="date_fin" id="date_fin" value="{{chantier['date_fin_chantiers']}}">
            </div>
            {% if type == 'update' %}
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="statut">Statut</label>
                <select class="form-select" name="statut" id="statut">
                    <option value="actif" {% if chantier['statut_chantiers'] == 'actif' %}selected{% endif %}>Actif</option>
                    <option value="terminé" {% if chantier['statut_chantiers'] == 'terminé' %}selected{% endif %}>Terminé</option>
                    <option value="suspendu" {% if chantier['statut_chantiers'] == 'suspendu' %}selected{% endif %}>Suspendu</option>
                </select>
            </div>
            {% endif %}
            <div class="form-group col-md-12 mb-3">
                <label class="form-label" for="observations">Observations</label>
                <textarea class="form-control" name="observations" id="observations">{{chantier['observations_chantiers']}}</textarea>
            </div>
            <div class="form-group col-md-6 mt-3">
                <button type="submit" class="btn btn-primary">
                    {% if type == 'update' %}Mettre à jour{% else %}Enregistrer{% endif %}
                </button>
            </div>
        </div>
        {% endif %}
    </form>
</div><!-- .modal-body -->
