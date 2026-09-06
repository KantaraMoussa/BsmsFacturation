<?php

namespace App\Services;

use App\Models\Users;
use App\Utils\Helpers as UtilsHelpers;
use Core\Helpers;
use App\Services\Audit;

class Utilisateur
{
    private $userModel;

    /**
     * Actions that create or change another user's account and therefore
     * require the admin role. Self-service actions (own password, own
     * profile) are scoped to $_SESSION['id_user'] instead and are open to
     * any authenticated role.
     */
    private const ADMIN_ONLY_ACTIONS = ['add_user'];

    public function __construct()
    {

        $this->userModel = new Users();

    }

    public function crud($data)
    {
        if (in_array($data['action'], self::ADMIN_ONLY_ACTIONS, true) && ($_SESSION['role_utilisateur'] ?? '') !== 'admin') {
            return json_encode(array('success' => false, 'msg' => "Action réservée aux administrateurs"));
        }

        if ($data['action'] == 'add_user') {
            return json_encode($this->addUser($data));
        } else if ($data['action'] == "change_Password") {
            return json_encode($this->ChangeUserPassword($data));
        } else if ($data['action'] == "edit-profile") {
            return json_encode($this->updateUser($data));
        }

        return json_encode(array('success' => false, 'msg' => "Action inconnue"));
    }


    public function addUser($data): array
    {

        $ret = array('msg' => 'unexpected error happen');

        if (strlen($data['password']) < 8) {
            $ret['success'] = false;
            $ret['msg'] = "Le mot de passe doit contenir au minimun 8 cararctére ! ";
            return $ret;
        }
        if (strlen($data['telephone']) != 9) {
            $ret['success'] = false;
            $ret['msg'] = "Le Format du numéro est incorrecte ! ";
            return $ret;
        }
        if ($data['password-confirm'] != $data['password']) {
            $ret['success'] = false;
            $ret['msg'] = "les deux mot de passe ne concordent pas  ";
            return $ret;
        }
        if (!in_array($data['role'], UtilsHelpers::roleUser(), true)) {
            $ret['success'] = false;
            $ret['msg'] = "Role invalide ";
            return $ret;
        }

        if ($this->userModel->count('email_users', $data['email']) != 0) {
            $ret['success'] = false;
            $ret['msg'] = "Cet utilisateur avec l'email suivant <strong>{$data['email']}  </strong> Existe ";
            return $ret;
        }
        if ($this->userModel->count('phone_users', $data['telephone']) != 0) {
            $ret['success'] = false;
            $ret['msg'] = "Cet numéro de téléphone <strong>{$data['telephone']}  </strong> est déjas utilisé ";
            return $ret;
        }
        if ($this->userModel->count('login_users', $data['email']) != 0) {
            $ret['success'] = false;
            $ret['msg'] = "Cet utilisateur à déjas un compte ";
            return $ret;
        }

        $nomParts = explode(' ', trim($data['nom']), 2);

        $sql = $this->userModel->create(array(
            'id_users' => Helpers::generateString(32),
            'fname_users' => $nomParts[0],
            'lname_users' => $nomParts[1] ?? '',
            'email_users' => $data['email'],
            'login_users' => $data['email'],
            'phone_users' => $data['telephone'],
            'type_users' => $data['role'],
            'status_users' => 'actif',
            'pwd_users' => password_hash($data['password'], PASSWORD_DEFAULT),
        ));
        $ret['success'] = $sql == true;
        if ($ret['success']) {
            Audit::log('create_user', 'user', null, null, array('email' => $data['email'], 'role' => $data['role']));
        }

        return $ret;
    }

    /**
     * Updates the profile of the currently logged-in user only - the target
     * id always comes from the session, never from client-supplied input,
     * so a user can't edit someone else's profile by tampering with the form.
     */
    public function updateUser($data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        $nomParts = explode(' ', trim($data['nom']), 2);

        $sql = $this->userModel->update(array(
            'fname_users' => $nomParts[0],
            'lname_users' => $nomParts[1] ?? '',
            'email_users' => $data['email'],
            'phone_users' => $data['telephone'],
        ), 'id_users', $_SESSION['id_user']);
        $ret['success'] = $sql == true;
        return $ret;
    }

    /**
     * Changes the password of the currently logged-in user only.
     */
    public function ChangeUserPassword($data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        $userInfo = $this->userModel->get('id_users', trim($_SESSION['id_user']), 0, 1);

        if (!UtilsHelpers::verifyPassword($data['old-password'], $userInfo['pwd_users'] ?? '')) {
            $ret['success'] = false;
            $ret['msg'] = "L'ancien mot de pass est incorect'";
            return $ret;
        }
        if ($data['new-password'] != $data['confirm-new-password']) {
            $ret['success'] = false;
            $ret['msg'] = "Les deux mot de pass ne concordent pas ";
            return $ret;
        }
        if (strlen($data['new-password']) < 8) {
            $ret['success'] = false;
            $ret['msg'] = "Le mot de pass doit contenir minimum 8 carractére ";
            return $ret;
        }
        $sql = $this->userModel->update(array(
            'pwd_users' => password_hash($data['new-password'], PASSWORD_DEFAULT),
        ), 'id_users', $_SESSION['id_user']);

        $ret['success'] = $sql == true;
        if ($ret['success']) {
            Audit::log('change_password', 'user', $_SESSION['id_user']);
        }
        return $ret;
    }


    public function getUtilisateur($field, $data, $offset, $limit): array
    {
        return $this->userModel->get($field, $data, $offset, $limit);
    }

    public function getAll(): array
    {
        return $this->userModel->getAll();
    }

    public function getUser($field, $data, $offset, $limit)
    {
        return $this->userModel->get($field, $data, $offset, $limit);
    }
}
