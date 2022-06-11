<template style="background-color:black;">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <img src="/images/background.png" alt="background-img" style="width: 100%;">
<div style="position: relative ">  
    <div>
      <div class="container">
          <br>
          <br>
          <br>
          <br>
        <div class="row justify-content-center">      
          <div class="col-12 col-md-10 col-lg-8" style="margin-top: 15%; width: 80%">
            <div style="text-align: center; font-size: 40px; font-weight:bold; color: #405d27; background: white; width: 40%; margin: auto; margin-left: 26%; ">
                <p> Recite nam što tražite</p>
            </div>
            
              <form class="card card-sm" style="box-shadow: 4px 4px 10px #adad85;">
                <div class="card-body row no-gutters align-items-center">
                  <div class="col-auto">
                      <i class="fas fa-search h4 text-body"></i>
                  </div> <!--end of col-->
                                          
                  <div class="col">
                    <div class="icons">
                      <select v-model="tip_nekretnine" required>
                        <option value="" disabled >Odabir tipa nekretnine</option>
                        <option
                          v-for="(option, idx) in tip_prostora"
                          :key="idx"
                          :value="option.name"
                          >
                          {{ option.name }}
                        </option> 
                      </select>
                    </div>
                  </div> <!--end of col-->
                                          
                  <div class="col-auto"> 
                    <button class="btn btn-lg"  @click.prevent="filter" type="submit">Traži</button>
                  </div>
                </div>
              </form>
          </div>      <!--end of col-->
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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

import { TIP_PROSTORA } from '../../constants';

import Swal from 'sweetalert2'; 

export default {
  name: 'Home', 
  data() {
    return {
        tip_prostora: [],
        tip_nekretnine: '',   //zupanija predstavlja jednu zupaniju koju je korisnik odabrao prilikom registracije
    };
  },
  created() {

    TIP_PROSTORA.forEach(element => { //zupanije predstavljaju polje svih zupanija
      this.tip_prostora.push(element) 
    }); 

    // console.log(this.$route)

    // if(this.$route.name == 'Home') 
    
  },
  methods: {
    filter(){
      if(this.tip_nekretnine == ''){
        Swal.fire({
            title: 'Molimo vas odaberite tip nekretnine koji tražite', 
            icon: 'warning',
          });
        return
      }
      this.$router.push({path: `/filtrirani-oglasi/${this.tip_nekretnine}`}) 
    }
  }
};

</script>


<style scoped>
img{
  position:absolute;
  bottom:0;
  top: 10px;
  left:0;
  right: 0;
  
}
.form-control-borderless 
{
    border: none;
}

.footer{
  bottom: 0;
  position: absolute;
}

.shadow
{
  margin-top: 50px;
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

.column 
{
	  flex: 25%;
	  text-align: center;
	}

.column1
{
	  flex: 33.33%;
	  text-align: center;
	}

select{
  width: 100%;
  font-size: 15px;
  padding: 10px; 
  border: none;
  border-bottom: 1px solid rgb(78, 78, 78);
  background: transparent;
  outline: none;
}
button{
  padding-left: 30px; 
  padding-right: 30px; 
  background-color: #e6d49c; 
  color: white;
  font-weight: bold;
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