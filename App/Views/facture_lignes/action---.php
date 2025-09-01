<a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
<div class="modal-body modal-body-md">
    <div class="row">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Information Commande</h3>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <label for="">Client</label>
                    <input type="text" value="{{facture['noms_clients']}}" readonly="true" disabled
                        class="form-control">
                </div>
                <div class="col-md-4">
                    <label for="">Email</label>
                    <input type="text" value="{{facture['email_clients']}}" readonly="true" disabled
                        class="form-control">
                </div>
                <div class="col-md-4">
                    <label for="">Telephone</label>
                    <input type="text" value="{{facture['telephone_clients']}}" readonly="true" disabled
                        class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <label for="">Date de la Commande</label>
                    <input type="text" value="{{facture['date_commandes']}}" readonly="true" disabled
                        class="form-control">
                </div>
                <div class="col-md-6">
                    <label for="">Etat de la commande</label>
                    <input type="text" value="{{facture['etat_commandes']}}" readonly="true" disabled
                        class="form-control">
                </div>

            </div>
            <hr>
            <div class="row">
                <div class="col-md-4">
                    <label for="">Date Emission Facture</label>
                    <input type="text" value="{{facture['date_emission_factures']}}" readonly="true" disabled
                        class="form-control">
                </div>
                <div class="col-md-4">
                    <label for="">Date Echeance Facture</label>
                    <input type="text" value="{{facture['date_echeance_factures']}}" readonly="true" disabled
                        class="form-control">
                </div>
                <div class="col-md-4">
                    <label for="">Etat de la Facture</label>
                    <input type="text" value="{{facture['statut_factures']}}" readonly="true" disabled
                        class="form-control">
                </div>
            </div>
        </div>
    </div>
    <form action="{{ 'facture/crud' | url }}" class="pt-2" id="action-facture-ligne" data-type="{{type}}">
        {%if type =='add'%}
        <h3 class="card-title">Ajouter des articles à la facture</h3>
        <hr>
        <div class="row">
            <div class="mb-3">
                <label class="form-label" for="client">Article(s)</label>
                <select class="form-select" name="article" id="article">
                    {% for article in articles %}
                    <option value="{{article['libelle_articles']}}">{{article['libelle_articles']}}</option>
                    {% endfor %}
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label" for="quantite">Quantité</label>
                <input type="number" class="form-control" step="1" name="quantite" id="quantite" required>
            </div>
            <div class="mb-3">
                <label class="form-label" for="prix">Prix</label>
                <input type="number" class="form-control" name="prix" id="prix" required>
            </div>
            <div class="mb-3">
                <label class="form-label" for="tva">Taux TVA</label>
                <input type="number" class="form-control" step="1" name="tva" id="tva" required>
            </div>
            <hr>
            <h3 class="title">Montants</h3>
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-4">
                        <label class="form-label" for="mtf">Montant Facture</label>
                        <input type="number" class="form-control" name="mtf" id="mtf" disabled readonly="true">
                    </div>
                    <div class="col-md-4">
                        <label class="form-label" for="mttva">Montant TVA</label>
                        <input type="number" class="form-control" step="1" name="mttva" id="mttva" disabled
                            readonly="true">
                    </div>
                    <div class="col-md-4">
                        <label class="form-label" for="mtttc">Montant TTC (Final)</label>
                        <input type="number" class="form-control" step="1" name="mtttc" id="mtttc" disabled
                            readonly="true">
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-warning">Sauvegarder</button>
        </div>
        {%else %}
        <div class="row" data-id="">

        </div>
        {% endif %}

    </form>

</div><!-- .modal-body -->