<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::middleware([
//     'auth:sanctum',
//     config('jetstream.auth_session'),
//     'verified',
// ])->group(function () {
//     Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard');
//     })->name('dashboard');
// });

Route::get('/', function (){
    return Inertia::render('Introduction');
})->name('introduction');

Route::get('/products', function(){
    return Inertia::render('Products');
})->name('products');

Route::get('filter-products', function(){
    return Inertia::render('FilterProducts');
})->name('filter-products');

Route::get('categories', function(){
    return Inertia::render('Categories');
})->name('categories');

Route::get('users', function(){
    return Inertia::render('User');
})->name('users');

Route::get('auth-jwt', function(){
    return Inertia::render('AuthJwt');
})->name('auth-jwt');

Route::get('files', function(){
    return Inertia::render('Files');
})->name('files');