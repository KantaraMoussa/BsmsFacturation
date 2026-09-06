<?php

namespace App\Models;

use Core\Database;
use \Core\SQLQuery as SQLQuery;

class Chantiers
{
    private $chantiers;

    public function __construct()
    {
        $this->chantiers = new SQLQuery(Database::getInstance(), 'chantiers');
    }

    public function add($data)
    {
        return $this->chantiers->create($data);
    }

    public function update($values, $field, $data)
    {
        $this->chantiers->update($values);
        $this->chantiers->where([$field, '=', $data]);
        return $this->chantiers->exec();
    }

    public function delete($field, $data)
    {
        $this->chantiers->delete();
        $this->chantiers->where([$field, '=', $data]);
        return $this->chantiers->exec();
    }

    public function get_()
    {
        $this->chantiers->read('*');
        return $this->chantiers->exec();
    }

    public function get_1($field, $data, $offset, $limit)
    {
        $this->chantiers->read('*');
        $this->chantiers->where([$field, '=', $data]);
        $this->chantiers->limit($offset, $limit);
        return $this->chantiers->exec();
    }

    public function get_1_no_limit($field, $data)
    {
        $this->chantiers->read('*');
        $this->chantiers->where([$field, '=', $data]);
        return $this->chantiers->exec();
    }
}
