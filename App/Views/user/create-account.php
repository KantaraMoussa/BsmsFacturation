{% extends "base.php" %}

{% block title %} Nouvel utilisateur {% endblock %}

{% block body %}
<div class="content container-fluid">

    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-sub-header">
                    <h3 class="page-title">Nouvel utilisateur</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{ 'user/list' | url }}">Utilisateurs</a></li>
                        <li class="breadcrumb-item active">Nouvel utilisateur</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8">
            <div class="card comman-shadow">
                <div class="card-header">
                    <h4 class="card-title">Informations du compte</h4>
                </div>
                <div class="card-body">
                    <form action="{{ 'user/crud' | url }}" method="POST" id="add-user">
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="nom">Nom complet <span class="star-red">*</span></label>
                                <input type="text" class="form-control" name="nom" id="nom" required placeholder="ex : Ibrahima Camara">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="email">Email <span class="star-red">*</span></label>
                                <input type="email" class="form-control" name="email" id="email" required placeholder="nom@exemple.com">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="telephone">Téléphone <span class="star-red">*</span></label>
                                <input type="text" class="form-control" data-required="yes" name="telephone" id="telephone" required placeholder="9 chiffres">
                            </div>
                            <div class="form-group col-md-12 mb-3">
                                <label class="form-label" for="role">Rôle <span class="star-red">*</span></label>
                                <select name="role" data-required="yes" id="role" class="form-select">
                                    {{layout.select(role)|raw}}
                                </select>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="password">Mot de passe <span class="star-red">*</span></label>
                                <input type="password" data-required="yes" class="form-control" name="password" id="password" required placeholder="8 caractères minimum">
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label class="form-label" for="password-confirm">Confirmez le mot de passe <span class="star-red">*</span></label>
                                <input type="password" data-required="yes" class="form-control" name="password-confirm" id="password-confirm" required placeholder="8 caractères minimum">
                            </div>
                            <div class="form-group col-md-12 mt-2">
                                <button type="submit" class="btn btn-primary" id="add-user-btn">
                                    <i class="fa fa-user"></i>&nbsp; Créer le compte
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card comman-shadow">
                <div class="card-header"><h5 class="card-title"><i class="feather-help-circle"></i>&nbsp;Guide</h5></div>
                <div class="card-body">
                    <p>Ce formulaire crée un compte utilisateur avec accès à la plateforme, selon le rôle choisi :</p>
                    <ul class="ps-3">
                        <li><strong>admin</strong> : accès complet, y compris suppression, validation des factures et pilotage direction ;</li>
                        <li><strong>comptabilite</strong>, <strong>commercial</strong>, <strong>saisie</strong> : accès aux opérations courantes selon leur périmètre.</li>
                    </ul>
                    <p class="text-muted mb-0">L'email sert d'identifiant de connexion. Le compte est actif dès sa création.</p>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
