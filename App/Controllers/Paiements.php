<?php
namespace App\Controllers;
use \Core\View;
use \App\Models\Paiements as modelPaiement;
use \App\Models\FactureLignes;
use App\Services\Utils;
use App\Services\AppServices;

/**
 * Home controller
 */
class Paiements extends \Core\FrontController

{
    private $paiementModel;
     private $serviceApp;
     private $utilsService;

    public function __construct()
    {     session_start();
        $this->serviceApp= new AppServices();
       $this->paiementModel= new modelPaiement();
           $this->utilsService = new Utils();
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {
       View::renderTemplate('paiements/index.php', array(
         'paiements'=>$this->paiementModel->get3()
       ));
    }
     public function detailAction()
    {

        View::renderTemplate('/detail.php', array());
    }

     public function actionDoAction($params)
    {
        // ------------------ ADD , UPDATE , DELETE
        $paiemnt=$this->paiementModel->get_1_1('facture_id_paiements',$params['id'],0,1000);
      
        (!empty($paiemnt) && count($paiemnt)!=0) ? $statusFacture=$paiemnt[0]['statut_factures'] :  $statusFacture='null';
        $factureLignes = $this->serviceApp->getFactureLineByFacture($params['id']);
        View::renderTemplate('paiements/action.php', array(
             'type' => $params['type'],
              'id' => $params['id'],
              'paiements'=>$paiemnt,
              'totalApayer'=> $factureLignes['montantTTC'] - $factureLignes['montantAvoir'],
              'statusFacture'=>$statusFacture
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
