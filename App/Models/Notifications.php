<?php

namespace App\Models;

use Core\Database;
use \Core\SQLQuery as SQLQuery;

class Notifications
{
    private $notifications;

    public function __construct()
    {
        $this->notifications = new SQLQuery(Database::getInstance(), 'notifications');
    }

    public function add($data)
    {
        return $this->notifications->create($data);
    }

    public function update($values, $field, $data)
    {
        $this->notifications->update($values);
        $this->notifications->where([$field, '=', $data]);
        return $this->notifications->exec();
    }

    public function get_(int $offset = 0, int $limit = 200)
    {
        $this->notifications->read('*');
        $this->notifications->orderBy('created_at_notifications', 'DESC');
        $this->notifications->limit($offset, $limit);
        return $this->notifications->exec();
    }

    public function existsFor(string $objectType, string $objectId, string $type): bool
    {
        $this->notifications->getCount('notification_id');
        $this->notifications->where(
            ['objet_type_notifications', '=', $objectType],
            'AND',
            ['objet_id_notifications', '=', $objectId],
            'AND',
            ['type_notifications', '=', $type]
        );
        return $this->notifications->exec() > 0;
    }
}
