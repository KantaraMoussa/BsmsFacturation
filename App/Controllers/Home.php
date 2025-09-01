<?php

namespace App\Controllers;

use \Core\View;
use \App\Utils\Helpers;

/**
 * Home controller
 */
class Home extends \Core\FrontController

{

    public function __construct() {}

    /**
     * Show the index page
     *
     * @return void
     */
     public function indexAction()
    {
          View::renderTemplate('external/login.php',array('app'=>Helpers::information()));    
    } 
    public function before() {}

    protected function after() {}
}
