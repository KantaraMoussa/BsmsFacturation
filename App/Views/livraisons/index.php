{% extends "base.php" %}

{% block title %} Gestion des Commandes {% endblock %}

{% block body %}
<div class="content container-fluid">
    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Livraisons </h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{'livraisons' | url }}">livraisons</a></li>
                        <li class="breadcrumb-item active">Liste des commandes livrées </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {{layout.navStyle()|raw}}
    <div class="row">
        <div class="col-sm-12">
            <div class="card card-table comman-shadow">
                <div class="card-body">

                    <div class="page-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="page-title">Lisvraisons Programmées</h3>
                            </div>
                            <div class="col-auto text-end float-end ms-auto download-grp">
                                <a href="#" onclick="return NioApp.loadModal({url:'{{ 'livraisons/livraison-action/add/null' | url }}',afterLoad:function(myModal){UGEST.facturation.addLivraison(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-primary"><i class="fas fa-plus"></i></a>
                            </div>
                        </div>
                    </div>

 
                    <div class="table-responsive">
                        <table id="dataTable"
                            class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>#Commande</th>
                                    <th>Client</th>
                                    <th>Articles</th>
                                    <th>Date de la commande</th>
                                    <th>Transporteur</th>
                                    <th>Téléphone</th>
                                     <th>Email</th>
                                    <th>Etat</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               {{layout.LayoutListLivraisons(livraisons)|raw}}
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