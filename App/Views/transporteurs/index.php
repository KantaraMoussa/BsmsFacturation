{% extends "base.php" %}

{% block title %} Gestion des Transporteurs {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Transporteur</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Transporteur</a></li>
                        <li class="breadcrumb-item active">Liste des transporteur</li>
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
                                <h3 class="page-title">Listes des personnelle</h3>
                            </div>
                            <div class="col-auto text-end float-end ms-auto download-grp">
                                <a href="#" onclick="return NioApp.loadModal({url:'{{ 'personnelle/transporteur-action/add/null' | url }}',afterLoad:function(myModal){UGEST.facturation.addTransporteur(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-primary"><i
                                        class="fas fa-plus"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table id="dataTable"
                            class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>Nom complet</th>
                                    <th>Email</th>
                                    <th>Téléphone</th>
                                     <th>Poste occupé</th>
                                    <th >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {{layout.LayoutListTransporteur(personnelle)}}
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