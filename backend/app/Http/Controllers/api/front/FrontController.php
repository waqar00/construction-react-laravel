<?php

namespace App\Http\Controllers\api\front;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Project;
use App\Models\Service;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function getAllServices()
    {
        $services = Service::with('image')->where('status', 1)->latest()->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    public function getLatestServices(Request $request)
    {
        $services = Service::with('image')->where('status', 1)
            ->take($request->get('limit'))
            ->latest()
            ->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    public function getAllProjects()
    {
        $projects = Project::with('image')->where('status', 1)->latest()->get();
        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }

    public function getLatestProjects(Request $request)
    {
        $projects = Project::with('image')->where('status', 1)
            ->take($request->get('limit'))
            ->latest()
            ->get();
        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }

    public function getAllBlogs()
    {
        $blogs = Blog::with('image')->where('status', 1)->latest()->get();
        return response()->json([
            'status' => true,
            'data' => $blogs
        ]);
    }

    public function getLatestBlogs(Request $request)
    {
        $blogs = Blog::with('image')->where('status', 1)
            ->take($request->get('limit'))
            ->latest()
            ->get();
        return response()->json([
            'status' => true,
            'data' => $blogs
        ]);
    }
}
