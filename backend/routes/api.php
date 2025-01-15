<?php

use App\Http\Controllers\api\front\FrontController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TestimonialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('authenticate', [AuthController::class, 'auth']);
//Services
Route::get('get-all-services',[FrontController::class ,'getAllServices']);
Route::get('get-latest-services',[FrontController::class ,'getLatestServices']);
//Projects
Route::get('get-latest-projects',[FrontController::class ,'getLatestProjects']);
Route::get('get-all-projects',[FrontController::class ,'getAllProjects']);

//blogs
Route::get('get-latest-blogs',[FrontController::class ,'getLatestBlogs']);
Route::get('get-all-blogs',[FrontController::class ,'getAllBlogs']);

//testimonial
Route::get('get-all-testimonial',[FrontController::class ,'getAllTestimonial']);

//members
Route::get('get-all-members',[FrontController::class ,'getAllMembers']);


Route::get('service-details/{slug}',[ServiceController::class ,'serviceDetails']);
Route::get('project-details/{slug}',[ProjectController::class ,'projectDetails']);
Route::get('blog-details/{slug}',[BlogController::class ,'blogtDetails']);
Route::post('send-mail',ContactUsController::class);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('logout', [AuthController::class, 'logout']);

    //services
    Route::apiResource('services',ServiceController::class);
    Route::apiResource('projects',ProjectController::class);
    Route::apiResource('blogs',BlogController::class);
    Route::apiResource('testimonials',TestimonialController::class);
    Route::apiResource('members',MemberController::class);
});
