<?php

namespace App\Models;

use Core\Database;
use \Core\SQLQuery as SQLQuery;

class Maintenances
{
    private $maintenances;

    public function __construct()
    {
        $this->maintenances = new SQLQuery(Database::getInstance(), 'maintenances');
    }

    public function add($data)
    {
        return $this->maintenances->create($data);
    }

    public function update($values, $field, $data)
    {
        $this->maintenances->update($values);
        $this->maintenances->where([$field, '=', $data]);
        return $this->maintenances->exec();
    }

    public function delete($field, $data)
    {
        $this->maintenances->delete();
        $this->maintenances->where([$field, '=', $data]);
        return $this->maintenances->exec();
    }

    public function get_()
    {
        $this->maintenances->read('*');
        $this->maintenances->orderBy('date_maintenances', 'DESC');
        return $this->maintenances->exec();
    }

    public function get_1($field, $data, $offset, $limit)
    {
        $this->maintenances->read('*');
        $this->maintenances->where([$field, '=', $data]);
        $this->maintenances->orderBy('date_maintenances', 'DESC');
        $this->maintenances->limit($offset, $limit);
        return $this->maintenances->exec();
    }

    public function get_1_no_limit($field, $data)
    {
        $this->maintenances->read('*');
        $this->maintenances->where([$field, '=', $data]);
        $this->maintenances->orderBy('date_maintenances', 'DESC');
        return $this->maintenances->exec();
    }
}
