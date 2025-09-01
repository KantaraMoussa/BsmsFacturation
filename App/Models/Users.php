<?php

namespace App\Models;

use Core\Database;
use \Core\SQLQuery as SQLQuery;

class Users
{
    private $users;
 
    public function __construct()
    {
        $this->users = new SQLQuery(Database::getInstance(), 'Users');
    }
   
    public function create($data)
    {
        return $this->users->create($data);
    }
    public function count($field, $data)
    {
        $this->users->getCount('id_users');
        $this->users->where([$field, '=', $data]);
        return $this->users->exec();
    }
    public function count2($field, $data,$field2, $data2)
    {
        $this->users->getCount('id_users');
        $this->users->where([$field, '=', $data],'AND',[$field2, '=', $data2]);
        return $this->users->exec();
    }
    public function update($values, $field, $data)
    {
        $this->users->update($values);
        $this->users->where([$field, '=', $data]);
        return $this->users->exec();
    }
    public function getAll()
    {
        $this->users->read('*');
        return $this->users->exec();
    }
    public function get($field, $data, $offset, $limit)
    {
        $this->users->read('*');
        $this->users->where([$field, '=', $data]);
        $this->users->limit($offset, $limit);
        return $this->users->exec();
    }



    
}
