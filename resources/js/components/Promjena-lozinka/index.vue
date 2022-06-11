<template>
<div style="position: relative;     background: rgb(216, 216, 210); "> 
    <div class="section page_content user_area bgnd-light-grey">
        <div class="container" style="margin-bottom: 120px; margin-top: 70px;">
            <div class="row">
                <div class="s12 13 left" style=" margin-left: 0; padding: 0; width: 25%;">
                        <div class="menu_left hide-on-med-and-down" style="border: 1px solid grey; background-color: transparent; width: 80%;">
                            <table>
                                <tr v-if="type == 'Poslovni'" style="border-bottom: 1px solid #aea8a8;">
                                    <router-link style= " text-decoration: none; color: black;" :to="'/moji-oglasi'"><td>Moji oglasi</td></router-link>
                                </tr>
                                <tr style="border-bottom: 1px solid #aea8a8;">
                                    <router-link style= " text-decoration: none; color: black;" :to="'moji-podaci'"><td>Moji podaci</td></router-link>
                                </tr>
                                <tr style="border-bottom: 1px solid #aea8a8;">
                                    <router-link style= " text-decoration: none; color: black;" :to="'/promjena-lozinke'"><td>Lozinka</td></router-link>
                                </tr>
                                <tr>
                                    <router-link style= " text-decoration: none; color: black;" :to="'/promjena-lozinke'" @click.prevent="logout"><td>Odjava</td></router-link>
                                </tr>
                            </table>                            
                        </div>
                </div>
                <div class=" s12 19 main" style=" margin-left:0; width: 75%;">
                    <div class="content_body white_bgnd_with_border" style="border: 1px solid grey; background-color: white; padding-left: 50px; padding-right: 50px;">
                        <div class="head small_title hide-on-med-and-down" style="font-size: 27px; font-weight: 700; line-height: 32px; padding: 10px; color: #e6d49c">Lozinka</div>
                        <div style="font-size: 18px; padding-left: 10px;">Izmjena Vaše lozinke: </div>
                        <div class="form-wrapper">
                            <form>  
                                <div class="container" style="padding: 10px; margin:0;">   
                                    <input type="password" v-model="data.password" placeholder="Lozinka" name="password" required>
                                    <input type="password" v-model="data.password_confirmation" placeholder="Nova lozinka" name="password" required>                                                     
                                    <div class="button_korisnik">
                                      <button @click.prevent="editPassowrd" type="submit">Spremi promjene</button> 
                                    </div> 
                                </div>
                            </form>                                       
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
    import Swal from 'sweetalert2';
    
    export default {
    name: 'promjena-lozinke',
    data() {
        return { 
            id:'',
            data: {
                password:'',
                password_confirmation: '',

            }, 
            user:{
                isLogged: false,
            }
            };
    },
    created() {  
       if(user.isLogged == false){
          this.$router.push({name: 'login'})
        }
        
      this.type = user.type
      this.id = user.id

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

        editPassowrd() {
        Swal.fire({
        title: 'Jeste li sigurni da želite promjeniti lozinku?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Da, promjeni!'
          })
          .then(res=>{ 
            if(res.isConfirmed == true){
              axios.post(`/api/change-password/${this.id}`, this.data)
              .then((res) =>{
                console.log(res)
                Swal.fire('Uspješno ste promjenili lozinku!', 'Molim vas prijavite se ponovno', 'success')
                .then(res=>{

                    this.logout()
                })
              })
              .catch((e) =>{
                Swal.fire('Pogreška!', 'Pojavila se pogreška pri izmjeni lozinke', 'warning');
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

input[type=text], input[type=password] {   
        width: 90%;   
        margin: 10px 0;  
        padding: 10px 18px;   
        display: inline-block;   
        box-sizing: border-box;
        border-color:#dcd8c9; 
        border-radius: 5px;  
        font-size: 16px; 
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