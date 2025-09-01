<?php

namespace App\Models;

use App\Config\Constant;
use \Core\Database;
use \Core\SQLQuery as SQLQuery;

class Pointage
{
    private $pointage;
    public function __construct()
    {

        $this->pointage = new SQLQuery(Database::getInstance(), 'pointage');
    }

    public function create($data)
    {
        return $this->pointage->create($data);
    }

    public function count($field, $data)
    {
        $this->pointage->getCount('pointage_id');
        $this->pointage->where([$field, '=', $data]);
        return $this->pointage->exec();
    }
    public function count2($field, $data, $field2, $data2)
    {
        $this->pointage->getCount('pointage_id');
        $this->pointage->where([$field, '=', $data], 'AND', [$field, '=', $data]);
        return $this->pointage->exec();
    }
    public function update($values, $field, $data)
    {
        $this->pointage->update($values);
        $this->pointage->where([$field, '=', $data]);
        return $this->pointage->exec();
    }
   public function get_1_1_operateur($field, $data,$offset, $limit)
    {
        $this->pointage->read('*');
         $this->pointage->tjoin(array('personelles' => ['personnelle_id', 'operateur_pointage']));
        $this->pointage->where([$field, '=', $data]);
         $this->pointage->limit($offset, $limit);
        return $this->pointage->exec();
    }
     public function get_1_1_FactureLigne($field, $data)
    {
        $this->pointage->read('*');
         $this->pointage->tjoin(array('facture_lignes' => ['ligne_id', '_id_facture_ligne_pointage']));
        $this->pointage->where([$field, '=', $data]);
        
        return $this->pointage->exec();
    }

    public function get_1($field, $data)
    {
        $this->pointage->read('*');
        $this->pointage->where([$field, '=', $data]);
        
        return $this->pointage->exec();
    }

    public function SumTotalIndexPointageParLigneDeFacture_1($field, $data)
    {
        $this->pointage->querySelect('SELECT SUM(index_total_pointage) from pointage');
        $this->pointage->where([$field, '=', $data]);
        return $this->pointage->exec();
    }
    public function SumTotalIndexPointageFacture_1($field, $data)
    {
        $this->pointage->querySelect(Constant::SQL_SUM_TOTAL_INDEX_FACTURE);
        $this->pointage->where([$field, '=', $data]);
        return $this->pointage->exec();
    }
}
