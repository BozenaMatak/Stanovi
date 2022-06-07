<template>
    
<div class="container" style="width:75%">
    
        <div class="shadow" v-for="oglas in oglasi_korisnik" :key="oglas.id">  
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
import { getOglas_korisnik } from '../../api/index';

export default {
  name: 'MojiOglasi',
  data() {
    return {
        oglasi_korisnik:[],
        id: null
        
    };
  },
  async created() {  
    this.id = user.id
    this.oglasi_korisnik = await getOglas_korisnik(this.id);    

    this.oglasi_korisnik.forEach(element => {
        element.cijena_hrk = element.cijena * 7.6
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