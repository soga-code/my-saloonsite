<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        Mail::raw($data['message'], function ($msg) use ($data) {
            $msg->to('youremail@example.com')
                ->subject('New Contact from ' . $data['name'])
                ->replyTo($data['email']);
        });

        return back()->with('success', 'Message sent!');
    }
}