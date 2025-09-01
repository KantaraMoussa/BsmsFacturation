<?php
namespace App\Controllers;
use \Core\View;
use App\Services\Utils;
use App\Models\Livraisons as modelLivraison;
use App\Models\Commandes as modelCommande;
use App\Models\Transporteurs;


/**
 * Home controller
 */
class Livraisons extends \Core\FrontController

{
    private $livraisonModel;
    private $commandeModel;
    private $transporteurModel;
        private $utilsService;

    public function __construct()
    {
       session_start();
        $this->livraisonModel = new modelLivraison();
         $this->commandeModel= new modelCommande();
          $this->transporteurModel= new Transporteurs();    $this->utilsService = new Utils();
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {
        
       View::renderTemplate('livraisons/index.php', array(
          'livraisons' => $this->livraisonModel->get6(),
       ));
    }
     public function detailAction()
    {

        View::renderTemplate('livraisons/detail.php', array());
    }

     public function actionDoAction($params)
    {
        // ------------------ ADD , UPDATE , DELETE
         ($params['id']=='null') ? $commandes=$this->commandeModel->get_():$commandes=$this->commandeModel->get_1_0('commande_id',$params['id'],0,2); 
       
        // var_dump($commandes);exit();
         View::renderTemplate('livraisons/action.php', array(
             'type' => $params['type'],
            'id' => $params['id'],
            'commandes' =>$commandes,
            'personnelle' => $this->transporteurModel->get_(),
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
