<?php

namespace App\Controllers;

use \Core\View;
use App\Services\Utils;
use App\Services\AppServices;

/**
 * Financial and fleet reports - cahier des charges §20, §22, §39.
 */
class Rapports extends \Core\FrontController
{
    private $serviceApp;
    private $utilsService;

    public function __construct()
    {
        session_start();
        $this->serviceApp = new AppServices();
        $this->utilsService = new Utils();
    }

    public function creancesAction()
    {
        View::renderTemplate('rapports/creances.php', array(
            'creances' => $this->serviceApp->getCreances(),
            'aging' => $this->serviceApp->getCreancesAging(),
        ));
    }

    public function rentabiliteAction()
    {
        View::renderTemplate('rapports/rentabilite.php', array(
            'rentabilite' => $this->serviceApp->getRentabiliteEngins(),
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
