<?php

namespace App;

//User routes here
class Routes extends \Core\Router
{

	public function __construct()
	{
		$this->index();
		$this->Auth();
		$this->rdv();
		$this->utilisateur();
		$this->notification();
		$this->error();
		//required
		parent::dispatch($_SERVER['QUERY_STRING']);
	}
    private function index() // ok 
	{
	  parent::add('dashboard', ['controller' => 'Dashboard', 'action' => 'index']);		
	}
	private function Auth() // ok 
	{
		parent::add('', ['controller' => 'Auth', 'action' => 'index']);
		parent::add('user/create-account', ['controller' => 'Auth', 'action' => 'add']);
		parent::add('user/reseat-password', ['controller' => 'Auth', 'action' => 'reset']);
		parent::add('user/auth2/:id', ['controller' => 'Auth', 'action' => 'Auth2']);
	} 
	private function notification() // ok 
	{
		parent::add('notification', ['controller' => 'Notification', 'action' => 'index']);
		parent::add('notification/list', ['controller' => 'Notification', 'action' => 'list']);

	} 
	private function rdv() // ok 
	{
		parent::add('rdv/add', ['controller' => 'Rdv', 'action' => 'add']);
		parent::add('rdv/detail/:id', ['controller' => 'Rdv', 'action' => 'detail']);
		parent::add('rdv/update/:id', ['controller' => 'Rdv', 'action' => 'update']);
		parent::add('rdv/reporting', ['controller' => 'Rdv', 'action' => 'reporting']);
		parent::add('rdv/:type/:id', ['controller' => 'Rdv', 'action' => 'choix']);
		parent::add('rdv/crud', ['controller' => 'Rdv', 'action' => 'crud']);
	} 
	private function utilisateur() // ok 
	{
		parent::add('user/login', ['controller' => 'Users', 'action' => 'loginUser']);
		parent::add('user/logout', ['controller' => 'Users', 'action' => 'logout']);
		parent::add('user/upload', ['controller' => 'Users', 'action' => 'upload']);
		parent::add('user/list-user', ['controller' => 'Users', 'action' => 'listUser']);
		parent::add('user/profile/:id', ['controller' => 'Users', 'action' => 'Profile']);
		parent::add('user/edit-profil/:id', ['controller' => 'Users', 'action' => 'editProfil']);
		parent::add('user/change-password/:id', ['controller' => 'Users', 'action' => 'ChangePassword']);
		parent::add('user/add-avatar/:id', ['controller' => 'Users', 'action' => 'addAvatar']);


		parent::add('user', ['controller' => 'dashboard', 'action' => 'index']);
		parent::add('user/crud', ['controller' => 'Users', 'action' => 'crud']);
	} 

	private function error()
	{
		parent::add('error/505', ['controller' => 'Error', 'action' => '_505']);
		parent::add('error/404', ['controller' => 'Error', 'action' => '_404']);
	}
 
}
