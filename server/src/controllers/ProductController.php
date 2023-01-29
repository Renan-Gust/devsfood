<?php

namespace src\controllers;

use core\Controller;
use src\models\Product;
use src\models\ProductCategory;

class ProductController extends Controller
{
    public function getProducts()
    {
        $result = [
            "error" => "",
            "result" => [
                "data" => [],
                "page" => 1
            ]
        ];

        $categoryId = filter_input(INPUT_GET, 'category');
        $search = filter_input(INPUT_GET, 'search');
        $pageNumber = filter_input(INPUT_GET, 'page');

        $products = Product::select()->limit(4)->get();

        $infos = [
            'products.id',
            'products.name',
            'products.image',
            'products.price',
            'products.ingredients'
        ];

        if ($categoryId) {
            $products = ProductCategory::select($infos)
                ->where('category_id', $categoryId)
                ->join('products', 'productcategorys.product_id', '=', 'products.id')
                ->join('categorys', 'productcategorys.category_id', '=', 'categorys.id')
                ->limit(4)->get();
        }

        if ($search) {
            $products = Product::select()->where("name", "like", "{$search}%")->limit(4)->get();
        }

        foreach ($products as $product) {
            $result["result"]["data"][] = [
                "id" => $product["id"],
                "name" => $product["name"],
                "image" => $product["image"],
                "price" => $product["price"],
                "ingredients" => $product["ingredients"],
            ];
        }

        $productExists = count($products) === 0 ? 1 : count($products);
        $pagesTotal = count($products) >= 4 ? count($products) / 4 : count($products) / $productExists;

        $result["result"]["pages"] = $pagesTotal;

        echo json_encode($result);
    }

    public function sobreP($args)
    {
        print_r($args);
    }
}
