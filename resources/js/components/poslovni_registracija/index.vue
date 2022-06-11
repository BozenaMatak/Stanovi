<template>
<div style="position: relative ">
  <div class="container" style="margin-bottom: 70px;">
    <div class="shadow">
      <div class="col-12">
        <div class="row">
            <div class="col-6" style="margin:0; padding: 0;text-align: left; color: black;">
              <h3>
                Registracija poslovnog korisnika
              </h3>
            </div>
          <div class="col-6" style="margin:0; padding: 0;text-align: left; color: black;">
            <div class="row">
              <div class="col-6" style="width:40%">
              <label for="profil" style="padding-top: 40px; padding-bottom: 5px; font-size: 19px">Odaberite profilnu sliku</label>
                <input type="file" @change="onChange" style="border-bottom: 0;padding: 0; padding-bottom: 40px;">
              </div>
            </div>
          </div>
        </div>
        <div class="tekst">
          <p style="width: auto">Već imaš korisnički račun? </p>
          <router-link style= "color: rgb(255 219 0); width: auto;  margin-left: 10px;" :to="'/login'">Prijavi se</router-link>
        </div>
        <form action="#">
          <div class="forma">
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="email">Email *</label>
                <div class="icons">
                  <i class="fa fa-envelope icon"></i>
                  <input v-model="data.email" type="email" id="email" name="email"  placeholder="Email adresa" required>
                </div>
                
              </div>
              <div class="col-6">
                <label for="Username">Korisničko ime *</label>
                <div class="icons">
                  <i class="fa fa-user icon"></i>
                  <input v-model="data.username" type="Username" id="Username" name="Username"  placeholder="Korisničko ime" required>
                </div>
              </div>
            </div>
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="password">Lozinka *</label>
                <div class="icons"> 
                  <i class="fa fa-lock icon"></i>
                  <input v-model="data.password" type="password" id="password" name="password"  placeholder="lozinka" required>
                </div>
                
              </div>
              <div class="col-6">
                <label for="Repeat_password">Ponovi lozinku *</label>
                <div class="icons"> 
                  <i class="fa fa-lock icon"></i>
                  <input v-model="data.password_confirmation" type="password" id="Repeat_password" name="Repeat_password"  placeholder="Ponovi lozinku" required>
                </div>
              </div>
            </div>
            <hr>
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="Ime">Ime *</label>
                <div class="icons">
                  <input v-model="data.ime" class="bez_ikone" type="text" id="Ime" name="Ime"  placeholder="Ime" required>
                </div>
                
              </div>
              <div class="col-6">
                <label for="Prezime">Prezime *</label>
                <div class="icons"> 
                <input v-model="data.prezime" class="bez_ikone" type="text" id="Prezime" name="Prezime"  placeholder="Prezime" required>
                </div>
              </div>
            </div>
            <hr>
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="Drzava">Država *</label>
                <div class="icons">
                  <select v-model="data.drzava" required>
                      <option  disabled >Odabir države</option>
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
                      <option  disabled >Odabir županije</option>
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
                    <label for="grad">Grad *</label>
                    <div class="icons">
                      <select v-model="data.grad" required>
                          <option  disabled >Odabir grada</option>
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
              <div class="col-6">
                <label for="Postanski-broj">Poštanski broj</label>
                <div class="icons"> 
                <input v-model="data.postanskibroj" class="bez_ikone" type="text" id="Postanski-broj" name="Postanski broj"  placeholder="Poštanski broj" required>
                </div>
              </div>
            </div>
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="Adresa">Adresa</label>
                <div class="icons">
                  <input v-model="data.adresa" class="bez_ikone" type="text" id="Adresa" name="Adresa"  placeholder="Adresa" required>
                </div>                
              </div>

              <div class="col-6">
                <label for="Broj-mobitela">Broj mobitela*</label>
                <div class="icons">
                  <i class="fa fa-phone"></i>
                  <input v-model="data.broj_mob"  type="text" id="phone1_domestic_input" placeholder="Pretplatnički broj">
                </div>
              </div>
            </div>
            <div class="button_korisnik">
              <button @click.prevent="addUser" type="submit">Završi registraciju</button>
            </div>          
          </div>
        </form>
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

import axios from 'axios';
import { COUNTRIES } from '../../constants';
import { ZUPANIJE } from '../../constants';
import { GRADOVI } from '../../constants';
import Swal from 'sweetalert2';

export default {
  name: 'register-poslovni',
  data() {
    return {
        name: '',
        countries: [],
        zupanije: [],
        gradovi:[],
        country: '',
        zupanija: '',   //zupanija predstavlja jednu zupaniju koju je korisnik odabrao prilikom registracije
        repeate_password:'',

        data: {
          email:'',
          username:'',
          password:'',
          password_confirmation: '',
          ime:'',
          prezime:'',
          drzava:'',
          zupanija:'',
          grad:'',
          postanskibroj: null,
          adresa:'',
          type: 'Poslovni',
          broj_mob: null,
          image: ''

        },
        image: null,
        errors : []
    };
  },
  created() {
    if(user.isLogged == true){
      this.$router.push({name: 'Home'})
    }
    COUNTRIES.forEach(element => {
      this.countries.push(element) 
    }); 
    ZUPANIJE.forEach(element => { //zupanije predstavljaju polje svih zupanija
      this.zupanije.push(element) 
    }); 
    GRADOVI.forEach(element => { //zupanije predstavljaju polje svih zupanija
      this.gradovi.push(element) 
    }); 
    this.zupanije.sort((a, b) => (a.name > b.name) ? 1 : -1)
    
  },
  methods: {
    addUser(){
      this.data.image = this.image.name
      axios.post('/api/register-private', this.data)
      .then(() =>{
        Swal.fire('Registrirani ste!', 'Uspješno ste se registrirali u sustav.', 'success')
        .then(res=>{
          this.onUpload()
          this.$router.push({name: 'login'}) 
        })
        
      })
      .catch((e) =>{
        console.log(e.response.data.message)
      })
    },
    onChange(e){
      console.log("Selected file", e.target.files[0])
      this.image = e.target.files[0];
      console.log(this.image)

    },
    onUpload(){
      let fd = new FormData();
      fd.append('img', this.image);
      axios.post('/api/onUpload', fd)
      .then(res=>{
        console.log("Response", res.data)
        
      }).catch(err=>console.log(err))

    },
  }
};
</script>
<style scoped> 
.shadow{
  margin-top: 50px;
  text-align: center;
}

 h3{
  color: black;
  padding: 40px 0;
  font-weight: bold;
  margin-left: 50px;
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