<?php

namespace src\controllers;

use core\Controller;
use src\models\Category;

class CategoryController extends Controller
{
    public function getCategories()
    {
        $result = [
            "error" => "",
            "result" => []
        ];

        $categories = Category::select()->get();

        foreach ($categories as $category) {
            $result["result"][] = [
                "id" => $category["id"],
                "name" => $category["name"],
                "image" => $category["image"],
            ];
        }

        echo json_encode($result);
    }
}
