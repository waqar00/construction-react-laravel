<?php

namespace App\Http\Controllers\api\front;

use App\Http\Controllers\Controller;
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
}
