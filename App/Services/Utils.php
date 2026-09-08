<?php

namespace App\Services;


use Core\Helpers;
use App\Models\Users;

class Utils
{
    private $uuserService;
    private $userModel;

    /**
     * A user is considered "en ligne" if their last activity ping is more
     * recent than this, and they haven't explicitly logged out since.
     */
    private const ONLINE_THRESHOLD_SECONDS = 300;

    public function __construct()
    {
        $this->uuserService = new Utilisateur();
        $this->userModel = new Users();
    }

    public function onBeforeGlobal()
    {

        if (!isset($_SESSION['id_user'])) {
            header('Location:' . Helpers::url(''));
            exit;
        }

        // Touched on every authenticated request so "connecté" reflects
        // actual recent activity, not just the last explicit login.
        $this->userModel->update(
            array('date_last_login_users' => time()),
            'id_users',
            $_SESSION['id_user']
        );
    }

    public static function isOnline(array $user): bool
    {
        $lastLogin = (int) ($user['date_last_login_users'] ?? 0);
        $lastLogout = (int) ($user['date_last_logout_users'] ?? 0);
        if ($lastLogin === 0 || $lastLogin <= $lastLogout) {
            return false;
        }
        return (time() - $lastLogin) < self::ONLINE_THRESHOLD_SECONDS;
    }

}