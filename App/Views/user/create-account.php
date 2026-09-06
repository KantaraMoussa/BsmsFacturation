<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <title>PLATEFORME DE GESTION DE RENDEZ VOUS - LOGIN </title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{base_url()}}assets/img/favicon.png">

    <!-- Fontfamily -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap" rel="stylesheet">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{base_url()}}assets/plugins/bootstrap/css/bootstrap.min.css">

    <!-- Feathericon CSS -->
    <link rel="stylesheet" href="{{base_url()}}assets/plugins/feather/feather.css">

    <!-- Pe7 CSS -->
    <link rel="stylesheet" href="{{base_url()}}assets/plugins/icons/flags/flags.css">

    <!-- Fontawesome CSS -->
    <link rel="stylesheet" href="{{base_url()}}assets/plugins/fontawesome/css/fontawesome.min.css">
    <link rel="stylesheet" href="{{base_url()}}assets/plugins/fontawesome/css/all.min.css">

    <!-- Main CSS -->
    <link rel="stylesheet" href="{{base_url()}}assets/css/style.css">
    <!-- other CSS -->
    <link id="skin-default" rel="stylesheet" href="{{base_url()}}css/animate.min.css">
    <link id="skin-default" rel="stylesheet" href="{{base_url()}}css/datatable.min.css">
    <link id="skin-default" rel="stylesheet" href="{{base_url()}}css/theme.css">
</head>

<body>

    <!-- Main Wrapper -->
    <div class="main-wrapper login-body">
        <div class="login-wrapper">
            <div class="container">
                <div class="loginbox">
                    <div class="login-left" class="login-right" style="width: 40% !important;">
                        <img class="img-fluid" src="{{base_url()}}assets/img/rdv.png" alt="Logo">
                    </div>
                    <div class="login-right" class="login-right" style="width: 60% !important;">

                        <div class="login-right-wrap">
                            <!-- Form -->
                            <div class="nk-block-head mb-10">
                                <div class="nk-block-head-content">
                                    <h1 class="h1 text-uppercase">Créer votre compte ici </h1>
                                    <div class="nk-block-des">
                                        <p>Notre plateforme de gestion de rendez-vous est un outil complet et efficace conçu pour simplifier et optimiser la prise de rendez-vous. Que vous soyez un professionnel de la santé, un salon de beauté, un cabinet juridique, ou toute autre entreprise nécessitant la planification et la gestion de rendez-vous, notre plateforme est conçue pour répondre à vos besoins</p>
                                    </div>
                                </div>
                            </div><!-- .nk-block-head -->
                            <hr style="width:50px;background-color: #336699;">

                            <form action="{{'user/crud' | url }}" method="POST" id="add-user">
                                <div class="row">
                                    <div class="col-md-12 mb-20">
                                        <div class="form-group">
                                            <label>Nom Complet: <span class="login-danger">*</span></label>
                                            <input type="text" class="form-control" name="nom" id="nom" required placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-20">
                                        <div class="form-group">
                                            <label>Email : <span class="login-danger">*</span></label>
                                            <input type="email" class="form-control" name="email" id="email" required placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-20">
                                        <div class="form-group">
                                            <label>Téléphone: <span class="login-danger">*</span></label>
                                            <input type="text" class="form-control" data-required="yes" name="telephone" id="telephone" required placeholder="**********">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-20">
                                        <div class="form-group">
                                            <label>Role : <span class="login-danger">*</span></label>
                                            <select name="role" data-required="yes" id="role" class="form-control js-select2 form-select">
                                                {{layout.select(role)|raw}}
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-20">
                                        <div class="form-group">
                                            <label>Mot de Pass : <span class="login-danger">*</span></label>
                                            <input type="password" data-required="yes" class="form-control" name="password" id="password" required placeholder="**********">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-20">
                                        <div class="form-group">
                                            <label>Confirmez Mot de Pass : <span class="login-danger">*</span></label>
                                            <input type="password" data-required="yes" class="form-control" name="password-confirm" id="password-confirm" required placeholder="**********">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-end">
                                    <button type="submit" class="btn btn-primary" id="add-user-btn">
                                        <i class="fa fa-user"></i>&nbsp;
                                        Je crée mon compte
                                    </button>
                                </div>
                            </form>
                            <!-- /Form -->
                            <div class="forgotpass">
                                <div class="remember-me">
                                    <label class="custom_check mr-2 mb-0 d-inline-flex remember-me"> Avez vous un compte ?

                                    </label>
                                </div>
                                <a href="{{'' | url}}">Connexion</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Main Wrapper -->

    <!-- jQuery -->
    <script src="{{base_url()}}assets/js/jquery-3.6.0.min.js"></script>

    <!-- Bootstrap Core JS -->
    <script src="{{base_url()}}assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Feather Icon JS -->
    <script src="{{base_url()}}assets/js/feather.min.js"></script>

    <!-- Custom JS -->
    <script src="{{base_url()}}assets/js/script.js"></script>
    <script src="{{base_url()}}js/scripts/__jlive.js"></script>
    <script src="{{base_url()}}js/datatables.js"></script>
    <script src="{{base_url()}}js/libs/jquery.form.js"></script>
    <script src="{{base_url()}}js/scripts/jaupl.js"></script>
    <script src="{{base_url()}}js/libs/print.min.js"></script>
    <script type="module" src="{{base_url()}}js/scripts/script.js"></script>

</body>

</html>