<?php

namespace App\Models;

use Core\Database;
use \Core\SQLQuery as SQLQuery;

class Engins
{
    private $engins;

    public function __construct()
    {
        $this->engins = new SQLQuery(Database::getInstance(), 'engins');
    }

    public function add($data)
    {
        return $this->engins->create($data);
    }

    public function update($values, $field, $data)
    {
        $this->engins->update($values);
        $this->engins->where([$field, '=', $data]);
        return $this->engins->exec();
    }

    public function delete($field, $data)
    {
        $this->engins->delete();
        $this->engins->where([$field, '=', $data]);
        return $this->engins->exec();
    }

    public function get_()
    {
        $this->engins->read('*');
        return $this->engins->exec();
    }

    public function get_1($field, $data, $offset, $limit)
    {
        $this->engins->read('*');
        $this->engins->where([$field, '=', $data]);
        $this->engins->limit($offset, $limit);
        return $this->engins->exec();
    }

    public function get_disponibles()
    {
        $this->engins->read('*');
        $this->engins->where(['statut_engins', '=', 'disponible']);
        return $this->engins->exec();
    }
}
