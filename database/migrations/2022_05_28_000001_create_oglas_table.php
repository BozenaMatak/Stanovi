<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOglasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('oglas', function (Blueprint $table) {
            $table->id(); 
            $table->string('user_id');
            $table->string('tip');
            $table->string('namjena');
            $table->string('naslov');
            $table->double('povrsina', 8, 2);
            $table->string('soba');
            $table->string('opis', 1000);
            $table->string('image');
            $table->double('cijena', 8, 2);
            $table->string('zupanija');
            $table->string('grad');
            $table->string('adresa');
            $table->integer('broj_kupaona');
            $table->string('san_cvor')->nullable();
            $table->string('balkon')->nullable();
            $table->string('terasa')->nullable();
            $table->string('etaza')->nullable();
            $table->string('grijanje');
            $table->string('godina_iz');
            $table->string('kat')->nullable();
            $table->string('en_cer')->nullable();
            $table->string('tip_gradnja')->nullable();
            $table->string('stanja')->nullable();
            $table->string('prozor')->nullable();
            $table->string('vanjska_vrata')->nullable();
            $table->string('pod')->nullable();
            $table->integer('broj_park_mjes');
            $table->integer('podzemna_garaza');
            $table->integer('samostojeca_garaza');
            $table->integer('parkirno_mjesto');
            $table->integer('javni_parking');
            $table->integer('gradevinska_dozvola');
            $table->integer('vlasnicki_list');
            $table->integer('uporabna_dozvola');
            $table->integer('lift');
            $table->integer('klima');
            $table->integer('pristup_inv');
            $table->integer('fiksni_tel');
            $table->integer('isdn');
            $table->integer('adsl');
            $table->integer('wifi');
            $table->integer('kablovski');
            $table->integer('opticki');
            $table->integer('tv_antena');
            $table->integer('satelitski_prikljucak');
            $table->integer('video_nadzor');
            $table->integer('alarm');
            $table->integer('niskoenergetska');
            $table->integer('bazen');
            $table->integer('rostilj');
            $table->integer('autobus');
            $table->integer('bolnica');
            $table->integer('dom_zdravlja');
            $table->integer('fakultet');
            $table->integer('jez_mor_rij');
            $table->integer('osnovna_skola');
            $table->integer('park_suma');
            $table->integer('sportski_objekt');
            $table->integer('srednja_skola');
            $table->integer('tramvaj');
            $table->integer('trgovacki_centar');
            $table->integer('vlak');
            $table->integer('vrtic');
            $table->string('kontakt');
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
        Schema::dropIfExists('oglas');
    }
}
