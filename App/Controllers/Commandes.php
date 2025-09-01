<?php

namespace App\Controllers;

use App\Services\Utils;
use \Core\View;
use App\Models\Clients;
use App\Services\AppServices;
use App\Models\Commandes as modelCommande;
use App\Utils\Helpers;

/**
 * Home controller
 */
class Commandes extends \Core\FrontController

{
    private $clientModel;
    private $commandeModel;
    private $serviceApp;
    private $utilsService;

    public function __construct()
    {
        session_start();
        $this->clientModel = new Clients();
        $this->commandeModel = new modelCommande();
        $this->serviceApp = new AppServices();
        $this->utilsService = new Utils();
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {
        View::renderTemplate('Commandes/index.php', array(
            'commandes' => $this->serviceApp->getCommandeListe(),
        ));
    }
    public function detailAction($param)
    {
        View::renderTemplate('Commandes/detail.php', array( 
            'commande' => $this->serviceApp->getCommande($param['id']),
            'factures' => $this->commandeModel->get_1_2_facture('commande_id', $param['id'], 0, 100),
            'entreprise' => Helpers::information(),
        ));
    }

    public function actionDoAction($params)
    {
        if ($params['type'] == "add") {
            $title = 'Enregistré Une commande';
        } else if ($params['type'] == "update") {
            $title = 'Modifier les informations de la commande';
        } else if ($params['type'] == "delete") {
            $title = 'Supprimer cette commande';
        } else {
            $title = 'Information sur la commande';
        }
        // ------------------ ADD , UPDATE , DELETE
        View::renderTemplate('Commandes/action.php', array(

            'type' => $params['type'],
            'title' => $title,
            'id' => $params['id'],
            'clients' => $this->clientModel->get_(),
            'commande' => $this->commandeModel->get_1_0('commande_id', $params['id'], 0, 1),
        ));
    }


    public function before()
    {
        $this->utilsService->onBeforeGlobal();
    }
    protected function after() {}
}
