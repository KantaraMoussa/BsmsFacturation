<?php

namespace App\Models;

use \Core\Database;
use \Core\SQLQuery as SQLQuery;

class Transporteurs
{
    private $transporteur;
    public function __construct()
    {
        $this->transporteur = new SQLQuery(Database::getInstance(), 'personelles');
    }
    public function add($data)
    {
        return $this->transporteur->create($data);
    }
     public function update($values, $field, $data)
    {
        $this->transporteur->update($values);
        $this->transporteur->where([$field, '=', $data]);
        $req = $this->transporteur->exec();
        return $req;
    }
    public function get_()
    {
        $this->transporteur->read('*');
         return $this->transporteur->exec();
    }
        public function get_2($field, $data,$field2, $data2,$offset, $limit)
    {
        $this->transporteur->read('*');
        $this->transporteur->where([$field, '=', $data],'OR',[$field2, '=', $data2]);
        $this->transporteur->limit($offset, $limit);
        return $this->transporteur->exec();
    }
    public function get_1_1($field, $data, $offset, $limit)
    {
        $this->transporteur->read('*');
        $this->transporteur->where([$field, '=', $data]);
        $this->transporteur->limit($offset, $limit);
        return $this->transporteur->exec();
    }
}
