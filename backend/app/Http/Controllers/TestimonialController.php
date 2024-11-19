<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\TestimonialStoreRequest;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonials = Testimonial::with('image')->get();
        return response()->json([
            'status'=>true,
            'data'=>$testimonials
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TestimonialStoreRequest $request)
    {
        $testimonial = new Testimonial();
        $testimonial->testimonial = $request->testimonial;
        $testimonial->citation = $request->citation;
        $testimonial->status = $request->status;
        $testimonial->save();
        if ($request->hasFile('image')) {
            $file = $request->image;
            $path='images/testimonials';
            $file_name=$this->upload_file($file ,$path);
            if ($file_name) {
                // Make sure that $testimonial is defined and has a valid images() method
                $image = new Image();
                $image->url = $file_name;
                $testimonial->image()->save($image);
            } else {
                // Handle the case where upload_file() fails to return a value
                return 0;
            }
        }
        return response()->json([
            'status' => true,
            'data' => $testimonial,
            'message' => 'Blog added.'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Testimonial $testimonial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Testimonial $testimonial)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonial $testimonial)
    {
        //
    }
    function upload_file($file, $path)
    {
        $upload_path = public_path($path);

        if (!is_dir($upload_path)) {
            Storage::makeDirectory($upload_path);
        }

        $file_name =time() . '.' . $file->getClientOriginalExtension();
        $file->move($upload_path, $file_name);
        return $file_name;
    }
}