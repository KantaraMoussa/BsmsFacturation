{% extends "base.php" %}

{% block title %} Détail commande {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row align-items-center">
            <div class="col">
                <h3 class="page-title fw-bolder">Commande | <span class="text-warning">{{commande['reference_commandes']}}</span></h3>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{'commandes' | url}}">Commandes</a></li>
                    <li class="breadcrumb-item active">{{commande['reference_commandes']}}</li>
                </ul>
            </div>
            <div class="col-auto">
                <a href="{{ "commandes/commande-action/update/#{commande['commande_id']}" | url }}" class="btn btn-warning">
                    <i class="feather-edit"></i>&nbsp;Modifier
                </a>
                <a href="{{ 'factures/facture-action/add/null' | url }}" class="btn btn-primary">
                    <i class="feather-file-plus"></i>&nbsp;Nouvelle facture
                </a>
                {% if _SESSION['role_utilisateur'] == 'admin' %}
                <a href="{{ "commandes/commande-action/delete/#{commande['commande_id']}" | url }}" class="btn btn-danger">
                    <i class="feather-trash-2"></i>&nbsp;Supprimer
                </a>
                {% endif %}
            </div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-lg-12">
            <div class="card invoice-info-card">
                <div class="card-body pb-0">
                    <div class="invoice-item invoice-item-one">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="invoice-logo">
                                    <img src="{{base_url()}}assets/img/logo-bsms/logo.png" alt="logo">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="invoice-info">
                                    <div class="invoice-head">
                                        <h2 class="text-warning">Commande</h2>
                                        <p>Réference : {{commande['reference_commandes']}}</p>
                                        <p>État : <span class="fw-bolder">{{commande['etat_commandes']}}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="invoice-item">
                        <div class="row">
                            <div class="col-lg-6 col-md-12">
                                <div class="invoice-info">
                                    <strong class="customer-text">Emis par : </strong>
                                    <h6 class="invoice-name">{{entreprise['name']|raw}}</h6>
                                    <p class="invoice-details invoice-details-two">
                                        {{entreprise['telephone']}} <br>
                                        <a href="mailto:{{entreprise['email']}}">{{entreprise['email']}}</a><br>
                                        {{entreprise['BP']}} , {{entreprise['ville']}}
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12">
                                <div class="invoice-info">
                                    <strong class="customer-text-one">Facturé à</strong>
                                    <h6 class="invoice-name"><a href="{{ "Clients/detail/#{commande['client_id_commandes']}" | url }}">{{commande['noms_clients']}}</a></h6>
                                    <p class="invoice-details invoice-details-two">
                                        {{commande['telephone_clients']}}
                                        {% if commande['email_clients'] %} / <a href="mailto:{{commande['email_clients']}}">{{commande['email_clients']}}</a>{% endif %}
                                        {% if commande['rue_addresses'] or commande['ville_addresses'] %}
                                        <br>
                                        {{commande['rue_addresses']}} , <br>
                                        BP {{commande['code_postal_addresses']}} , {{commande['ville_addresses']}} - {{commande['pays_addresses']}}
                                        {% endif %}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="invoice-item invoice-table-wrap">
                        <div class="row">
                            <h5 class="text-dark">Listes des factures Emises : </h5>
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-center mb-0 table-bordered datatable">
                                        <thead>
                                            <tr>
                                                <th>N°</th>
                                                <th>Libelle</th>
                                                <th>Etat</th>
                                                <th class="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {{layout.LayoutListFactureParCommande(factures)|raw}}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-12 col-md-12">
                            <div class="invoice-total-card">
                                <div class="invoice-total-box">
                                    <div class="invoice-total-inner">
                                        <p>Montant Payé <span>{{commande['mpc'] | number_format }} GNF</span></p>
                                        <p>Reste <span>{{commande['reste'] | number_format }} GNF</span></p>
                                        <p>% Payé <span>{{commande['taux']}}</span></p>
                                    </div>
                                    <div class="invoice-total-footer">
                                        <h4>Montant total commande <span>{{commande['mttc'] | number_format }} GNF</span></h4>
                                    </div>
                                </div>
                                {% if commande['mttc'] > 0 %}
                                <h4 class="customer-text text-danger text-center">{{commande['ChiffreEnLettre'] }}</h4>
                                {% endif %}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
