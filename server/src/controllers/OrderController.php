<?php

namespace src\controllers;

use core\Controller;
use src\helpers\GetLastInsertId;
use src\models\Addresse;
use src\models\Order;
use src\models\Product;

class OrderController extends Controller
{
    public function orderDone()
    {
        $result = [];

        $data = json_decode(file_get_contents('php://input'), true);

        $userId = isset($data['userId']) ? $data['userId'] : null;
        $total = isset($data['total']) ? $data['total'] : null;
        $deliveryFee = isset($data['deliveryFee']) ? $data['deliveryFee'] : null;
        $productsId = isset($data['productsId']) ? $data['productsId'] : null;

        $currentDay = date('Y-m-d H:i:s');

        $getAddress = Addresse::select()->where("user_id", $userId)->one();
        if (!$getAddress) {
            $result['status'] = 'failed';
            $result['message'] = 'Endereço inexistente';
            echo json_encode($result);
            exit;
        }

        $products = [];

        foreach ($productsId as $value) {
            $product = Product::select()->where("id", $value['id'])->one();

            $products[] = [
                "id" => $product['id'],
                "name" => $product['name'],
                "price" => $product['price'],
                "image" => $product['image'],
                "ingredients" => $product['ingredients'],
                "quantity" => $value['quantity'],
            ];
        }

        if ($userId && $total && $deliveryFee && $productsId) {
            $id = GetLastInsertId::getLastInsertId()->table("orders")->insert([
                "user_id" => $userId,
                "address_id" => $getAddress['id'],
                "total" => (float)$total,
                "delivery_fee" => (float)$deliveryFee,
                "products" => json_encode($products),
                "status" => "received",
                "created_at" => $currentDay,
            ])->execute();

            $result['status'] = 'success';

            echo json_encode($result);
            exit;
        } else {
            $result['status'] = 'failed';
            echo json_encode($result);
            exit;
        }
    }

    public function getOrderInProgress($userId)
    {
        $result = [];

        $order = Order::select()
            ->where("user_id", $userId)
            ->where("status", "!=", "delivered")
            ->orderBy("id", "DESC")
            ->limit(1)
            ->one();

        $lastOrderDelivered = Order::select()
            ->where("user_id", $userId)
            ->where("status", "delivered")
            ->orderBy("id", "DESC")
            ->limit(1)
            ->one();

        if ($order) {
            $data = $this->returnOrders($order);

            http_response_code(200);
            $result['status'] = "success";
            $result['data'] = $data;

            echo json_encode($result);
            exit;
        } else if ($lastOrderDelivered) {
            $data = $this->returnOrders($lastOrderDelivered);

            http_response_code(200);
            $result['status'] = "success";
            $result['data'] = $data;

            echo json_encode($result);
            exit;
        } else {
            http_response_code(200);
            $result['status'] = "failed";
            $result['message'] = "Nenhum pedido a caminho!";

            echo json_encode($result);
            exit;
        }
    }

    public function getOrders($userId)
    {
        $result = [];

        $orders = Order::select()
            ->where("user_id", $userId)
            ->get();

        if ($orders) {
            $data = [];

            foreach ($orders as $order) {
                $data[] = $this->returnOrders($order);
            }

            http_response_code(200);
            $result['status'] = "success";
            $result['data'] = $data;

            echo json_encode($result);
            exit;
        } else {
            http_response_code(200);
            $result['status'] = "failed";
            $result['message'] = "Nenhum pedido encontrado!";

            echo json_encode($result);
            exit;
        }
    }

    public function returnOrders($order)
    {
        $infos = [
            'addresses.address',
            'addresses.number',
            'addresses.neighborhood',
            'addresses.city',
            'addresses.state',
            'orders.total',
            'orders.delivery_fee',
            'orders.products',
            'orders.created_at',
            'orders.status'
        ];

        $orderReturned = Addresse::select($infos)
            ->where('orders.id', $order['id'])
            ->join('orders', 'addresses.id', '=', 'orders.address_id')
            ->one();

        $data = [
            "address" => [
                "address" => $orderReturned['address'],
                "number"  => $orderReturned['number'],
                "neighborhood"  => $orderReturned['neighborhood'],
                "city"  => $orderReturned['city'],
                "state"  => $orderReturned['state']
            ],
            "total" => $orderReturned['total'],
            "delivery_fee" => $orderReturned['delivery_fee'],
            "products" => json_decode($orderReturned['products']),
            "status" => $orderReturned['status'],
            "created_at" => $orderReturned['created_at']
        ];

        return $data;
    }
}
