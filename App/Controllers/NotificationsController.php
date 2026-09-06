<?php

namespace App\Controllers;

use \Core\View;
use App\Services\Utils;
use App\Services\AppServices;
use App\Services\Notifications as NotificationsService;
use Core\Helpers as CoreHelpers;

/**
 * Notification log/queue - cahier des charges §38. Admin-only: generating
 * and dispatching notifications is triggered manually here since this app
 * has no background job scheduler.
 */
class NotificationsController extends \Core\FrontController
{
    private $notificationService;
    private $appService;
    private $utilsService;

    public function __construct()
    {
        session_start();
        $this->notificationService = new NotificationsService();
        $this->appService = new AppServices();
        $this->utilsService = new Utils();
    }

    public function indexAction()
    {
        View::renderTemplate('notifications/index.php', array(
            'notifications' => $this->notificationService->getAll(),
        ));
    }

    public function generateAction()
    {
        $count = $this->notificationService->generateAll($this->appService);
        echo json_encode(array('success' => true, 'msg' => "$count notification(s) mise(s) en file d'attente"));
    }

    public function dispatchAction()
    {
        $result = $this->notificationService->dispatchPending();
        echo json_encode(array('success' => true, 'msg' => "{$result['sent']} envoyée(s), {$result['failed']} échouée(s)"));
    }

    public function before()
    {
        $this->utilsService->onBeforeGlobal();

        if (($_SESSION['role_utilisateur'] ?? '') !== 'admin') {
            header('Location:' . CoreHelpers::url('dashboard'));
            exit;
        }
    }
    protected function after()
    {
    }
}
