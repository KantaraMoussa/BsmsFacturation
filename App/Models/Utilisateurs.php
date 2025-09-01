<?php

namespace App\Models;

use \Core\Database;
use \Core\SQLQuery as SQLQuery;

class Utilisateurs
{
    private $utilisateur;
    public function __construct()
    {
        $this->utilisateur = new SQLQuery(Database::getInstance(), 'utilisateurs');
    }
    public function add($data)
    {
        return $this->utilisateur->create($data);
    }
    public function update($values, $field, $data)
    {
        $this->utilisateur->update(
            ['nomComplet', $values['nom']],
            ['contact', $values['contact']],
            ['telephone', $values['telephone']],
        );
        $this->utilisateur->where([$field, '=', $data]);
        $req = $this->utilisateur->make();
        return $req;
    }
    public function get()
    {
        $this->utilisateur->read('*');
         return $this->utilisateur->exec();
    }
    public function get_1_1($field, $data, $offset, $limit)
    {
        $this->utilisateur->read('*');
        $this->utilisateur->where([$field, '=', $data]);
        $this->utilisateur->limit($offset, $limit);
        return $this->utilisateur->exec();
    }
}
