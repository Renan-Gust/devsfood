<?php

use core\Router;

$router = new Router();

$router->get('/products?{filters}', 'ProductController@getProducts');
$router->get('/categories', 'CategoryController@getCategories');
$router->post('/login', 'UserController@signIn');
$router->post('/register', 'UserController@signUp');
$router->post('/check-login', 'UserController@checkLogin');
$router->put('/user', 'UserController@updateUserInfo');
$router->patch('/user/password', 'UserController@changePassword');
$router->get('/address/{id}', 'AddressController@getAddress');
$router->post('/address', 'AddressController@addAddress');
$router->put('/address', 'AddressController@updateAddress');
// $router->get('/user/orders', 'OrderController@index');
// $router->get('/sobre/{nome}', 'HomeController@sobreP');
