<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Render an exception into an HTTP response.
     */
    public function render($request, Throwable $exception)
    {
        $id = $request->segment(count($request->segments()));

        if (!is_numeric($id)) {
            return response()->json([
                'success' => false,
                'status' => 400,
                'error' => [
                    'code' => 'INVALID_ID',
                    'message' => 'ID must be an integer',
                ],
            ], 400);
        }
        
        if ($exception instanceof ApiException) {
            return response()->json([
                'success' => false,
                'status' => $exception->getStatusCode(),
                'error' => [
                    'code' => $exception->getCode(),
                    'message' => $exception->getMessage(),
                ],
            ], $exception->getStatusCode());
        }
        
        return parent::render($request, $exception);
    }
    

    
}
