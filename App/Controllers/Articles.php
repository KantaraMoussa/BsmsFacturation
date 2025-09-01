<?php

namespace App\Controllers;
use App\Services\Utils;
use \Core\View;
use App\Models\Articles as modelArticle;


/**
 * Home controller
 */
class Articles extends \Core\FrontController

{
    private $articleModel;

    public function __construct()
    {
       session_start();
        $this->articleModel = new modelArticle();
    }
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {
        View::renderTemplate('Articles/index.php', array(
            'articles' => $this->articleModel->get_(),
        ));
    }
    public function detailAction($param)
    {

        View::renderTemplate('Articles/detail.php', array(
            'article' => $this->articleModel->get_1_1('article_id', $param['id'], 0, 1),
        ));
    }

    public function actionDoAction($params)
    {
        if ($params['type'] == "add") {
            $title = 'Enregistré un article';
        } else if ($params['type'] == "update") {
            $title = 'Modifier un article';
        } else if ($params['type'] == "delete") {
            $title = 'Supprimer un article';
        } else {
            $title = 'Information sur l\' article';
        }
        View::renderTemplate('Articles/action.php', array(
            'type' => $params['type'],
            'id' => $params['id'],
            'article' => $this->articleModel->get_1_1('article_id', $params['id'], 0, 1),
            'articles' => $this->articleModel->get_(),
            'typeArticle' => $params['article'],
            'title' => $title,
        ));
    }
    public function before() {}
    protected function after() {}
}
