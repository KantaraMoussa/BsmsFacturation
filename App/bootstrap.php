<?php

//require_once (ROOT . DS . 'Core' . DS . 'main.php');
require_once dirname(__DIR__) . '/Core/Env.php';
require_once dirname(__DIR__) . '/Core/Config.php';
require_once dirname(__DIR__) . '/App/Config/Config.php';
require dirname(__DIR__) . '/vendor/autoload.php';

\Core\Env::load(dirname(__DIR__) . '/.env');


if (\App\Config\Config::DEVELOPMENT_ENVIRONMENT == true) {
	error_reporting(E_ALL);
	ini_set('display_errors', 'On');
} else {
	error_reporting(E_ALL);
	ini_set('display_errors', 'Off');
	ini_set('log_errors', 'On');
	ini_set('error_log', ROOT . DS . 'tmp' . DS . 'logs' . DS . 'error.log');
}



/**
 * Error and Exception handling
 */
error_reporting(E_ALL);
set_error_handler('\Core\Error::errorHandler');
set_exception_handler('\Core\Error::exceptionHandler');
