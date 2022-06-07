<template>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">

<div class="container" style="width:90%">
    <div class="shadow" style="margin-bottom: 50px;">   
        <div class="row" style="margin:0; padding:0;">
            <div class="col-2" style="width:40%; padding:0; background-color:#e6d49c">
                <div class="column1" style="text-align:center; margin-top: 40px;">
                    <img src="/images/profil.jpg" alt="logo">
                    <h5 style="padding-bottom:10px">PlaviGlobus</h5>
                    <p>Split, Jurja Križanića 21</p>
                    <p>Mob: {{oglas.kontakt}}</p>
                    <router-link style= "margin: 10px; text-decoration: none; color: black;" :to="'/moji-oglasi'"><p><i class="fa fa-arrow-right" aria-hidden="true"></i> Svi oglasi ovog oglašivača</p></router-link>
                </div>
            </div>

            <div class="col-4" style="width:59%; padding:0">
                <div class="container" style="display: flex; padding:5px">
                    <div class="row" style="width:100%;">
                        <div class="col-6" style="width:50%; padding:0">
                        <h4>{{oglas.naslov}}</h4>
                        <p style="font-size: 18px;">Cijena: {{oglas.cijena}}€ ~ {{oglas.cijena_hrk}}kn</p>
                    </div>
                    <div class="col-6" style="width:50%; padding:0">
                        <p style="font-size: 18px;"> <i class="fa fa-clock-o" aria-hidden="true"></i> Objavljeno prije 45 min</p>
                    </div>
                    </div>
	            </div>
                <div class="stupac2" style="margin-left:10px">
                        <img src="/images/detalji-slika.jpg" alt="logo">
                    
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
                        <h6>Broj parkirnih mjesta: {{oglas.broj_park_mjes}} </h6>
                        <h6 v-if="oglas.san_cvor!=null">Broj sanitarnih čvorova: {{oglas.san_cvor}} </h6>
                        <h6 v-if="oglas.balkon!=null">Broj balkona: {{oglas.balkon}} </h6>
                        <h6 v-if="oglas.terasa!=null">Broj terasa: {{oglas.terasa}} </h6>
                        <h6 v-if="oglas.etaza!=null">Broj etaža: {{oglas.etaza}} </h6> 
                        <h6 v-if="oglas.en_cer!=null">Energetski certifikat: {{oglas.en_cer}} </h6>
                        <h6 v-if="oglas.tip_gradnja!=null">Tip gradnje: {{oglas.tip_gradnja}} </h6>
                        <h6 v-if="oglas.stanja!=null">Stanje nekretnine: {{oglas.stanja}} </h6>
                        <h6 v-if="oglas.prozor!=null">Tip prozora: {{oglas.prozor}} </h6> 
                        <h6 v-if="oglas.vanjska_vrata!=null">Vanjska vrata: {{oglas.vanjska_vrata}} </h6>
                        <h6 v-if="oglas.pod!=null">Tip podova: {{oglas.pod}} </h6>
                    </div>

                    <div class="col-6" style="width:50%; padding:0">
                       <h6>Ulaz: Zajednički </h6>
                        <h6>Vlastita šifra objekta: 00010 </h6>
                        <h6>email: plaviglobus@gmail.com </h6>
                        <h6>Tel ili mob: 095/900-0936 </h6>         
                    </div>
                    </div>
                    <br>
                </div>
                </div> 

            </div>        
        </div>
    </div>

</div>
   
</template>


<script>  
import { getOglas } from '../../api/index';

export default {
  name: 'stanovi',
  data() {
    return {
        oglasi: [],
        id: null,
        oglas:{}
    };
  },
  async created() {  

    this.oglasi = await getOglas();    

    this.oglasi.forEach(element => {
        element.cijena_hrk = element.cijena * 7.6
    }); 
    
    this.id = this.$route.params.id

    this.oglasi.forEach(element => {
        if(this.id == element.id){
            this.oglas = element
        }
    }); 

    console.log(this.oglas)

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