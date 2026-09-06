<?php

namespace App\Models;

use Core\Database;
use \Core\SQLQuery as SQLQuery;

class Carburant
{
    private $carburant;

    public function __construct()
    {
        $this->carburant = new SQLQuery(Database::getInstance(), 'carburant');
    }

    public function add($data)
    {
        return $this->carburant->create($data);
    }

    public function delete($field, $data)
    {
        $this->carburant->delete();
        $this->carburant->where([$field, '=', $data]);
        return $this->carburant->exec();
    }

    public function get_()
    {
        $this->carburant->read('*');
        $this->carburant->orderBy('date_carburant', 'DESC');
        return $this->carburant->exec();
    }

    public function get_1($field, $data, $offset, $limit)
    {
        $this->carburant->read('*');
        $this->carburant->where([$field, '=', $data]);
        $this->carburant->orderBy('date_carburant', 'DESC');
        $this->carburant->limit($offset, $limit);
        return $this->carburant->exec();
    }

    public function get_1_no_limit($field, $data)
    {
        $this->carburant->read('*');
        $this->carburant->where([$field, '=', $data]);
        $this->carburant->orderBy('date_carburant', 'DESC');
        return $this->carburant->exec();
    }
}
