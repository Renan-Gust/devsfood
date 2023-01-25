<?php

namespace src\helpers;

use \src\models\User;

date_default_timezone_set('America/Sao_Paulo');

class UserHelper
{
    // Check if you are logged
    public static function checkLogin($token)
    {
        $data = User::select()->where('token', $token)->one();

        if (count(array($data)) > 0) {
            return [
                "user" => [
                    "id" => $data['id'],
                    "name" => $data['name'],
                    "email" => $data['email']
                ]
            ];
        }

        return false;
    }

    public static function verifyLogin($email, $password)
    {
        $user = User::select()->where('email', $email)->one();

        if ($user) {
            if (password_verify($password, $user['password'])) {
                $token = md5(time() . rand(0, 9999) . time());

                $currentDay = date('Y-m-d H:i:s');
                $tokenExpiresAt = date('Y-m-d H:i:s', strtotime("+7 days", strtotime($currentDay)));

                User::update([
                    "token" => $token,
                    "token_expires_at" => $tokenExpiresAt,
                    "updated_at" => $currentDay
                ])->where("email", $email)->execute();

                return [
                    "token" => [
                        "value" => $token,
                        "expiresAt" => 7
                    ],
                    "user" => [
                        "id" => $user['id'],
                        "name" => $user['name'],
                        "email" => $user['email']
                    ]
                ];
            }
        }

        return false;
    }

    public static function emailExists($email)
    {
        $user = User::select()->where('email', $email)->one();

        return $user ? true : false;
    }

    public static function createUser($name, $email, $password)
    {
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $token = md5(time() . rand(0, 9999) . time());

        $currentDay = date('Y-m-d H:i:s');

        $id = User::getLastInsertId()->table("users")->insert([
            "name" => $name,
            "email" => $email,
            "password" => $hash,
            "token" => $token,
            "token_expires_at" => date('Y-m-d H:i:s', strtotime("+7 days", strtotime($currentDay))),
            "created_at" => $currentDay,
            "updated_at" => $currentDay
        ])->execute();

        return [
            "token" => [
                "value" => $token,
                "expiresAt" => 7
            ],
            "user" => [
                "id" => $id,
                "name" => $name,
                "email" => $email
            ]
        ];
    }

    public static function validadeEmail($result, $email)
    {
        if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(401);
            $result["status"] = "failed";
            $result["message"] = "Por favor informe um email válido!";
            echo json_encode($result);
            exit;
        }
    }

    public static function updateUserInfo($id, $name, $email = '')
    {
        $user = User::select()->where('id', $id)->one();

        if ($user) {
            $currentDay = date('Y-m-d H:i:s');

            User::update([
                "name" => $name,
                "email" => $email ? $email : $user['email'],
                "updated_at" => $currentDay
            ])->where("id", $id)->execute();

            return [
                "user" => [
                    "id" => $id,
                    "name" => $name,
                    "email" => $email ? $email : $user['email'],
                ]
            ];
        }

        return false;
    }
}
