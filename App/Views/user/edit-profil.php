{% extends "base.php" %}

{% block title %}Facturation BSMS - Mon profil{% endblock %}

{% block body %}
<div class="content container-fluid">

	<div class="row">
		<div class="col-sm-2"></div>
		<div class="col-lg-8">
			<div class="card">
				<div class="card-header">
					<h5 class="card-title">Changer les information de votre profile</h5>
				</div>
				<div class="card-body">
					<form action="{{'user/crud' | url}}" method="POST" id="edit-profile" data-id="{{user['id_users']}}">
						<input type="hidden" name="action" value="edit-profile">
						<div class="row">
                        <div class="form-group fol-sm-6">
							<label>Nom complet : <span class="login-danger">*</span></label>
							<input type="text" value="{{user['fname_users']}} {{user['lname_users']}}" data-required="yes" class="form-control" name="nom" id="nom" required >
						</div>
						<div class="form-group fol-sm-6">
							<label>Email : <span class="login-danger">*</span></label>
							<input type="email" value="{{user['email_users']}}" data-required="yes" class="form-control" name="email" id="email" required >
						</div>
                        </div>
						<div class="row">
                        <div class="form-group fol-sm-6">
							<label>Telephone : <span class="login-danger">*</span></label>
							<input type="text" value="{{user['phone_users']}}" data-required="yes" class="form-control" name="telephone" id="telephone" required >
						</div>
                        <div class="form-group fol-sm-6">
							<label>Role</label>
							<input type="text" class="form-control" value="{{user['type_users']}}" disabled>
							<small class="text-muted">Seul un administrateur peut modifier votre rôle.</small>
						</div>
                        </div>
						<div class="form-group text-center">
							<button type="submit" class="btn btn-primary" id="add-user-btn">
								<i class="fa fa-check"></i>&nbsp;
								Modifié
							</button>
						</div>

					</form>
				</div>
			</div>

		</div>
		<div class="col-sm-2"></div>
	</div>
</div>

{% endblock %}