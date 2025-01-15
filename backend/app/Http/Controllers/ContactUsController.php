<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactUsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ContactRequest $request)
    {


        $data = $request->all();
        Mail::to('admin@123')->send(new ContactUs($data));
        return response()->json([
            'status' => true,
            'message' => 'Contact Us form submitted successfully.'
        ]);

    }
}
