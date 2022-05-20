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
        $user->type = $request->type;
        $user->save();
    }
}