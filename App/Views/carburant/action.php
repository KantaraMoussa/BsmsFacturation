<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">
    <div class="card-header bg-dark">
        <h3 class="invoice-name text-white fw-bolder">Historique carburant</h3>
    </div>
    <div class="table-responsive table-primary mb-5">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Quantité</th>
                    <th>Prix unitaire</th>
                    <th>Coût total</th>
                    <th>Fournisseur</th>
                </tr>
            </thead>
            <tbody>
                {% for c in historique %}
                <tr>
                    <td>{{c['date_carburant']}}</td>
                    <td>{{c['quantite_carburant']}}</td>
                    <td>{{c['prix_unitaire_carburant'] | number_format}} GNF</td>
                    <td>{{c['cout_total_carburant'] | number_format}} GNF</td>
                    <td>{{c['fournisseur_carburant']}}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>

    <hr>
    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-carburant" data-id="{{enginId}}">
        <div class="card-header bg-warning">
            <h3 class="invoice-name fw-bolder text-white">Enregistrer un plein</h3>
        </div>
        <hr>
        <div class="row">
            <div class="mb-3 form-group col-md-6">
                <label class="form-label" for="date">Date</label>
                <input type="date" class="form-control" name="date" id="date" data-required="yes">
            </div>
            <div class="mb-3 form-group col-md-6">
                <label class="form-label" for="fournisseur">Fournisseur</label>
                <input type="text" class="form-control" name="fournisseur" id="fournisseur">
            </div>
            <div class="mb-3 form-group col-md-4">
                <label class="form-label" for="quantite">Quantité (L)</label>
                <input type="number" step="0.01" class="form-control" name="quantite" id="quantite" data-required="yes">
            </div>
            <div class="mb-3 form-group col-md-4">
                <label class="form-label" for="prix">Prix unitaire</label>
                <input type="number" step="0.01" class="form-control" name="prix" id="prix" data-required="yes">
            </div>
            <div class="mb-3 form-group col-md-4">
                <label class="form-label" for="compteur">Compteur actuel</label>
                <input type="number" step="0.01" class="form-control" name="compteur" id="compteur">
            </div>
            <div class="mb-3 form-group col-md-12">
                <label class="form-label" for="chantier">Chantier</label>
                <select class="form-select" name="chantier" id="chantier">
                    <option value="">Aucun</option>
                    {% for chantier_ in chantiers %}
                    <option value="{{chantier_['chantier_id']}}">{{chantier_['nom_chantiers']}}</option>
                    {% endfor %}
                </select>
            </div>
            <div class="mb-3 form-group col-md-12">
                <button type="submit" class="btn btn-primary">Enregistrer</button>
            </div>
        </div>
    </form>
</div><!-- .modal-body -->
