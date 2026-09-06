<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">
    <div class="card-header bg-dark">
        <h3 class="invoice-name text-white fw-bolder">Historique des avoirs</h3>
    </div>
    <div class="table-responsive table-primary mb-5">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Montant</th>
                    <th>Motif</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {% for avoir in avoirs %}
                <tr>
                    <td>{{avoir['montant_avoirs'] | number_format }} GNF</td>
                    <td>{{avoir['motif_avoirs']}}</td>
                    <td>{{avoir['date_avoirs'] | date('d/m/Y')}}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>

    {% if montantRestant > 0 %}
    <div class="row mb-3">
        <div class="col-md-12">
            <label>Solde restant pouvant faire l'objet d'un avoir</label>
            <h6 class="customer-text-one fw-bolder">{{montantRestant | number_format }} GNF</h6>
        </div>
    </div>
    <hr>
    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-avoir" data-id="{{id}}">
        <div class="card-header bg-warning">
            <h3 class="invoice-name fw-bolder text-white">Émettre un avoir</h3>
        </div>
        <hr>
        <div class="row">
            <div class="mb-3 form-group col-md-6">
                <label class="form-label" for="montant">Montant</label>
                <input type="number" step="0.01" class="form-control" name="montant" id="montant" data-required="yes" max="{{montantRestant}}">
            </div>
            <div class="mb-3 form-group col-md-6">
                <label class="form-label" for="date">Date</label>
                <input type="date" class="form-control" name="date" id="date" data-required="yes">
            </div>
            <div class="mb-3 form-group col-md-12">
                <label class="form-label" for="motif">Motif</label>
                <input type="text" class="form-control" name="motif" id="motif" data-required="yes">
            </div>
            <div class="mb-3 form-group col-md-12">
                <button type="submit" class="btn btn-primary">Émettre l'avoir</button>
            </div>
        </div>
    </form>
    {% else %}
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Facture entièrement couverte.</strong> Aucun avoir supplémentaire n'est possible.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    {% endif %}
</div><!-- .modal-body -->
