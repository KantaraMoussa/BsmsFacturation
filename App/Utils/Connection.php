<?php

namespace App\Utils;

use App\Services\Utilisateur as ServicesUtilisateur;
use App\Services\Audit;
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
        $this->password = $password;
        $this->usersReq = new \App\Models\Users();
    }
    public function is_member()
    {
        $user = $this->usersReq->get('login_users', $this->login, 0, 1);

        if (!$user || !utilHelpers::verifyPassword($this->password, $user['pwd_users'])) {
            return false;
        }

        if (!empty($user['status_users']) && trim($user['status_users']) === 'inactif') {
            return false;
        }

        if (utilHelpers::isLegacyHash($user['pwd_users'])) {
            $this->usersReq->update(
                array('pwd_users' => password_hash($this->password, PASSWORD_DEFAULT)),
                'id_users',
                $user['id_users']
            );
        }

        return true;
    }
    public function is_connected()
    {
        if (empty($_SESSION['id_user']) || empty($_SESSION['email'])) {
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
        if (!empty($_SESSION['id_user'])) {
            Audit::log('logout', 'user', $_SESSION['id_user']);
            $this->usersReq->update(
                array('date_last_logout_users' => time()),
                'id_users',
                $_SESSION['id_user']
            );
        }
        $_SESSION[] = array();
        session_destroy();
        unset($_SESSION);
        $suffix = !empty($_GET['timeout']) ? '?timeout=1' : '';
        header('Location:' . Helpers::url('') . $suffix);
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

        $this->usersReq->update(
            array('date_last_login_users' => time()),
            'id_users',
            $user['id_users']
        );
    }
    public function test()
    {
        if (!$this->is_member()) {
            Audit::log('login_failed', 'user', $this->login);
            return false;
        } else {
            $this->createSession();
            Audit::log('login', 'user', $_SESSION['id_user']);
            return true;
        }
    }
}
