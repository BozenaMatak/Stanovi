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
        $user->save();

        return response()->json([
            'message'=>'Successfully Created user'
        ],201);
    }

    public function update($id,Request $request){
        

        try {
            $post = User::find($id);

            $post->update($request->all());

            return response()->json('successfully updated');
        } catch(\Throwable $e) {
            Log::error('Update profile : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }
}