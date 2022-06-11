<?php

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OglasController;

use App\Http\Controllers\FileController;
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
Route::post('/onUpload', [FileController::class, 'onUpload']);


  
Route::get('/logout', [LoginController::class, 'logout']);
Route::post('/predaj-oglas', [OglasController::class, 'add']);
Route::get('/dohvati-oglase', [OglasController::class, 'get']);
Route::get('/dohvati-oglase/{tip}', [OglasController::class, 'get_tip']);
Route::get('/dohvati-oglase-2/{id_korisnik}', [OglasController::class, 'get_korisnik_oglas']);
Route::get('/dohvati-oglase-3/{id_korisnika}', [OglasController::class, 'get_korisnika_oglas']);

// Route::put('/user/{user}', [RegisterController::class, 'updateUser']); 
Route::post('/post/update/{id}', [RegisterController::class, 'update']);

Route::post('/filtrirani-oglasi/filter', [OglasController::class, 'filter']);

Route::get('/get-user', [RegisterController::class, 'getUser']);
Route::post('stanovi/delete/{id}', [OglasController::class, 'delete']);
 
Route::post('/update-oglas/{id}', [OglasController::class, 'updateOglas']);
Route::post('/update-profil/{id}', [RegisterController::class, 'updateProfil']);
Route::post('/change-password/{id}', [RegisterController::class, 'changePassword']);

