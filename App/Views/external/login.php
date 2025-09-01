<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
	<title>PLATEFORME DE GESTION DE RENDEZ VOUS - LOGIN </title>

	<!-- Favicon -->
	<link rel="shortcut icon" href="{{base_url()}}assets/img/logo-bsms/favicon.png">

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
	<!-- other CSS -->
	<link id="skin-default" rel="stylesheet" href="{{base_url()}}css/animate.min.css">
	<link id="skin-default" rel="stylesheet" href="{{base_url()}}css/datatable.min.css">
	<link id="skin-default" rel="stylesheet" href="{{base_url()}}css/theme.css">
	<!-- Main CSS -->
	<link rel="stylesheet" href="{{base_url()}}assets/css/style.css">
</head>

<body>

	<!-- Main Wrapper -->
	<div class="main-wrapper login-body">
		<div class="login-wrapper">
			<div class="container">
				<div class="loginbox" >
					<div class="login-left  bg-black">
						<img class="img-fluid" src="{{base_url()}}assets/img/rdv.png" alt="Logo">
					</div>
					<div class="login-right">

						<div class="login-right-wrap">
							<!-- Form -->
							<div class="nk-block-head mb-10">
								<div class="nk-block-head-content">
									<h1 class="h1 text-uppercase">{{app['name']}}</h1>
									<div class="nk-block-des">
										<p style="text-align:justify">
											Logiciel de Facturation est une solution complète, intuitive et sécurisée conçue pour automatiser et simplifier la gestion de la facturation des entreprises, des indépendants et des institutions. Adapté aux besoins des PME, artisans, auto-entrepreneurs et professions libérales, le logiciel permet un suivi rigoureux des opérations commerciales, tout en assurant la conformité légale (TVA, mentions obligatoires, archivage, etc.).
										</p>
									</div>
								</div>
							</div><!-- .nk-block-head -->
							<hr style="width:50px;background-color: #336699;">

							<form action="{{'user/login' | url }}" id="loginUser" method="POST">

								<div class="form-group mb-30">
									<label>Nom d'utilisateur <span class="login-danger">*</span></label>
									<input class="form-control" required="required" type="text" name="email" id="email">
									<span class="profile-views"><i class="fas fa-user-circle"></i></span>
								</div>
								<div class="form-group">
									<label>Mot de Pass ? <span class="login-danger">*</span></label>
									<input class="form-control pass-input" name="password" id="password" required="required" type="password">
									<span class="profile-views feather-eye toggle-password"></span>
								</div>
								

								<div class="form-group">
									<button class="btn btn-warning fw-bolder text-white btn-large btn-block" type="submit" style="padding: 10px;">
										<i class="fa fa-lock"></i>&nbsp;
										Connexion</button>
								</div>
							</form>
							<!-- /Form -->
							
							
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
	<script src="{{base_url()}}js/scripts/__jlive.js"></script>
    <script src="{{base_url()}}js/bundle.js"></script>
    <script src="{{base_url()}}js/scripts.js"></script>
    <script src="{{base_url()}}js/datatables.js"></script>

     <script src="{{base_url()}}js/libs/jquery.form.js"></script>
    <script src="{{base_url()}}js/libs/io.min.js"></script>
    <script type="module" src="{{base_url()}}js/scripts/univprint.js"></script>
    <script src="{{base_url()}}js/scripts/jaupl.js"></script>
    <script src="{{base_url()}}js/libs/print.min.js"></script>

    <script type="module" src="{{base_url()}}js/scripts/script.js"></script>

</body>

</html>