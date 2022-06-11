<template>
<div style="position: relative; background: rgb(216, 216, 210);"> 
<div class="section page_content user_area bgnd-light-grey">
    <div class="container" style="margin-bottom: 70px;">
        <div class="row">
            <div class="s12 13 left" style=" margin-left: 0; padding: 0; width: 25%; ">
                    <div class="menu_left hide-on-med-and-down" style="border: 1px solid grey; background-color: transparent; width: 80%;">
                        <table>
                            <tr v-if="data.type == 'Poslovni'" style="border-bottom: 1px solid #aea8a8;">
                                <router-link style= " text-decoration: none; color: black;" :to="'/moji-oglasi'"><td>Moji oglasi</td></router-link>
                            </tr>
                            <tr style="border-bottom: 1px solid #aea8a8;">
                                <router-link style= " text-decoration: none; color: black;" :to="'moji-podaci'"><td>Moji podaci</td></router-link>
                            </tr>
                            <tr style="border-bottom: 1px solid #aea8a8;">
                                <router-link style= " text-decoration: none; color: black;" :to="'/promjena-lozinke'"><td>Lozinka</td></router-link>
                            </tr>
                            <tr>
                                <router-link style= " text-decoration: none; color: black;" :to="'/moji-podaci'" @click.prevent="logout"><td>Odjava</td></router-link>
                            </tr>
                        </table>                            
                    </div>
            </div>
            <div class=" s12 19 main" style=" margin-left:0; width: 75%;">
                <div class="content_body white_bgnd_with_border" style="border: 1px solid grey; background-color: white; padding-left: 50px; padding-right: 50px;">
                    <div class="row" style="width: 100%; margin-top: 20px;">
                        <div  class="col 6" style="width:50%; padding: 0; ">
                            <img :src="data.image" :alt="data.image">
                        </div>
                        <div class="col 6" style="width:50%;  padding: 0;"><h3 style="margin-top:70px; font-weight: bold;">{{data.username}}</h3></div>
                    </div>
                    <table>
                        <tr>
                            <div class="row">
                                <div class="col-6">
                                    <h6>Email </h6>
                                </div>
                                <div class="col-6">
                                    <input v-model = "data.email" type="text" placeholder="" name="username" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <h6>Username </h6> 
                                </div>
                                <div class="col-6">
                                    <input v-model = "data.username" type="text" placeholder="" name="username" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6"> 
                                    <h6>Ime </h6> 
                                </div>
                                <div class="col-6">
                                    <input v-model = "data.ime" type="text" placeholder="" name="username" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6"> 
                                    <h6>Prezime </h6> 
                                </div>
                                <div class="col-6">
                                    <input v-model = "data.prezime" type="text" placeholder="" name="username" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6"> 
                                    <h6>Država </h6> 
                                </div>
                                <div class="col-6">
                                    <select v-model="data.drzava" required>
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
                            <div class="row">
                                <div class="col-6"> 
                                    <h6>Županija </h6> 
                                </div>
                                <div class="col-6">
                                    <select v-model="data.zupanija" required>
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
                            <div class="row">
                                <div class="col-6">  
                                    <h6>Grad </h6> 
                                </div>
                                <div class="col-6">
                                    <input v-model = "data.grad" type="text" placeholder="" name="username" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6"> 
                                    <h6>Poštanski broj </h6> 
                                </div>
                                <div class="col-6">
                                    <input v-model = "data.postanskibroj" type="text" placeholder="" name="username" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <h6>Adresa </h6> 
                                </div>
                                <div class="col-6">
                                    <input v-model = "data.adresa" type="text" placeholder="" name="username" required>
                                </div>
                            </div>
                            <div class="row" v-if="data.type == 'Poslovni'">
                                <div class="col-6"> 
                                    <h6>Broj mobitela </h6> 
                                </div>
                                <div class="col-6">
                                    <input v-model = "data.broj_mob" type="text" placeholder="" name="username" required>
                                </div>
                            </div> 
                        </tr>
                    </table>
                    <div class="button_korisnik">
                        <button @click.prevent="editUser" type="submit">Spremi promjene</button>
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

    import axios from 'axios';
    import { COUNTRIES } from '../../constants';
    import { ZUPANIJE } from '../../constants';
    import Swal from 'sweetalert2';
    
    export default {
    name: 'moji-podaci',
    data() {
        return {
            name: '',
            countries: [],
            zupanije: [],
            country: '',
            zupanija: '',   //zupanija predstavlja jednu zupaniju koju je korisnik odabrao prilikom registracije
            repeate_password:'',
            tip: '',
            id:'',
            data: {
                email:'',
                username:'',
                ime:'',
                prezime:'',
                drzava:'',
                zupanija:'',
                grad:'',
                postanskibroj: null,
                adresa:'',
                type: '',
                broj_mob:'',
                image: ''

            },
            errors : [],
            user:{
                isLogged: false,
            }
            };
    },
    created() {  
    if(user.isLogged == false){
      this.$router.push({name: 'Home'})
      return
    }
 
    COUNTRIES.forEach(element => {
        this.countries.push(element) 
    }); 
    ZUPANIJE.forEach(element => { //zupanije predstavljaju polje svih zupanija
        this.zupanije.push(element) 
    }); 
    this.zupanije.sort((a, b) => (a.name > b.name) ? 1 : -1)

    this.data.email = user.email
    this.data.username = user.username
    this.data.ime = user.ime
    this.data.prezime = user.prezime
    this.data.drzava = user.drzava
    this.data.zupanija = user.zupanija
    this.data.grad = user.grad
    this.data.postanskibroj = user.postanskibroj
    this.data.adresa = user.adresa
    this.data.broj_mob = user.broj_mob
    this.data.type = user.type
    this.data.image = '/images/' + user.image
    this.id = user.id 
    console.log(this.data.image)
    },
    methods: {

        logout(evt) {
        Swal.fire({
            title: 'Jeste li sigurni da se želite odjaviti?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Da, odjavi me!'
          })
          .then(res=>{
            console.log(res.isConfirmed)
            if(res.isConfirmed == true){
               axios.get('api/logout')
               .then(response => {
                localStorage.removeItem('currentUser');
                localStorage.setItem("currentUser",JSON.stringify(this.user));

                // remove any other authenticated user data you put in local storage

                // Assuming that you set this earlier for subsequent Ajax request at some point like so:
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth_token ;
                delete axios.defaults.headers.common['Authorization'];

                // If using 'vue-router' redirect to login page
                Swal.fire('Odjavljeni ste!', 'Uspješno ste se odjavili.', 'success')
                .then(res =>{
                  this.$router.go();
                }) 
              })
              .catch(error => {
                // If the api request failed then you still might want to remove
                // the same data from localStorage anyways
                // perhaps this code should go in a finally method instead of then and catch
                // methods to avoid duplication.
                localStorage.removeItem('currentUser');
                localStorage.setItem("currentUser",JSON.stringify(this.user));
                delete axios.defaults.headers.common['Authorization'];
                Swal.fire('Odjavljeni ste!', 'Uspješno ste se odjavili.', 'success')
                .then(res =>{
                  this.$router.go();
                }) 
              });       
            }
          })
          .catch(err=>{
            console.log(err)
          })
        
       
     },
        editUser() {
        Swal.fire({
        title: 'Jeste li sigurni da želite izmjeniti podatke?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Da, izmjeni!'
          })
          .then(res=>{ 
            if(res.isConfirmed == true){
              axios.post(`/api/update-profil/${this.id}`, this.data)
              .then((res) =>{
                Swal.fire('Uspješno ste izmjenili podatke!', 'Molim vas prijavite se ponovno', 'success')
                .then(res=>{
                    axios.get('api/logout')
                        .then(response => {
                            localStorage.removeItem('currentUser');
                            localStorage.setItem("currentUser",JSON.stringify(this.user));

                            // remove any other authenticated user data you put in local storage

                            // Assuming that you set this earlier for subsequent Ajax request at some point like so:
                            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth_token ;
                            delete axios.defaults.headers.common['Authorization'];

                            // If using 'vue-router' redirect to login page 
                            this.$router.go();
                        })
                        .catch(error => {
                            // If the api request failed then you still might want to remove
                            // the same data from localStorage anyways
                            // perhaps this code should go in a finally method instead of then and catch
                            // methods to avoid duplication.
                            localStorage.removeItem('currentUser');
                            localStorage.setItem("currentUser",JSON.stringify(this.user));
                            delete axios.defaults.headers.common['Authorization'];
                            this.$router.go();
                        });  
                })
              })
              .catch((e) =>{
                Swal.fire('Pogreška!', 'Pojavila se pogreška pri izmjeni podataka', 'warning');
                console.log(e)
              })
            }
          })
          .catch(err=>{
            console.log(err)
          })
        }, 
    }
};
</script>

<style scoped>
.bgnd-light-grey{
background: rgb(216, 216, 210);
}
.section{
margin: 0;
padding-top: 30px;
padding-bottom: 30px;
}

.container{
margin-top: 30px;
max-width: 1220px;
margin-bottom: 30px;

}
.button_korisnik{
margin: auto;
padding-top: 20px;
padding-bottom: 30px;

}
.button_korisnik button{
width: 40%;  
text-align: center;
padding: 10px;
font-size: 18px;
font-weight: 500;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
border-radius: 5px;
background-color:#e6d49c;
color: white;
}

button:hover{ 
transform: scale(1.05);
transition: transform 330ms ease-in-out;
}

input{   
    width: 100%;   
    margin: 10px 0;  
    padding: 10px 18px;   
    display: inline-block;   
    box-sizing: border-box;
    border-color:#dcd8c9; 
    font-size: 16px; 
    border: none;
    border-bottom: solid 1px black;
    border-radius: 0;
    font-family: arial;    
}

select{
    width: 100%;   
    margin: 10px 0;  
    padding: 10px 18px;   
    display: inline-block;   
    box-sizing: border-box;
    border-color:#dcd8c9; 
    font-size: 16px; 
    border: none;
    border-bottom: solid 1px black;
    border-radius: 0;
    font-family: arial;
}   

h6{
    margin-top: 20px;
    padding: 7px;
    padding-bottom: 20px;
    font-size: 17px;
}
.button_korisnik{
margin: auto;
padding-top: 25px;
padding-bottom: 25px;

}
.button_korisnik button{
width: 40%;  
text-align: center;
padding: 12px;
font-size: 20px;
font-weight: 500;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
border-radius: 5px;
background-color:#e6d49c;
color: white;
}

button:hover{ 
transform: scale(1.05);
transition: transform 330ms ease-in-out;
}

table {
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 18px;
width: 100%;

}

td, th {
text-align: left;
padding: 15px;
}

img{
    width: 150px;
    height: 150px;
    border-radius: 75px;
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