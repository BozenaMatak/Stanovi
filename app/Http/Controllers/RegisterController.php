<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request -> validate([
            'email' => ['required', 'email', 'unique:users'],
            'username' => ['required'],
            'password' => ['required', 'min:6', 'confirmed']
        ]);

        
        $user = new User();
        $user->email = $request->email;
        $user->username = $request->username;
        $user->password = Hash::make($request->password); 
        $user->ime = $request->ime;
        $user->prezime = $request->prezime;
        $user->drzava = $request->drzava;
        $user->zupanija = $request->zupanija;
        $user->grad = $request->grad;
        $user->postanskibroj = $request->postanskibroj;
        $user->adresa = $request->adresa;
        $user->broj_mob = $request->broj_mob;
        $user->type = $request->type;
        $user->image = $request->image;
        $user->save();

        return response()->json([
            'message'=>'Successfully Created user'
        ],201);
    }

    public function updateProfil(Request $request, $id){

        $user = User::find($id);
        $user->username = $request->username;
        $user->ime = $request->ime;
        $user->prezime = $request->prezime;
        $user->drzava = $request->drzava;
        $user->zupanija = $request->zupanija;
        $user->grad = $request->grad;
        $user->postanskibroj = $request->postanskibroj;
        $user->adresa = $request->adresa;
        $user->broj_mob = $request->broj_mob;
        $user->save();
        return $user;

    }

    public function getUser()
		{
            try {
             
                $user_all = User::all();
                return $user_all;
            
            } catch(\Throwable $e) {
                Log::error('Get user : ' . $e->getMessage());
                return response()->json(['error' => 'Internal server error'], 500);
            }
		}

        public function changePassword(Request $request, $id){
            
             
            $user = User::find($id);

            if($request->password == $request->password_confirmation){ 
                $user->password = Hash::make($request->password);
                $user->save();
                return $user;
            }
            else{
                return response()->json(['error' => 'Internal server error'], 500);
            }
        
            
 
    
        } 



}