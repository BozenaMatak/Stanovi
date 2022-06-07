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
            $table->string('povrsina');
            $table->string('soba');
            $table->string('opis');
            $table->string('cijena');
            $table->string('zupanija');
            $table->string('grad');
            $table->string('adresa');
            $table->string('broj_kupaona');
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
            $table->string('broj_park_mjes');
            $table->string('podzemna_garaza');
            $table->string('samostojeca_garaza');
            $table->string('parkirno_mjesto');
            $table->string('javni_parking');
            $table->string('gradevinska_dozvola');
            $table->string('vlasnicki_list');
            $table->string('uporabna_dozvola');
            $table->string('lift');
            $table->string('klima');
            $table->string('pristup_inv');
            $table->string('fiksni_tel');
            $table->string('isdn');
            $table->string('adsl');
            $table->string('wifi');
            $table->string('kablovski');
            $table->string('opticki');
            $table->string('tv_antena');
            $table->string('satelitski_prikljucak');
            $table->string('video_nadzor');
            $table->string('alarm');
            $table->string('niskoenergetska');
            $table->string('bazen');
            $table->string('rostilj');
            $table->string('autobus');
            $table->string('bolnica');
            $table->string('dom_zdravlja');
            $table->string('fakultet');
            $table->string('jez_mor_rij');
            $table->string('osnovna_skola');
            $table->string('park_suma');
            $table->string('sportski_objekt');
            $table->string('srednja_skola');
            $table->string('tramvaj');
            $table->string('trgovacki_centar');
            $table->string('vlak');
            $table->string('vrtic');
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
