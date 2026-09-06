<?php

namespace App\Controllers;

use \Core\View;
use App\Services\Utils;
use App\Services\AppServices;

/**
 * Fuel log per engin - cahier des charges §24.
 */
class Carburant extends \Core\FrontController
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
        View::renderTemplate('carburant/action.php', array(
            'enginId' => $params['id'],
            'chantiers' => $this->serviceApp->getChantiers(),
            'historique' => $this->serviceApp->getCarburantByEngin($params['id']),
        ));
    }

    public function indexAction()
    {
        View::renderTemplate('carburant/index.php', array(
            'consommation' => $this->serviceApp->getConsommationCarburantParEngin(),
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
