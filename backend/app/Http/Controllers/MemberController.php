<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Member;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $member = Member::with('image')->get();
        return response()->json([
            'status'=>true,
            'data'=>$member
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $member = new Member;
        $member->name = $request->name;
        $member->job_title = $request->job_title;
        $member->linkedin_url = $request->linkedin_url;
        $member->status = $request->status;
        $member->save();

        if ($request->hasFile('image')) {
            $file_name = $this->upload_file($request->image, 'images/members');
            if ($file_name) {
                $image = new Image();
                $image->url = $file_name;
                $member->image()->save($image);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Image upload failed.'
                ], 500);
            }
        }

        return response()->json([
            'status' => true,
            'data' => $member,
            'message' => 'Member added.'
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
    public function show(string $id)
    {
        $member =Member::with('image')->find($id);
        return response()->json([
            'status' => true,
            'data' => $member,
            'message' => 'member By ID.'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $member =Member::find($id);
        $member->name = $request->name;
        $member->job_title = $request->job_title;
        $member->linkedin_url = $request->linkedin_url;
        $member->status = $request->status;
        $member->save();
        if ($request->has('image')) {
            $image = $member->image; // Assuming this returns a single instance

            if ($image && Storage::exists('images/members/' . $image->url)) {
                Storage::delete('images/members/' . $image->url);
            }

            $member->image()->delete();

                // Make sure that upload_file() is defined and returns a value
                $file_name = $this->upload_file($request->image, 'images/members');
                if ($file_name) {
                    // Make sure that $member is defined and has a valid images() method
                    $image = new Image;
                    $image->url = $file_name;
                    $member->image()->save($image);
                } else {
                    // Handle the case where upload_file() fails to return a value
                    return false;
                }
        }
        return response()->json([
            'status' => true,
            'data' => $member,
            'message' => 'member updated.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $member =Member::with('image')->find($id);
        $member->delete();
        return response()->json([
            'status' => true,
            'data' => $member,
            'message' => 'member Deleted.'
        ]);
    }
}
