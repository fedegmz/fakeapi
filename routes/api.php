<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\FileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    Route::get('products/search', [ProductController::class, 'search'])->name('products.search');
    Route::apiResource('products', ProductController::class);

    Route::get('categories/{id}/products', [CategoryController::class, 'findProductByCategory'])
            ->name('categories.products');
    Route::apiResource('categories', CategoryController::class);

    Route::apiResource('users', UserController::class);
    Route::post('users/email-is-available', [UserController::class, 'verifyEmail'])
            ->name('users.email-is-available');

    Route::post('auth/login', [AuthController::class, 'login'])->name('login');
    Route::get('auth/profile', [AuthController::class, 'profile'])->name('profile');
    Route::post ('auth/refresh-token', [AuthController::class, 'refreshToken'])->name('refreshToken');

    Route::get('files/{filename}', [FileController::class, 'show'])->name('files.show');
    Route::post('files/upload', [FileController::class, 'upload'])->name('files.upload');
});
