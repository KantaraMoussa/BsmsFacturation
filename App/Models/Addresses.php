<?php

namespace App\Models;

use \Core\Database;
use \Core\SQLQuery as SQLQuery;

class Addresses
{
    private $adresse;
    public function __construct()
    {
        $this->adresse = new SQLQuery(Database::getInstance(), 'addresses');
    }
    public function add($data)
    {
        return $this->adresse->create($data);
    }
    public function get_1_0()
    {
        $this->adresse->read('*');
        $this->adresse->tjoin(array('clients' => ['client_id', 'client_id_addresse']));
        return $this->adresse->exec();
    }
    public function get_1_1($field, $data, $offset, $limit)
    {
        $this->adresse->read('*');
        $this->adresse->tjoin(array('clients' => ['client_id', 'client_id_addresse']));
        $this->adresse->where([$field, '=', $data]);
        $this->adresse->limit($offset, $limit);
        return $this->adresse->exec();
    }
    public function update($values, $field, $data)
    {
        $this->adresse->update($values);
        $this->adresse->where([$field, '=', $data]);
        $req = $this->adresse->exec();
        return $req;
    }
}
