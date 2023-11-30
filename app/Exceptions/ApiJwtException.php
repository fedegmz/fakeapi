<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class ApiJwtException extends Exception
{
    private $statusCode;

    public function __construct($message = "", $statusCode = 400)
    {
        parent::__construct($message);
        $this->statusCode = $statusCode;
    }

    public function getStatusCode()
    {
        return $this->statusCode;
    }

    public function render($request): JsonResponse
    {
        return response()->json([
            'success' => false,
            'status' => $this->getStatusCode(),
            'error' => [
                'code' => $this->getCode(),
                'message' => $this->getMessage(),
            ],
        ], $this->getStatusCode());
    }
}