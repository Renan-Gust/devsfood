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

        if (count($data) > 0) {
            return [
                "user" => [
                    "name" => $data['name']
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

                User::update()
                    ->set('token', $token)
                    ->set('update_at', date('Y-m-d H:i:s'))
                    ->where('email', $email)
                    ->execute();

                return [
                    "token" => [
                        "value" => $token,
                        "expiresAt" => 7
                    ],
                    "user" => [
                        "name" => $user['name']
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

        $user = User::insert([
            "name" => $name,
            "email" => $email,
            "password" => $hash,
            "token" => $token,
            "created_at" => date('Y-m-d H:i:s'),
            "updated_at" => date('Y-m-d H:i:s'),
        ])->execute();

        return [
            "token" => [
                "value" => $token,
                "expiresAt" => 7
            ],
            "user" => [
                "name" => $user['name']
            ]
        ];
    }
}
