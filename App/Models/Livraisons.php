<?php

namespace App\Models;

use \Core\Database;
use \Core\SQLQuery as SQLQuery;

class Livraisons
{
    private $livraison;
    public function __construct()
    {
        $this->livraison = new SQLQuery(Database::getInstance(), 'livraisons');
    }
    public function add($data)
    {
        return $this->livraison->create($data);
    }
    public function update($values, $field, $data)
    {  
        $this->livraison->update(
            ['commande_id_livraisons', $values['commande']],
            ['transporteur_id_livraisons', $values['transporteur']],
            ['date_livraison', $values['dateEmission']],
            ['etat_livraison', $values['dateEcheance']],
        );
        $this->livraison->where([$field, '=', $data]);
        $req = $this->livraison->make();
        return $req;
    }
    public function get6()
    {
        $this->livraison->read('*');
        $this->livraison->tjoin(array('personelles' => ['personnelle_id', 'transporteur_id_livraisons']));
        $this->livraison->tjoin(array('commandes' => ['commande_id', 'commande_id_livraisons']));
         $this->livraison->tjoin(array('clients' => ['client_id', 'client_id_commandes']));
         $this->livraison->tjoin(array('factures' => ['commande_id_factures', 'commande_id']));
       $this->livraison->tjoin(array('facture_lignes' => ['facture_id_facture_lignes', 'facture_id']));
        $this->livraison->tjoin(array('articles' => ['article_id', 'article_id_facture_lignes']));
        return $this->livraison->exec();
    }
    public function get_1_1($field, $data, $offset, $limit)
    {
        $this->livraison->read('*');
         $this->livraison->tjoin(array('personelles' => ['personnelle_id', 'transporteur_id_livraisons']));
        $this->livraison->tjoin(array('commandes' => ['commande_id', 'commande_id_livraisons']));
         $this->livraison->tjoin(array('factures' => ['facture_id', 'commande_id']));
        $this->livraison->tjoin(array('clients' => ['client_id', 'client_id_factures']));
        $this->livraison->where([$field, '=', $data]);
        $this->livraison->limit($offset, $limit);
        return $this->livraison->exec();
    }

        public function get_1($field, $data, $offset, $limit)
    {
        $this->livraison->read('*');
       $this->livraison->where([$field, '=', $data]);
        $this->livraison->limit($offset, $limit);
        return $this->livraison->exec();
    }
         public function get_()
    {
        $this->livraison->read('*');
     
        return $this->livraison->exec();
    }
}
