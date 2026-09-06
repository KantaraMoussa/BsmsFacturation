<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">
    <div class="card-header bg-dark">
        <h3 class="invoice-name text-white fw-bolder">Historique de maintenance</h3>
    </div>
    <div class="table-responsive table-primary mb-5">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Nature</th>
                    <th>Coût</th>
                    <th>Compteur</th>
                    <th>Prochain entretien</th>
                </tr>
            </thead>
            <tbody>
                {% for m in historique %}
                <tr>
                    <td>{{m['date_maintenances']}}</td>
                    <td>{{m['type_maintenances']}}</td>
                    <td>{{m['nature_maintenances']}}</td>
                    <td>{{m['cout_maintenances'] | number_format}} GNF</td>
                    <td>{{m['compteur_horaire_maintenances']}}</td>
                    <td>{{m['prochain_compteur_maintenances']}}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>

    <hr>
    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-maintenance" data-id="{{enginId}}">
        <div class="card-header bg-warning">
            <h3 class="invoice-name fw-bolder text-white">Enregistrer une maintenance</h3>
        </div>
        <hr>
        <div class="row">
            <div class="mb-3 form-group col-md-6">
                <label class="form-label" for="type_maintenance">Type</label>
                <select class="form-select" name="type_maintenance" id="type_maintenance" data-required="yes">
                    <option value="préventive">Préventive</option>
                    <option value="corrective">Corrective</option>
                </select>
            </div>
            <div class="mb-3 form-group col-md-6">
                <label class="form-label" for="date">Date</label>
                <input type="date" class="form-control" name="date" id="date" data-required="yes">
            </div>
            <div class="mb-3 form-group col-md-12">
                <label class="form-label" for="nature">Nature (vidange, pneus, réparation...)</label>
                <input type="text" class="form-control" name="nature" id="nature">
            </div>
            <div class="mb-3 form-group col-md-12">
                <label class="form-label" for="pieces">Pièces utilisées</label>
                <input type="text" class="form-control" name="pieces" id="pieces">
            </div>
            <div class="mb-3 form-group col-md-4">
                <label class="form-label" for="cout">Coût</label>
                <input type="number" step="0.01" class="form-control" name="cout" id="cout">
            </div>
            <div class="mb-3 form-group col-md-4">
                <label class="form-label" for="compteur">Compteur actuel</label>
                <input type="number" step="0.01" class="form-control" name="compteur" id="compteur">
            </div>
            <div class="mb-3 form-group col-md-4">
                <label class="form-label" for="prochain_compteur">Prochain entretien (compteur)</label>
                <input type="number" step="0.01" class="form-control" name="prochain_compteur" id="prochain_compteur">
            </div>
            <div class="mb-3 form-group col-md-12">
                <label class="form-label" for="observations">Observations</label>
                <textarea class="form-control" name="observations" id="observations"></textarea>
            </div>
            <div class="mb-3 form-group col-md-12">
                <button type="submit" class="btn btn-primary">Enregistrer</button>
            </div>
        </div>
    </form>
</div><!-- .modal-body -->
