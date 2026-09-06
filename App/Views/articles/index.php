{% extends "base.php" %}

{% block title %} Gestion des Clients{% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Gestion des articles</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Articles</a></li>
                        <li class="breadcrumb-item active">Liste des articles</li>
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
                                <h3 class="page-title">Listes des articles</h3>
                            </div>
                            <div class="col-auto text-end float-end ms-auto download-grp">
                                <a href="#" onclick="return NioApp.loadModal({url:'{{ 'articles/article-action/add/null/produit' | url }}',afterLoad:function(myModal){UGEST.facturation.addArticle(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-dark"><i
                                        class="fas fa-plus"></i>&nbsp;Produit</a>

                                <a href="#" onclick="return NioApp.loadModal({url:'{{ 'articles/article-action/add/null/service' | url }}',afterLoad:function(myModal){UGEST.facturation.addArticle(myModal)}},{hi:this,type:'modal-lg'})" class="btn btn-warning text-white"><i
                                        class="fas fa-plus"></i>&nbsp;Services</a>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table
                            class="table  table-striped table-bordered" id="dataTable">
                            <thead class="student-thread">
                                <tr>
                                    <th>Libelle</th>
                                    <th>Marque</th>
                                    <th>Type</th>
                                    <th>Quantité</th>
                                    <th>Cathégorie</th>
                                    <th class="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {{layout.LayoutListArticles(articles)|raw}}
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