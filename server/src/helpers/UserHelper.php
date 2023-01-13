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

        $currentDay = date('Y-m-d H:i:s');

        User::insert([
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
                "name" => $name
            ]
        ];
    }
}
