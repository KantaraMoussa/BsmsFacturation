<?php

namespace App\Services;

use App\Models\Notification;
use App\Models\Users;


class Dashboards
{
    private $rdv;
    private $user;
    private $notification;
    

    public function __construct()
    {
        $this->rdv = new Rdv();
        $this->user = new Users();
        $this->notification = new Notification(); 
    }
    public function rdvEnAttente($field, $data,$field2,$data2)
    {
      return $this->rdv->EnAttenteAction($field,$data,$field2,$data2);
    }

    public function countRdv1($field, $data){
        return $this->rdv->count1($field,$data);
    }
    public function countRdv2($field, $data,$field2,$data2){
        return $this->rdv->count1($field,$data,$field2,$data2);
    }

    public function forNotification($field, $data, $offset, $limit){
        return  $this->notification->get($field, $data, $offset, $limit);
    }
    public function getAllNotification()  {
        return  $this->notification->getAll();
    }

}
