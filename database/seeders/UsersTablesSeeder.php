<?php

namespace Database\Seeders;
use App\Models\User;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::insert([
            'email'             => 'bozena.matak699@gmail.com',
            'username'          => 'Admin',
            'password'          => Hash::make('123456'),
            'ime'               => 'Božena',
            'prezime'           => 'Matak',
            'drzava'            => 'Hrvatska',
            'zupanija'          => 'Vukovarsko-srijemska županija',
            'grad'              => 'Vinkovci',
            'postanskibroj'     => '32281',
            'adresa'            => 'Matije Antuna Reljkovića 5, Ivankovo', 
            'type'              => 'Poslovni',
            'broj_mob'          => '0998438081',
            'image'             => 'slika profilna.png'
        ]);
    }
}
