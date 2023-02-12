<?php

namespace src\controllers;

use core\Controller;
use src\helpers\GetLastInsertId;
use src\models\Addresse;
use src\models\Order;
use src\models\OrderProduct;
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

        if ($userId && $total && $deliveryFee && $productsId) {
            $id = GetLastInsertId::getLastInsertId()->table("orders")->insert([
                "user_id" => $userId,
                "address_id" => $getAddress['id'],
                "total" => (float)$total,
                "delivery_fee" => (float)$deliveryFee,
                "status" => "received",
                "created_at" => $currentDay,
            ])->execute();

            foreach ($productsId as $value) {
                $products[] = Product::select()->where("id", $value)->get();

                OrderProduct::insert([
                    "order_id" => $id,
                    "product_id" => $value
                ])->execute();
            }

            $result['status'] = 'success';
            $result['data'] = [
                "order" => [
                    "orderStatus" => "received",
                    "orderDate" => $currentDay,
                    "total" => $total,
                    "deliveryFee" => $deliveryFee,
                ],
                "address" => [
                    "address" => $getAddress['address'],
                    "number" => $getAddress['number'],
                    "neighborhood" => $getAddress['neighborhood'],
                    "city" => $getAddress['city'],
                    "state" => $getAddress['state'],
                ],
                "products" => $products
            ];

            echo json_encode($result);
            exit;
        } else {
            $result['status'] = 'failed';
            echo json_encode($result);
            exit;
        }
    }

    public function getCompletedOrders($userId)
    {
        $result = [];

        $infos = [
            'products.name',
            'products.image',
            'products.price',
            'orders.created_at',
            'orders.status',
            'orders.total',
            'orders.delivery_fee'
        ];

        $orders = OrderProduct::select($infos)
            ->where("order_id", 1)
            ->join('products', 'orderproducts.product_id', '=', 'products.id')
            ->join('orders', 'orderproducts.order_id', '=', 'orders.id')
            ->get();

        print_r($orders);
        exit;

        if ($orders) {
            $data = [];

            foreach ($orders as $order) {
            }

            http_response_code(200);
            $result['status'] = "success";
            $result['data'] = [
                "orderDate" => "",
                "orderStatus" => "",
                "total" => "124.31",
                "address" => []
            ];

            echo json_encode($result);
            exit;
        } else {
            http_response_code(200);
            $result['status'] = "failed";
            $result['message'] = "Nenhum pedido feito!";

            echo json_encode($result);
            exit;
        }
    }
}
