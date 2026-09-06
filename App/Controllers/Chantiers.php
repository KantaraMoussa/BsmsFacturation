<?php

namespace App\Controllers;

use \Core\View;
use App\Models\Chantiers as modelChantier;
use App\Models\Clients;
use App\Services\Utils;

/**
 * Chantiers / sites - cahier des charges §9.
 */
class Chantiers extends \Core\FrontController
{
    private $chantierModel;
    private $clientModel;
    private $utilsService;

    public function __construct()
    {
        session_start();
        $this->chantierModel = new modelChantier();
        $this->clientModel = new Clients();
        $this->utilsService = new Utils();
    }

    public function indexAction()
    {
        View::renderTemplate('chantiers/index.php', array(
            'chantiers' => $this->chantierModel->get_(),
        ));
    }

    public function detailAction($param)
    {
        View::renderTemplate('chantiers/detail.php', array(
            'chantier' => $this->chantierModel->get_1('chantier_id', $param['id'], 0, 1),
            'role_utilisateur' => $_SESSION['role_utilisateur'],
        ));
    }

    public function actionDoAction($params)
    {
        if ($params['type'] == "add") {
            $title = 'Enregistrer un chantier';
        } else if ($params['type'] == "update") {
            $title = 'Modifier les informations du chantier';
        } else if ($params['type'] == "delete") {
            $title = 'Supprimer ce chantier';
        } else {
            $title = 'Information sur le chantier';
        }
        View::renderTemplate('chantiers/action.php', array(
            'type' => $params['type'],
            'title' => $title,
            'id' => $params['id'],
            'clients' => $this->clientModel->get_(),
            'chantier' => $this->chantierModel->get_1('chantier_id', $params['id'], 0, 1),
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
