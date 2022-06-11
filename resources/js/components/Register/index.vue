<template>
<div style="position: relative ">  
  <div class="container" style="margin-bottom: 120px; margin-top: 90px;">
    <div class="shadow">
      <div class="col-12">
        <div class="registracija">
          <h2 style="color: black; font-weight: bold;">
            Registracija
          </h2>
        </div>
        <div class="tekst">
          <p style="width: auto">Već imaš korisnički račun? </p>
          <router-link style= "color: #e6d49c; font-weight: bolder; width: auto;  margin-left: 10px;" :to="'/login'">Prijavi se</router-link>
        </div>
        
      </div>
      <div class="row">
        <div class="col-6">
          <div class="stupac1">
            <div class="title">
              <h4>Privatni korisnik</h4>
            </div>
            <div class="opis_korisnika">
              Privatni korisnik ima mogućnost pregledavanja objavljenih oglasa nekretnina kao i pretraživanje istih pomoću filtera radi bržeg i lakšeg pronalaska onoga što traži.
            </div>
            <div class="button_korisnik">
              <router-link style= "color: black; width: auto; text-decoration: none;" :to="'/register/privatni-korisnik'">
                <button>Registracija</button>
              </router-link>
            </div>

          </div>
        </div>
        <div class="col-6">
          <div class="stupac2">
            <div class="title">
              <h4>Poslovni korisnik</h4>
            </div>
            <div class="opis_korisnika2">
             Poslovni korisnik ima mogućnost postavljanja novih oglasa nekretnina, pregledavanja i pretraživanja objavljenih nekretnina te pregled i uređivanje vlastitih oglasa.
            </div>
            <div class="button_korisnik">
              <router-link style= "color: black; width: auto; text-decoration: none;" :to="'/register/poslovni-korisnik'">
                <button>Registracija</button>
              </router-link>
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

export default {
  name: 'register',
  data() {
    return {
        name: '',
    };
  },
  created() {
     if(user.isLogged == true){
      this.$router.push({name: 'Home'})
    }
  },
  methods: {
    
  }
};
</script>

<style scoped> 
.cont_row{
  width: 50%;
  margin: auto;
  box-shadow: 4px 4px 10px #adad85;
  margin-top: 5%;
  border-radius: 3px;
}
.first{
  background: url(/images/register.jpg);
  background-size:  auto 100%;
  background-repeat: no-repeat;
  height: 500px;
  border-radius: 3px 0px 0 3px;
}
.logo{
  width: 70%;
  margin: auto
}
.logo img{
  width: 70%;
}
.second{
  background-color: white;
  border-radius: 0px 3px 3px 0px;
}


 
.signup__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.76);
}
.container__child {
  width: 50%;
  height: 100%;
  color: #fff;
}
.signup__thumbnail {
  position: relative;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: url(http://ultraimg.com/images/spectre-login.jpg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}
.thumbnail__logo,
.thumbnail__content,
.thumbnail__links {
  position: relative;
  z-index: 2;  
}
.thumbnail__logo {align-self: flex-start;}
.logo__shape {fill: #fff;}
.logo__text {
  display: inline-block;
  font-size: .8rem;
  font-weight: 700;
  vertical-align: bottom;
}
.thumbnail__content {align-self: center;}
h1,
h2 {
  font-weight: 300;
  color: rgba(255,255,255,1);
}
.heading--primary {font-size: 1.999rem;}
.heading--secondary {font-size: 1.414rem;}
.thumbnail__links {
  align-self: flex-end;
  width: 100%;
}
.thumbnail__links a {
  font-size: 1rem;
  color: #fff; 
}
.signup__form {
  padding: 2.5rem;
  background: #fafafa;
}
label {
  font-size: .95rem;
  color: #ccc;
}
.form-control {
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 0; 
}
[type="text"] {color: #111;}
[type="password"] {color: #111;}
.btn--form {
  padding: .5rem 2.5rem;
  font-size: .95rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  background: #111;
  border-radius: remy(35px); 
}
.signup__link {
  font-size: .8rem;
  font-weight: 600;
  text-decoration: underline;
  color: #999; 
}

.shadow{
  margin-top: 50px;
  text-align: center;
}

.stupac1{
  width: 80%;
  margin: auto;
}
.stupac2{
  width: 80%; 
  margin: auto;
}
.title{
  font-weight: bolder;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

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
  width: 60%;
  margin: auto;
  padding-top: 30px;
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
  transform: scale(1.05);
  transition: transform 330ms ease-in-out;
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