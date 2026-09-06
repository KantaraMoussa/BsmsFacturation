<?php

namespace App\Controllers;

use App\Services\Utils;
use \Core\View;
use App\Models\Factures as modelFacture;
use App\Models\Commandes;
use App\Models\Paiements;
use App\Services\AppServices;
use App\Utils\Helpers;



/**
 * Home controller
 */
class Factures extends \Core\FrontController

{
    private $factureModel;
    private $commandeModel;
    private $paiementModel;
    private $appService;
    private $utilsService;

    public function __construct()
    {
        session_start();
        $this->factureModel = new modelFacture();
        $this->commandeModel = new Commandes();
        $this->paiementModel = new Paiements();
        $this->appService = new AppServices();
        $this->utilsService = new Utils();
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {
        View::renderTemplate('factures/index.php', array(
            'factures' => $this->appService->getFactureListe(),
        ));
    }
    public function detailAction($param)
    {

        // var_dump( $this->appService->getFactureLineByFacture($param['id']));exit();

        $paiement = $this->paiementModel->get_1_1('facture_id_paiements', $param['id'], 0, 1000);
        (count($paiement) == 1) ? $paiement = $paiement[0] : $paiement = $paiement;
        View::renderTemplate('factures/detail.php', array(
            'facture' => $this->factureModel->get_1_3('facture_id', $param['id'], 0, 1),
            'entreprise' => Helpers::information(),
            'factureLignes' => $this->appService->getFactureLineByFacture($param['id']),
            'paiements' => $paiement,
            'role_utilisateur' => $_SESSION['role_utilisateur'],

        ));
    }
    public function preview($param)
    {
        $paiement = $this->paiementModel->get_1_1('facture_id_paiements', $param['id'], 0, 1000);
        (!empty($paiement)) ? $statusFacture = $paiement[0]['statut_factures'] :  $statusFacture = 'null';
        (count($paiement) == 1) ? $paiement = $paiement[0] : $paiement = $paiement;
        View::renderTemplate('factures/preview.php', array(
            'facture' => $this->factureModel->get_1_3('facture_id', $param['id'], 0, 1),
            'entreprise' => Helpers::information(),
            'factureLignes' => $this->appService->getFactureLineByFacture($param['id']),
            'paiements' => $paiement,
        ));
    }

    public function actionDoAction($params)
    {
        // ------------------ ADD , UPDATE , DELETE
        if ($params['type'] == "add") {
            $title = 'Enregistré une Facture';
        } else if ($params['type'] == "update") {
            $title = 'Modifier les informations de la Facture';
        } else if ($params['type'] == "delete") {
            $title = 'Supprimer cette facture';
        } else {
            $title = 'Information sur la facture ';
        }
        View::renderTemplate('factures/action.php', array(
            'type' => $params['type'],
            'title' => $title,
            'id' => $params['id'],
            'commandes' => $this->commandeModel->get_1_1('etat_commandes', 'en attente', 0, 100),
            'facture' => $this->factureModel->get_1_2('facture_id', $params['id'], 0, 1),
            'taxes' => $this->appService->getActiveTaxes(),
        ));
    }


    public function printAction($param)
    {

        echo json_encode($this->appService->printFees($param));
    }
    public function crudAction()
    {
        echo $this->appService->crud($_POST);
    }
    public function before()
    {
        $this->utilsService->onBeforeGlobal();
    }
    protected function after() {}
}
