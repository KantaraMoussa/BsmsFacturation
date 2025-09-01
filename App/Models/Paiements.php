<?php

namespace App\Models;
use \App\Config\Constant;
use \Core\Database;
use \Core\SQLQuery as SQLQuery;

class Paiements
{
    private $paiement;
    public function __construct()
    {
        $this->paiement = new SQLQuery(Database::getInstance(), 'paiements');
    }
    public function add($data)
    {
        return $this->paiement->create($data);
    }
    public function update($values, $field, $data)
    {
        $this->paiement->update($values );
        $this->paiement->where([$field, '=', $data]);
        $req = $this->paiement->exec();
        return $req;
    }
    public function get_1_0($field, $data)
    {
        $this->paiement->read('*');
        $this->paiement->where([$field, '=', $data]);
        return $this->paiement->exec();
    }
     public function get_1_1($field, $data, $offset, $limit)
    {
        $this->paiement->read('*');
        $this->paiement->tjoin(array('factures' => ['facture_id','facture_id_paiements']));
        $this->paiement->where([$field, '=', $data]);
        $this->paiement->limit($offset, $limit);
        return $this->paiement->exec();
    }
    public function get3()
    {
        $this->paiement->read('*');
        $this->paiement->tjoin(array('factures' => ['facture_id','facture_id_paiements']));
        $this->paiement->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
        $this->paiement->tjoin(array('clients' => ['client_id', 'client_id_commandes']));

        return $this->paiement->exec();
    }
    public function get_1_3($field, $data, $offset, $limit)
    {
        $this->paiement->read('*');
        $this->paiement->tjoin(array('factures' => ['facture_id', 'commande_id_paiements']));
        $this->paiement->tjoin(array('clients' => ['client_id', 'client_id_facture']));
        $this->paiement->tjoin(array('commandes' => ['commande_id', 'facture_id_commandes']));
        $this->paiement->where([$field, '=', $data]);
        $this->paiement->limit($offset, $limit);
        return $this->paiement->exec();
    }
     public function get_1($field, $data)
    {
        $this->paiement->read('*');
        $this->paiement->where([$field, '=', $data]);
        return $this->paiement->exec();
    }
      public function SumTotalPayerCommande($field, $data,$offset, $limit)
    {
        $this->paiement->querySelect(Constant::SQL_MONTANT_PAYER_COMMANDE);
        $this->paiement->where([$field, '=', $data]);
               $this->paiement->limit($offset, $limit);
        return $this->paiement->exec();
    }
}
