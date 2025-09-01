<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">
    <div class="card-header bg-dark">
        <h3 class="invoice-name text-white  fw-bolder">Historique Paiement</h3>
    </div>
    <div class="table-responsive table-primary mb-5">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Montant</th>
                    <th>Date Paiement</th>
                    <th>Mode Paiement</th>
                </tr>
            </thead>
            <tbody>
                {% set sum = 0 %}

                {%for paiement in paiements %}
                {% set sum = sum + paiement['montant_paiements']  %}
                <tr>
                    <td>{{paiement['montant_paiements'] | number_format }} GNF</td>
                    <td>{{paiement['date_paiements'] | date('d/m/Y')}}</td>
                    <td>{{paiement['mode_paiements']}}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>

    </div>
    <div class="row">
        {% set rest = totalApayer- sum  %}
        <div class="col-md-4">
            <label for="">Montant Total</label>
            <h6 class="customer-text-one fw-bolder"> {{totalApayer | number_format }} GNF</h6>
        </div>
        <div class="col-md-4">
            <label for="">Montant Payé</label>
            <h6 class="customer-text-one fw-bolder">{{sum | number_format }} GNF</h6>
        </div>
        <div class="col-md-4">
            <label for="">Reste à Payé</label>
            <h6 class="customer-text-one fw-bolder">{{ rest | number_format }} GNF</h6>
        </div>
    </div>
    <hr>
    {% if statusFacture != 'payée' %}
    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-paiements" data-type="{{type}}" data-id="{{id}}">
        {%if type =='add'%}
        <div class="card-header bg-warning">
            <h3 class="invoice-name fw-bolder text-white">Effectué un paiement</h3>
        </div>
        <hr>
        <div class="row">
            <div class="mb-3 form-group col-md-12">
                <label class="form-label" for="paiement">Mode de Paiement</label>
                <select class="form-select" name="paiement" id="paiement" data-required="yes">
                    <option value="Virement">Virement</option>
                    <option value="Espèce">Espèce</option>
                    <option value="Chèque">Chèque</option>
                </select>
            </div>
            <div class="mb-3 form-group col-md-6">
                <label class="form-label" for="prix">Prix</label>
                <input type="number" class="form-control" name="prix" id="prix" data-required="yes">
            </div>
            <div class="mb-3 form-group col-md-6">
                <label class="form-label" for="date">Date Paiement</label>
                <input type="date" class="form-control" name="date" id="date" data-required="yes">
            </div>
            <div class="mb-3 form-group col-md-12">
                <button type="submit" class="btn btn-primary ">Procéder au Paiement</button>
            </div>

        </div>
        {%else %}
        <div class="row" data-id="">

        </div>
        {% endif %}
    </form>
    {% else %}
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Bonne nouvelle !</strong> Cette facture à été completement payée
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    {% endif %}



</div><!-- .modal-body -->