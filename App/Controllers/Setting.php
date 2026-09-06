<?php
namespace App\Controllers;
use \Core\View;
use App\Services\Utils;
use App\Services\AppServices;
use Core\Helpers as CoreHelpers;

/**
 * Company / application configuration - admin-only.
 */
class Setting extends \Core\FrontController

{

    private $utilsService;
    private $appService;

    public function __construct()
    {
        session_start();
        $this->utilsService = new Utils();
        $this->appService = new AppServices();
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {

        View::renderTemplate('setting/index.php', array(
            'taxes' => $this->appService->getTaxes(),
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
