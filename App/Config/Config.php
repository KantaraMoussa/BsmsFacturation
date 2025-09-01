<?php

namespace App\Config;

/**
 * Application configuration
 */

class Config
{

    /**
     * Project Folder
     * @var string
     */
    const ROOT_FOLDER = 'facturation_bsms/';

    /**
     * 404 URL
     * @var string
     */
    const URL_404 = "http://localhost/facturation_bsms/error/404";

    /**
     * Set development environment
     * @var boolean
     */
    const DEVELOPMENT_ENVIRONMENT = true;

    /**
     * Set class suffix
     * @var string
     */
    const CLASS_FILENAME_SUFFIX = '.class.php';

    /**
     * Set type of system
     * @var string
     */
    const DATABASE_SYSTEM = 'postgresql';

    /**
     * Show or hide error messages on screen
     * @var boolean
     */
    const SHOW_ERRORS = true;

    public function __construct()
    {

    }
}
