{% extends "base.php" %}

{% block title %} Gestion des Commandes {% endblock %}

{% block body %}
<div class="content container-fluid">
    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Commandes </h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{'commandes' | url }}">Commandes</a></li>
                        <li class="breadcrumb-item active">Liste des commandes</li>
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
                                <h3 class="page-title">Listes des Commandes</h3>
                            </div>
                    
                        </div>
                    </div>


                    <div class="table-responsive">
                        <table id="dataTable"
                            class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>#Commande</th>
                                    <th>Date</th>
                                    <th>Montant total</th>
                                    <th>Montant payé</th>
                                    <th>Reste à payé</th>
                                     <th>Payé a hauteur de ? </th>
         
                                    <th>Clients</th>
                                    <th> Livraison ?</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {{layout.LayoutListCommandes(commandes)|raw}}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
