<?php

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

Route::post("login", "App\Http\Controllers\UserController@login");
Route::post("register", "App\Http\Controllers\UserController@register");

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('timovi', 'App\Http\Controllers\TimController');
    Route::apiResource('nivoi', 'App\Http\Controllers\NivoController');
    Route::apiResource('radnici', 'App\Http\Controllers\RadnikController');
    Route::get('radniciPoTimu', 'App\Http\Controllers\RadnikController@radniciPoTimu');
});

Route::get('qod', 'App\Http\Controllers\RadnikController@qod');
