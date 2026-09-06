<?php

namespace App\Services;

use App\Models\AuditLog;
use Core\Helpers;

/**
 * Records sensitive operations (login, invoice validation/cancellation,
 * payments, avoirs, user management) so they can be traced after the fact.
 * See cahier des charges §27 - Journal d'audit.
 */
class Audit
{
    public static function log(string $action, ?string $objectType = null, ?string $objectId = null, $oldValue = null, $newValue = null): void
    {
        // The hand-rolled query builder doesn't special-case PHP null when
        // binding parameters, so nullable fields use '' rather than null
        // to avoid relying on driver-specific null-binding behavior.
        $model = new AuditLog();
        $model->add(array(
            'log_id' => Helpers::generateString(32),
            'user_id_audit_log' => $_SESSION['id_user'] ?? '',
            'action_audit_log' => $action,
            'object_type_audit_log' => $objectType ?? '',
            'object_id_audit_log' => $objectId ?? '',
            'old_value_audit_log' => $oldValue === null ? '' : json_encode($oldValue),
            'new_value_audit_log' => $newValue === null ? '' : json_encode($newValue),
            'ip_audit_log' => $_SERVER['REMOTE_ADDR'] ?? '',
            'created_at_audit_log' => time(),
        ));
    }
}
