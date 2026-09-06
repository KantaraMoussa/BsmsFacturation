<?php
namespace App\Controllers;

use \Core\View;
use App\Services\Utils;
use App\Models\Clients;
use App\Models\Addresses as modelAddresses;
use App\Utils\Helpers;

/**
 * Home controller
 */
class Addresses extends \Core\FrontController

{
    private $clientModel;
    private $addresseModel;
    private $utilsService;
    public function __construct()
    {
      session_start();
      $this->clientModel= new Clients();
      $this->addresseModel= new modelAddresses();
        $this->utilsService = new Utils();
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {
       View::renderTemplate('addresses/index.php', array(
          'addresses' =>$this->addresseModel->get_1_0(),
          
       ));
    }
     public function detailAction($param)
    {

        View::renderTemplate('addresses/detail.php', array(
         'addresse' =>$this->addresseModel->get_1_1('adresse_id',$param['id'],0,1),
        ));
    }

     public function actionDoAction($params)
    {
        // ------------------ ADD , UPDATE , DELETE
         if($params['type']=="add"){
         $title='Enregistré l\'addresse du client';
        }else if($params['type']=="update"){
       $title='Modifier l\'addresse du client';
        }else if($params['type']=="delete"){
        $title='Supprimer l\'addresse du client';
        }else{
           $title='Information sur l\'addresse du client';
        }
        View::renderTemplate('addresses/action.php', array(
            'clients' =>$this->clientModel->get_(),
            'addresse' =>$this->addresseModel->get_1_1('adresse_id',$params['id'],0,1),
            'type'=>$params['type'],
             'id'=>$params['id'],
            'title'=>$title
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
