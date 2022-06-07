<?php

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OglasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route; 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register-private', [RegisterController::class, 'register']);
Route::post('/register-poslovni', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);  


  
Route::get('/logout', [LoginController::class, 'logout']);
Route::post('/predaj-oglas', [OglasController::class, 'add']);
Route::get('/dohvati-oglase', [OglasController::class, 'get']);

// Route::put('/user/{user}', [RegisterController::class, 'updateUser']);
Route::post('/updateprofile/{id}',  [RegisterController::class, 'updateUser']);
Route::post('/post/update/{id}', [RegisterController::class, 'update']);

