<?php

namespace Core;

use PDO;

use App\Config\Config;
use App\Config\DatabaseDev as Dev;
use App\Config\DatabaseProd as Prod;

/**
 * Base model
 */
abstract class Model
{

    /**
     * Get the PDO database connection
     *
     * @return mixed
     */
    protected static function getDB()
    {
        static $db = null;

        if ($db === null) {
            $dsn = 'mysql:host=' . (Config::DEVELOPMENT_ENVIRONMENT ? Dev::getHost() : Prod::getHost() ) . ';dbname=' .(Config::DEVELOPMENT_ENVIRONMENT ? Dev::getName() : Prod::getName() ) . ';charset='.(Config::DEVELOPMENT_ENVIRONMENT ? Dev::getCharset() : Prod::getCharset() );
            $db = new PDO($dsn, Config::DEVELOPMENT_ENVIRONMENT ? Dev::getUser() : Prod::getUser() , Config::DEVELOPMENT_ENVIRONMENT ? Dev::getPassword() : Prod::getPassword());

            // Throw an Exception when an error occurs
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }

        return $db;
    }
}
