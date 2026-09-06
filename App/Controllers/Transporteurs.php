<?php

namespace App\Controllers;

use \Core\View;
use App\Models\Transporteurs as modelTransporteurs;
use App\Services\Utils;

/**
 * Home controller
 */
class Transporteurs extends \Core\FrontController

{
    private $transporteurModel;
        private $utilsService;


    public function __construct()
    {
     session_start();
        $this->transporteurModel = new modelTransporteurs();
            $this->utilsService = new Utils();
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {
        View::renderTemplate('transporteurs/index.php', array(
            'personnelle' => $this->transporteurModel->get_(),
        ));
    }
    public function detailAction($param)
    {
        View::renderTemplate('transporteurs/detail.php', array(
            'transporteur' => $this->transporteurModel->get_1_1('personnelle_id', $param['id'], 0, 1),
        ));
    }

    public function actionDoAction($params)
    {
        // ------------------ ADD , UPDATE , DELETE
           if ($params['type'] == "add") {
            $title = 'Enregistré un Personnel';
        } else if ($params['type'] == "update") {
            $title = 'Modifier les informations sur le Personnel';
        } else if ($params['type'] == "delete") {
            $title = 'Supprimer un Personnel';
        } else {
            $title = 'Information sur le transporteur ';
        }
        View::renderTemplate('transporteurs/action.php', array(
            'type' => $params['type'],
            'id' => $params['id'],
            'title' => $title,
            'personnelle' => $this->transporteurModel->get_(),
            'transporteur' => $this->transporteurModel->get_1_1('personnelle_id', $params['id'], 0, 1),
        ));
    }
    public function before() { $this->utilsService->onBeforeGlobal();}
    protected function after() {}
}
