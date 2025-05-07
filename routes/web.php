<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about-contact', function () {
    return Inertia::render('AboutContact');
})->name('about.contact');

// Contact Form Submission Route
use App\Http\Controllers\ContactController;
Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');
