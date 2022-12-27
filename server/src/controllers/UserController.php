<?php

namespace src\controllers;

use core\Controller;
use src\models\User;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type: application/json');

class UserController extends Controller
{
    public function signIn()
    {
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        $password = filter_input(INPUT_POST, 'password');

        echo $email . " - " . $password;
    }

    public function signUp()
    {
    }
}
