<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $request->validate([
            'name'    => 'required|string',
            'email'   => 'required|email',
            'message' => 'required|string',
        ]);

        Mail::raw("Name: {$request->name}\nEmail: {$request->email}\nMessage: {$request->message}", function ($mail) use ($request) {
            $mail->to('durojaiyesoga@gmail.com')
                 ->from($request->email, $request->name)
                 ->subject('New Contact Form Submission');
        });

        return response()->json(['success' => true, 'message' => 'Email sent successfully!']);
    }
}
