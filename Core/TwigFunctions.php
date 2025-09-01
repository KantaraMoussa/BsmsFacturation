<?php

namespace Core;

use App\Utils\Helpers as UtilsHelpers;

class TwigFunctions{


    function __construct($twig)
    {
        $twig->addFunction(new \Twig\TwigFunction('base_url', function () {
            return Helpers::base_url();
        }));
        
       $twig->addFunction(new \Twig\TwigFunction('has_role', function ($role) {
            return UtilsHelpers::hasRoles($role);
        }));
    
        $twig->addFunction(new \Twig\TwigFunction('postgres_to_php_array', function ($pg_array) {
            return Helpers::postgres_to_php_array($pg_array);
        }));

    }
}