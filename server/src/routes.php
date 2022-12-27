<?php

use core\Router;

$router = new Router();

$router->get('/products?{filters}', 'ProductController@getProducts');
$router->get('/categories', 'CategoryController@getCategories');
$router->post('/user', 'UserController@signIn');
$router->post('/user/create', 'UserController@signUp');
// $router->get('/user/orders', 'OrderController@index');
// $router->get('/sobre/{nome}', 'HomeController@sobreP');
