{% extends "base.php" %}

{% block title %} Tableau de Bord{% endblock %}

{% block body %}
<div class="content container-fluid">
    <div class="page-header">
        <div class="row align-items-center">
            <div class="col">
                <h3 class="page-title fw-bolder">Plateform de Facturation | <span class="text-warning">BOURSE SUPPLY </span> MINING SARLU</h3>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{'dashboard' | url }}">Dashboard</a></li>
                    <li class="breadcrumb-item active">Factures</li>
                </ul>
            </div>
        </div>
    </div>
    
     {{layout.navStyle()}}

   
  
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header">
                    <div class="card-title">Liste des factures émises</div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-stripped table-hover datatable table-bordered">
                               <thead class="thead-light">
                                <tr>
                                    <th>Clients</th>
                                    <th>Etat de la commande</th>
                                    <th>Libelle</th>
                                     <th>No facture</th>
                                     <th>Etat facture</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              {{layout.LayoutListFactures(factures)}}
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