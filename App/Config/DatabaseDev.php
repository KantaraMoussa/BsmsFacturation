<?php

namespace App\Config;


/**
 * Application Databse for developpment configuration
 *
 * PHP version 7.0
 */
class DatabaseDev
{

    /**
     * Database encodage
     * @var string
     */
    const DB_CHARSET = 'UTF8';

    /**
     * Database port
     * @var string
     */
    const DB_PORT = '5432';

    /**
     * Database host
     * @var string
     */
    const DB_HOST = 'localhost';

    /**
     * Database name
     * @var string
     */
     //  const DB_NAME = 'sms';
     const DB_NAME = 'Facturation';

    /**
     * Database user
     * @var string
     */
    const DB_USER = 'postgres';

    /**
     * Database password
     * @var string
     */
    const DB_PASSWORD = 'stratus05@1993';
}