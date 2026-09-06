<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">
    <h3 class="modal-title">{{title}}</h3>
    <hr>
    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-engin" data-type="{{type}}" data-id="{{id}}">
        {% if type == 'delete' %}
        <p>Confirmez-vous la suppression de l'engin <strong>{{engin['numero_interne_engins']}}</strong> ?</p>
        <button type="submit" class="btn btn-danger">Supprimer</button>
        {% else %}
        <div class="row">
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="numero_interne">N° interne <span class="text-danger">*</span></label>
                <input type="text" class="form-control" name="numero_interne" id="numero_interne" data-required="yes" value="{{engin['numero_interne_engins']}}">
            </div>
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="code">Code engin</label>
                <input type="text" class="form-control" name="code" id="code" value="{{engin['code_engins']}}">
            </div>
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="type_engin">Type <span class="text-danger">*</span></label>
                <select class="form-select" name="type_engin" id="type_engin" data-required="yes">
                    {% for t in ['camion-benne', 'camion-citerne', 'camion plateau', 'tracteur', 'bulldozer', 'pelle hydraulique', 'chargeuse', 'niveleuse', 'compacteur', 'grue', 'chariot élévateur', 'excavatrice', 'engin spécialisé', 'autre'] %}
                    <option value="{{t}}" {% if engin['type_engins'] == t %}selected{% endif %}>{{t}}</option>
                    {% endfor %}
                </select>
            </div>
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="categorie">Catégorie</label>
                <input type="text" class="form-control" name="categorie" id="categorie" value="{{engin['categorie_engins']}}">
            </div>
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="marque">Marque</label>
                <input type="text" class="form-control" name="marque" id="marque" value="{{engin['marque_engins']}}">
            </div>
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="modele">Modèle</label>
                <input type="text" class="form-control" name="modele" id="modele" value="{{engin['modele_engins']}}">
            </div>
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="immatriculation">Immatriculation</label>
                <input type="text" class="form-control" name="immatriculation" id="immatriculation" value="{{engin['immatriculation_engins']}}">
            </div>
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="numero_serie">N° de série</label>
                <input type="text" class="form-control" name="numero_serie" id="numero_serie" value="{{engin['numero_serie_engins']}}">
            </div>
            {% if type == 'add' %}
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="date_mise_service">Date de mise en service</label>
                <input type="date" class="form-control" name="date_mise_service" id="date_mise_service">
            </div>
            {% endif %}
            <div class="form-group col-md-6 mb-3">
                <label class="form-label" for="localisation">Localisation</label>
                <input type="text" class="form-control" name="localisation" id="localisation" value="{{engin['localisation_engins']}}">
            </div>
            <div class="form-group col-md-3 mb-3">
                <label class="form-label" for="tarif_horaire">Tarif horaire (GNF)</label>
                <input type="number" step="0.01" class="form-control" name="tarif_horaire" id="tarif_horaire" value="{{engin['tarif_horaire_engins']}}">
            </div>
            <div class="form-group col-md-3 mb-3">
                <label class="form-label" for="tarif_journalier">Tarif journalier (GNF)</label>
                <input type="number" step="0.01" class="form-control" name="tarif_journalier" id="tarif_journalier" value="{{engin['tarif_journalier_engins']}}">
            </div>
            <div class="form-group col-md-3 mb-3">
                <label class="form-label" for="tarif_hebdomadaire">Tarif hebdomadaire (GNF)</label>
                <input type="number" step="0.01" class="form-control" name="tarif_hebdomadaire" id="tarif_hebdomadaire" value="{{engin['tarif_hebdomadaire_engins']}}">
            </div>
            <div class="form-group col-md-3 mb-3">
                <label class="form-label" for="tarif_mensuel">Tarif mensuel (GNF)</label>
                <input type="number" step="0.01" class="form-control" name="tarif_mensuel" id="tarif_mensuel" value="{{engin['tarif_mensuel_engins']}}">
            </div>
            <div class="form-group col-md-12 mb-3">
                <label class="form-label" for="observations">Observations</label>
                <textarea class="form-control" name="observations" id="observations">{{engin['observations_engins']}}</textarea>
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
