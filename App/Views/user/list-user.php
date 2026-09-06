{% extends "base.php" %}

{% block title %}GUI-SCHOOL - Dashboard{% endblock %}

{% block body %}
<div class="content container-fluid">

	{{layout.dashboard()|raw}}
	{{layout.navigation()|raw}}
	{{layout.payInvoice(recu,emit,confirmer,annuler,pr,pe,pa,pc)|raw}}
	<div class="row">
		<div class="col-sm-12">
			<div class="card card-table">
			<div class="card-header">
                    <h4 class="card-title">Liste des Utilisateurs</h4>
                </div>
				<div class="card-body">
					<div class="table-responsive">
						<table class="table table-stripped table-hover datatable">
							<thead class="thead-light">
								<tr>
									<th>Nom et Prénom</th>
									<th>email</th>
									<th>Téléphone</th>
									<th>Role</th>
																		
								</tr>
							</thead>
							<tbody>
						    	{{layout.listUser(Users)|raw}}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{% endblock %}