<?php

namespace App\Models;

use Core\Database;
use \Core\SQLQuery as SQLQuery;

class Taxes
{
    private $taxes;

    public function __construct()
    {
        $this->taxes = new SQLQuery(Database::getInstance(), 'taxes');
    }

    public function add($data)
    {
        return $this->taxes->create($data);
    }

    public function update($values, $field, $data)
    {
        $this->taxes->update($values);
        $this->taxes->where([$field, '=', $data]);
        return $this->taxes->exec();
    }

    public function get_()
    {
        $this->taxes->read('*');
        return $this->taxes->exec();
    }

    public function get_actives()
    {
        $this->taxes->read('*');
        $this->taxes->where(['actif_taxes', '=', 'true']);
        return $this->taxes->exec();
    }

    public function get_1($field, $data, $offset, $limit)
    {
        $this->taxes->read('*');
        $this->taxes->where([$field, '=', $data]);
        $this->taxes->limit($offset, $limit);
        return $this->taxes->exec();
    }
}
