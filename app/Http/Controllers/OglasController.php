<?php

namespace App\Http\Controllers;
use App\Models\Oglas;
use Illuminate\Http\Request;
use DB;

class OglasController extends Controller
{
    public function add(Request $request)
    {
        
        $oglas = new Oglas();
        $oglas->user_id = $request->user_id;
        $oglas->tip = $request-> tip;
        $oglas->namjena = $request->namjena;
        $oglas->naslov = $request->naslov;
        $oglas->povrsina = $request->povrsina;
        $oglas->soba = $request->soba;
        $oglas->opis = $request->opis;
        $oglas->cijena = $request->cijena;
        $oglas->zupanija = $request->zupanija;
        $oglas->grad = $request->grad;
        $oglas->adresa = $request->adresa;
        $oglas->broj_kupaona = $request->broj_kupaona;
        $oglas->san_cvor = $request->san_cvor;
        $oglas->balkon = $request->balkon;
        $oglas->terasa = $request->terasa;
        $oglas->etaza = $request->etaza;
        $oglas->grijanje = $request->grijanje;
        $oglas->godina_iz = $request->godina_iz;
        $oglas->kat = $request->kat;
        $oglas->en_cer = $request->en_cer;
        $oglas->tip_gradnja = $request->tip_gradnja;
        $oglas->stanja = $request->stanja;
        $oglas->prozor = $request->prozor;
        $oglas->vanjska_vrata = $request->vanjska_vrata;
        $oglas->pod = $request->pod;
        $oglas->broj_park_mjes = $request->broj_park_mjes;
        $oglas->podzemna_garaza = $request->podzemna_garaza;
        $oglas->samostojeca_garaza = $request->samostojeca_garaza;
        $oglas->parkirno_mjesto = $request->parkirno_mjesto;
        $oglas->javni_parking = $request->javni_parking;
        $oglas->gradevinska_dozvola = $request->gradevinska_dozvola;
        $oglas->vlasnicki_list = $request->vlasnicki_list;
        $oglas->uporabna_dozvola = $request->uporabna_dozvola;
        $oglas->lift = $request->lift;
        $oglas->klima = $request->klima;
        $oglas->pristup_inv = $request->pristup_inv;
        $oglas->fiksni_tel = $request->fiksni_tel;
        $oglas->isdn = $request->isdn;
        $oglas->adsl = $request->adsl;
        $oglas->wifi = $request->wifi;
        $oglas->kablovski = $request->kablovski;
        $oglas->opticki = $request->opticki;
        $oglas->tv_antena = $request->tv_antena;
        $oglas->satelitski_prikljucak = $request->satelitski_prikljucak;
        $oglas->video_nadzor = $request->video_nadzor;
        $oglas->alarm = $request->alarm;
        $oglas->niskoenergetska = $request->niskoenergetska;
        $oglas->bazen = $request->bazen;
        $oglas->rostilj = $request->rostilj;
        $oglas->autobus = $request->autobus;
        $oglas->bolnica = $request->bolnica;
        $oglas->dom_zdravlja = $request->dom_zdravlja;
        $oglas->fakultet = $request->fakultet;
        $oglas->jez_mor_rij = $request->jez_mor_rij;
        $oglas->osnovna_skola = $request->osnovna_skola;
        $oglas->park_suma = $request->park_suma;
        $oglas->sportski_objekt = $request->sportski_objekt;
        $oglas->srednja_skola = $request->srednja_skola;
        $oglas->tramvaj = $request->tramvaj;
        $oglas->trgovacki_centar = $request->trgovacki_centar;
        $oglas->vlak = $request->vlak;
        $oglas->vrtic = $request->vrtic;
        $oglas->kontakt = $request->kontakt;
        $oglas->save();

        return response()->json([
            'message'=>'Successfully Created user'
        ],201);
    }

    public function get()
    {
        try {
            
            $oglas = DB::table('oglas')
                    ->get();  

            return $oglas;
        } catch(\Throwable $e) {
            Log::error('Get oglase : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }

    }

    public function get_tip($tip)
    {
        try {
            
            $oglas = DB::table('oglas')
                    ->where('tip', '=', $tip)
                    ->get();  

            return $oglas;
        } catch(\Throwable $e) {
            Log::error('Get oglase : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }

    }

    public function get_korisnik_oglas($id_korisnik)
    {
        try {
            
            $oglas = DB::table('oglas')
                    ->where('user_id', '=', $id_korisnik)
                    ->get();  

            return $oglas;
        } catch(\Throwable $e) {
            Log::error('Get oglase : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }

    }

    public function filter(Request $request)
    {   
        $tip = $request->tip;
        $zupanija =$request->zupanija;
        $grad = $request->grad;
        $namjena = $request->namjena;
        $cijena_od = $request->cijena_od;
        $cijena_do = $request->cijena_do;
        $povrsina_od = $request->povrsina_od;
        $povrsina_do = $request->povrsina_do; 


        try {
            $oglas = DB::table('oglas')
                ->when($tip != 'all', function($query) use ($tip) {
                    $query -> where('tip', $tip);
                })
                ->when($zupanija != 'all', function($query) use ($zupanija) {
                    $query -> where('zupanija', $zupanija);
                })
                ->when($grad != 'all', function($query) use ($grad) {
                    $query -> where('grad', $grad);
                })
                ->when($namjena != 'all', function($query) use ($namjena) {
                    $query -> where('namjena', $namjena);
                })
                ->when(($povrsina_od && $povrsina_do), function($query) use ($povrsina_od, $povrsina_do) {
                    $query->where('povrsina', '>=', $povrsina_od)
                          ->where('povrsina', '<=', $povrsina_do);
                })
                ->when(($cijena_od && $cijena_do), function($query) use ($cijena_od, $cijena_do) {
                    $query->where('cijena', '>=', $cijena_od)
                          ->where('cijena', '<=', $cijena_do);
                })
                ->get();
 
            return $oglas;
        }catch(\Throwable $e) {
            Log::error('Get oglase : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }        
    }
}
