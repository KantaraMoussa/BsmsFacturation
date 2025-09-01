<?php

namespace App\Models;

use \Core\Database;
use \App\Config\Constant;
use \Core\SQLQuery as SQLQuery;

class FactureLignes
{
    private $FactureLigne;
    public function __construct()
    {

        $this->FactureLigne = new SQLQuery(Database::getInstance(), 'facture_lignes');
    }
    public function add($data)
    {
        return $this->FactureLigne->create($data);
    }
    public function get_4()
    {
        $this->FactureLigne->read('*');
        $this->FactureLigne->tjoin(array('factures' => ['facture_id', 'facture_id_facture_lignes']));
        $this->FactureLigne->tjoin(array('articles' => ['article_id', 'article_id_facture_lignes']));
        $this->FactureLigne->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
        $this->FactureLigne->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
        return $this->FactureLigne->exec();
    }
    public function getNumberRef()
    {
        $this->FactureLigne->read('*');
        $this->FactureLigne->orderBy('created_at_facture_lignes', 'DESC');
        $this->FactureLigne->limit(0, 1);
        return $this->FactureLigne->exec();
    }

    public function get_1_3($field, $data, $offset, $limit)
    {
        $this->FactureLigne->read('*');
        $this->FactureLigne->tjoin(array('factures' => ['facture_id', 'facture_id_facture_lignes']));
        $this->FactureLigne->tjoin(array('articles' => ['article_id', 'article_id_facture_lignes']));
        $this->FactureLigne->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
        $this->FactureLigne->where([$field, '=', $data]);
        $this->FactureLigne->limit($offset, $limit);
        return $this->FactureLigne->exec();
    }

      public function get_1_1_No_Limit($field, $data)
    {
        $this->FactureLigne->read('*');
        $this->FactureLigne->tjoin(array('factures' => ['facture_id', 'facture_id_facture_lignes']));
        $this->FactureLigne->where([$field, '=', $data]);
        return $this->FactureLigne->exec();
    }

    public function get_1_5($field, $data, $offset, $limit)
    {
        $this->FactureLigne->read('*');
        $this->FactureLigne->tjoin(array('factures' => ['facture_id', 'facture_id_facture_lignes']));
        $this->FactureLigne->tjoin(array('articles' => ['article_id', 'article_id_facture_lignes']));
        $this->FactureLigne->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
        $this->FactureLigne->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
        $this->FactureLigne->tjoin(array('addresses' => ['client_id_addresse', 'client_id']));
        $this->FactureLigne->where([$field, '=', $data]);
        $this->FactureLigne->limit($offset, $limit);
        return $this->FactureLigne->exec();
    }
    
      public function get_1_1($field, $data,$offset, $limit)
    {
        $this->FactureLigne->read('*');
        $this->FactureLigne->tjoin(array('factures' => ['facture_id', 'facture_id_facture_lignes']));
        $this->FactureLigne->where([$field, '=', $data]);
         $this->FactureLigne->limit($offset, $limit);
        return $this->FactureLigne->exec();
    }
    public function get_1_0($field, $data, $offset, $limit)
    {
        $this->FactureLigne->read('*');

        $this->FactureLigne->where([$field, '=', $data]);
        $this->FactureLigne->limit($offset, $limit);
        return $this->FactureLigne->exec();
    }

    public function SumTtcFactureLigne($field, $data, $offset, $limit)
    {
        $this->FactureLigne->querySelect('SELECT SUM(montant_ttc_facture_lignes) from facture_lignes');
        $this->FactureLigne->where([$field, '=', $data]);
        $this->FactureLigne->limit($offset, $limit);
        return $this->FactureLigne->exec();
    }


    public function update($values, $field, $data)
    {
        $this->FactureLigne->update($values);
        $this->FactureLigne->where([$field, '=', $data]);
        $this->FactureLigne->exec();
    }

    public function SumTtcCommande($field, $data, $offset, $limit)
    {
        $this->FactureLigne->querySelect(Constant::SQL_MONTANT_COMMANDE);
        $this->FactureLigne->where([$field, '=', $data]);
        $this->FactureLigne->limit($offset, $limit);
        return $this->FactureLigne->exec();
    }
        public function delete($field, $data)
    {
        $this->FactureLigne->delete();
        $this->FactureLigne->where(array($field, '=', $data));
        return $this->FactureLigne->exec();
    }
}
