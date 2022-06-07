<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facedes\Auth;
use Illuminate\Validation\ValidationException;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $this -> validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);
        $credentials = $request->only('email', 'password'); 

        try{
            if(!$token =  JWTAuth::attempt($credentials)){
                return response()->json([
                    'error' => 'Invalid Credentials'
                ], 401);
            }
        } catch(JWTException $e){
            return response()->json([
                'error' => 'Could not create token'
            ], 500);
        }
        return response() -> json([
            'token' => $token,
            'user'=>auth()->user(),
            // 'auth_user' => Auth::user()
        ], 200);
    }

    public function getUser()
    {
        $user = auth('api')->user();
        return response()->json(['user'=>$user], 201);
    }

    public function logout(Request $request) {
        $request->user()->token()->revoke();
    
        return response()->json([
           'message' => 'Successfully logged out'
        ]);
      }
}
