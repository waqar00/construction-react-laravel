<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Service;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use App\Http\Requests\ServiceStoreRequest;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::with('image')->latest()->get();
        return response()->json([
            'status' => true,
            'data' => $services,
            'message' => 'all Services.'
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
    public function store(ServiceStoreRequest $request)
    {
        $service = new Service;
        $service->title = $request->title;
        $service->slug = Str::slug($request->title);
        $service->content = $request->content;
        $service->short_desc = $request->short_desc;
        $service->status = $request->status;
        $service->save();
        if ($request->hasFile('image')) {
            $file = $request->image;
            $path='images/services';
            $file_name=$this->upload_file($file ,$path);
            if ($file_name) {
                // Make sure that $service is defined and has a valid images() method
                $image = new Image();
                $image->url = $file_name;
                $service->image()->save($image);
            } else {
                // Handle the case where upload_file() fails to return a value
                return 0;
            }
        }
        return response()->json([
            'status' => true,
            'data' => $service,
            'message' => 'Service added.'
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

    /**
     * Display the specified resource.
     */
    public function show(Request $request ,$id)
    {
        $service =Service::with('image')->find($id);
        return response()->json([
            'status' => true,
            'data' => $service,
            'message' => 'Service By ID.'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $service =Service::find($id);
        $service->title = $request->title;
        $service->content = $request->content;
        $service->short_desc = $request->short_desc;
        $service->status = $request->status;
        $service->save();
        if ($request->has('image')) {
            $image = $service->image; // Assuming this returns a single instance

            if ($image && Storage::exists('images/services/' . $image->url)) {
                Storage::delete('images/services/' . $image->url);
            }

            $service->image()->delete();

                // Make sure that upload_file() is defined and returns a value
                $file_name = $this->upload_file($request->image, 'images/services');
                if ($file_name) {
                    // Make sure that $service is defined and has a valid images() method
                    $image = new Image;
                    $image->url = $file_name;
                    $service->image()->save($image);
                } else {
                    // Handle the case where upload_file() fails to return a value
                    return false;
                }
        }
        return response()->json([
            'status' => true,
            'data' => $service,
            'message' => 'Service updated.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $service =Service::with('image')->find($id);
        $service->delete();
        return response()->json([
            'status' => true,
            'data' => $service,
            'message' => 'Service Deleted.'
        ]);
    }
}
