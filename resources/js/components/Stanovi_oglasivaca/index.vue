<template>
 <div style="position: relative ">     
<div class="container" style="width:75%; margin-bottom: 70px;">
    
        <div class="shadow" v-for="oglas in oglasi_korisnika" :key="oglas.id">  
            <router-link style= "color: black; width: auto; text-decoration: none;" :to="`/stanovi/${oglas.id}`">
                <div class="row">
                    <div class="col-2" style="width:35%; padding:0">
                        <div class="stupac1">
                            <img :src="oglas.image" :alt="oglas.image" style="width: 420px; height: 250px">
                        </div>
                    </div>

                    <div class="col-4" style="width:64%; padding:0">
                        <div class="stupac2">
                            <div class="title">
                            <h5>
                                {{oglas.naslov}}
                            </h5>
                            </div>
                            <div class="podnaslov" style="margin-left: 25px">
                            <p>{{oglas.tip}} <span style="text-transform: lowercase;">{{oglas.namjena}}</span> </p>
                            </div>
                            <div class="container" style="display: flex; padding:5px">
                                <div class="column">
                                    <p> Broj soba: {{oglas.soba}}</p>
                                </div>
                                <div class="column">
                                    <p> Godina izgradnje: {{oglas.godina_iz}}</p>
                                </div>
                                <div class="column"  v-if="oglas.kat != null">
                                    <p> Kat: {{oglas.kat}}</p>
                                </div>
                                <div class="column">
                                    <p> Površina: {{oglas.povrsina}} m²</p>
                                </div>
                            </div>     
                        </div>
                        <hr>
                        <div class="container" style="display: flex; padding:5px">
                                <div class="column1">
                                    <p> <i class="fa fa-map-marker"></i> {{oglas.zupanija}}</p>
                                </div>
                                <div class="column1">
                                    <p> <i class="fa fa-clock-o" aria-hidden="true"></i> Objavljeno: {{oglas.date}}</p>
                                </div>
                                <div class="column1">
                                    <p> {{oglas.cijena}} €</p>
                                </div>
                            </div> 
                    </div>
                </div>
            </router-link> 
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

import axios from 'axios'; 
import { getOglas_korisnika } from '../../api/index'; 
import moment from 'moment'; 

export default {
  name: 'stanovi-oglasivaca',
  data() {
    return {
        oglasi_korisnika:[],
        id: null
        
    };
  },
  async created() {  
    this.id = this.$route.params.id

    this.oglasi_korisnika = await getOglas_korisnika(this.id);    

    this.oglasi_korisnika.forEach(element => {
        element.cijena = element.cijena
        element.povrsina = element.povrsina
        element.date = moment(String(element.created_at)).format('DD.MM.YYYY')
        element.image = '/images/' + element.image
    });  
  },
  methods: {
      
  }
};
</script>

<style scoped>
.shadow
{
  margin-top: 50px;
}
.column1
{
	  flex: 33.33%;
	  text-align: center;
	}
.column 
{
	  flex: 25%;
	  text-align: center;
	}
.title
{
  font-weight: bolder;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-left: 10px;
}
h5
{
  padding: 12px;
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