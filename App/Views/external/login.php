<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
	<title>Connexion | BOURSE SUPPLY MINING SARLU</title>

	<!-- Favicon -->
	<link rel="shortcut icon" href="{{base_url()}}assets/img/logo-bsms/favicon.png">

	<!-- Fontfamily -->
	<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="{{base_url()}}assets/plugins/bootstrap/css/bootstrap.min.css">
	<!-- Feathericon CSS -->
	<link rel="stylesheet" href="{{base_url()}}assets/plugins/feather/feather.css">
	<!-- Fontawesome CSS -->
	<link rel="stylesheet" href="{{base_url()}}assets/plugins/fontawesome/css/fontawesome.min.css">
	<link rel="stylesheet" href="{{base_url()}}assets/plugins/fontawesome/css/all.min.css">
	<!-- Main CSS -->
	<link rel="stylesheet" href="{{base_url()}}assets/css/style.css">
	<link rel="stylesheet" href="{{base_url()}}css/app-typography.css">

	<style>
		body {
			font-family: 'DM Sans', sans-serif;
			background: #0b0d10;
		}

		.auth-shell {
			min-height: 100vh;
			display: flex;
		}

		.auth-brand {
			flex: 1 1 52%;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 56px 64px;
			background: linear-gradient(155deg, #0b0d10 0%, #1a1a1d 45%, #7a4419 120%);
			color: #fff;
			overflow: hidden;
		}

		.auth-brand::before {
			content: "";
			position: absolute;
			inset: 0;
			background: repeating-linear-gradient(115deg, rgba(255, 255, 255, .035) 0 2px, transparent 2px 42px);
			pointer-events: none;
		}

		.auth-brand-logo {
			display: inline-block;
			background: #fff;
			padding: 10px 18px;
			border-radius: 10px;
		}

		.auth-brand-logo img {
			height: 34px;
			display: block;
		}

		.auth-brand-tagline {
			font-size: 2rem;
			font-weight: 700;
			line-height: 1.25;
			max-width: 480px;
			margin-top: 40px;
			color: #fff;
		}

		.auth-brand-tagline span {
			color: #ff9f43;
		}

		.auth-brand-features {
			list-style: none;
			padding: 0;
			margin: 28px 0 0;
			max-width: 460px;
		}

		.auth-brand-features li {
			display: flex;
			align-items: flex-start;
			gap: 12px;
			margin-bottom: 14px;
			font-size: .95rem;
			color: rgba(255, 255, 255, .85);
		}

		.auth-brand-features i {
			color: #ff9f43;
			margin-top: 3px;
		}

		.auth-brand-footer {
			position: relative;
			font-size: .8rem;
			color: rgba(255, 255, 255, .55);
		}

		.auth-form-side {
			flex: 1 1 48%;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #f7f8fa;
			padding: 40px 24px;
		}

		.auth-form-card {
			width: 100%;
			max-width: 420px;
		}

		.auth-form-card .mobile-logo {
			display: none;
		}

		.auth-form-card h2 {
			font-weight: 800;
			margin-bottom: 4px;
		}

		.auth-form-card .subtitle {
			color: #6b7280;
			margin-bottom: 32px;
		}

		.auth-input-group {
			position: relative;
			margin-bottom: 22px;
		}

		.auth-input-group label {
			font-weight: 600;
			font-size: .85rem;
			margin-bottom: 6px;
			display: block;
			color: #333;
		}

		.auth-input-group .form-control {
			height: 50px;
			padding-left: 44px;
			border-radius: 10px;
			border: 1px solid #e2e5e9;
			background: #fff;
		}

		.auth-input-group .form-control:focus {
			border-color: #ff9f43;
			box-shadow: 0 0 0 .2rem rgba(255, 159, 67, .15);
		}

		.auth-input-icon {
			position: absolute;
			left: 14px;
			top: 40px;
			color: #9aa0a6;
		}

		.auth-toggle-password {
			position: absolute;
			right: 14px;
			top: 40px;
			color: #9aa0a6;
			cursor: pointer;
		}

		.auth-submit-btn {
			height: 50px;
			border-radius: 10px;
			background: linear-gradient(90deg, #ff9f43, #e67e22);
			border: none;
			font-weight: 700;
			letter-spacing: .3px;
			width: 100%;
			color: #fff;
			transition: opacity .15s ease;
		}

		.auth-submit-btn:hover {
			opacity: .92;
			color: #fff;
		}

		@media (max-width: 991px) {
			.auth-brand {
				display: none;
			}

			.auth-form-card .mobile-logo {
				display: block;
				text-align: center;
				margin-bottom: 28px;
			}

			.auth-form-card .mobile-logo img {
				height: 44px;
			}
		}
	</style>
</head>

<body>

	<div class="auth-shell">
		<div class="auth-brand">
			<div class="auth-brand-logo">
				<img src="{{base_url()}}assets/img/logo-bsms/logo-transparent.png" alt="BOURSE SUPPLY MINING SARLU">
			</div>
			<div>
				<h1 class="auth-brand-tagline">Le pilotage complet de votre <span>location d'engins</span> et de votre facturation.</h1>
				<ul class="auth-brand-features">
					<li><i class="fas fa-check-circle"></i> Facturation, paiements et créances centralisés en temps réel</li>
					<li><i class="fas fa-check-circle"></i> Suivi du parc d'engins, maintenance et carburant</li>
					<li><i class="fas fa-check-circle"></i> Tableau de bord décisionnel pour la direction</li>
				</ul>
			</div>
			<div class="auth-brand-footer">
				&copy; {{"now" | date("Y")}} BOURSE SUPPLY MINING SARLU &middot; {{app['ville']}}, Guinée
			</div>
		</div>

		<div class="auth-form-side">
			<div class="auth-form-card">
				<div class="mobile-logo">
					<img src="{{base_url()}}assets/img/logo-bsms/logo.png" alt="BOURSE SUPPLY MINING SARLU">
				</div>

				<h2>Connexion</h2>
				<p class="subtitle">Accédez à votre espace de gestion</p>

				<div id="timeout-alert" class="alert alert-warning" hidden>
					<i class="fas fa-clock"></i> Votre session a expiré pour cause d'inactivité. Veuillez vous reconnecter.
				</div>

				<form action="{{'user/login' | url }}" id="loginUser" method="POST">
					<div class="auth-input-group">
						<label for="email">Identifiant</label>
						<i class="fas fa-user auth-input-icon"></i>
						<input class="form-control" required="required" type="text" name="email" id="email" placeholder="Votre identifiant" autocomplete="username">
					</div>
					<div class="auth-input-group">
						<label for="password">Mot de passe</label>
						<i class="fas fa-lock auth-input-icon"></i>
						<input class="form-control pass-input" name="password" id="password" required="required" type="password" placeholder="Votre mot de passe" autocomplete="current-password">
						<i class="fas fa-eye auth-toggle-password toggle-password"></i>
					</div>

					<button class="auth-submit-btn" type="submit">
						<i class="fa fa-lock"></i>&nbsp; Se connecter
					</button>
				</form>
			</div>
		</div>
	</div>

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
	<script src="{{base_url()}}js/libs/io.min.js"></script>
	<script src="{{base_url()}}js/scripts/jaupl.js"></script>
	<script src="{{base_url()}}js/libs/print.min.js"></script>
	<script type="module" src="{{base_url()}}js/scripts/script.js"></script>

	<script>
		if (new URLSearchParams(window.location.search).get('timeout') === '1') {
			document.getElementById('timeout-alert').hidden = false;
		}
	</script>
</body>

</html>
