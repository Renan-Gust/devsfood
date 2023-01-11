<?php

namespace src\controllers;

use core\Controller;
use src\helpers\UserHelper;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type: application/x-www-form-urlencoded');
header('Access-Control-Allow-Headers: *');

class UserController extends Controller
{
    public function signIn()
    {
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        $password = filter_input(INPUT_POST, 'password');

        // $result = [];
        $result = [
            "email" => $email,
            "password" => $password
        ];

        echo json_encode($result);
        die();

        if ($email && $password) {
            $user = UserHelper::verifyLogin($email, $password);

            if ($user) {
                $result["status"] = "success";
                $result["user"] = $user;
                echo json_encode($result);
            } else {
                $result["status"] = "failed";
                $result["message"] = "E-mail e/ou senha não conferem.";
                echo json_encode($result);
            }
        } else {
            $result["status"] = "failed";
            echo json_encode($result);
        }
    }

    public function signUp()
    {
        $name = filter_input(INPUT_POST, 'name');
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        $password = filter_input(INPUT_POST, 'password');

        $result = [];

        if ($name && $email && $password) {
            if (UserHelper::emailExists($email)) {
                $result["status"] = "failed";
                $result["message"] = "E-mail já existe.";
                echo json_encode($result);
            } else {
                $user = UserHelper::createUser($name, $email, $password);

                if ($user) {
                    $result["status"] = "success";
                    $result["user"] = $user;
                    echo json_encode($result);
                }
            }
        } else {
            $result["status"] = "failed";
            echo json_encode($result);
        }
    }
}
