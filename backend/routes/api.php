<?php

use App\Http\Controllers\api\front\FrontController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('authenticate', [AuthController::class, 'auth']);
Route::get('get-all-services',[FrontController::class ,'getAllServices']);
Route::get('get-latest-services',[FrontController::class ,'getLatestServices']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('logout', [AuthController::class, 'logout']);

    //services
    Route::apiResource('services',ServiceController::class);
    Route::apiResource('projects',ProjectController::class);
});
