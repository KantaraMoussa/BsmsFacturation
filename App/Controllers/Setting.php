<?php
namespace App\Controllers;
use \Core\View;

/**
 * Home controller
 */
class Setting extends \Core\FrontController

{



    public function __construct()
    {
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {

        View::renderTemplate('setting/index.php', array());
    }

    public function before()
    {
    }

    protected function after()
    {
    }
}
