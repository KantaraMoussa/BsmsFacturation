<?php

namespace App\Controllers;

use \Core\View;
use App\Models\Engins as modelEngin;
use App\Services\Utils;

/**
 * Fleet (engins) management - cahier des charges §7.
 */
class Engins extends \Core\FrontController
{
    private $enginModel;
    private $utilsService;

    public function __construct()
    {
        session_start();
        $this->enginModel = new modelEngin();
        $this->utilsService = new Utils();
    }

    public function indexAction()
    {
        View::renderTemplate('engins/index.php', array(
            'engins' => $this->enginModel->get_(),
        ));
    }

    public function detailAction($param)
    {
        View::renderTemplate('engins/detail.php', array(
            'engin' => $this->enginModel->get_1('engin_id', $param['id'], 0, 1),
            'role_utilisateur' => $_SESSION['role_utilisateur'],
        ));
    }

    public function actionDoAction($params)
    {
        if ($params['type'] == "add") {
            $title = 'Enregistrer un engin';
        } else if ($params['type'] == "update") {
            $title = 'Modifier les informations de l\'engin';
        } else if ($params['type'] == "delete") {
            $title = 'Supprimer cet engin';
        } else {
            $title = 'Information sur l\'engin';
        }
        View::renderTemplate('engins/action.php', array(
            'type' => $params['type'],
            'title' => $title,
            'id' => $params['id'],
            'engin' => $this->enginModel->get_1('engin_id', $params['id'], 0, 1),
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
