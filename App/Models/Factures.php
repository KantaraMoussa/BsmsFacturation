<?php

namespace App\Models;

use \Core\Database;
use \Core\SQLQuery as SQLQuery;

class Factures
{
    private $facture;
    public function __construct()
    {
        $this->facture = new SQLQuery(Database::getInstance(), 'factures');
    }
    public function add($data)
    {
        return $this->facture->create($data);
    }
   /* public function update($values, $field, $data)
    {
        $this->facture->update(
         
            ['commande_id_facture', $values['commande']],
            ['date_emission', $values['dateEmission']],
            ['date_echeance', $values['dateEcheance']],
            ['statut', $values['statut']],
        );
        $this->facture->where([$field, '=', $data]);
        $req = $this->facture->make();
        return $req;
    }*/
      public function update($values, $field, $data)
    {
        $this->facture->update($values);
        $this->facture->where([$field, '=', $data]);
        $req = $this->facture->exec();
        return $req;
    }
    public function get_()
    {
        $this->facture->read('*');
        $this->facture->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
        $this->facture->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
         $this->facture->orderBy('reference_commandes','DESC');
        return $this->facture->exec();
    }
        public function get_1_0($field, $data, $offset, $limit)
    {
        $this->facture->read('*');
        $this->facture->where([$field, '=', $data]);
        $this->facture->limit($offset, $limit);
        return $this->facture->exec();
    }

    public function get_1_1($field, $data, $offset, $limit)
    {
        $this->facture->read('*');
        $this->facture->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
        $this->facture->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
        $this->facture->where([$field, '=', $data]);
        $this->facture->limit($offset, $limit);
        return $this->facture->exec();
    }

        public function get_1_2($field, $data, $offset, $limit)
    {
        $this->facture->read('*');
        $this->facture->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
        $this->facture->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
        $this->facture->where([$field, '=', $data]);
        $this->facture->limit($offset, $limit);
        return $this->facture->exec();
    }
     public function get_1_3($field, $data, $offset, $limit)
    {
        $this->facture->read('*');
        $this->facture->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
        $this->facture->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
        $this->facture->tjoin(array('Addresses' => ['client_id_addresse', 'client_id']));
        $this->facture->where([$field, '=', $data]);
        $this->facture->limit($offset, $limit);
        return $this->facture->exec();
    }
     public function get_1_2_($field, $data, $offset, $limit)
    {
        $this->facture->read('*');
        $this->facture->tjoin(array('facture_lignes' => ['facture_id', 'facture_id_facture_lignes']));
        $this->facture->tjoin(array('articles' => ['article_id', 'article_id_facture_lignes']));
        // $this->facture->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
       //  $this->facture->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
       // $this->facture->tjoin(array('addresses' => ['client_id_addresse', 'client_id']));
        $this->facture->where([$field, '=', $data]);
        $this->facture->limit($offset, $limit);
        return $this->facture->exec();
    }
         public function get_1_5($field, $data, $offset, $limit)
    {
        $this->facture->read('*');
        $this->facture->tjoin(array('facture_lignes' => ['facture_id', 'facture_id_facture_lignes']));
        $this->facture->tjoin(array('articles' => ['article_id', 'article_id_facture_lignes']));
        $this->facture->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
        $this->facture->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
       $this->facture->tjoin(array('addresses' => ['client_id_addresse', 'client_id']));
        $this->facture->where([$field, '=', $data]);
        $this->facture->limit($offset, $limit);
        return $this->facture->exec();
    }
       public function count()
	{
		$this->facture->getCount('facture_id');
		return $this->facture->exec();
    }
        public function count_1_2($field, $data,$field2,$data2)
	{
		$this->facture->getCount('facture_id');
        $this->facture->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
		$this->facture->where([$field, '=', $data],'AND',[$field2, '=', $data2]);
		return $this->facture->exec();
    }
         public function count_1($field, $data)
	{
		$this->facture->getCount('facture_id');
		$this->facture->where([$field, '=', $data]);
		return $this->facture->exec();
    }

       public function count_1_1($field, $data)
	{
		$this->facture->getCount('facture_id');
        $this->facture->tjoin(array('commandes' => ['commande_id', 'commande_id_factures']));
		$this->facture->where([$field, '=', $data]);
		return $this->facture->exec();
    }
        public function count_1_diff($field, $data)
	{
		$this->facture->getCount('facture_id');
		$this->facture->where([$field, '<>', $data]);
		return $this->facture->exec();
    }
        public function countNot($field, $data)
	{
		$this->facture->getCount('facture_id');
		$this->facture->where([$field, '<>', $data]);
		return $this->facture->exec();
    }
     public function delete($field, $data)
    {
        $this->facture->delete();
        $this->facture->where(array($field, '=', $data));
        return $this->facture->exec();
    }
}
