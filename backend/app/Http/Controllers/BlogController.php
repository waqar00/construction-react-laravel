<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Image;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::with('image')->get();
        return response()->json([
            'status'=>true,
            'data'=>$blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $blog = new Blog;
        $blog->title = $request->title;
        $blog->slug = Str::slug($request->title);
        $blog->content = $request->content;
        $blog->status = $request->status;
        $blog->author = $request->author;
        $blog->save();
        if ($request->hasFile('image')) {
            $file = $request->image;
            $path='images/blogs';
            $file_name=$this->upload_file($file ,$path);
            if ($file_name) {
                // Make sure that $blog is defined and has a valid images() method
                $image = new Image();
                $image->url = $file_name;
                $blog->image()->save($image);
            } else {
                // Handle the case where upload_file() fails to return a value
                return 0;
            }
        }
        return response()->json([
            'status' => true,
            'data' => $blog,
            'message' => 'Blog added.'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $blog =Blog::with('image')->find($id);
        return response()->json([
            'status' => true,
            'data' => $blog,
            'message' => 'blog By ID.'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $blog =Blog::find($id);
        $blog->title = $request->title;
        $blog->content = $request->content;
        $blog->author = $request->author;
        $blog->status = $request->status;
        $blog->save();
        if ($request->has('image')) {
            $image = $blog->image; // Assuming this returns a single instance

            if ($image && Storage::exists('images/blogs/' . $image->url)) {
                Storage::delete('images/blogs/' . $image->url);
            }

            $blog->image()->delete();

                // Make sure that upload_file() is defined and returns a value
                $file_name = $this->upload_file($request->image, 'images/blogs');
                if ($file_name) {
                    // Make sure that $blog is defined and has a valid images() method
                    $image = new Image;
                    $image->url = $file_name;
                    $blog->image()->save($image);
                } else {
                    // Handle the case where upload_file() fails to return a value
                    return false;
                }
        }
        return response()->json([
            'status' => true,
            'data' => $blog,
            'message' => 'Blog updated.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $blog =Blog::with('image')->find($id);
        $blog->delete();
        return response()->json([
            'status' => true,
            'data' => $blog,
            'message' => 'blog Deleted.'
        ]);
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
