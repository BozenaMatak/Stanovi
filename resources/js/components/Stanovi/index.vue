<template>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <div style="position: relative;  "> 
        <div class="container" style="width:90%; margin-bottom: 70px;">
            <div class="shadow" >   
                <div class="row" style="margin:0; padding:0;">
                    <div class="col-2" style="width:40%; padding:0; background-color:#e6d49c">
                        <div class="column1" style="text-align:center; margin-top: 40px;">
                            <img :src="user_img" :alt="user_img" style="width: 150px; height: 150px; border-radius: 75px;">
                            <h5 style="padding-bottom:10px">{{user_user.username}}</h5>
                            <p>{{user_user.adresa}}, {{user_user.grad}}</p>
                            <p>Mob: {{oglas.kontakt}}</p>
                            <router-link style= "margin: 10px; text-decoration: none; color: black;" :to="`/stanovi/oglasi-oglasivaca/${user_user.id}`"><p><i class="fa fa-arrow-right" aria-hidden="true"></i> Svi oglasi ovog oglašivača</p></router-link>
                        </div>
                    </div>

                    <div class="col-4" style="width:59%; padding:0">
                        <div class="container" style="display: flex; padding:5px">
                            <div class="row" style="width:100%;">
                                <div class="col-6" style="width:50%; padding:0">
                                <h4>{{oglas.naslov}}</h4>
                                <p style="font-size: 18px;">Cijena: {{oglas.cijena }}€</p>
                            </div>
                            <div class="col-6" style="width:50%; padding:0">
                                <p style="font-size: 18px;"> <i class="fa fa-clock-o" aria-hidden="true"></i> Objavljeno: {{oglas.date}}</p>
                            </div>
                            </div>
                        </div>
                        <div class="stupac2" style="margin-left:10px">
                                <img :src="oglas.image" :alt="oglas.image" style="width: 100%; max-height: 700px;">
                            
                            <div>
                                <div style="margin-top:25px; padding-left: 15px;  margin-left: 10px;">
                                    <h4 style="font-weight: bolder;">OSNOVNO</h4>
                                </div>

                            <div class="row" style="width:100%; background-color:#e6e2d3; margin-left: 0;">
                                <div class="col-6" style="width:50%; padding:0">
                                <h6>Županija: {{oglas.zupanija}} </h6>
                                <h6>Grad/općina: {{oglas.grad}} </h6>
                                <h6>Adresa: {{oglas.adresa}} </h6>
                                <h6>Broj soba: {{oglas.soba}} </h6>
                                <h6>Godina izgradnje: {{oglas.godina_iz}} </h6> 
                            </div>

                            <div class="col-6" style="width:50%; padding:0">
                            <h6>Površina u m²: {{oglas.povrsina}} </h6>
                                <h6>Broj kupaonica: {{oglas.broj_kupaona}} </h6>
                                <h6>Vrsta nekretnine: {{oglas.tip}} </h6>
                                <h6>Namjena oglasa: {{oglas.namjena}} </h6> 
                                <h6 v-if="oglas.kat!=null">Kat: {{oglas.kat}} </h6>     
                            </div>
                            </div>

                            <div style="margin-left:8px">
                                <p style="padding-top:35px; padding-bottom:35px; font-size: 18px; line-height:40px;">
                                    {{oglas.opis}}
                                </p>
                            </div>

                            <div style="margin-top:25px; padding-left: 15px;  margin-left: 10px;">
                                    <h4 style="font-weight: bolder;">VIŠE INFORMACIJA</h4>
                                </div>

                            <div class="row" style="width:100%; background-color:#e6e2d3; margin-left: 0;">
                                <div class="col-6" style="width:50%; padding:0">
                                    <h6>Način grijanja: {{oglas.grijanje}} </h6>
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                    <h6>Broj parkirnih mjesta: {{oglas.broj_park_mjes}} </h6>
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                <h6 v-if="oglas.san_cvor!=null">Broj sanitarnih čvorova: {{oglas.san_cvor}} </h6>
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                <h6 v-if="oglas.balkon!=null">Broj balkona: {{oglas.balkon}} </h6>
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                <h6 v-if="oglas.terasa!=null">Broj terasa: {{oglas.terasa}} </h6>
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                    <h6 v-if="oglas.etaza!=null">Broj etaža: {{oglas.etaza}} </h6> 
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                    <h6 v-if="oglas.en_cer!=null">Energetski certifikat: {{oglas.en_cer}} </h6>
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                    <h6 v-if="oglas.tip_gradnja!=null">Tip gradnje: {{oglas.tip_gradnja}} </h6>
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                    <h6 v-if="oglas.stanja!=null">Stanje nekretnine: {{oglas.stanja}} </h6>
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                    <h6 v-if="oglas.prozor!=null">Tip prozora: {{oglas.prozor}} </h6> 
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                <h6 v-if="oglas.vanjska_vrata!=null">Vanjska vrata: {{oglas.vanjska_vrata}} </h6>
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                    <h6 v-if="oglas.pod!=null">Tip podova: {{oglas.pod}} </h6>
                                </div>


                                <div class="col-6" style="width:50%; padding:0"> 
                                    <h6 v-if="isLogged == true">email: {{user_user.email}} </h6>     
                                </div>
                                <div class="col-6" style="width:50%; padding:0">  
                                    <h6 v-if="isLogged == true">Tel ili mob: {{oglas.kontakt}} </h6>      
                                </div>
                            </div>
                            <div class="row" style="width:100%; background-color:#e6e2d3; margin-left: 0;">
                                <div v-if="oglas.podzemna_garaza == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Podzemna garaža  &#10004;</h6> 
                                </div>
                                <div v-if="oglas.samostojeca_garaza == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Samostojeća garaža  &#10004;</h6> 
                                </div>
                                <div v-if="oglas.parkirno_garaza == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Parkirno garaža  &#10004;</h6> 
                                </div>
                                <div v-if="oglas.javni_parking == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Javni parking  &#10004;</h6> 
                                </div>
                                <div v-if="oglas.gradevinska_dozvola == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Građevinska Dozvola  &#10004;</h6> 
                                </div>
                                <div v-if="oglas.vlasnicki_list == 1"  class="col-6" style="width:50%; padding:0">
                                    <h6> Vlasnički list  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.uporabna_dozvola == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Uporabna dozvola  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.lift == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Lift  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.klima == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Klima  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.pristup_inv == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Pristup Invalidima  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.fiksni_tel == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Fiksni telefon  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.isdn == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> ISDN  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.adsl == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> ADSL  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.wifi == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> WIFI  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.kablovski == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Kablovski pristup  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.optika == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Optički pristup  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.tv_antena == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> TV antena  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.satelitski_prikljucak == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Satelitski priključak  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.video_nadzor == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Video nadzor  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.alarm == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Alarm  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.niskoenergetska == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Niskoenergetska učinkovitost  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.bazen == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Bazen  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.rostilj == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Roštilj  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.autobus == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Autobus  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.bolnica == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Bolnica  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.dom_zdravlja == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Dom zdravlja  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.fakultet == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Fakultet  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.jez_mor_rij == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Jezero, more ili rijeka  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.osnovna_skola == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Osnovna škola  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.park_suma == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Park ili šuma  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.sportski_objekt == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Sportski objekt  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.tramvaj == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Tramvaj  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.srednja_skola == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Srednja Škola  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.trgovacki_centar == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Trgovački centar  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.vlak == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Vlak  &#10004;</h6> 
                                </div>
                                <div  v-if="oglas.vrtic == 1" class="col-6" style="width:50%; padding:0">
                                    <h6> Vrtić  &#10004;</h6> 
                                </div>

                            </div>
                            <br>
                        </div>
                        </div> 

                    </div>        
                </div>
            </div>

        </div>
    <div class="site-footer" style="height: 300px; background-color:#666655">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h4 style="margin-top: 15px; padding: 0;">O nama</h4>
            <p class="text-justify">
              <span style="color:#a39053; font-weight: bold;">Find a Place</span> aplikacija omogućava pronalazak i oglašavanje nekretnina koje se mogu kupiti/prodati ili iznajmiti. 
              <br><br> Cilj aplikacije jest omogućiti korisnicima da na brz i jednostavan način mogu pregledavati nekretnine različitih 
              tipova i namjene ili oglasiti svoju nekretninu.
            </p>
          </div>

          <div class="col-xs-6 col-md-3" style="padding:0">
            <h4 style="margin-top: 15px; padding: 0;">Kategorije</h4>
            <ul class="footer-links" style="margin-left: 30px;">
              <li>Stan</li>
              <li>Kuća</li>
              <li>Garsonjera</li>
              <li>Apartman</li>
              <li>Vikendica</li>
              <li>Ostalo</li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h4 style="margin-top: 15px; padding: 0;">Podaci</h4>
            <ul class="footer-links">
              <li>findaplace@gmail.com</li>
              <li>15 Gajeva Street, 10000 Zagreb, Croatia</li>
              <li>+385 1 4815 111</li>
              <li>+385 98 367 582</li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
    </div>
    </div>  
</template>


<script>  
import { getOglas, getUser } from '../../api/index';

import moment from 'moment'; 

export default {
  name: 'stanovi',
  data() {
    return {
        oglasi: [],
        users: [],
        id: null,
        oglas:{},
        user_user: {},
        isLogged: false,
        user_img: null
    };
  },
  async created() {  
    this.isLogged = user.isLogged
    this.oglasi = await getOglas();  
    this.users = await getUser();  
    
     
    this.oglasi.forEach(element => {
        element.cijena = element.cijena
        element.povrsina = element.povrsina
    });  
    
    this.id = this.$route.params.id

    this.oglasi.forEach(element => {
        element.user = {}
        if(this.id == element.id){
            this.oglas = element
        }
    });  

    this.users.forEach(element => {
        if(element.id == this.oglas.user_id){
            this.user_user = element
        }
    }); 

    this.oglas.date = moment(String(this.oglas.created_at)).format('DD.MM.YYYY')
    this.user_img = '/images/' + this.user_user.image
    this.oglas.image = '/images/' + this.oglas.image 
    console.log(this.user_user)
  },
  methods: {
    
  }
};
</script>
 



<style scoped>
.shadow{
  margin-top: 50px;
}

h4{
    padding-bottom: 10px;
}

h5
{
padding-top: 15px;
}

h6{
    padding: 8px;
}

.row{
    padding: 15px;
    margin-left: 10px;
}

</style>


<style scoped>
.site-footer
{
  padding:0;
  font-size:16px;
  line-height:25px;
  color:#ffffff; 
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:25px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}


@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}

</style>