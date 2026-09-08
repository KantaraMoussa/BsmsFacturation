<?php

namespace App\Controllers;

use \Core\View;
use Core\Helpers as CoreHelpers;
use App\Services\Utils;
use App\Services\AppServices;
use App\Services\KpiDirectionService;

/**
 * Financial and fleet reports - cahier des charges §20, §22, §39, and the
 * "MODULE KPI DASHBOARD DIRECTION".
 */
class Rapports extends \Core\FrontController
{
    private $serviceApp;
    private $utilsService;
    private $kpiService;

    private const DIRECTION_ACTIONS = array('rapports/direction', 'rapports/direction-data', 'rapports/direction-detail');

    public function __construct()
    {
        session_start();
        $this->serviceApp = new AppServices();
        $this->utilsService = new Utils();
        $this->kpiService = new KpiDirectionService();
    }

    public function creancesAction()
    {
        View::renderTemplate('rapports/creances.php', array(
            'creances' => $this->serviceApp->getCreances(),
            'aging' => $this->serviceApp->getCreancesAging(),
        ));
    }

    public function rentabiliteAction()
    {
        View::renderTemplate('rapports/rentabilite.php', array(
            'rentabilite' => $this->serviceApp->getRentabiliteEngins(),
        ));
    }

    /**
     * Direction KPI dashboard - full server-rendered first paint (works
     * without JS) for the default period, then the filter bar refreshes
     * everything in place via directionDataAction().
     */
    public function directionAction()
    {
        $data = $this->kpiService->getAll($_GET);
        $data['initial_json'] = json_encode($data);
        $data['options'] = $this->kpiService->getFilterOptions();
        $data['detail_url'] = $this->buildDetailUrl($data['filters']);
        View::renderTemplate('rapports/direction.php', $data);
    }

    /** Base drilldown URL (no label) carrying the current filter set - the view appends &label=... per KPI. */
    private function buildDetailUrl(array $filters): string
    {
        $query = http_build_query(array(
            'date_from' => $filters['date_from'],
            'date_to' => $filters['date_to'],
            'client' => $filters['client'],
            'chantier' => $filters['chantier'],
            'engin' => $filters['engin'],
            'categorie' => $filters['categorie'],
            'contrat' => $filters['contrat'],
            'prestation' => $filters['prestation'],
            'statut' => $filters['statut'],
        ));
        return CoreHelpers::url('rapports/direction-detail') . '?' . $query;
    }

    /** JSON refresh endpoint used by the filter bar. */
    public function directionDataAction()
    {
        header('Content-Type: application/json');
        echo json_encode($this->kpiService->getAll($_POST));
    }

    /**
     * Drilldown behind a KPI card/chart click: same filters, optionally an
     * ageing tranche, rendered as the list of factures that make up the number.
     */
    public function directionDetailAction()
    {
        $filters = $this->kpiService->normalizeFilters($_GET);
        $tranche = !empty($_GET['tranche']) ? $_GET['tranche'] : null;
        $onlyOutstanding = !empty($_GET['only_outstanding']);
        $label = $_GET['label'] ?? 'Détail';

        View::renderTemplate('rapports/direction-detail.php', array(
            'factures' => $this->kpiService->getFilteredFactures($filters, $tranche, $onlyOutstanding),
            'filters' => $filters,
            'label' => $label,
        ));
    }

    public function before()
    {
        $this->utilsService->onBeforeGlobal();

        $requestPath = explode('&', $_SERVER['QUERY_STRING'] ?? '')[0];

        foreach (self::DIRECTION_ACTIONS as $action) {
            if (strpos($requestPath, $action) === 0 && ($_SESSION['role_utilisateur'] ?? '') !== 'admin') {
                header('Location:' . CoreHelpers::url('dashboard'));
                exit;
            }
        }
    }
    protected function after()
    {
    }
}
