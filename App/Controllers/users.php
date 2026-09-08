<?php

namespace App\Controllers;


use App\Utils\Helpers;
use App\Utils\Connection;
use Core\Helpers as CoreHelpers;
use \Core\View;
use App\Services\Utilisateur;
use App\Services\Utils;

class Users extends \Core\FrontController

{
    private $userService;
    private $dashboardService;
    private $utilsService;

    /**
     * Actions reachable without an active session.
     */
    private const PUBLIC_ACTIONS = ['user/login', 'user/logout'];

    /**
     * Actions restricted to the admin role (managing other users' accounts).
     */
    private const ADMIN_ACTIONS = ['user/list', 'user/create', 'user/manage'];

    public function __construct()
    {
        session_start();
        $this->userService = new Utilisateur();
        $this->utilsService = new Utils();


    }

    public function indexAction()
    {
       View::renderTemplate('dashboard/index.php', array());
    }

    public function listUserAction()
    {
       View::renderTemplate('user/list-user.php', array('Users'=>$this->userService->getAll()));
    }

    public function createAction()
    {
        View::renderTemplate('user/create-account.php', array('role' => Helpers::roleUser()));
    }

    public function manageAction($param)
    {
        View::renderTemplate('user/manage.php', array(
            'user' => $this->userService->getUser('id_users', $param['id'], 0, 1),
            'roles' => Helpers::roleUser(),
        ));
    }

    /**
     * Redirects away (instead of leaking another account's data) unless the
     * requested id is the logged-in user's own, or the requester is an admin.
     */
    private function assertOwnerOrAdmin($id): void
    {
        if ($id === $_SESSION['id_user'] || ($_SESSION['role_utilisateur'] ?? '') === 'admin') {
            return;
        }
        header('Location:' . CoreHelpers::url('dashboard'));
        exit;
    }

    public function profileUserAction($param)
    {
        $this->assertOwnerOrAdmin($param['id']);
        View::renderTemplate('user/profile.php', array(
       'user'=>$this->userService->getUser('id_users',$param['id'],0,1))
    );
    }
    public function ChangePasswordAction($param)
    {
        $this->assertOwnerOrAdmin($param['id']);
        View::renderTemplate('user/change-password.php', array( 'user'=>$this->userService->getUser('id_users',$param['id'],0,1)));
    }
    public function editProfilAction($param)
    {
        $this->assertOwnerOrAdmin($param['id']);
        View::renderTemplate('user/edit-profil.php', array('user'=>$this->userService->getUser('id_users',$param['id'],0,1),
       'select'=>Helpers::roleUser()));
    }
    public function addAvatarAction($param)
    {
        $this->assertOwnerOrAdmin($param['id']);
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
        $success = $conn->test();
        echo json_encode(array(
            'success' => $success,
            'user' => $success ? array(
                'id' => $_SESSION['id_user'],
                'nom' => $_SESSION['nom'],
                'role' => $_SESSION['role_utilisateur'],
            ) : null,
        ));
    }
    public function uploadAction()
    {
        if (empty($_SESSION['id_user'])) {
            http_response_code(403);
            echo json_encode(array('success' => false, 'msg' => "Non autorisé"));
            return;
        }

        if (empty($_FILES['avatar']) || $_FILES['avatar']['error'] !== UPLOAD_ERR_OK) {
            echo json_encode(array('success' => false, 'msg' => "Échec de l'envoi du fichier"));
            return;
        }

        $maxSize = 2 * 1024 * 1024; // 2 Mo
        if ($_FILES['avatar']['size'] > $maxSize) {
            echo json_encode(array('success' => false, 'msg' => "Fichier trop volumineux (2 Mo maximum)"));
            return;
        }

        $allowedMimes = array('image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp');
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime = finfo_file($finfo, $_FILES['avatar']['tmp_name']);
        finfo_close($finfo);

        if (!isset($allowedMimes[$mime])) {
            echo json_encode(array('success' => false, 'msg' => "Type de fichier non autorisé (jpg, png, webp uniquement)"));
            return;
        }

        $destDir = dirname(__DIR__, 2) . '/public/assets/img/avatars';
        if (!is_dir($destDir) && !mkdir($destDir, 0755, true) && !is_dir($destDir)) {
            echo json_encode(array('success' => false, 'msg' => "Dossier de destination introuvable"));
            return;
        }

        // Filename is derived from the session user id, never from client input.
        $filename = $_SESSION['id_user'] . '.' . $allowedMimes[$mime];
        $destPath = $destDir . '/' . $filename;

        if (!move_uploaded_file($_FILES['avatar']['tmp_name'], $destPath)) {
            echo json_encode(array('success' => false, 'msg' => "Échec de l'enregistrement du fichier"));
            return;
        }

        echo json_encode(array('success' => true, 'avatar' => 'assets/img/avatars/' . $filename));
    }


    public function logoutAction()
    {
        $conn = new Connection(null, 'null');
        $conn->disconnect();
    }
   
  
    public function before()
    {
        $requestPath = explode('&', $_SERVER['QUERY_STRING'] ?? '')[0];

        foreach (self::PUBLIC_ACTIONS as $publicAction) {
            if (strpos($requestPath, $publicAction) === 0) {
                return;
            }
        }

        $this->utilsService->onBeforeGlobal();

        foreach (self::ADMIN_ACTIONS as $adminAction) {
            if (strpos($requestPath, $adminAction) === 0 && ($_SESSION['role_utilisateur'] ?? '') !== 'admin') {
                header('Location:' . CoreHelpers::url('dashboard'));
                exit;
            }
        }
    }
    protected function after()
    {
    }
}
