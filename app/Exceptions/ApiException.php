<?php

namespace App\Exceptions;

use Exception;

class ApiException extends Exception
{
    protected $statusCode; // Para almacenar el código de estado HTTP personalizado

    public function __construct($message = null, $statusCode = 404)
    {
        parent::__construct($message);
        $this->statusCode = $statusCode;
    }

    public function getStatusCode()
    {
        return $this->statusCode;
    }
}
