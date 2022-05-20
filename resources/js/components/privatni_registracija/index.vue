<template>
  <div class="container">
    <div class="shadow">
      <div class="col-12">
        <div class="registracija">
          <h2>
            Registracija privatnog korisnika
          </h2>
        </div>
        <div class="tekst">
          <p style="width: auto">Već imaš korisnički račun? </p>
          <router-link style= "color: rgb(255 219 0); width: auto;  margin-left: 10px;" :to="'/login'">Prijavi se</router-link>
        </div>
        <div class="form">
          <div class="forma">
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="email">Email *</label>
                <span v-if="errors.name">{{errors.name[0]}}</span>
                <div class="icons">
                  <i class="fa fa-envelope icon"></i>
                  <input type="email" id="email" name="email" v-model="data.email" placeholder="Email adresa">
                </div>
                
              </div>
              <div class="col-6">
                <label for="Username">Korisničko ime *</label>
                <div class="icons">
                  <i class="fa fa-user icon"></i>
                  <input type="Username" id="Username" name="Username" v-model="data.username" placeholder="Korisničko ime" required>
                </div>
              </div>
            </div>
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="password">Lozinka *</label>
                <div class="icons"> 
                  <i class="fa fa-lock icon"></i>
                  <input type="password" id="password" name="password" v-model="data.password" placeholder="Lozinka" required>
                </div>
                
              </div>
              <div class="col-6">
                <label for="Repeat_password">Ponovi lozinku *</label>
                <div class="icons"> 
                  <i class="fa fa-lock icon"></i>
                  <input type="password" id="password_confirmation" name="password_confirmation" v-model="data.password_confirmation" placeholder="Ponovi lozinku" required>
                </div>
              </div>
            </div>
            <hr>
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="Ime">Ime *</label>
                <div class="icons">
                  <input class="bez_ikone" type="text" id="Ime" v-model="data.ime" name="Ime" placeholder="Ime" required>
                </div>
                
              </div>
              <div class="col-6">
                <label for="Prezime">Prezime *</label>
                <div class="icons"> 
                <input class="bez_ikone" type="text" id="Prezime" v-model="data.prezime" name="Prezime" placeholder="Prezime" required>
                </div>
              </div>
            </div>
            <hr>
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="Drzava">Država *</label>
                <div class="icons">
                  <select v-model="data.drzava" required>
                      <option disabled >Odabir države</option>
                      <option
                        v-for="(option, idx) in countries"
                        :key="idx"
                        :value="option.name"
                      >
                        {{ option.name }}
                      </option> 
                  </select>
                </div> 
                
              </div>
              <div class="col-6">
                <label for="Zupanija">Županija *</label>
                <div class="icons">
                  <select v-model="data.zupanija" required>
                      <option disabled >Odabir županije</option>
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
            </div>

            <div class="email_username row section">
              <div class="col-6"> 
                <label for="Grad">Grad</label>
                <div class="icons">
                  <input class="bez_ikone" type="text" id="Grad" name="Grad" v-model="data.grad" placeholder="Grad" required>
                </div>
                
              </div>
              <div class="col-6">
                <label for="Postanski-broj">Poštanski broj</label>
                <div class="icons"> 
                <input class="bez_ikone" type="text" id="Postanski-broj" v-model="data.postanskibroj" name="Postanski broj" placeholder="Poštanski broj" required>
                </div>
              </div>
            </div>

            <div class="col-6"> 
                <label for="Adresa">Adresa</label>
                <div class="icons">
                  <input class="bez_ikone" type="text" id="Adresa" v-model="data.adresa" name="Adresa" placeholder="Adresa" required>
                </div>
                
              </div>

              <div class="button_korisnik">
              <button @click.prevent="addUser" type="submit">Završi registraciju</button>
            </div>
            
          </div>
        </div>
        
      </div> 
    </div>
   
  </div>
</template>

<script>  

import axios from 'axios';
import { COUNTRIES } from '../../constants';
import { ZUPANIJE } from '../../constants';

export default {
  name: 'register_private',
  data() {
    return {
        name: '',
        countries: [],
        zupanije: [],
        country: '',
        zupanija: '',   //zupanija predstavlja jednu zupaniju koju je korisnik odabrao prilikom registracije
        repeate_password:'',
        data: {
          email:'',
          username:'',
          password:'',
          password_confirmation: '',
          ime:'-',
          prezime:'-',
          drzava:'Odabir države',
          zupanija:'Odabir županije',
          grad:'-',
          postanskibroj: null,
          adresa:'-',
          type: 'Privatni'

        },
        errors : []
    };
  },
  created() {  
    COUNTRIES.forEach(element => {
      this.countries.push(element) 
    }); 
    ZUPANIJE.forEach(element => { //zupanije predstavljaju polje svih zupanija
      this.zupanije.push(element) 
    }); 
    this.zupanije.sort((a, b) => (a.name > b.name) ? 1 : -1)
    
    
  },
  methods: {
    addUser(){
      axios.post('/api/register-private', this.data)
      .then(() =>{
        console.log('saved')
      })
      .catch((e) =>{
        console.log(e.response.data.message)
      })
    }
  }
};
</script>

<style scoped> 

.shadow{
  margin-top: 50px;
  text-align: center;
}
.registracija{
  width: 80%;
  text-align: left;
  margin: auto;
  color: black;
}
.registracija h2{
  color: black;
  padding: 30px 0;
  font-weight: bold;
}

.tekst{
  display: flex;
  width: 80%;
  text-align: left;
  margin: auto;
}
.opis_korisnika{
  width: 80%;
  margin: auto;
}
.opis_korisnika2{
  width: 100%;
  margin: auto;
}
.button_korisnik{
  width: 100%;
  margin: auto;
  padding-top: 40px;
  padding-bottom: 30px;
}
.button_korisnik button{
  width: 100%; 
  text-align: center;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-radius: 5px;
}
h4{
  padding: 20px;
}
button:hover{ 
  transform: scale(1.02);
  transition: transform 330ms ease-in-out;
}
.forma{
  width: 70%;
  margin: auto;
  padding-bottom: 50px;
}
label{
  width: 100%;
  margin: 5px;
  margin-left: 0px;
  text-align: left;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
  color: black !important;
}
input{
  width: 100%;
  font-size: 15px;
  padding: 10px 40px;
  border: none;
  border-bottom: 1px solid rgb(78, 78, 78);
  background: transparent;
}
.icons i{
  position: absolute;
  font-size: 23px;
  padding: 10px;
}
.section{
  padding: 20px 0;
}

.bez_ikone{
  padding: 10px;
}
 :focus-visible {
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

