{% extends "base.php" %}

{% block title %} Gestion des addresses {% endblock %}

{% block body %}
<div class="content container-fluid">
    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Addresse clients</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{'clients' | url }}">Clients</a></li>
                        <li class="breadcrumb-item active"><a href="{{'adresses' | url }}">Adresses</a></li>
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
                                <h3 class="page-title">Listes des clients</h3>
                            </div>
                            <div class="col-auto text-end float-end ms-auto download-grp">
                                <a href="{{ 'addresses/addresse-action/add/null' | url }}" class="btn btn-primary"><i
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
                                    <th>Email</th>
                                    <th>Téléphone</th>
                                    <th>Type adresse</th>
                                    <th>Rue</th>
                                    <th>Ville</th>
                                    <th>Code postal</th>
                                    <th>Pays</th>

                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {{layout.LayoutListAddresses(addresses)|raw}}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
