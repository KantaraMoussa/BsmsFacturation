<?php

namespace App\Models;

use Core\Database;
use \Core\SQLQuery as SQLQuery;

class AuditLog
{
    private $auditLog;

    public function __construct()
    {
        $this->auditLog = new SQLQuery(Database::getInstance(), 'audit_log');
    }

    public function add($data)
    {
        return $this->auditLog->create($data);
    }

    public function get_(int $offset = 0, int $limit = 200)
    {
        $this->auditLog->read('*');
        $this->auditLog->orderBy('created_at_audit_log', 'DESC');
        $this->auditLog->limit($offset, $limit);
        return $this->auditLog->exec();
    }
}
