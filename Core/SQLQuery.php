<?php

namespace Core;

use \PDO;

class SQLQuery
{

    protected $_type; // insert  delete or....
    protected $_aggregate; // count or sum or....
    protected $_result;
    protected $_query;
    protected $sub_query;
    protected $_prepareSQL;
    protected $_table;
    protected $_orderby;
    protected $_subQuery = null;
    protected $_multiSubQuery = null; //check if multiple subQuery are used
    protected $_wereSubQuery = null;
    protected $_subClause = null;
    protected $_isUseSubClause = null;
    protected $_limit = null;
    protected $_endSub = false;

    protected $_bdd;
    protected $_error;
    protected $_data;
    protected $bdd;

    protected $_debug = array('SQL' => null, 'DATA' => null, 'SELF' => null, 'ERROR' => null);

    public function __construct($bdd, $table = null)
    {

        $this->bdd = $bdd;
        $this->_table = $table;

    }

    public function create(array $data)
    {

        $field = "";

        $num_args = count($data);
        $column = "";
        $i = 0;

        foreach ($data as $argID => $arg) {

            $column .= $argID;
            $i++;
            $column .= $i < $num_args ? ', ' : '';

            $field .= ':field' . $i;
            $field .= $i < $num_args ? ', ' : '';
        }
        $sql = "INSERT INTO " . $this->_table . " ( $column ) VALUES ( $field )";

        $this->_query = $this->bdd->prepare($sql);

        $i = 0;
        foreach ($data as $argID => &$argVal) {
            $fieldNo = $i + 1;
            if (in_array(gettype($argVal), array('integer'))) {
                $this->_query->bindParam(':field' . $fieldNo, $argVal, PDO::PARAM_INT);
            } else {
                $this->_query->bindParam(':field' . $fieldNo, $argVal, PDO::PARAM_STR);
            }

            $i++;
        }
        $req = $this->_query->execute();

        if (!$req) {
            $this->_error = $this->_query->errorInfo();
            var_dump($this->_error);
        }

        $this->clear();

        return $req;

    }

    public function update($data)
    {

        //$args = func_get_args();
        //$num_args = func_num_args();
       /* $num_args = count($data);

        $field = "";
        $i = 0;
        while ($i < $num_args) {
            $field .= $data[$i][0] . ' = :data_' . $data[$i][0];
            $data['data_' . $data[$i][0]] = $data[$i][1];

            $field .= $i == ($num_args - 1) ? "" : ", ";
            //var_dump($_field);
            $i++;
        }

        $this->_prepareSQL = "UPDATE $this->_table SET $field";
        $this->_data = $data;
        $this->_type = 'UPDATE';*/
        //var_dump($this->_prepareSQL);
        //var_dump($this->_data);

         $this->_type = 'UPDATE';
        $data_ = [];
        $num_args = count($data);
        $field = "";
        $i = 0;
        foreach ($data as $argID => $arg) {

            $field .= $argID . '  = :data_' . $argID;
            $data_['data_' . $argID] = $arg;
            $i++;
            $field .= $i < $num_args ? ', ' : '';
        }

        $this->_prepareSQL = "UPDATE $this->_table SET $field";
        $this->_data = $data_;

       // var_dump($this->_prepareSQL);
       // var_dump($this->_data);
    }

    private function _where($args, $num_args, $start = 0)
    {
        $data = array();
        $where = ' ';

        $i = 0;

        while ($i < $num_args) {

            $rand = rand(1, 90);

            if (gettype($args[$i]) == 'array') {

                if (gettype($args[$i][0]) == 'array') { //for query grouped by semi-column (

                    $where .= ' (';

                    $whereRet = $this->_where($args[$i], count($args[$i]));
                    $where .= $whereRet[0];
                    foreach ($whereRet[1] as $k => $v) {
                        $data[$k] = $v;
                    }

                    $where .= ' ) ';

                } else {

                    $where .= ' ' . trim($args[$i][0]) . ' ' . trim(strtoupper($args[$i][1])) . ' :data_' . trim($args[$i][0]) . ($i + $start + $rand) . ' ';

                    if ((isset($this->_data) && gettype($this->_data) == 'array')) { //for update
                        $this->_data['data_' . $args[$i][0] . ($i + $start + $rand)] = $args[$i][2];
                    } else {
                        $data['data_' . $args[$i][0] . ($i + $start + $rand)] = $args[$i][2];
                    }

                }

            } else {

                $where .= trim(strtoupper($args[$i]));
                // $data['data_'.$args[$i][0].($i+1)] = $args[$i][2];

            }
            $i++;

        }

        return array($where, $data);

    }

    public function where()
    {

        $args = func_get_args();
        $num_args = func_num_args();

        $whereRet = $this->_where($args, $num_args, isset($this->_data) ? count($this->_data) : 0);

        $where = $whereRet[0];
        $data = $whereRet[1];

        if (!isset($this->_data)) {
            $this->_data = $data;
        }
        //make sure to not override update data witch is an array

        if ($this->sub_query) {
            $this->_prepareSQL .= ' WHERE ' . $this->sub_query . ' ' . $whereRet[0]."\n";
        }

        /* else
        if ($this->_endSub) {
        $this->_prepareSQL .= ' ' . trim($where);*/
        else {
            $this->_prepareSQL .= ' WHERE ' . trim($where);
        }

        //var_dump($whereRet);
        //var_dump($this->_data);
        //$this->_debug = $where;
        //var_dump($this->_prepareSQL);

    }

    public function having()
    {

        $args = func_get_args();
        $num_args = func_num_args();

        $whereRet = $this->_where($args, $num_args, isset($this->_data) ? count($this->_data) : 0);

        $where = $whereRet[0];
        $data = $whereRet[1];

        ////var_dump($whereRet);
        //var_dump($this->_prepareSQL);

        if (!isset($this->_data)) {
            $this->_data = $data;
        }
        //make sure to not override update data witch is an array

        //if($this->_endSub){
        //    $this->_prepareSQL .= ' '.trim($where);
        $this->_prepareSQL .= ' HAVING ( ' . trim($where) . ' )';

    }

    public function read()
    {

        $args = func_get_args();
        $num_args = func_num_args();

        $field = "";
        $i = 0;
        while ($i < $num_args) {
            $field .= $args[$i];
            $field .= $i == ($num_args - 1) ? '' : ', ';
            $i++;
        }

        if ($this->_type == 'UNION') {
            $this->_prepareSQL .= "SELECT $field FROM " . $this->_table;
        } else {
            $this->_prepareSQL = "SELECT $field FROM " . $this->_table;
        }

    }

    public function getCount($field)
    {
        $this->_aggregate = 'COUNT';
        $this->_prepareSQL = "SELECT COUNT($field) FROM " . $this->_table;
    }

    public function table($tn)
    {
        $this->_type = 'CREATETABLE';
        $this->_prepareSQL = "CREATE TABLE " . $tn . " ( ";
    }

    public function addField($field)
    {
        $this->_prepareSQL .= trim($field) . ', ';
    }

    public function dropIfExist($tn)
    {
        $this->_type = 'DROPTABLE';
        $this->_prepareSQL = "DROP TABLE IF EXISTS " . $tn;
    }

    public function drop($tn)
    {
        $this->_type = 'DROPTABLE';
        $this->_prepareSQL = "DROP TABLE " . $tn;
    }

    private function execute()
    {

        if ($this->_type == 'CREATETABLE') {
            $this->_prepareSQL = substr($this->_prepareSQL, 0, strlen($this->_prepareSQL) - 2) . ' )';
        }

        $this->_query = $this->bdd->prepare($this->_prepareSQL);
        //var_dump($this->_prepareSQL);

        if (!$this->_query->execute()) {
            $this->_error = $this->_query->errorInfo();
            //file_put_contents('db.txt', $this->_prepareSQL);
            array_push($this->_error, 'ERROR ' . $this->_prepareSQL);
            var_dump($this->_error);
        }

    }

    public function querySelect($sql)
    {
        /*$this->_query = $this->bdd->prepare($sql);
        if (!$this->_query->execute()) {
            $this->_error = $this->_query->errorInfo();
            array_push($this->_error, 'ERROR ' . $this->_prepareSQL);
            var_dump($this->_error);
        }

        return $this->_query;*/
        $this->_prepareSQL = $sql;

    }

   /* public function fetchAll()
    {
        return $this->_query->fetchAll(PDO::FETCH_ASSOC);
    }*/

    public function orderBy($fields, $ordType = 'DESC')
    {

        $this->_endSub = true;
        if (gettype($fields) != 'array') {
            $fields = array($fields);
        }

        if (gettype($ordType) != 'array') {
            $ordType = array($ordType);
        }

        if(count($fields) != count($ordType)){
            trigger_error("Field size different to order size");
        }

        $field = "";
        $i = 0;
        while ($i < count($fields)) {
            $field .= $fields[$i].' '.strtoupper($ordType[$i]);
            $field .= $i == (count($fields) - 1) ? '' : ', ';
            $i++;
        }

        if ($this->_type == 'SUBSELECT') {
            if ($this->_subQuery) {
                $this->_prepareSQL .= ' )';
                $this->_subQuery = null;
            }
            if (!$this->_wereSubQuery) {
                $this->_prepareSQL .= ' )';
                $this->_wereSubQuery = true;
            }

            if (strrchr($this->_prepareSQL, ')')) {
                if (substr($this->_prepareSQL, strlen($this->_prepareSQL) - 4, 1) != ')') {
                    $this->_prepareSQL .= ' ) ';
                }
                //if multiple subrequest, need to add ) to close
            }

        }

        $this->_prepareSQL .= ' ORDER BY ' . $field;
    }

    public function groupBy()
    {

        $this->_endSub = true;
        $args = func_get_args();
        $num_args = func_num_args();

        $field = "";
        $i = 0;
        while ($i < $num_args) {
            $field .= $args[$i];
            $field .= $i == ($num_args - 1) ? '' : ', ';

            $i++;
        }
        if ($this->_type == 'SUBSELECT') {
            if ($this->_subQuery) {
                $this->_prepareSQL .= ' )';
                $this->_subQuery = null;
            }
            if (!$this->_wereSubQuery) {
                $this->_prepareSQL .= ' )';
                $this->_wereSubQuery = true;
            }

            if (strrchr($this->_prepareSQL, ')')) {
                if (substr($this->_prepareSQL, strlen($this->_prepareSQL) - 4, 1) != ')') {
                    $this->_prepareSQL .= ' ) ';
                }
                //if multiple subrequest, need to add ) to close
            }

        }

        $this->_prepareSQL .= " GROUP BY $field";

    }

    public function groupBySubQuery()
    {

        $this->_isUseSubClause = true; //flag if one clause is used
        $this->_subClause = true;
        $args = func_get_args();
        $num_args = func_num_args();

        $field = "";
        $i = 0;
        while ($i < $num_args) {
            $field .= $args[$i];
            $field .= $i == ($num_args - 1) ? '' : ', ';
            $i++;
        }

        $this->_prepareSQL .= " GROUP BY $field";
        //var_dump($this->_multiSubQuery);
        if (!$this->_multiSubQuery) {
            $this->_prepareSQL .= " ) )";
        } else {
            $this->_prepareSQL .= " ) ";
        }

    }

    public function limit($offset, $limit = 0)
    {

        $this->_endSub = true;
        $limit = (int) $limit;
        $offset = (int) $offset;

        if ($limit == 0) {
            $offset = 0;
            $limit = (int) $offset;
        } else {
            $offset = (int) $offset;
        }

        $this->_limit = array($offset, $limit);
        if ($this->_subQuery) { //close subQuery
            $this->_prepareSQL .= ' )';
            $this->_subQuery = null;
        }

        $this->_prepareSQL .= ' LIMIT :limit OFFSET :offset ';

    }

    /*

    public function endSubQuery($join = "")
    {

    if (isset($this->_isUseSubClause)) { //group or limit has been used in subQuery
    if ($this->_multiSubQuery && $this->_subClause) {
    $join = ")";
    $this->_subClause = null;
    } else if ($this->_multiSubQuery && !$this->_subClause) {
    $join = ") )";
    $this->_subClause = null;
    }
    }

    $this->_type = null;
    $this->_endSub = true;

    if (strrchr($this->_prepareSQL, ')')) {
    if (substr($this->_prepareSQL, strlen($this->_prepareSQL) - 4, 1) != ')') {
    $this->_prepareSQL .= ' ) ';
    }
    //if multiple subrequest, need to add ) to close
    }

    if (!$this->_multiSubQuery && !strrchr($this->_prepareSQL, ')')) { //close only one subQuery
    //$join=") ) )";
    $this->_prepareSQL .= ") ) )";
    }

    $this->_prepareSQL .= ' ' . $join;

    }

    /**
     * where for Subquery
     *
    public function whereSubQuery()
    {
    $args = func_get_args();
    $num_args = func_num_args();

    $whereRet = $this->_where($args, $num_args);

    $where = $whereRet[0];
    $data = $whereRet[1];

    if (!isset($this->_data)) {
    $this->_data = $data;
    }
    //make sure to not override update data witch is an array

    if ($this->_subQuery) { //close subQuery
    $where .= ' ) )';
    $this->_subQuery = null;
    }

    $this->_prepareSQL .= ' WHERE ' . trim($where);
    }

    private function subQuery_($sepOp, $field, $subSelecOp = null)
    {

    $this->_type = 'SUBSELECT';
    $checkWhere = strstr(trim($this->_prepareSQL), 'WHERE');

    if (in_array(strtoupper($sepOp), array('AND', 'OR'))) {
    $this->_multiSubQuery = true;
    $this->_subClause = null;
    } else {
    $this->_multiSubQuery = null;
    }

    if ($this->_wereSubQuery) { //close previous
    $this->_prepareSQL .= ' )';
    }
    if (!$checkWhere) {
    $this->_prepareSQL .= ' WHERE ( (' . $sepOp . ' ' . $field . ' ( '; //$field is set to $sepOp
    $this->_wereSubQuery = null;
    } else {
    if (!strrchr($this->_prepareSQL, ')')) {
    $this->_prepareSQL .= ' ) )';
    }

    $this->_prepareSQL .= ' ' . $sepOp . ' ( ' . $field . ' ' . $subSelecOp . ' ( ';
    $this->_wereSubQuery = true;
    }

    }

    private function subQuerySql_($field, $table)
    {

    $this->_prepareSQL .= "SELECT $field FROM $table";
    $this->_subQuery = true;
    }
     */

    /**
     * To use when WHERE clause not used
     * @example whereSubQuery('field', 'IN', 'table')
     * @example whereSubQuery('field', 'IN', 'table', 'AND', [[where]])
     */
    public function whereSubQuery($field, $type_subquery, $table, $table_field, $condition = "AND")
    {
        $this->_type = 'SUBSELECT';
        $this->subQuery($field, $type_subquery, $table, $table_field, $condition);
        $this->_prepareSQL .= 'WHERE ' . $this->sub_query;
    }

    /**
     * To use when WHERE clause is used
     * @param {Array} condition - array of condition array
     * @example subQuery(['field', 'IN', 'table', [where]])
     */
    public function subQuery($field, $type_subquery, $table, $table_field, $condition = null)
    {
        $this->_type = 'SUBSELECT';
        $whereRet = $condition ? $this->_where($condition, count($condition)) : null;
        if ($this->sub_query) {
            $this->sub_query .= $field . ' ' . $type_subquery . ' ( SELECT ' . $table_field . ' FROM ' . $table . ($condition && $whereRet ? ' WHERE' . $whereRet[0] : '') . " )\n";
        } else {
            $this->sub_query = $field . ' ' . $type_subquery . ' ( SELECT ' . $table_field . ' FROM ' . $table . ($condition && $whereRet ? ' WHERE' . $whereRet[0] : '') . " )\n";
        }

        if ($condition && $whereRet) {
            $this->_data = ($this->_data) ? array_merge($this->_data, $whereRet[1]) : $whereRet[1];
        }

    }

    private function getSubQuery($field, $type_subquery, $table, $table_field, $condition)
    {
        $whereRet = $condition ? $this->_where($condition, count($condition), $this->_data ? count($this->_data) : 0) : null;

        if ($condition) {
            $this->data = ($this->data) ? array_merge($this->data, $whereRet[1]) : $whereRet[1];
        }

        return $field+' '+$type_subquery+' ( SELECT '+$table_field+' FROM '+$table + ($condition ? ' WHERE'+$whereRet[0] : '')+' )\n';
    }

    /**
     *
     * @example multipleANDsubQuery(sql.getSubQuery('fieldx', 'IN', 'tablex', 'table_fieldx', [['field1_1x', '=', 'value1_1x'], 'AND', ['field2_2x', '=', 'value2_2x']]), sql.getSubQuery('field2y', 'IN', 'table2y', 'table_field2y', [['field1_12y', '=', 'value1_12y'], 'AND', ['field2_22y', '=', 'value2_22y']]))
     */
    public function multipleANDsubQuery()
    {
        $args = func_get_args();
        //$num_args = func_num_args();

        if (!$this->sub_query) {
            $this->sub_query = '(\n';
        } else {
            $this->sub_query += '(\n';
        }

        foreach ($args as $i => $elem) {
            if ($i != 0) {
                $this->sub_query .= ' AND\n';
            }

            $this->sub_query .= $elem;
        }

        $this->sub_query += ')\n';
    }

    public function multipleORsubQuery()
    {
        $args = func_get_args();
    }

    /**
     * @decapreted use endSubQuery(AND)
     */
    public function ANDsubQuery()
    {
        $this->sub_query += 'AND\n';
    }

    /**
     * @decapreted use endSubQuery(AND)
     */
    public function ORsubQuery()
    {
        $this->sub_query += 'OR\n';
    }

    /**
     *
     * @param {String} logical - AND | OR
     */
    public function endSubQuery($logical)
    {
        $this->sub_query .= $logical . "\n";
    }

    public function exec()
    {
        /*if (!$this->_aggregate) {
        if ($this->_limit) {
        $this->_prepareSQL .= ' LIMIT :limit OFFSET :offset ';
        }
        }*/

        /*if ($this->_type == 'SUBSELECT') {
        if ($this->_subQuery) {
        $this->_prepareSQL .= ' )';
        }

        if (!$this->_wereSubQuery) {
        $this->_prepareSQL .= ' )';
        }

        if (!$this->_endSub) {
        $this->_prepareSQL .= ' )';
        }

        //var_dump($this->_endSub);
        }*/

        $this->_query = $this->bdd->prepare($this->_prepareSQL);

        if (!$this->_aggregate && $this->_type != 'UPDATE') {
            if ($this->_limit) {
                $this->_query->bindParam(':limit', $this->_limit[1], PDO::PARAM_INT);
                $this->_query->bindParam(':offset', $this->_limit[0], PDO::PARAM_INT);
            }
        }

        if (isset($this->_data)) {

            foreach ($this->_data as $field => &$data) {
                if (in_array(gettype($data), array('integer'))) {
                    $this->_query->bindParam(':' . $field, $data, PDO::PARAM_INT);
                } else {
                    $this->_query->bindParam(':' . $field, $data, PDO::PARAM_STR);
                }
            }
        }

       //var_dump($this->_prepareSQL);
       //var_dump('-----------------------');
       //var_dump($this->_data);
        //if($this->_type == 'UNION') var_dump($this->_data);

        if (!$this->_query->execute()) {
            $this->_error = $this->_query->errorInfo();
            //file_put_contents('db.txt', $this->_prepareSQL);
            array_push($this->_error, 'ERROR ' . $this->_prepareSQL);
            var_dump($this->_error);
        }

        if ($this->_aggregate == 'COUNT') {
            $res = $this->_query->fetchColumn();
        } else {
            $res = ($this->_limit && $this->_limit[1] == 1) ? $this->_query->fetch(PDO::FETCH_ASSOC) : $this->_query->fetchAll(PDO::FETCH_ASSOC);
        }

        $this->_debug['SQL'] = $this->_prepareSQL;
        $this->_debug['DATA'] = isset($this->_data) ? $this->_data : null;
        $this->_debug['ERROR'] = $this->_error;
        $this->_debug['SELF'] = $this->_prepareSQL;

        if (!$this->_aggregate) {

            $this->clear();

            return !$res ? array() : $res;
        } else {
            $this->clear();

            return !$res ? 0 : $res;
        }

    }

    public function delete()
    {
        $this->_prepareSQL = "DELETE FROM $this->_table";
        $this->_type = 'DELETE';
    }

    public function DEBUG()
    {
        return array('SQLQuery' => $this->_debug['SQL'], 'QueryData' => $this->_debug['DATA'], 'ERROR' => $this->_debug['ERROR'], 'SELF_DEBUG' => $this->_debug['SELF']);
    }

    public function union($table,$type="UNION")
    {

        //    if(strrchr($this->_prepareSQL, ')')){
        //    if(substr($this->_prepareSQL, strlen($this->_prepareSQL)-4, 1) != ')') $this->_prepareSQL .= ' ) '; //if multiple subrequest, need to add ) to close
        //}

        $this->_prepareSQL .= ' '.$type.' SELECT * FROM '.$table;
        $this->_type = 'UNION';

    }

    public function sep($op)
    {

        $this->_prepareSQL .= ' ' . strtoupper($op) . ' ';

    }

    /*public function make()
    {

    $this->_query = $this->bdd->prepare($this->_prepareSQL);

    if (is_array($this->_data)) {
    foreach ($this->_data as $field => &$data) {
    if (in_array(gettype($data), array('integer'))) {
    $this->_query->bindParam(':' . $field, $data, PDO::PARAM_INT);
    } else {
    $field = ':' . $field;
    $this->_query->bindParam($field, $data, PDO::PARAM_STR);
    }
    }
    }

    $req = $this->_query->execute();

    if (!$req) {
    $this->_error = $this->_query->errorInfo();
    var_dump($this->_error);
    array_push($this->_error, 'ERROR ' . $this->_prepareSQL);
    }

    // var_dump($this->_data);
    //var_dump($this->_query);
    $this->clear();
    return $req;

    }*/

    public function tjoin($tables, $typeJoin = "INNER")
    {

        if (gettype($tables) != 'array') {
            $temp = $typeJoin;
            $typeJoin = $tables;
            $tables = $temp;
        }

        if ($this->_type != 'UNION') {
            $this->_prepareSQL = str_ireplace('FROM', 'FROM ' . str_repeat('( ', count($tables)), $this->_prepareSQL);
        }

        foreach ($tables as $tableName => $joinOpt) {

            $this->_prepareSQL .= ' ' . $typeJoin . " JOIN $tableName ON {$joinOpt[0]} = {$joinOpt[1]} )";

        }

        //var_dump($this->_prepareSQL);

    }

    public function clear()
    {

        $this->_result = null;
        $this->_orderby = null;
        $this->_prepareSQL = null;
        $this->_limit = null;
        $this->_data = null;
        $this->_wereSubQuery = null;
        $this->_subQuery = null;
        $this->_multiSubQuery = null;
        $this->_subClause = null;
        $this->_aggregate = null;
        $this->_type = null;
        $this->_endSub = false;
        unset($this->_data);
        unset($this->_isUseSubClause);

    }

    public function getError()
    {
        return $this->_error;
    }

    public function __destruct()
    {
        if ($this->_query) {
            $this->_query->closeCursor();
        }

        $this->clear();
    }

}
