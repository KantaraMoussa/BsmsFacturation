<?php

namespace Core;

use App\Views\layouts\layout;

/*
 *
 * View
 *
 */
 
class View {

    /**
     * Render a view file
     *
     * @param string $view  The view file
     * @param array $args  Associative array of data to display in the view (optional)
     *
     * @return void
     */
    public static function render($view, $args = []){
		
        extract($args, EXTR_SKIP);

        $file = dirname(__DIR__) . "/App/Views/$view";  // relative to Core directory

        if (is_readable($file)) {
			
			//$contenu = ob_get_clean();
			
            require $file;
			

        } else {
            throw new \Exception("$file not found");
        }
    }

    /**
     * Render a view template using Twig
     *
     * @param string $template  The template file
     * @param array $args  Associative array of data to display in the view (optional)
     *
     * @return void
     */
    public static function renderTemplate($template, $args = []){
		
        static $twig = null;

        if ($twig === null) {
            $loader = new \Twig\Loader\FilesystemLoader(dirname(__DIR__) . '/App/Views');
            // Autoescaping was disabled here; every user-supplied field
            // (client name, invoice libelle, avoir motif, etc.) rendered
            // through Twig was raw, unescaped HTML - a stored XSS in every
            // list/detail page. The few legitimate raw-HTML fragments
            // (layout.* helpers, the company name span) are now marked
            // explicitly with the |raw filter instead.
            $twig = new \Twig\Environment($loader, ['autoescape'=>'html']);
        }
        
        new TwigFilters($twig);
        new TwigFunctions($twig);
        $twig->addGlobal('layout', new layout());
        $twig->addGlobal('_SESSION', isset($_SESSION) ? $_SESSION : null);

        echo $twig->render($template, $args);
    }
}
