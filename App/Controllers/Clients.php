<?php

namespace App\Controllers;
use App\Services\AppServices;
use App\Services\Utils;
use \Core\View;
use App\Models\Clients as modelClient;
use App\Models\Commandes;

/**
 * Home controller
 */
class Clients extends \Core\FrontController

{
    private $clientModel;
    private $serviceApp;
        private $commandeModel;
    private $utilsService;

    public function __construct()
    {
       session_start();
        $this->clientModel = new modelClient();
         $this->commandeModel = new Commandes();
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
        View::renderTemplate('clients/index.php', array(
            'clients' => $this->clientModel->get_(),
        ));
    }
    public function actionDoAction($params)
    {
        // ------------------ ADD , UPDATE , DELETE
        if($params['type']=="add"){
         $title='Enregistré un Client';
        }else if($params['type']=="update"){
       $title='Modifier les informations du  client';
        }else if($params['type']=="delete"){
        $title='Supprimer les informations du  client';
        }else{
           $title='Information client';
        }
        View::renderTemplate('clients/action.php', array(
            'type' => $params['type'],
            'id' => $params['id'],
            'title' => $title,
           // 'clients' => $this->clientModel->get_1(),
            'clientData' => $this->clientModel->get_1_0('client_id', $params['id'], 0, 1),
        ));
    }
   
     public function detailAction($params)
    {
        // ------------------ ADD , UPDATE , DELETE
        
        View::renderTemplate('clients/detail.php', array(
            'id' => $params['id'],
            'client' => $this->clientModel->get_1_1('client_id', $params['id'], 0, 1),
            'statitistique' => $this->serviceApp->getStateByClient($params['id']),
            'commandes' => $this->serviceApp->getCommandeListeByClient($params['id']),
            'factures' => $this->serviceApp->getFactureListeClient($params['id']),
          //  'factures' => $this->commandeModel->get_1_2_client('client_id_commandes', $params['id']),
        ));
    }
    public function before() { $this->utilsService->onBeforeGlobal(); }
    protected function after() {}
}
