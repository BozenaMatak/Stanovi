<template style="background-color:black;">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
<div>
  <div class="container">
      <br/>
    <div class="row justify-content-center">      
      <div class="col-12 col-md-10 col-lg-8" style="margin-top: 15%; width: 80%">
        <div style="text-align: center; font-size: 40px; font-weight:bold; color: #405d27">
            <p> Što tražite?</p>
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
                <button class="btn btn-lg btn-success"  @click.prevent="filter" type="submit">Traži</button>
              </div>
            </div>
          </form>
      </div>      <!--end of col-->
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

.form-control-borderless 
{
    border: none;
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
</style>