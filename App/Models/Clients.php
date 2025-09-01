<?php

namespace App\Models;

use \Core\Database;
use \Core\SQLQuery as SQLQuery;

class Clients
{
    private $client;
    public function __construct()
    {
        $this->client = new SQLQuery(Database::getInstance(),'clients');
    }
    public function add($data)
    {
        return $this->client->create($data);
    }
    public function update($values, $field, $data)
    {
        $this->client->update($values);
        $this->client->where([$field, '=', $data]);
        $req = $this->client->exec();
        return $req;
    }
     public function get_()
    {
        $this->client->read('*');
        return $this->client->exec();
    }
    public function get_1()
    {
        $this->client->read('*');
        $this->client->tjoin(array('addresses' => ['client_id', 'client_id_addresse']));
        return $this->client->exec();
    }
     public function get_1_0($field, $data, $offset, $limit)
    {
        $this->client->read('*');
        $this->client->where([$field, '=', $data]);
        $this->client->limit($offset, $limit); 
        return $this->client->exec();
    }
      public function get_2($field, $data,$field2, $data2,$offset, $limit)
    {
        $this->client->read('*');
        $this->client->where([$field, '=', $data],'OR',[$field2, '=', $data2]);
        $this->client->limit($offset, $limit);
        return $this->client->exec();
    }

    public function get_1_1_lim($field, $data, $offset, $limit)
    {
        $this->client->read('*');
        $this->client->tjoin(array('addresses' => ['client_id', 'client_id_addresse']));
        $this->client->where([$field, '=', $data]);
        $this->client->limit($offset, $limit);
        return $this->client->exec();
    }
     public function get_1_1($field, $data, $offset, $limit)
    {
        $this->client->read('*');
        $this->client->tjoin(array('addresses' => ['client_id', 'client_id_addresse']));
        $this->client->where([$field, '=', $data]);
        $this->client->limit($offset, $limit);
        return $this->client->exec();
    }
     public function get_1_1_commandes($field, $data)
    {
        $this->client->read('*');
        $this->client->tjoin(array('commandes' => ['client_id_commandes', 'client_id']));
        $this->client->where([$field, '=', $data]);
        return $this->client->exec();
    }
   
}
