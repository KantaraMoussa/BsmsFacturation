<?php

namespace App\Models;

use Core\Database;
use \Core\SQLQuery as SQLQuery;

class Avoirs
{
    private $avoirs;

    public function __construct()
    {
        $this->avoirs = new SQLQuery(Database::getInstance(), 'avoirs');
    }

    public function add($data)
    {
        return $this->avoirs->create($data);
    }

    public function get_1($field, $data, $offset = 0, $limit = 1000)
    {
        $this->avoirs->read('*');
        $this->avoirs->where([$field, '=', $data]);
        $this->avoirs->limit($offset, $limit);
        return $this->avoirs->exec();
    }

    public function sumByFacture($factureId): float
    {
        $rows = $this->get_1('facture_id_avoirs', $factureId);
        $sum = 0;
        foreach ($rows as $row) {
            $sum += $row['montant_avoirs'];
        }
        return $sum;
    }
}
