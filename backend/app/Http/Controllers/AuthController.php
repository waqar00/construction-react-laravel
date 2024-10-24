<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function auth(AuthRequest $request){
        $credentials=[
            'email'=>$request->email,
            'password'=>$request->password,
        ];
        if(Auth::attempt($credentials)){
            $user=User::find(Auth::id());
            $token=$user->createToken('token')->plainTextToken;
            return response()->json([
                'status'=>true,
                'token'=>$token,
                'id'=>$user->id,
            ]);
        }else{
            return response()->json([
                'status'=>false,
                'message'=>'Email or Password Failed'
            ]);
        }
    }
    public function logout(){
        $user=User::find(Auth::id());
        $user->tokens()->delete();
        return response()->json([
            'status'=>true,
            'message'=>'Logout'
        ]);
    }
}
