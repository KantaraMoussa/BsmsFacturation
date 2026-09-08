{% extends "base.php" %}

{% block title %} Gérer un utilisateur {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Gérer l'utilisateur {{user['fname_users']}} {{user['lname_users']}}</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{ 'user/list' | url }}">Utilisateurs</a></li>
                        <li class="breadcrumb-item active">Modifier</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8">
            <div class="card comman-shadow">
                <div class="card-header">
                    <h4 class="card-title">Informations et rôle</h4>
                </div>
                <div class="card-body">
                    <form action="{{ 'user/crud' | url }}" id="action-admin-user" data-id="{{user['id_users']}}">
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="nom">Nom complet</label>
                                <input type="text" class="form-control" name="nom" id="nom" data-required="yes" value="{{user['fname_users']}} {{user['lname_users']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="email">Email</label>
                                <input type="email" class="form-control" name="email" id="email" data-required="yes" value="{{user['email_users']}}">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="telephone">Téléphone</label>
                                <input type="text" class="form-control" name="telephone" id="telephone" data-required="yes" value="{{user['phone_users']}}">
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="role">Rôle</label>
                                <select class="form-select" name="role" id="role" data-required="yes">
                                    {% for r in roles %}
                                    <option value="{{r}}" {% if user['type_users'] == r %}selected{% endif %}>{{r}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class="form-group col-md-6 mt-2">
                                <button type="submit" class="btn btn-primary">Enregistrer les modifications</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card comman-shadow">
                <div class="card-header">
                    <h4 class="card-title">Statut du compte</h4>
                </div>
                <div class="card-body">
                    <p>Statut actuel :
                        {% if user['status_users'] == 'actif' %}
                        <span class="badge bg-success">actif</span>
                        {% else %}
                        <span class="badge bg-danger">inactif</span>
                        {% endif %}
                    </p>
                    <p class="text-muted">Un compte inactif ne peut plus se connecter à la plateforme.</p>
                    {% if user['id_users'] != _SESSION['id_user'] %}
                    <button type="button" id="toggle-user-status" data-id="{{user['id_users']}}" class="btn {% if user['status_users'] == 'actif' %}btn-danger{% else %}btn-success{% endif %} w-100">
                        {% if user['status_users'] == 'actif' %}Désactiver ce compte{% else %}Réactiver ce compte{% endif %}
                    </button>
                    {% else %}
                    <p class="text-muted"><em>Vous ne pouvez pas désactiver votre propre compte.</em></p>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
