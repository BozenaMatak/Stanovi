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
            'password'          => Hash::make('1234567'),
            'ime'               => 'Božena',
            'prezime'           => 'Matak',
            'drzava'            => 'Hrvatska',
            'zupanija'          => 'Vukovarsko-srijemska županija',
            'grad'              => 'Vinkovci',
            'postanskibroj'     => '32281',
            'adresa'            => 'Matije Antuna Reljkovića, Ivankovo',
            'remember_token'    => 1235432143,
            'type'              => 'Poslovni'
        ]);
    }
}
