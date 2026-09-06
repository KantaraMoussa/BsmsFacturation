<?php
namespace App\Controllers;
use \Core\View;
use \App\Models\AuditLog as modelAuditLog;
use App\Services\Utils;
use Core\Helpers as CoreHelpers;

/**
 * Read-only journal of sensitive operations (login, invoice validation/
 * cancellation, payments, avoirs, user management). See cahier des
 * charges §27 - admin-only.
 */
class AuditLog extends \Core\FrontController
{
    private $auditLogModel;
    private $utilsService;

    public function __construct()
    {
        session_start();
        $this->auditLogModel = new modelAuditLog();
        $this->utilsService = new Utils();
    }

    public function indexAction()
    {
        View::renderTemplate('audit-log/index.php', array(
            'entries' => $this->auditLogModel->get_(0, 200),
        ));
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
