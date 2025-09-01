<?php

namespace App\Models;

use \Core\Database;
use \Core\SQLQuery as SQLQuery;

class Articles
{
    private $article;
    public function __construct()
    {
        $this->article = new SQLQuery(Database::getInstance(), 'articles');
    }
    public function add($data)
    {
        return $this->article->create($data);
    }
    public function get_()
    {
        $this->article->read('*');
        return $this->article->exec();
    }
    public function count()
    {
        $this->article->getCount('article_id');
        //$this->commande->where([$field, '=', $data]);
        return $this->article->exec();
    }
    /*  public function update($values, $field, $data)
    {
        $this->article->update(
            ['libelle_article', $values['libelle']],
            ['description_article', $values['description']],   
            ['prix_unitaire_article', $values['prix']],
            ['type_article', $values['type']],
            ['unite_article', $values['unite']], 
            ['taux_tva_article', $values['tva']],  
            ['quantite_article', $values['quantite']],
        );
        $this->article->where([$field, '=', $data]);
        $req = $this->article->make();
        return $req;
    }*/

    public function update($values, $field, $data)
    {
        $this->article->update($values);
        $this->article->where([$field, '=', $data]);
        $req = $this->article->exec();
        return $req;
    }

    public function get_1_1($field, $data, $offset, $limit)
    {
        $this->article->read('*');
        $this->article->where([$field, '=', $data]);
        $this->article->limit($offset, $limit);
        return $this->article->exec();
    }
    public function delete($field, $data)
    {
        $this->article->delete();
        $this->article->where(array($field, '=', $data));
        return $this->article->exec();
    }
}
