{% extends "base.php" %}

{% block title %} Gestion des paiements {% endblock %}

{% block body %}
<div class="content container-fluid">
    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Paiements Factures </h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{'paiements' | url }}">Paiements</a></li>
                        <li class="breadcrumb-item active">Liste des paiements</li>
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
                                <h3 class="page-title">Historique des paiements</h3>
                            </div>

                        </div>
                    </div>
                    <div class="table-responsive">
                        <table id="dataTable"
                            class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>#Commandes</th>
                                    <th>#Factures</th>
                                    <th>Clients</th>
                                    <th>Date paiement</th>
                                    <th>Montant</th>
                                    <th>Mode paiement</th>
                             
                                </tr>
                            </thead>
                            <tbody>
                                {{layout.LayoutListPaiement(paiements)|raw}}
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