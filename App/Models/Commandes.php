<?php

namespace App\Models;

use \Core\Database;
use \Core\SQLQuery as SQLQuery;

class Commandes
{
  private $commande;
  public function __construct()
  {
    $this->commande = new SQLQuery(Database::getInstance(), 'commandes');
  }
  public function add($data)
  {
    return $this->commande->create($data);
  }
  public function get_()
  {
    $this->commande->read('*');
    $this->commande->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
    return $this->commande->exec();
  }
  public function count()
  {
    $this->commande->getCount('commande_id');
    //$this->commande->where([$field, '=', $data]);
    return $this->commande->exec();
  }
  public function count1Not($field, $data)
  {
    $this->commande->getCount('commande_id');
    $this->commande->where([$field, '<>', $data]);
    return $this->commande->exec();
  }
    public function count1($field, $data)
  {
    $this->commande->getCount('commande_id');
    $this->commande->where([$field, '=', $data]);
    return $this->commande->exec();
  }
  public function update($values, $field, $data)
  {
    $this->commande->update($values);
    $this->commande->where([$field, '=', $data]);
    $this->commande->exec();
  }
  public function get_1_1($field, $data, $offset, $limit)
  {
    $this->commande->read('*');
    $this->commande->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
    $this->commande->where([$field, '=', $data]);
    $this->commande->limit($offset, $limit);
    return $this->commande->exec();
  }
    public function get_1_1_NO_LIMIT($field, $data)
  {
    $this->commande->read('*');
    $this->commande->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
    $this->commande->where([$field, '=', $data]);
    return $this->commande->exec();
  }
  public function get_1_2($field, $data, $offset, $limit)
  {
    $this->commande->read('*');
    $this->commande->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
    $this->commande->tjoin(array('addresses' => ['client_id_addresse', 'client_id']));
    $this->commande->where([$field, '=', $data]);
     $this->commande->orderBy('created_at_commandes', 'DESC');
    $this->commande->limit($offset, $limit);
    return $this->commande->exec();
  }
  public function getLastCommande()
  {
    $this->commande->read('*');
    $this->commande->orderBy('created_at_commandes', 'DESC');
    $this->commande->limit(0, 1);
    return $this->commande->exec();
  }

  public function get_1_1_NO($field, $data)
  {
    $this->commande->read('*');
    $this->commande->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
    $this->commande->where([$field, '<>', $data]);
    return $this->commande->exec();
  }

  public function get_1_0($field, $data, $offset, $limit)
  {
    $this->commande->read('*');
    $this->commande->where([$field, '=', $data]);
    $this->commande->limit($offset, $limit);
    return $this->commande->exec();
  }
  public function get_1_3($field, $data, $offset, $limit)
  {
    $this->commande->read('*');
    $this->commande->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
    $this->commande->tjoin(array('factures' => ['commande_id_factures', 'commande_id']));
    $this->commande->tjoin(array('facture_lignes' => ['facture_id_facture_lignes', 'facture_id']));
    $this->commande->where([$field, '=', $data]);
    $this->commande->limit($offset, $limit);
    return $this->commande->exec();
  }
    public function get_1_2_client($field, $data)
  {
    $this->commande->read('*');
    $this->commande->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
    $this->commande->tjoin(array('factures' => ['commande_id_factures', 'commande_id']));
    $this->commande->where([$field, '=', $data]);
      $this->commande->orderBy('created_at_factures','DESC');
    return $this->commande->exec();
  }
  public function get_1_2_facture($field, $data, $offset, $limit)
  {
    $this->commande->read('*');
    $this->commande->tjoin(array('factures' => ['commande_id_factures', 'commande_id']));
    $this->commande->where([$field, '=', $data]);
    $this->commande->limit($offset, $limit);
    return $this->commande->exec();
  }
}
