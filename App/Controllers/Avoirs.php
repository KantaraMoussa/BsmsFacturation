<?php
namespace App\Controllers;
use \Core\View;
use \App\Models\Avoirs as modelAvoir;
use App\Services\Utils;
use App\Services\AppServices;
use Core\Helpers as CoreHelpers;

/**
 * Avoirs (credit notes) controller - issuing an avoir is admin-only,
 * see cahier des charges §18.
 */
class Avoirs extends \Core\FrontController
{
    private $avoirModel;
    private $serviceApp;
    private $utilsService;

    public function __construct()
    {
        session_start();
        $this->avoirModel = new modelAvoir();
        $this->serviceApp = new AppServices();
        $this->utilsService = new Utils();
    }

    public function actionDoAction($params)
    {
        $factureLignes = $this->serviceApp->getFactureLineByFacture($params['id']);
        View::renderTemplate('avoirs/action.php', array(
            'id' => $params['id'],
            'montantRestant' => $factureLignes['montantTTC'] - $factureLignes['montantAvoir'],
            'avoirs' => $this->avoirModel->get_1('facture_id_avoirs', $params['id']),
        ));
    }

    public function before()
    {
        $this->utilsService->onBeforeGlobal();

        if (($_SESSION['role_utilisateur'] ?? '') !== 'admin') {
            header('Location:' . CoreHelpers::url('dashboard'));
            exit;
        }
    }
    protected function after()
    {
    }
}
