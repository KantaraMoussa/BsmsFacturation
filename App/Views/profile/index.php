{% extends "base.php" %}

{% block title %}Home222{% endblock %}

{% block body %}


<div class="nk-content-body">

    <div class="nk-block">
        <div class="card">
            <div class="card-aside-wrap">
                <div class="card-inner card-inner-lg">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="personal">
                            <div class="nk-block-head">
                                <div class="nk-block-between d-flex justify-content-between">
                                    <div class="nk-block-head-content">
                                        <h4 class="nk-block-title">INFORMATION DU COMPTE</h4>

                                    </div>
                                    <div class="nk-tab-actions me-n1">
                                        <a href="{{student.getLinkUpdate()}}" class="btn btn-icon btn-trigger">
                                            <em class="icon ni ni-edit"></em>
                                        </a>
                                    </div>
                                </div>
                            </div><!-- .nk-block-head -->
                            <div class="nk-block">
                                <div class="nk-data data-list">
                                    <div class="data-head">
                                        <h6 class="overline-title">Informations Géneral</h6>
                                    </div>
                                    <div class="data-item">
                                        <div class="data-col">
                                            <span class="data-label">Nom Complet</span>
                                            <span class="data-value">{{ user.getFname() }} {{ user.getLname() }}</span>
                                        </div>
                                    </div><!-- data-item -->
                                    <div class="data-item">
                                        <div class="data-col">
                                            <span class="data-label">Nom à Afficher</span>
                                            <span class="data-value">{{ user.getUsername() }}</span>
                                        </div>
                                    </div><!-- data-item -->

                                    <div class="data-item">
                                        <div class="data-col">
                                            <span class="data-label">Numéro de téléphone</span>
                                            <span class="data-value text-soft">{{user.getPhone() }}</span>
                                        </div>
                                    </div><!-- data-item -->

                                    <div class="data-item">
                                        <div class="data-col">
                                            <span class="data-label">Email</span>
                                            <span class="data-value">{{user.getEmail() }}</span>
                                        </div>
                                    </div><!-- data-item -->
                                    <div class="data-item" data-tab-target="#address">
                                        <div class="data-col">
                                            <span class="data-label">Type Utilisateur </span>
                                            <span class="data-value">{{ user.getType() }}</span>
                                        </div>
                                    </div><!-- data-item -->
                                    <div class="data-item" data-tab-target="#address">
                                        <div class="data-col">
                                            <span class="data-label">Position </span>
                                            <span class="data-value">{{ user.getPosition() }}</span>
                                        </div>
                                    </div><!-- data-item -->
                                    <div class="data-item" data-tab-target="#address">
                                        <div class="data-col">
                                            <span class="data-label">Departement </span>
                                            <span class="data-value">{{ user.getDepartment() }}</span>
                                        </div>
                                    </div><!-- data-item -->
                                </div><!-- data-list -->
                                <div class="nk-data data-list">
                                    <div class="data-head">
                                        <h6 class="overline-title">Preferences</h6>
                                    </div>
                                    <div class="data-item">
                                        <div class="data-col">
                                            <span class="data-label">Langue</span>
                                            <span class="data-value">Français (France)</span>
                                        </div>
                                        <div class="data-col data-col-end"><a href="#"  class="link link-primary">Changer Langue</a></div>
                                    </div><!-- data-item -->
                                    <div class="data-item">
                                        <div class="data-col">
                                            <span class="data-label">Date Format</span>
                                            <span class="data-value">M, D, YYYY</span>
                                        </div>
                                        <div class="data-col data-col-end"><a href="#"  class="link link-primary">Changer</a></div>
                                    </div><!-- data-item -->
                                    <div class="data-item">
                                        <div class="data-col">
                                            <span class="data-label">Timezone</span>
                                            <span class="data-value">Guinée (GMT +0:00)</span>
                                        </div>
                                        <div class="data-col data-col-end"><a href="#" data-bs-toggle="modal" data-bs-target="#modalTimezone" class="link link-primary">Changer</a></div>
                                    </div><!-- data-item -->
                                </div><!-- data-list -->
                            </div><!-- .nk-block -->
                        </div><!-- .tab-pan -->


                        <div class="tab-pane fade" id="activity">
                            <div class="nk-block-head">
                                <div class="nk-block-between d-flex justify-content-between">
                                    <div class="nk-block-head-content">
                                        <h4 class="nk-block-title">ACTIVITE DU COMPTE</h4>
                                    </div>
                                </div>
                            </div><!-- .nk-block-head -->
                            <div class="nk-block">
                                                    <div class="card border border-light">
                                                        <table class="table table-ulogs">
                                                            <thead class="table-light">
                                                                <tr>
                                                                    <th class="tb-col-os"><span class="overline-title">Browser <span class="d-sm-none">/ IP</span></span></th>
                                                                    <th class="tb-col-ip"><span class="overline-title">IP</span></th>
                                                                    <th class="tb-col-time"><span class="overline-title">Time</span></th>
                                                                    <th class="tb-col-action"><span class="overline-title">&nbsp;</span></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="tb-col-os">Chrome on Window</td>
                                                                    <td class="tb-col-ip"><span class="sub-text">192.149.122.128</span></td>
                                                                    <td class="tb-col-time"><span class="sub-text">11:34 PM</span></td>
                                                                    <td class="tb-col-action"></td>
                                                                </tr>
                                                               
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div><!-- .nk-block-head -->
                        </div>


                        <div class="tab-pane fade" id="secure">
                            <div class="nk-block-head">
                                <div class="nk-block-between d-flex justify-content-between">
                                    <div class="nk-block-head-content">
                                        <h4 class="nk-block-title">PARAMETRE DE SECURITE</h4>
                                    </div>
                                </div>
                            </div><!-- .nk-block-head -->

                            <div class="nk-block">
                                                    <div class="card border border-light">
                                                        <div class="card-inner-group">
                                                            <div class="card-inner">
                                                                <div class="between-center flex-wrap flex-md-nowrap g-3">
                                                                    <div class="nk-block-text">
                                                                        <h6>Enregistrer mes journaux d'activité</h6>
                                                                        <p>Enregistrement de tous vos journaux d'activité, y compris les activités inhabituelles détectées.</p>
                                                                    </div>
                                                                    <div class="nk-block-actions">
                                                                        <ul class="align-center gx-3">
                                                                            <li class="order-md-last">
                                                                                <div class="custom-control custom-switch me-n2">
                                                                                    <input type="checkbox" disabled class="custom-control-input" checked="" id="activity-log">
                                                                                    <label class="custom-control-label" for="activity-log"></label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div><!-- .card-inner -->
                                                            <div class="card-inner">
                                                                <div class="between-center flex-wrap g-3">
                                                                    <div class="nk-block-text">
                                                                        <h6>Changer le mot de passe</h6>
                                                                        <p>Définissez un mot de passe unique pour protéger votre compte.</p>
                                                                    </div>
                                                                    <div class="nk-block-actions flex-shrink-sm-0">
                                                                        <ul class="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                                                                            <li class="order-md-last">
                                                                                <a href="{{ 'profile/change-password' | url }}" class="btn btn-primary">Changer le mot de passe</a>
                                                                            </li>
                                                                            <li>
                                                                                <em class="text-soft text-date fs-12px">Changer le mot de passe: <span>Oct 2, 2019</span></em>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div><!-- .card-inner -->
                                                            <div class="card-inner">
                                                                <div class="between-center flex-wrap flex-md-nowrap g-3">
                                                                    <div class="nk-block-text">
                                                                        <h6>2 Factor Auth &nbsp; <span class="badge bg-success ms-0">Désactivé</span>
                                                                        </h6>
                                                                        <p>Sécurisez votre compte avec la sécurité 2FA. Lorsqu'il est activé, vous devrez entrer non seulement votre mot de passe, mais également un code spécial à l'aide de l'application. Vous pouvez recevoir ce code par sms. </p>
                                                                    </div>
                                                                    <div class="nk-block-actions">
                                                                        <a href="#" class="btn btn-primary">Désactivé</a>
                                                                    </div>
                                                                </div>
                                                            </div><!-- .card-inner -->
                                                        </div><!-- .card-inner-group -->
                                                    </div><!-- .card -->
                                                </div><!-- .nk-block -->

                        </div>





                    </div><!-- .tab-content -->
                </div><!-- .card-inner -->



                <div class="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg" data-content="userAside" data-toggle-screen="lg" data-toggle-overlay="true">
                    <div class="card-inner-group" data-simplebar>
                        <div class="card-inner">
                            <div class="user-card">
                                <div class="user-avatar bg-primary">
                                    <span>US</span>
                                </div>
                                <div class="user-info">
                                    <span class="lead-text">{{ user.getFname() }} {{user.getLname() }}</span>
                                    <span class="sub-text">{{ user.getPhone() }}</span>
                                </div>
                                <div class="user-action">
                                    <div class="dropdown">
                                        <a class="btn btn-icon btn-trigger me-n2" data-bs-toggle="dropdown" href="#"><em class="icon ni ni-more-v"></em></a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <ul class="link-list-opt no-bdr">
                                                <li><a href="#"><em class="icon ni ni-camera-fill"></em><span>Changer la photo</span></a></li>
                                                <li><a href="#"><em class="icon ni ni-edit-fill"></em><span>Mettre à jour le profil</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- .user-card -->
                        </div>
                        <div class="card-inner p-0">
                            <ul class="link-list-menu nav nav-tabs">
                                <li class="d-block"><a data-bs-toggle="tab" data-bs-target="#personal" class="active" href="#"><em class="icon ni ni-user-fill-c"></em><span>Informations personnel</span></a></li>
                                <li><a data-bs-toggle="tab" data-bs-target="#activity" href="#"><em class="icon ni ni-activity-round-fill"></em><span>L'activité du compte</span></a></li>
                                <li><a data-bs-toggle="tab" data-bs-target="#secure" href="#"><em class="icon ni ni-lock-alt-fill"></em><span>Les paramètres de sécurité</span></a></li>
                          
                            </ul>
                        </div><!-- .card-inner -->
                        <div class="card-inner">
                            <div class="user-account-info py-0">
                                <h6 class="overline-title-alt">Dernière connexion</h6>
                                <p>{{ user.getDateLastLogin() | date('d-m-Y H:i:s') }}</p>
                                <h6 class="overline-title-alt">Dernière deconnexion</h6>
                                <p>{{ user.getDateLastLogout() |  date('d-m-Y H:i:s') }}</p>
                                <h6 class="overline-title-alt">IP de connexion</h6>
                                <p>192.129.243.28</p>
                            </div>
                        </div><!-- .card-inner -->
                    </div><!-- .card-inner-group -->
                </div><!-- .card-aside -->
            </div><!-- .card-aside-wrap -->
        </div><!-- .card -->
    </div><!-- .nk-block -->
</div>

{% endblock %}