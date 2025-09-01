{% extends "base.php" %}

{% block title %} Gestion des lignes de factures {% endblock %}

{% block body %}
<div class="content container-fluid">
    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Ligne de Factures </h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{'factureLignes' | url }}">Ligne de factures</a></li>
                        <li class="breadcrumb-item active">Liste des lignes de factures</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

   {{layout.navStyle()}}
   
    <div class="row">
        <div class="col-sm-12">
            <div class="card card-table comman-shadow">
                <div class="card-body">

                    <div class="page-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="page-title">Lignes des factures</h3>
                            </div>
                            <div class="col-auto text-end float-end ms-auto download-grp">
                                <a href="#" onclick="return NioApp.loadModal({url:'{{ 'factureLignes/factureLigne-action/add/null' | url }}',afterLoad:function(myModal){UGEST.facturation.addFactureLigne(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-primary"><i
                                        class="fas fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table
                            class="table border-0 star-student table-hover table-center mb-0 datatable table-striped" id="dataTable">
                            <thead class="student-thread">
                                <tr>
                                    <th>Clients</th>
                                    <th>Article</th>
                                    <th>Réference</th>
                                    <th>Montant</th>
                                    <th>Etat de la facture</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {{layout.LayoutListLigneFactures(factureLignes)}}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
{% endblock %}