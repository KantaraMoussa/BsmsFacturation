<?php

namespace App\Services;

use App\Models\Users;
use App\Views\layouts\ModelUser as userLayout;
use App\Utils\Helpers as UtilsHelpers;


use Core\Helpers;
use Curl\Curl;

class Utilisateur
{
    private $userModel;


    public function __construct()
    {

        $this->userModel = new Users();

    }

    public function crud($data)
    {

        if ($data['action'] == 'add_user') {
            return json_encode($this->addUser($data));
        } else if ($data['action'] == 'valide_token') {
            return json_encode($this->valideToken($data));
        }  else if ($data['action'] == "change_Password") {
            return json_encode($this->ChangeUserPassword($data));
        }else if ($data['action'] == "edit-profil") {
            return json_encode($this->updateUser($data));
        }else if ($data['action'] == "add-avatar") 
        {
            return json_encode($this->updateUser($data));
        }
    }
 

    public function addUser($data): array
    {

        $ret = array('msg' => 'unexpected error happen');

        if(strlen($data['password'])<8){
            $ret['success'] = false;
            $ret['msg'] = "Le mot de passe doit contenir au minimun 8 cararctére ! ";
            return $ret;
        }
        if(strlen($data['telephone'])!=9){
            $ret['success'] = false;
            $ret['msg'] = "Le Format du numéro est incorrecte ! ";
            return $ret;
        }
        if($data['password-confirm']!=$data['password']){
            $ret['success'] = false;
            $ret['msg'] = "les deux mot de passe ne concordent pas  ";
            return $ret; 
        }
       
        if ($this->userModel->count('email', $data['email']) != 0) {
            $ret['success'] = false;
            $ret['msg'] = "Cet utilisateur avec l'email suivant <strong>{$data['email']}  </strong> Existe ";
            return $ret;
        }
        if ($this->userModel->count('telephone', $data['telephone']) != 0) {
            $ret['success'] = false;
            $ret['msg'] = "Cet numéro de téléphone <strong>{$data['telephone']}  </strong> est déjas utilisé ";
            return $ret;
        }
        if ($this->userModel->count2('email', $data['email'],'mot_de_pass', sha1($data['password'])) != 0) {
            $ret['success'] = false;
            $ret['msg'] = "Cet utilisateur à déjas un compte ";
            return $ret;
        }
        
        $sql = $this->userModel->create(array(
                'id_user' => Helpers::generateString(32),
                'nom' => $data['nom'],
                'email' => $data['email'],
                'telephone' => $data['telephone'],
                'role_utilisateur' => $data['role'],
                'mot_de_pass' => sha1($data['password']),
                'created_at' => time(),
            ));
            $smsText="Votre compte a été créer avec success";
            $ret['success'] = $sql == true;
            UtilsHelpers::sendSms('224'.trim($data['telephone']),$smsText);
                  

        return $ret;
    }
    public function updateuser($data) : array{
        $ret = array('msg' => 'unexpected error happen');
        $sql = $this->userModel->update(array(
            'nom' => $data['nom'],
            'email' => $data['email'],
            'telephone' => $data['telephone'],
            'role_utilisateur' => $data['role'],
        ), 'id_user',$data['id']);
        $ret['success'] = $sql == true;
        return $ret;
    }
    public function valideToken($data): array
    {

        $ret = array('msg' => 'unexpected error happen');
        $user = $this->userModel->get('id_users',$data['id'],0,1);
        if(1==1){
            $ret['success'] = true;
        }else{
            $ret['success'] = false;
            $ret['msg'] = "Votre code de confirmation est incorrecte";
        }
                
        return $ret;
    }

    public function ChangeUserPassword($data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        $userInfo=$this->userModel->get('id_user',trim($_SESSION['id_user']),0,1);
      
        if (sha1($data['old-password']) != $userInfo['mot_de_pass']) {
            $ret['success'] = false;
            $ret['msg'] = "L'ancien mot de pass est incorect'";
            return $ret;
        }
        if ($data['new-password'] != $data['confirm-new-password']) {
            $ret['success'] = false;
            $ret['msg'] = "Les deux mot de pass ne concordent pas ";
            return $ret;
        }
        if(strlen($data['new-password'])<8){
            $ret['success'] = false;
            $ret['msg'] = "Le mot de pass doit contenir minimum 8 carractére ";
            return $ret;
        }
        $sql = $this->userModel->update(array(
            'mot_de_pass' => sha1($data['new-password']),
        ), 'id_user',$_SESSION['id_user']);

        $ret['success'] = $sql == true;
        return $ret;
    }

    public function updateToken($token)
    {
        $ret = array('msg' => 'unexpected error happen');
            $sql = $this->userModel->update(array(
                'token' => $token,
            ), 'id_user',$_SESSION['id_user']);
       
    }


    public function getUtilisateur($field, $data, $offset, $limit) : Array 
    {
      return $this->userModel->get($field, $data, $offset, $limit);

    }

    public function getAll() : Array 
    {
      return $this->userModel->getAll();

    }

    public function getUser($field, $data, $offset, $limit){
        return $this->userModel->get($field, $data, $offset, $limit);
    }
}
