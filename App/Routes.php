<?php

namespace App;

//User routes here
class Routes extends \Core\Router
{
	public function __construct()
	{
		$this->index();
		$this->addresse();
		$this->article();
		$this->client();
		$this->factureLigne();
		$this->facture();
		$this->livraison();
		$this->paiement();
		$this->setting();
		$this->transporteur();
		$this->commande();
		$this->user();
		$this->avoir();
		$this->auditLog();
		$this->engin();
		$this->chantier();
		$this->maintenance();
		$this->carburant();
		$this->rapport();
		$this->notification();
		parent::dispatch($_SERVER['QUERY_STRING']);
	}
	private function addresse()  
	{
		parent::add('addresses', ['controller' => 'Addresses', 'action' => 'index']);
		parent::add('addresses/detail/:id', ['controller' => 'Addresses', 'action' => 'detail']);
		parent::add('addresses/addresse-action/:type/:id', ['controller' => 'Addresses', 'action' => 'actionDo']);
	}
	private function article()  
	{
		parent::add('articles', ['controller' => 'Articles', 'action' => 'index']);
		parent::add('articles/detail/:id', ['controller' => 'Articles', 'action' => 'detail']);
		parent::add('articles/article-action/:type/:id/:article', ['controller' => 'Articles', 'action' => 'actionDo']);
	}
	private function commande()  
	{
		parent::add('commandes', ['controller' => 'Commandes', 'action' => 'index']);
		parent::add('commandes/detail/:id', ['controller' => 'Commandes', 'action' => 'detail']);
		parent::add('commandes/commande-action/:type/:id', ['controller' => 'Commandes', 'action' => 'actionDo']);
	}
	private function client()  
	{
		parent::add('clients', ['controller' => 'Clients', 'action' => 'index']);
		parent::add('clients/detail/:id', ['controller' => 'Clients', 'action' => 'detail']);
		parent::add('clients/client-action/:type/:id', ['controller' => 'Clients', 'action' => 'actionDo']);
	}
	private function factureLigne()  
	{
		parent::add('factureLignes', ['controller' => 'FactureLignes', 'action' => 'index']);
		parent::add('factureLignes/detail/:id', ['controller' => 'FactureLignes', 'action' => 'detail']);
		parent::add('factureLignes/detail/pointage/:id', ['controller' => 'FactureLignes', 'action' => 'pointage']);
		parent::add('factureLignes/factureLigne-action/:type/:id', ['controller' => 'FactureLignes', 'action' => 'actionDo']);
	}
	private function facture()  
	{
		parent::add('factures', ['controller' => 'Factures', 'action' => 'index']);
		parent::add('factures/print/:facture', ['controller' => 'Factures', 'action' => 'print']);
		parent::add('factures/detail/:id', ['controller' => 'Factures', 'action' => 'detail']);
		parent::add('factures/detail/preview/:id', ['controller' => 'Factures', 'action' => 'preview']);
		parent::add('factures/facture-action/:type/:id', ['controller' => 'Factures', 'action' => 'actionDo']);
        parent::add('factures/crud', ['controller' => 'Factures', 'action' => 'crud']);
	}
	private function livraison()  
	{
		parent::add('livraisons', ['controller' => 'Livraisons', 'action' => 'index']);
		parent::add('livraisons/detail/:id', ['controller' => 'Livraisons', 'action' => 'detail']);
		parent::add('livraisons/livraison-action/:type/:id', ['controller' => 'Livraisons', 'action' => 'actionDo']);
	}
	private function paiement()
	{
		parent::add('paiements', ['controller' => 'Paiements', 'action' => 'index']);
		parent::add('paiements/detail/:id', ['controller' => 'Paiements', 'action' => 'detail']);
		parent::add('paiements/paiement-action/:type/:id', ['controller' => 'Paiements', 'action' => 'actionDo']);
	}
	private function avoir()
	{
		parent::add('avoirs/avoir-action/:id', ['controller' => 'Avoirs', 'action' => 'actionDo']);
	}
	private function auditLog()
	{
		parent::add('audit-log', ['controller' => 'AuditLog', 'action' => 'index']);
	}
	private function engin()
	{
		parent::add('engins', ['controller' => 'Engins', 'action' => 'index']);
		parent::add('engins/detail/:id', ['controller' => 'Engins', 'action' => 'detail']);
		parent::add('engins/engin-action/:type/:id', ['controller' => 'Engins', 'action' => 'actionDo']);
	}
	private function chantier()
	{
		parent::add('chantiers', ['controller' => 'Chantiers', 'action' => 'index']);
		parent::add('chantiers/detail/:id', ['controller' => 'Chantiers', 'action' => 'detail']);
		parent::add('chantiers/chantier-action/:type/:id', ['controller' => 'Chantiers', 'action' => 'actionDo']);
	}
	private function maintenance()
	{
		parent::add('maintenance/engin/:id', ['controller' => 'Maintenance', 'action' => 'actionDo']);
	}
	private function carburant()
	{
		parent::add('carburant', ['controller' => 'Carburant', 'action' => 'index']);
		parent::add('carburant/engin/:id', ['controller' => 'Carburant', 'action' => 'actionDo']);
	}
	private function rapport()
	{
		parent::add('rapports/creances', ['controller' => 'Rapports', 'action' => 'creances']);
		parent::add('rapports/rentabilite', ['controller' => 'Rapports', 'action' => 'rentabilite']);
		parent::add('rapports/direction', ['controller' => 'Rapports', 'action' => 'direction']);
		parent::add('rapports/direction-data', ['controller' => 'Rapports', 'action' => 'directionData']);
		parent::add('rapports/direction-detail', ['controller' => 'Rapports', 'action' => 'directionDetail']);
	}
	private function notification()
	{
		parent::add('notifications', ['controller' => 'NotificationsController', 'action' => 'index']);
		parent::add('notifications/generate', ['controller' => 'NotificationsController', 'action' => 'generate']);
		parent::add('notifications/dispatch', ['controller' => 'NotificationsController', 'action' => 'dispatch']);
	}
	private function transporteur()  
	{
		parent::add('personnelle', ['controller' => 'Transporteurs', 'action' => 'index']);
		parent::add('personnelle/detail/:id', ['controller' => 'Transporteurs', 'action' => 'detail']);
		parent::add('personnelle/transporteur-action/:type/:id', ['controller' => 'Transporteurs', 'action' => 'actionDo']);

	}
	private function setting()  
	{
		parent::add('setting', ['controller' => 'Setting', 'action' => 'index']);
	}
	private function index()
	{
		parent::add('dashboard', ['controller' => 'Dashboard', 'action' => 'index']);
		parent::add('', ['controller' => 'Home', 'action' => 'index']);
		parent::add('search/:q', ['controller' => 'Home', 'action' => 'search']);
	}
	private function error()
	{
		parent::add('error/505', ['controller' => 'Error', 'action' => '_505']);
		parent::add('error/404', ['controller' => 'Error', 'action' => '_404']);
	}

		private function user() // ok 
	{
		parent::add('user/login', ['controller' => 'Users', 'action' => 'loginUser']);
		parent::add('user/logout', ['controller' => 'Users', 'action' => 'logout']);
		parent::add('user/profile/:id', ['controller' => 'Users', 'action' => 'profileUser']);
		parent::add('user/change-password/:id', ['controller' => 'Users', 'action' => 'ChangePassword']);
		parent::add('user/add-avatar/:id', ['controller' => 'Users', 'action' => 'addAvatar']);
		parent::add('user/upload', ['controller' => 'Users', 'action' => 'upload']);
		parent::add('user/crud', ['controller' => 'Users', 'action' => 'crud']);
		parent::add('user/create', ['controller' => 'Users', 'action' => 'create']);
		parent::add('user/list', ['controller' => 'Users', 'action' => 'listUser']);
		parent::add('user/edit-profil/:id', ['controller' => 'Users', 'action' => 'editProfil']);
		parent::add('user/manage/:id', ['controller' => 'Users', 'action' => 'manage']);
	}
}
