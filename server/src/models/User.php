<?php

namespace src\models;

use ClanCats\Hydrahon\Builder;
use ClanCats\Hydrahon\Query\Sql\Insert;
use core\Database;
use \core\Model;

class User extends Model
{
    public static function getLastInsertId()
    {
        $connection = Database::getInstance();

        $builder = new Builder('mysql', function ($query, $queryString, $queryParameters) use ($connection) {
            $statement = $connection->prepare($queryString);
            $statement->execute($queryParameters);

            if ($query instanceof Insert) {
                return $connection->lastInsertId();
            }
        });

        return $builder;
    }
}
