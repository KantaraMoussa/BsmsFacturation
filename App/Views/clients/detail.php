{% extends "base.php" %}

{% block title %} Gestion des Clients{% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title fw-bolder">Client | <span class="text-warning">{{client['noms_clients']}}</span></h3>
                    <ul class="breadcrumb">
                        <a href="{{ "Clients/client-action/update/#{client['client_id']}"  | url }}" class="btn btn-warning text-white"><i
                                class="fas fa-edit"></i></a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {{layout.navStyleClient(statitistique)|raw}}
    <div class="row">
        <div class="col-lg-4">
            {% if client['code_postal_addresses']  %}
            <div class="student-personals-grp">
                <div class="card">
                    <div class="card-body">
                        <div class="page-header">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h3 class="page-title">Addresse du client</h3>
                                </div>
                                <div class="col-auto text-end float-end ms-auto download-grp">
                                    <a href="{{ "addresses/addresse-action/update/#{client['adresse_id']}" | url }}" class="btn btn-primary"><i
                                            class="fas fa-edit"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="personal-activity">
                            <div class="personal-icons">
                                <i class="feather-user"></i>
                            </div>
                            <div class="views-personal">
                                <h4>Client</h4>
                                <h5>{{client['noms_clients']}}</h5>
                            </div>
                        </div>

                        <div class="personal-activity">
                            <div class="personal-icons">
                                <i class="feather-phone-call"></i>
                            </div>
                            <div class="views-personal">
                                <h4>Mobile</h4>
                                <h5>{{client['telephone_clients']}}</h5>
                            </div>
                        </div>
                        <div class="personal-activity">
                            <div class="personal-icons">
                                <i class="feather-mail"></i>
                            </div>
                            <div class="views-personal">
                                <h4>Email</h4>
                                <h5><a href="mailTo:{{client['email_clients']}}" class="__cf_email__"
                                        data-cfemail="d4bebbb194b3b9b5bdb8fab7bbb9">{{client['email_clients']}}</a>
                                </h5>
                            </div>
                        </div>
                        <div class="personal-activity">
                            <div class="personal-icons">
                                <i class="feather-user"></i>
                            </div>
                            <div class="views-personal">
                                <h4>Type Addresse</h4>
                                <h5>{{client['type_addresses']}}</h5>
                            </div>
                        </div>

                        <div class="personal-activity mb-0">
                            <div class="personal-icons">
                                <i class="feather-map-pin"></i>
                            </div>
                            <div class="views-personal">
                                <h4>Address</h4>
                                <h5>{{client['code_postal_addresses']}} ,{{client['rue_addresses']}} ,{{client['ville_addresses']}} , {{client['pays_addresses']}} </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {%else %}
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Ajouté address du client</h5>
                </div>
                <div class="card-body pt-0">
                    <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-addresse" data-type="add" data-id="{{id}}">
                        <div class="settings-form">
                            <input type="hidden" class="form-control" name="client" id="client" value="{{id}}">
                            <div class="form-group">
                                <label>Type addresse <span class="star-red">*</span></label>
                                <select class="form-select" name="type_addr" id="type_addr" data-required="yes">
                                    <option value="facturation">Facturation</option>
                                    <option value="livraison">Livraison</option>
                                </select>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Ville <span class="star-red">*</span></label>
                                        <input type="text" class="form-control" name="ville" id="ville" data-required="yes">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Rue <span class="star-red">*</span></label>
                                        <input type="text" class="form-control" name="rue" id="rue" data-required="yes">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Zip/Postal Code <span class="star-red">*</span></label>
                                        <input type="text" class="form-control" name="code" id="code" data-required="yes">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Pas <span class="star-red">*</span></label>
                                        <input type="text" class="form-control" name="pays" id="pays" data-required="yes">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-0">
                                <div class="settings-btns">
                                    <button type="submit" class="btn btn-primary"> <span class="fa fa-plus"></span>&nbsp;Enregistrer</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {% endif %}

        </div>
        <div class="col-lg-8">
            <div class="card flex-fill comman-shadow">
                <div class="card-body">

                    <div class="calendar-info calendar-info1">
                        <div class="upcome-event-date">
                            <h3 class="fw-bolder text-black"> Listes des commande actives </h3>
                            <span><i class="fas fa-ellipsis-h"></i></span>
                        </div>
                        {%for commande in commandes %}
                        <div class="calendar-details">
                            <p>{{commande['date_commandes'] | date('d/m/Y')}}</p>
                            <div class="calendar-box normal-bg">
                                <div class="calandar-event-name">
                                    <h4>
                                    
                                    <a href="{{ "commandes/detail/#{commande['commande_id']}" | url }}"> {{commande['reference_commandes'] }} </a></h4>
                                    <h5 class="fw-bolder text-black">{{commande['etat_commandes'] }}</h5>
                                </div>
                                <span class="fw-bolder text-black">MTTC: {{commande['mttc'] | number_format }} GNF</span>
                                <span class="fw-bolder text-black">MTP: {{commande['mpc'] | number_format }} GNF</span>
                                <span class="fw-bolder text-black">Reste: {{commande['reste'] | number_format }} GNF</span>
                                <span class="fw-bolder text-black">Taux: {{commande['taux'] }}</span>
                            </div>
                        </div>
                        {%endfor%}
                    </div>
                </div>
                <div class="card-footer">
                    <div align="right">
                        <a href="{{ 'commandes/commande-action/add/null' | url }}" class="btn btn-primary"><i
                                class="fas fa-plus"></i>&nbsp; Créer une Commande </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
     <div class="row">
        <div class="col-sm-12">
            <div class="card ">
                <div class="card-body">
                    <div class="page-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="page-title">Listes des factures</h3>
                            </div>
                            <div class="col-auto text-end float-end ms-auto download-grp">
                                <a href="{{ 'factures/facture-action/add/null' | url }}" class="btn btn-primary"><i
                                        class="fas fa-plus"></i>&nbsp;Nouvelle Facture</a>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table
                            class="table border-0 star-student table-hover table-center mb-0 datatable table-striped" id="dataTable">
                            <thead class="student-thread">
                                <tr>
                                    <th>#Commande</th>
                                    <th>#facture</th>

                                    <th>MTTC</th>
                                    <th>M.PAY</th>

                                    <th>Reste</th>
                                    <th>% Pay</th>

                           



                                    <th>Etat facture</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {{layout.LayoutListFacturesFromClient(factures)|raw}}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
{% endblock %}
