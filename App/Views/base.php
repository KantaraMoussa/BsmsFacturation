<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <title>BSMS | {% block title %}{% endblock %} </title>
    <link rel="shortcut icon" href="{{base_url()}}assets/img/logo-bsms/favicon.png">

    <!-- Fontfamily -->
   
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
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.5/css/dataTables.bootstrap5.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.4.1/css/buttons.bootstrap5.min.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/bootstrap.min.css"/>
    {% block link %}{% endblock %}
    <script>
        var baseUrl = '{{base_url()}}';
    </script>
</head>

<body>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <!-- Header -->
        <div class="header">

            <!-- Logo -->
            <div class="header-left">
                <a href="{{'dashboard' | url }}" class="logo">
                    <img src="{{base_url()}}assets/img/logo-bsms/logo.png" alt="Logo">
                </a>
                <a href="{{'dashboard' | url }}" class="logo logo-small">
                    <img src="{{base_url()}}assets/img/logo-bsms/favicon.png" alt="Logo" width="30" height="30">
                </a>
            </div>
            <!-- /Logo -->

            <div class="menu-toggle ">
                <a href="javascript:void(0);" id="toggle_btn" class="bg-warning text-dark">
                    <i class="fas fa-bars"></i>
                </a>
            </div>

            <!-- Search Bar -->

            <!-- /Search Bar -->
            <!-- Mobile Menu Toggle -->
            <a class="mobile_btn" id="mobile_btn">
                <i class="fas fa-bars"></i>
            </a>
            <!-- /Mobile Menu Toggle -->
            <!-- Header Right Menu -->
            <ul class="nav user-menu">
                <!-- Notifications -->
                <!-- /Notifications -->
                <li class="nav-item zoom-screen me-2">
                    <a href="#" class="nav-link header-nav-list win-maximize">
                        <img src="{{base_url()}}assets/img/icons/header-icon-04.svg" alt="">
                    </a>
                </li>

                <!-- User Menu -->
                <li class="nav-item dropdown has-arrow new-user-menus">
                    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span class="user-img">
                            <img class="rounded-circle" src="{{base_url()}}assets/img/profiles/avatar-01.jpg" width="31" alt="Ryan Taylor">
                            <div class="user-text">
                                <h6>{{ _SESSION['nom'] }}</h6>
                                <p class="text-muted mb-0">{{ _SESSION['role_utilisateur'] }}</p>
                            </div>
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="user-header">
                            <div class="avatar avatar-sm">
                                <img src="{{base_url()}}assets/img/profiles/avatar-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                            </div>
                            <div class="user-text">
                                <h6>kantara Moussa</h6>
                                <p class="text-muted mb-0">Administrateur</p>
                            </div>
                        </div>
                        <a class="dropdown-item" href="{{ "user/profile/#{_SESSION['id_user']}" | url }}"><i class="fa fa-user"></i>&nbsp; Profile utilisateur</a>
                        <a class="dropdown-item" href="{{ "user/change-password/#{_SESSION['id_user']}" | url }}"><i class="fa fa-lock"></i>&nbsp; Changez de mot de Pass</a>
                        <a class="dropdown-item" href="{{ "user/add-avatar/#{_SESSION['id_user']}" | url }}"><i class="fa fa-user-circle"></i>&nbsp; Ajouté la photo de profile</a>
                        <a class="dropdown-item" href="{{'user/logout' | url}}"> <i class="fa fa-share-square"></i>&nbsp; Déconnexion</a>
                    </div>
                </li>
                <!-- /User Menu -->

            </ul>
            <!-- /Header Right Menu -->

        </div>
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">
                            <span class="fw-bolder text-black">Main Menu</span>
                        </li>
                        <li class="active">
                            <a href="{{'dashboard' | url }}"><i class="feather-grid"></i><span>Dashboard</span></a>
                        </li>
                        <li>
                            <a href="{{'clients' | url }}"><i class="fas fa-user-plus"></i> <span>Clients</span></a>
                        </li>
                       
                        <li>
                            <a href="{{'articles' | url }}"><i class="fas fa-shopping-basket""></i> <span>Articles </span></a>

                        </li>
                         <li>
                            <a href=" {{'personnelle' | url }}"><i class="fas fa-chalkboard-teacher"></i> <span>Employé </span></a>

                        </li>
                         <li>
                            <a href="{{'livraisons' | url }}"><i class="fas fa-truck"></i> <span>Livraisons </span></a>

                        </li>
                        <li class=" menu-title">
                            <span class="fw-bolder text-black">Facturation(s)</span>
                        </li>


                        <li>
                            <a href="{{'commandes' | url }}"><i class="fas fa-credit-card"></i> <span>Commandes </span></a>

                        </li>
                        <li>
                            <a href="{{'factures' | url }}"><i class="fas fa-sticky-note"></i> <span>Factures </span></a>

                        </li>
                       
                        <li>
                            <a href="{{'paiements' | url }}"><i class="fas fa-university"></i> <span>Paiements </span></a>

                        </li>
                     
                        <li>
                            <a href="#"><i class="fas fa-chalkboard-teacher"></i> <span> Reporting </span></a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /Sidebar -->

        <!-- Page Wrapper -->
        <div class="page-wrapper">
            {% block body %}{% endblock %}
            <!-- Footer -->
            <footer>
                <p class="text-capitalize lnr-text-align-justify">
                    Copyright © 2025 KANTARA MOUSSA . <br>
                    <span>Téléphone : +224 623 90 25 28</span> <br>
                    <span>Email: moussaizaziszamalkantara@gmail.com</span>
                </p>
            </footer>
            <!-- /Footer -->

        </div>
        <!-- /Page Wrapper -->
    </div>
    <!--Modal-->
    <div class="modal fade" tabindex="-1" id="xmModal" role="dialog" aria-labelledby="xmModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content"> </div>
        </div>
    </div>
    <!--end Modal-->
    <!-- /Main Wrapper -->
    <!-- JS templete -->
    {% block script %}{% endblock %}
     <script src="{{base_url()}}assets/js/jquery-3.6.0.min.js"></script>
    <script src="{{base_url()}}assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="{{base_url()}}assets/js/script.js"></script>
    <!-- JS other -->
    <!-- JavaScript -->
    <script src="{{base_url()}}js/scripts/__jlive.js"></script>
    <script src="{{base_url()}}js/bundle.js"></script>
    <script src="{{base_url()}}js/scripts.js"></script>
    <script src="{{base_url()}}js/libs/io.min.js"></script>
    <script src="{{base_url()}}js/scripts/jaupl.js"></script>
    <script src="{{base_url()}}js/libs/print.min.js"></script>

    <script type="module" src="{{base_url()}}js/scripts/script.js"></script>


<script src="https://cdn.datatables.net/1.13.5/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.4.1/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.4.1/js/buttons.bootstrap5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/2.4.1/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.4.1/js/buttons.print.min.js"></script>
<script>
$(document).ready(function() {
    $('#dataTable').DataTable({
        dom: 'Bfrtip', // bouton au-dessus du tableau
        buttons: [
            {
                extend: 'csvHtml5',
                text: 'Exporter CSV',
                className: 'btn btn-success m-1'
            },
            {
                extend: 'excelHtml5',
                text: 'Exporter Excel',
                className: 'btn btn-success m-1'
            },
            {
                extend: 'pdfHtml5',
                text: 'Exporter PDF',
                className: 'btn btn-danger m-1'
            },
            {
                extend: 'print',
                text: 'Imprimer',
                className: 'btn btn-primary m-1'
            }
        ],
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.5/i18n/fr-FR.json'
        }
    });
});
</script>

</body>

</html>