<template>
  <div style="position: relative; ">
    <div class="container" style="width:75%; margin-bottom: 70px;">

        <div class="filter">
            <div class="row">
                <div class="col-col">
                    <label for="kategorija">
                        <strong>
                            Županija
                        </strong>
                    </label>
                    <div class="icons">
                      <select v-model="zupanija" required>
                          <option value="all">Odabir županije</option>
                          <option
                            v-for="(option, idx) in zupanije"
                            :key="idx"
                            :value="option.name"
                          >
                            {{ option.name }}
                          </option> 
                      </select>
                    </div>
                </div>
                <div class="col-col">
                    <label for="kategorija">
                        <strong>
                            Grad
                        </strong>
                    </label>
                    <div class="icons">
                      <select v-model="grad" required>
                          <option value="all">Odabir grada</option>
                          <option
                            v-for="(option, idx) in gradovi"
                            :key="idx"
                            :value="option.name"
                          >
                            {{ option.name }}
                          </option> 
                      </select>
                    </div>
                </div>
                <div class="col-col">
                    <label for="kategorija">
                        <strong>
                            Namjena
                        </strong>
                    </label>
                    <div class="icons">
                      <select v-model="namjena" required>
                          <option value="all">Odabir namjene</option>
                          <option
                            v-for="(option, idx) in namijena"
                            :key="idx"
                            :value="option.name"
                          >
                            {{ option.name }}
                          </option> 
                      </select>
                    </div>
                </div>
                <div class="col-col"> 
                    <label for="povrsina">
                        <strong>
                            Površina (u m²)
                        </strong>
                    </label>
                    <div class="row">
                        <div style="width: 45%; text-align: center;">
                            <input style="width: 95%; margin:auto" class="bez_ikone" type="text" id="povrsina_od" v-model="povrsina_od" name="povrsina_od" required>
                        </div>
                        do
                        <div style="width: 45%; text-align: center;">
                            <input style="width: 95%; margin:auto" class="bez_ikone" type="text" id="povrsina_do" v-model="povrsina_do" name="povrsina_do" required>
                        </div>
                    </div>
                  
                </div>
                <div class="col-col">
                    <label for="cijena">
                        <strong>
                            Cijena (€)
                        </strong>
                    </label>
                    <div class="row">
                        <div style="width: 45%; text-align: center;">
                            <input style="width: 95%; margin:auto" class="bez_ikone" type="text" id="cijena_od" v-model="cijena_od" name="cijena_od" required>
                        </div>
                        do
                        <div style="width: 45%; text-align: center;">
                            <input style="width: 95%; margin:auto" class="bez_ikone" type="text" id="cijena_do" v-model="cijena_do" name="cijena_do" required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button">
                <button sty @click.prevent="filter_f" type="submit">Filtrirajte oglase</button>
            </div>
            
        </div>

        <div class="shadow" v-for="oglas in oglasi_tip" :key="oglas.id">  
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
                                <div class="column" v-if="oglas.kat != null">
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
import { getOglas_tip } from '../../api/index';
import {  ZUPANIJE, NAMIJENA, GRADOVI } from '../../constants'; 
import Swal from 'sweetalert2'; 
import moment from 'moment'; 

export default {
  name: 'MojiOglasi',
  data() {
    return {
        oglasi_tip:[], 
        gradovi: [],
        namijena: [],
        zupanije: [],
        zupanija:'all',
        grad:'all',
        namjena:'all',
        cijena_od:0,
        cijena_do:0,
        povrsina_od: 0,
        povrsina_do: 0,
        filter:{
            tip: null, //ovdje mora ici bas tip pa isto tako i u ovom dijelu this.$route.params.tip jer smo u router u index.js gdje se definiraju sve route postavili /filtrirani-oglasi/:tip i zbog tog mora biti tip a ne id ili nek adruga rijec
            zupanija:'all',
            grad:'all',
            namjena:'all',
            cijena_od:0,
            cijena_do:0,
            povrsina_od: 0,
            povrsina_do: 0
        }
    };
  },
  async created() {
    this.filter.tip = this.$route.params.tip 
    this.oglasi_tip = await getOglas_tip(this.filter.tip);   

    this.oglasi_tip.forEach(element => {
        element.cijena = element.cijena
        element.povrsina = element.povrsina
        element.image = '/images/' + element.image
    });
     ZUPANIJE.forEach(element => { //zupanije predstavljaju polje svih zupanija
      this.zupanije.push(element) 
    }); 
    this.zupanije.sort((a, b) => (a.name > b.name) ? 1 : -1)
    
    
    NAMIJENA.forEach(element => {
      this.namijena.push(element) 
    });
     
    GRADOVI.forEach(element => {
      this.gradovi.push(element) 
    }); 
    
    this.oglasi_tip.forEach(element => {
        element.date = moment(String(element.created_at)).format('DD.MM.YYYY')
        
    });
  },




  methods: {
      async filter_f(){ 
          
          this.filter.zupanija = this.zupanija
          this.filter.grad = this.grad
          this.filter.namjena = this.namjena
          this.filter.cijena_od = Number(this.cijena_od)
          this.filter.cijena_do = Number(this.cijena_do)
          this.filter.povrsina_od = Number(this.povrsina_od)
          this.filter.povrsina_do = Number(this.povrsina_do) 

          if(this.cijena_od > this.cijena_do){
              Swal.fire('Error!', 'Pogrešno ste unijeli cijenu', 'error');
              return
          }
          if(this.povrsina_od > this.povrsina_do){
              Swal.fire('Error!', 'Pogrešno ste unijeli površinu', 'error');
              return
          }


          if((this.filter.cijena_od <= null)){
              this.filter.cijena_od = Number(0.1) 
          }
          if((this.filter.cijena_do == null) || (this.filter.cijena_do < 0) || (this.filter.cijena_do > 99999999)){
              this.filter.cijena_do = Number(99999999)
          }

          if((this.filter.povrsina_od <= null)){
              this.filter.povrsina_od = Number(0.1)
          }
          if((this.filter.povrsina_do == null) || (this.filter.povrsina_do < 0) || (this.filter.povrsina_do > 99999999)){
              this.filter.povrsina_do = Number(99999999) 
          }

 
        axios.post('/api/filtrirani-oglasi/filter', this.filter)
        .then((res) =>{  
            this.oglasi_tip = res.data
            this.oglasi_tip.forEach(element => {
                element.cijena = element.cijena
                element.povrsina = element.povrsina 
                element.image = '/images/' + element.image
            });
        })
        .catch((e) =>{
            console.log(e.response.data.message)
        })


      }
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
.col-col{
    width: 20%;

}
.col-col .icons{
    width: 95%;
    margin: auto

}

select{
    width: 100%;
}

label{
    margin: 10px
}
.filter{
    padding: 30px 0;
    border: 1px solid black;
    margin-top: 20px;
    width: 100%;
}
.filter .button{
    margin: auto;
    width: 15%;
    margin-top: 25px;

}
.filter button{
    padding: 10px;
    margin: auto;
    background: #a79265;
    color: white;
    text-align: center;
    width: 100%;
    font-size: 17px;
}
input{
  width: 40%;
  font-size: 15px;
  padding: 3px 5px;
  border: none;
  border-bottom: 1px solid rgb(78, 78, 78);
  background: transparent;
  outline: none;
}
select{
  width: 100%;
  font-size: 15px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid rgb(78, 78, 78);
  background: transparent;
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