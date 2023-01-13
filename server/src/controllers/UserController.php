<?php

namespace src\controllers;

use core\Controller;
use src\helpers\UserHelper;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type: application/x-www-form-urlencoded');

class UserController extends Controller
{
    public function signIn()
    {
        $result = [];

        $data = json_decode(file_get_contents('php://input'), true);

        $email = $data['email'];
        $password = $data['password'];

        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(404);
            $result["status"] = "failed";
            $result["message"] = "Por favor informe um email válido!";
            echo json_encode($result);
            exit;
        }

        if ($email && $password) {
            $user = UserHelper::verifyLogin($email, $password);

            if ($user) {
                http_response_code(200);
                $result["status"] = "success";
                $result["data"] = $user;
                echo json_encode($result);
                exit;
            } else {
                http_response_code(404);
                $result["status"] = "failed";
                $result["message"] = "E-mail e/ou senha não conferem.";
                echo json_encode($result);
                exit;
            }
        } else {
            http_response_code(404);
            $result["status"] = "failed";
            echo json_encode($result);
            exit;
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
                exit;
            } else {
                $user = UserHelper::createUser($name, $email, $password);

                if ($user) {
                    $result["status"] = "success";
                    $result["data"] = $user;
                    echo json_encode($result);
                    exit;
                }
            }
        } else {
            $result["status"] = "failed";
            echo json_encode($result);
            exit;
        }
    }

    public function checkLogin()
    {
        $result = [];

        $data = json_decode(file_get_contents('php://input'), true);

        $token = $data['token'];

        if ($token) {
            $user = UserHelper::checkLogin($token);

            if ($user) {
                http_response_code(200);
                $result["status"] = "success";
                $result["data"] = $user;
                echo json_encode($result);
                exit;
            } else {
                http_response_code(404);
                $result["status"] = "failed";
                $result["message"] = "Usuário não encontrado";
                echo json_encode($result);
                exit;
            }
        } else {
            http_response_code(404);
            $result["status"] = "failed";
            echo json_encode($result);
            exit;
        }
    }
}
