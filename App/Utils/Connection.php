<?php

namespace App\Utils;

use App\Services\Utilisateur as ServicesUtilisateur;
use App\Utils\Helpers as utilHelpers;
use Core\Helpers;

class Connection
{
    private $login;
    private $password;
    private $utilisateurService;
    public $usersReq;


    public function __construct($login, $password)
    {

        $this->utilisateurService = new ServicesUtilisateur();
        $this->login = $login;
        $this->password = sha1($password);
        $this->usersReq = new \App\Models\Users();
    }
    public function is_member()
    {

        if ($this->usersReq->count2('login_users', $this->login, 'pwd_users', $this->password) == 1) {
            return true;
        } else {
            return false;
        }
    }
    public function is_connected()
    {
        if (empty($_SESSION['id_users']) || empty($_SESSION['email_users'])) {
            return false;
        } else {
            return true;
        }
    }
    private function getUserInfo()
    {
        return $this->utilisateurService->getUtilisateur('login_users', $this->login, 0, 1);
    }

    public function disconnect()
    {
        $_SESSION[] = array();
        session_destroy();
        unset($_SESSION);
        header('Location:' . Helpers::url(''));
    }

    private function createSession()
    {

        $user = $this->getUserInfo();
        $_SESSION['id_user'] = $user['id_users'];
        $_SESSION['nom'] = $user['fname_users'] . ' ' . $user['lname_users'];
        $_SESSION['email'] = $user['email_users'];
        $_SESSION['telephone'] = $user['phone_users'];
        $_SESSION['login'] = $user['login_users'];
        $_SESSION['pwd'] = $user['pwd_users'];

        $_SESSION['role_utilisateur'] = $user['type_users'];
    }
    public function test()
    {
        if (!$this->is_member()) {
            return false;
        } else {
            $this->createSession();
            /*  $token=utilHelpers::randomToken();
            $this->utilisateurService->updateToken($token);
            $smsText ="votre code de confirmation "; $smsText.=$token;
            utilHelpers::sendSms('224'.trim($_SESSION['telephone']),$smsText);*/
            return true;
        }
    }
}
