<?php

namespace App\Controllers;

use \Core\View;
use App\Services\Utils;
use App\Services\AppServices;

/**
 * Maintenance history per engin - cahier des charges §23.
 */
class Maintenance extends \Core\FrontController
{
    private $serviceApp;
    private $utilsService;

    public function __construct()
    {
        session_start();
        $this->serviceApp = new AppServices();
        $this->utilsService = new Utils();
    }

    public function actionDoAction($params)
    {
        View::renderTemplate('maintenance/action.php', array(
            'enginId' => $params['id'],
            'historique' => $this->serviceApp->getMaintenancesByEngin($params['id']),
        ));
    }

    public function before()
    {
        $this->utilsService->onBeforeGlobal();
    }
    protected function after()
    {
    }
}
