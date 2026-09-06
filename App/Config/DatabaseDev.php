<?php

namespace App\Config;

use Core\Env;

/**
 * Application Database configuration for development.
 * Values are read from the .env file (see .env.example); no secret is
 * hardcoded here so the file is safe to keep in version control.
 *
 * PHP version 7.0
 */
class DatabaseDev
{
    public static function getCharset(): string
    {
        return Env::get('DB_CHARSET', 'UTF8');
    }

    public static function getPort(): string
    {
        return Env::get('DB_PORT', '5432');
    }

    public static function getHost(): string
    {
        return Env::get('DB_HOST', 'localhost');
    }

    public static function getName(): string
    {
        return Env::get('DB_NAME', '');
    }

    public static function getUser(): string
    {
        return Env::get('DB_USER', '');
    }

    public static function getPassword(): string
    {
        return Env::get('DB_PASSWORD', '');
    }
}
