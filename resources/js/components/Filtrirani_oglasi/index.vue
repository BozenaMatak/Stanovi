<template>
    
<div class="container" style="width:75%">

    <div class="filter">
        <div class="row">
            <div class="col-col">
                <label for="kategorija">
                    <strong>
                        Županija
                    </strong>
                </label>
                <div class="icons">
                  <select v-model="filter.zupanija" required>
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
                  <select v-model="filter.grad" required>
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
                  <select v-model="filter.namjena" required>
                      <option value="all">Odabir namjene</option>
                      <option
                        v-for="(option, idx) in namjena"
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
                        Površina (u m2)
                    </strong>
                </label>
                <div class="row">
                    <div style="width: 48%;">
                        <input style="width: 95%; margin:auto" class="bez_ikone" type="text" id="povrsina_od" v-model="filter.povrsina_od" name="povrsina_od" required>
                    </div>
                    do
                    <div style="width: 48%;">
                        <input style="width: 95%; margin:auto" class="bez_ikone" type="text" id="povrsina_do" v-model="filter.povrsina_do" name="povrsina_do" required>
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
                    <div style="width: 48%;">
                        <input style="width: 95%; margin:auto" class="bez_ikone" type="text" id="cijena_od" v-model="filter.cijena_od" name="cijena_od" required>
                    </div>
                    do
                    <div style="width: 48%;">
                        <input style="width: 95%; margin:auto" class="bez_ikone" type="text" id="cijena_do" v-model="filter.cijena_do" name="cijena_do" required>
                    </div>
                </div>
            </div>
        </div>
        <div class="button">
            <button @click.prevent="filter_f" type="submit">Filtrirajte oglase</button>
        </div>
        
    </div>

    <div class="shadow" v-for="oglas in oglasi_tip" :key="oglas.id">  
        <router-link style= "color: black; width: auto; text-decoration: none;" :to="`/stanovi/${oglas.id}`">
            <div class="row">
                <div class="col-2" style="width:35%; padding:0">
                    <div class="stupac1">
                        <img src="/images/card-image.jpg" alt="logo">
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
                            <div class="column">
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
                                <p> <i class="fa fa-clock-o" aria-hidden="true"></i> Objavljeno prije 45 min</p>
                            </div>
                            <div class="column1">
                                <p> {{oglas.cijena}} € ~ {{oglas.cijena_hrk}} kn</p>
                            </div>
                        </div> 
                </div>
            </div>
        </router-link> 
    </div>  

        
</div> 

</template>


<script>  

import axios from 'axios'; 
import { getOglas_tip } from '../../api/index';
import {  ZUPANIJE, NAMIJENA, GRADOVI } from '../../constants'; 

export default {
  name: 'MojiOglasi',
  data() {
    return {
        oglasi_tip:[],
        interval: null,
        gradovi: [],
        namjena: [],
        zupanije: [],
        filter:{
            tip: null, //ovdje mora ici bas tip pa isto tako i u ovom dijelu this.$route.params.tip jer smo u router u index.js gdje se definiraju sve route postavili /filtrirani-oglasi/:tip i zbog tog mora biti tip a ne id ili nek adruga rijec
            zupanija:'all',
            grad:'all',
            namjena:'all',
            cijena_od:1,
            cijena_do:1,
            povrsina_od: 1,
            povrsina_do: 1
        }
    };
  },
  async created() {
    this.filter.tip = this.$route.params.tip 
    this.oglasi_tip = await getOglas_tip(this.filter.tip);     
    // this.interval = setInterval(this.refreshData, 5000)

    this.oglasi_tip.forEach(element => {
        element.cijena_hrk = element.cijena * 7.6
    });
     ZUPANIJE.forEach(element => { //zupanije predstavljaju polje svih zupanija
      this.zupanije.push(element) 
    }); 
    this.zupanije.sort((a, b) => (a.name > b.name) ? 1 : -1)
    
    
    NAMIJENA.forEach(element => {
      this.namjena.push(element) 
    });
     
    GRADOVI.forEach(element => {
      this.gradovi.push(element) 
    });   
  },

//   beforeDestroy () {
//     clearInterval(this.interval)
//   },

  methods: {
      refreshData(){
          this.oglasi_tip = {}
          console.log(this.oglasi_tip)
      },
      async filter_f(){
          console.log(this.filter)
          console.log(this.filter.tip)

        // if(this.filter.cijena_od == ""){
        //     this.filter.cijena_od = 0
        // }
        // if(this.filter.cijena_do == ""){
        //     this.filter.cijena_do = 99999999
        // }
 
        axios.post('/api/filtrirani-oglasi/filter', this.filter)
        .then((res) =>{  
            this.oglasi_tip = res.data
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
    margin-top: 20px;

}
.filter button{
    margin: auto;
    background: #a79265;
    color: white;
    text-align: center;
    width: 100%;
    font-size: 17px;
}
</style>