<?php

namespace App\Services;


use Core\Helpers;

class Utils
{
    private $uuserService;

    public function __construct()
    {
        $this->uuserService = new Utilisateur();
  
    }
 
    public function onBeforeGlobal()
    {

        if (!isset($_SESSION['id_user'])) {
            header('Location:' . Helpers::url(''));
            exit;
        }
    }

}