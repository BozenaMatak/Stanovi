<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); 
            $table->string('email')->unique(); 
            $table->string('username');
            $table->string('password');
            $table->string('ime');
            $table->string('prezime');
            $table->string('drzava');
            $table->string('zupanija');
            $table->string('grad');
            $table->string('postanskibroj');
            $table->string('adresa');
            $table->string('type');
            $table->string('broj_mob')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
