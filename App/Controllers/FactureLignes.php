<?php

namespace App\Controllers;

use App\Services\Utils;
use App\Services\AppServices;
use \Core\View;
use App\Models\Transporteurs;
use App\Models\FactureLignes as ModelFactureLignes;
use App\Models\Factures;
use App\Models\Articles;
use App\Models\Paiements;
use App\Models\Pointage;
use App\Utils\Helpers;

/**
 * Home controller
 */
class FactureLignes extends \Core\FrontController

{
    private $factureLignemodel;
    private $factureModel;
    private $articleModel;
    private $paiementModel;
    private $personnelModel;
    private $pointageModel;
    private $utilsService;
     private $serviceApp;

    public function __construct()
    {
        session_start();
        $this->factureLignemodel = new ModelFactureLignes();
        $this->factureModel = new Factures();
        $this->articleModel = new Articles();
        $this->paiementModel = new Paiements();
        $this->utilsService = new Utils();
        $this->personnelModel = new Transporteurs();
        $this->pointageModel = new Pointage();
          $this->serviceApp = new AppServices();
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {


        View::renderTemplate('facture_lignes/index.php', array(
            'factureLignes' => $this->factureLignemodel->get_4(),
        ));
    }
    public function detailAction($param)
    {
        View::renderTemplate('facture_lignes/detail.php', array(
            'factureLigne' => $this->factureLignemodel->get_1_5('ligne_id', $param['id'], 0, 1),
            'paiement' => $this->paiementModel->get_1_1('facture_id_paiements', $param['id'], 0, 1),
            'entreprise' => Helpers::information(),

        ));
    }
    public function pointageAction($param)
    {
      // var_dump($this->serviceApp->getPointageLigneFacture($param['id']));exit();
       
        View::renderTemplate('facture_lignes/pointage.php', array(
            'factureLigne' => $this->factureLignemodel->get_1_5('ligne_id', $param['id'], 0, 1),
            'pointages' => $this->serviceApp->getPointageLigneFacture($param['id']),
            'paiement' => $this->paiementModel->get_1_1('facture_id_paiements', $param['id'], 0, 1),
            'entreprise' => Helpers::information(),

        ));
    }

    public function actionDoAction($params)
    {

        //var_dump($_SESSION['role_utilisateur']);exit();
        if ($params['type'] == "add") {
            $title = 'Ajouté un article à la facture';
        } else if ($params['type'] == "update") {
            $title = 'Modifier un article de la facture';
        } else if ($params['type'] == "delete") {
            $title = 'Supprimer un article de la facture';
        } else if ($params['type'] == "add-pointage") {
            $title = 'Effectuer le pointage';
        } else {
            $title = 'Validé cette facture ';
        }
        // ------------------ ADD , UPDATE , DELETE
        ($params['id'] == 'null') ? $factures = $this->factureModel->get_() : $factures = $this->factureLignemodel->get_1_3('ligne_id', $params['id'], 0, 1);
        View::renderTemplate('facture_lignes/action.php', array(
            'type' => $params['type'],
            'id' => $params['id'],
            'articles' => $this->articleModel->get_(),
            'factures' => $factures,
            'title' => $title,
            'personnels' => $this->personnelModel->get_(),


        ));
    }
    public function before()
    {
        $this->utilsService->onBeforeGlobal();
    }
    protected function after() {}
}
