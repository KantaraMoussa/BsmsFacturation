<?php

namespace App\Controllers;

use App\Models\FactureLignes;
use App\Models\Commandes;
use App\Models\Factures;
use App\Models\Articles;
use App\Services\Utils;
use App\Services\AppServices;
use App\Utils\Helpers;
use \Core\View;

/**
 * Home controller
 */
class Dashboard extends \Core\FrontController

{

    private $factureLignemodel;
    private $commandeModel;
    private $factureModel;
    private $articleModel;
    private $utilsService;

    private $appService;

    public function __construct()
    {
        session_start();
        $this->factureLignemodel = new FactureLignes();
        $this->commandeModel = new Commandes();
        $this->factureModel = new Factures();
        $this->utilsService = new Utils();
        $this->articleModel = new Articles();
        $this->appService = new AppServices();
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction() 
    {
        //------------------ notification    
        View::renderTemplate('dashboard/index.php', array('factures' => $this->appService->getFactureListe() ));
    }
    public function before()
    {
        $this->utilsService->onBeforeGlobal();
    }

    protected function after() {}
}
