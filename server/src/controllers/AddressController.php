<?php

namespace src\controllers;

use core\Controller;
use src\models\Addresse;

class AddressController extends Controller
{
    public function getAddress($id)
    {
        $result = [];

        $address = Addresse::select()->where("user_id", $id)->one();

        if ($address) {
            http_response_code(200);
            $result['status'] = "success";
            $result['data'] = [
                "address" => $address['address'],
                "number" => strval($address['number']),
                "neighborhood" => $address['neighborhood'],
                "city" => $address['city'],
                "state" => $address['state'],
            ];

            echo json_encode($result);
            exit;
        } else {
            http_response_code(200);
            $result['status'] = "failed";
            $result['message'] = "Endereço não encontrado";

            echo json_encode($result);
            exit;
        }
    }

    public function addAddress()
    {
        $result = [];

        $data = json_decode(file_get_contents('php://input'), true);

        $userId = isset($data['userId']) ? $data['userId'] : null;
        $address = isset($data['address']) ? $data['address'] : null;
        $number = isset($data['number']) ? $data['number'] : null;
        $neighborhood = isset($data['neighborhood']) ? $data['neighborhood'] : null;
        $city = isset($data['city']) ? $data['city'] : null;
        $state = isset($data['state']) ? $data['state'] : null;

        $currentDay = date('Y-m-d H:i:s');

        $addressExists = Addresse::select()->where("user_id", $userId)->one();
        if ($addressExists) {
            $result['status'] = 'failed';
            $result['message'] = 'Endereço já existe pra esse usuário';
            echo json_encode($result);
            exit;
        }

        if ($userId && $address && $number && $neighborhood && $city && $state) {
            Addresse::insert([
                "user_id" => $userId,
                "address" => $address,
                "number" => (int)$number,
                "neighborhood" => $neighborhood,
                "city" => $city,
                "state" => $state,
                "created_at" => $currentDay,
                "updated_at" => $currentDay
            ])->execute();

            $result['status'] = 'success';
            $result['data'] = [
                "address" => $address,
                "number" => strval($number),
                "neighborhood" => $neighborhood,
                "city" => $city,
                "state" => $state,
            ];

            echo json_encode($result);
            exit;
        } else {
            $result['status'] = 'failed';
            echo json_encode($result);
            exit;
        }
    }

    public function updateAddress()
    {
        $result = [];

        $data = json_decode(file_get_contents('php://input'), true);

        $userId = isset($data['userId']) ? $data['userId'] : null;
        $address = isset($data['address']) ? $data['address'] : null;
        $number = isset($data['number']) ? $data['number'] : null;
        $neighborhood = isset($data['neighborhood']) ? $data['neighborhood'] : null;
        $city = isset($data['city']) ? $data['city'] : null;
        $state = isset($data['state']) ? $data['state'] : null;

        $currentDay = date('Y-m-d H:i:s');

        $addressExists = Addresse::select()->where("user_id", $userId)->one();
        if (!$addressExists) {
            $result['status'] = 'failed';
            $result['message'] = 'Endereço não encontrado pra esse usuário';
            echo json_encode($result);
            exit;
        }

        if ($userId && $address && $number && $neighborhood && $city && $state) {
            Addresse::update([
                "address" => $address,
                "number" => (int)$number,
                "neighborhood" => $neighborhood,
                "city" => $city,
                "state" => $state,
                "updated_at" => $currentDay
            ])->execute();

            $result['status'] = 'success';
            $result['data'] = [
                "address" => $address,
                "number" => strval($number),
                "neighborhood" => $neighborhood,
                "city" => $city,
                "state" => $state,
            ];

            echo json_encode($result);
            exit;
        } else {
            $result['status'] = 'failed';
            echo json_encode($result);
            exit;
        }
    }
}
