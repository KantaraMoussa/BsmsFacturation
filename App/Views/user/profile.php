{% extends "base.php" %}

{% block title %}GUI-SCHOOL - Dashboard{% endblock %}

{% block body %}
<div class="content container-fluid">


	<div class="card">
		<div class="card-body">
			<div class="row">
				<div class="col-md-12">
					<div class="about-info">
						<h4>Profile utilisateur <span><a href="javascript:;"><i class="feather-more-vertical"></i></a></span></h4>
					</div>
					<div class="student-profile-head">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								<div class="profile-user-box p-5">
									<div class="profile-user-img">
										<img src="{{base_url()}}assets/img/avatar.png" alt="Profile">
										<div class="form-group students-up-files profile-edit-icon mb-0">
											<div class="uplod d-flex">
												<label class="file-upload profile-upbtn mb-0">
													<i class="feather-edit-3"></i><input type="file">
												</label>
											</div>
										</div>
									</div>
									<div class="names-profiles">
										<h4>{{user['fname_users']}}</h4>
										<h5>{{user['lname_users']}}</h5>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4">
					<div class="student-personals-grp">
						<div class="card">
							<div class="card-body">
								<div class="heading-detail">
									<h4>Personal Details :</h4>
								</div>
								<div class="personal-activity">
									<div class="personal-icons">
										<i class="feather-user"></i>
									</div>
									<div class="views-personal">
										<h4>Nom</h4>
										<h5>{{user['fname_users']}}</h5>
									</div>
								</div>

								<div class="personal-activity">
									<div class="personal-icons">
										<i class="feather-phone-call"></i>
									</div>
									<div class="views-personal">
										<h4>Mobile</h4>
										<h5>{{user['phone_users']}}</h5>
									</div>
								</div>
								<div class="personal-activity">
									<div class="personal-icons">
										<i class="feather-mail"></i>
									</div>
									<div class="views-personal">
										<h4>Email</h4>
										<h5>{{user['emai_users']}}</h5>
									</div>
								</div>
								<div class="personal-activity">
									<div class="personal-icons">
										<i class="feather-user"></i>
									</div>
									<div class="views-personal">
										<h4>Role</h4>
										<h5>{{user['type_users']}}</h5>
									</div>
								</div>


							</div>
						</div>
					</div>

				</div>
				<div class="col-lg-8">
					<div class="student-personals-grp">
						<div class="row">
							<div class="col-sm-12">
								<div class="card card-table">
									<div class="card-header">
										<h4 class="card-title"> Editer mes information </h4>
									</div>
									<div class="card-body">

										<form action="{{'user/crud' | url}}" method="POST" id="edit-profil" data-id="{{user['id_user']}}">
											<div class="row">
												<div class="form-group col-md-6 fol-sm-6">
													<label>Nom : <span class="login-danger">*</span></label>
													<input type="text" value="{{user['fname_users']}}" data-required="yes" class="form-control" name="nom" id="nom" required>
												</div>
												<div class="form-group col-md-6 fol-sm-6">
													<label>Email : <span class="login-danger">*</span></label>
													<input type="text" value="{{user['email_users']}}" data-required="yes" class="form-control" name="email" id="email" required>
												</div>
											</div>
											<div class="row">
												<div class="form-group col-md-6 fol-sm-6">
													<label>Telephone : <span class="login-danger">*</span></label>
													<input type="text" value="{{user['phone_users']}}" data-required="yes" class="form-control" name="telephone" id="telephone" required>
												</div>
												<div class="form-group col-md-6 fol-sm-6">
													<label>Role : <span class="login-danger">*</span></label>
													<input type="text" value="{{user['type_users']}}" data-required="yes" class="form-control" name="role" id="role" readonly="true" disabled>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>

{% endblock %}