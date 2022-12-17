<?php

use core\Router;

$router = new Router();

$router->get('/products?{filters}', 'ProductController@getProducts');
$router->get('/categories', 'CategoryController@getCategories');
$router->get('/sobre/{nome}', 'HomeController@sobreP');
