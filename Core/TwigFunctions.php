<?php

namespace Core;

use App\Utils\Helpers as UtilsHelpers;
use App\Services\Utils as AppUtils;

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

        $twig->addFunction(new \Twig\TwigFunction('company_info', function () {
            return UtilsHelpers::information();
        }));

        $twig->addFunction(new \Twig\TwigFunction('user_avatar', function ($userId) {
            $root = dirname(__DIR__) . '/public/assets/img/avatars';
            foreach (array('jpg', 'png', 'webp') as $ext) {
                if (is_file($root . '/' . $userId . '.' . $ext)) {
                    return 'assets/img/avatars/' . $userId . '.' . $ext;
                }
            }
            return 'assets/img/avatar.png';
        }));

        $twig->addFunction(new \Twig\TwigFunction('is_online', function ($user) {
            return AppUtils::isOnline($user);
        }));

        $twig->addFunction(new \Twig\TwigFunction('asset_v', function ($path) {
            $file = dirname(__DIR__) . '/public/' . ltrim($path, '/');
            $v = is_file($file) ? filemtime($file) : time();
            return $path . '?v=' . $v;
        }));

    }
}