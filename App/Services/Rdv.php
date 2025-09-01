<?php

namespace App\Services;

use App\Models\Rdv as modelRdvNew;
use App\Models\Users;
use App\Models\Notification as modelNotification;
use App\Utils\Helpers as UtilsHelpers;


use Core\Helpers;
use Curl\Curl;

class Rdv
{
    private $rdvModel;
    private $notificationModel;
    private $userModel;

    public function __construct()
    {

        $this->rdvModel = new modelRdvNew();
        $this->notificationModel = new modelNotification();
        $this->userModel = new Users();
    }

    public function crud($data)
    {

        if ($data['action'] == 'add_rdv') {
            return json_encode($this->addRdv($data));
        } else if ($data['action'] == 'update_rdv') {
            return json_encode($this->updateRdv($data));
        }
    }



    public function addRdv($data): array
    {
      
        $notificationDesc = "Vous avez réçus une demande de rdv";
        $notificationType = "confirmation de demande";
        $smsText = "Vous avez réçus une demande de rdv";
        $userReceptRdv = $this->userModel->get('id_users', $data['user'], 0, 1);
        $id = Helpers::generateString(32);
        $ret = array('msg' => 'unexpected error happen');
        $sql = $this->rdvModel->create(array(
            'id_rdv' => $id,
            'id_user_ask_rdv' => $_SESSION['id_user'],
            'id_user_recept_rdv' => $data['user'],
            'status_rdv' => 'En attente',
            'note_rdv' => $data['desc'],
            'lieux_rdv' => $data['lieu'],
            'date_debut_rdv' => $data['dateDebut'],
            'date_fin_rdv' => $data['dateFin'],
            'heure_debut_rdv' => $data['heureDebut'],
            'heure_fin_rdv' => $data['heureFin'],
        ));
        $this->notificationModel->create(array(
            'id_notification' => Helpers::generateString(32),
            'id_rdv_notification' => $id,
            'id_user_recept_notification' => $data['user'],
            'type_notification' => $notificationType,
            'desc_notification' => $notificationDesc,
            'created_at' => time(),
        ));
       
        $ret['success'] = $sql == true;
        UtilsHelpers::sendSms('224'.trim($userReceptRdv['telephone']),$smsText );

        return $ret;
    }

    public function updateRdv($data): array
    {

        $ret = array('msg' => 'unexpected error happen');
        $rdv = $this->rdvModel->get_1('id_rdv', $data['id'], 0, 1);
        $userEmit = $this->userModel->get('id_user', $rdv['id_user_ask_rdv'], 0, 1);
        $notificationDesc = "votre rendez vous a été légérement modifié";
        $notificationType = "Modification";
        $smsText = "votre rendez vous a été légérement modifié";
        $sql = $this->rdvModel->update(array(
            'note_rdv' => $data['desc'],
            'lieux_rdv' => $data['lieu'],
            'date_debut_rdv' => $data['dateDebut'],
            'date_fin_rdv' => $data['dateFin'],
            'heure_debut_rdv' => $data['heureDebut'],
            'heure_fin_rdv' => $data['heureFin'],
        ), 'id_rdv', $data['id']);      
        $this->notificationModel->create(array(
            'id_notification' => Helpers::generateString(32),
            'id_rdv_notification' => $data['id'],
            'id_user_recept_notification' => $rdv['id_user_ask_rdv'],
            'type_notification' => $notificationType,
            'desc_notification' => $notificationDesc,
            'created_at' => time(),
        ));
        $ret['success'] = $sql == true;
        UtilsHelpers::sendSms('224'.trim($userEmit['telephone']), $smsText);
        return $ret;
    }
    public function changeRdvStatus($status, $id)
    {
        $ret = array('msg' => 'unexpected error happen');
        $rdv = $this->rdvModel->get_1('id_rdv', $id, 0, 1);
        $userEmit = $this->userModel->get('id_user', $rdv['id_user_ask_rdv'], 0, 1);
        if ($status == 'Confirmé') {
            $notificationDesc = "votre rendez vous a été confirmé";
            $notificationType = "Confirmation";
            $smsText = "";
        } else if ($status == 'annulé') {
            $notificationDesc = "votre rendez vous a été annulé";
            $notificationType = "annulation";
            $smsText = "votre rendez vous a été annulé";
        } else if ($status == 'rappel') {
            $notificationDesc = "vous avez un rappel de rendez vous";
            $notificationType = "rappel";
            $smsText = "vous avez un rappel de rendez vous";
        }
        $sql = $this->rdvModel->update(array(
            'status_rdv' => $status,
        ), 'id_rdv', $id);

        $this->notificationModel->create(array(
            'id_notification' => Helpers::generateString(32),
            'id_rdv_notification' => $id,
            'id_user_recept_notification' => $rdv['id_user_ask_rdv'],
            'type_notification' => $notificationType,
            'desc_notification' => $notificationDesc,
            'created_at' => time(),
        ));
       UtilsHelpers::sendSms('224'.trim($userEmit['telephone']),$smsText );
    
    }
    public function getService($field, $data, $offset, $limit)
    {
        return   $this->rdvModel->get_1($field, $data, $offset, $limit);
    }
    public function EnAttenteAction($field, $data, $field2, $data2)
    {
        return   $this->rdvModel->get_1_2_destinateur($field, $data, $field2, $data2);
    }
    public function rdvRecu($field, $data, $offset, $limit){
        return   $this->rdvModel->get_1_1_destinateur($field, $data, $offset, $limit);
    }
    public function rdvEmit($field, $data)
    {
        return   $this->rdvModel->get_1_1_ask_rdv($field, $data);
    }
    public function count1($field, $data)
    {
        return $this->rdvModel->count($field, $data);
    }
    public function count2($field, $data, $field2, $data2)
    {
        return $this->rdvModel->count2($field, $data, $field2, $data2);
    }
}
