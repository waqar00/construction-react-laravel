<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Project;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\ServiceStoreRequest;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::get();
        return response()->json([
            'status'=>true,
            'data'=>$projects
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
        $project = new Project;
        $project->title = $request->title;
        $project->slug = Str::slug($request->title);
        $project->content = $request->content;
        $project->short_desc = $request->short_desc;
        $project->status = $request->status;
        $project->construction_type = $request->construction_type;
        $project->sector = $request->sector;
        $project->location = $request->location;
        $project->save();
        if ($request->hasFile('image')) {
            $file = $request->image;
            $path='images/projects';
            $file_name=$this->upload_file($file ,$path);
            if ($file_name) {
                // Make sure that $project is defined and has a valid images() method
                $image = new Image();
                $image->url = $file_name;
                $project->image()->save($image);
            } else {
                // Handle the case where upload_file() fails to return a value
                return 0;
            }
        }
        return response()->json([
            'status' => true,
            'data' => $project,
            'message' => 'Project added.'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $project =Project::with('image')->find($id);
        return response()->json([
            'status' => true,
            'data' => $project,
            'message' => 'project By ID.'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $project =Project::find($id);
        $project->title = $request->title;
        $project->content = $request->content;
        $project->short_desc = $request->short_desc;
        $project->status = $request->status;
        $project->construction_type = $request->construction_type;
        $project->sector = $request->sector;
        $project->location = $request->location;
        $project->save();
        if ($request->has('image')) {
            $image = $project->image; // Assuming this returns a single instance

            if ($image && Storage::exists('images/projects/' . $image->url)) {
                Storage::delete('images/projects/' . $image->url);
            }

            $project->image()->delete();

                // Make sure that upload_file() is defined and returns a value
                $file_name = $this->upload_file($request->image, 'images/projects');
                if ($file_name) {
                    // Make sure that $project is defined and has a valid images() method
                    $image = new Image;
                    $image->url = $file_name;
                    $project->image()->save($image);
                } else {
                    // Handle the case where upload_file() fails to return a value
                    return false;
                }
        }
        return response()->json([
            'status' => true,
            'data' => $project,
            'message' => 'Project updated.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $project =Project::with('image')->find($id);
        $project->delete();
        return response()->json([
            'status' => true,
            'data' => $project,
            'message' => 'Project Deleted.'
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
