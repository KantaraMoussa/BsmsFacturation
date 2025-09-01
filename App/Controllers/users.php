<?php

namespace App\Controllers;


use App\Utils\Helpers;
use App\Utils\Connection;
use Core\Helpers as CoreHelpers;
use \Core\View;
use App\Services\Utilisateur;

class Users extends \Core\FrontController

{
    private $userService;
    private $dashboardService;

    public function __construct()
    {
        session_start();
        $this->userService = new Utilisateur();

       
    }

    public function indexAction()
    {
       View::renderTemplate('dashboard/index.php', array());
    }

    public function listUserAction()
    {
       View::renderTemplate('user/list-user.php', array('Users'=>$this->userService->getAll()));
    }

    public function ProfileAction($param)
    {
       View::renderTemplate('user/profile.php', array(
       'user'=>$this->userService->getUser('id_users',$param['id'],0,1),
       'rdv'=>$this->dashboardService->rdvEnAttente('id_user_recept_rdv',$param['id'],
       'status_rdv','En attente')));
    }
    public function ChangePasswordAction($params)
    {
      
        View::renderTemplate('user/change-password.php', array());
    }
    public function editProfilAction($param)
    {
      
        View::renderTemplate('user/edit-profil.php', array('user'=>$this->userService->getUser('id_users',$param['id'],0,1),
       'select'=>Helpers::roleUser()));
    }
    public function addAvatarAction($param)
    {
      
        View::renderTemplate('user/add-avatar.php', array('user'=>$this->userService->getUser('id_users',$param['id'],0,1),
     ));
    }
  

    public function crudAction()
    {
        echo $this->userService->crud($_POST);
    }

    public function loginUserAction()
    {
        $conn = new Connection($_POST['email'], $_POST['password']);
        echo json_encode(array('success' => $conn->test(),'session' => $_SESSION)
        );
    }
    public function uploadAction()
    {
        move_uploaded_file($_FILES['avatar']['tmp_name'] , './public' );
    }


    public function logoutAction()
    {
        $conn = new Connection(null, 'null');
        $conn->disconnect();
    }
   
  
    public function before()
    {

    }
    protected function after()
    {
    }
}
