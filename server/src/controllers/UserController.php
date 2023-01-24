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

        $email = isset($data['email']) ? $data['email'] : null;
        $password = isset($data['password']) ? $data['password'] : null;

        UserHelper::validadeEmail($result, $email);

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
        $result = [];

        $data = json_decode(file_get_contents('php://input'), true);

        $name = isset($data['name']) ? $data['name'] : null;
        $email = isset($data['email']) ? $data['email'] : null;
        $password = isset($data['password']) ? $data['password'] : null;

        UserHelper::validadeEmail($result, $email);

        if ($name && $email && $password) {
            if (UserHelper::emailExists($email)) {
                http_response_code(401);
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

        $token = isset($data['token']) ? $data['token'] : null;

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

    public function updateUserInfo()
    {
        $result = [];

        $data = json_decode(file_get_contents('php://input'), true);

        $name = isset($data['name']) ? $data['name'] : null;
        $email = isset($data['email']) ? $data['email'] : null;

        UserHelper::validadeEmail($result, $email);

        if ($name && $email) {
            $user = UserHelper::updateUserInfo($name, $email);

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
