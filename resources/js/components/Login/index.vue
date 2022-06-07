<template>
  <div class="col-6" style="margin: auto;">
    <div class="shadow">
      <div class="email_username row section">
        <div class="col-6">
            <div class="login">
              <h2 style="color: black; font-weight: bold;">
                Prijava
              </h2>
            </div>
          </div>
          <div class="col-6" style="margin-bottom: 20px">
            <div class="tekst">
              <p style="width: auto">Nemaš korisnički račun? </p>
              <router-link style= "color: #e6d49c; font-weight: bolder; width: auto;  margin-left: 10px;" :to="'/register'">Registriraj se</router-link>
            </div>
          </div>
        </div>
        <div class="form">
          <div class="forma">              
              <div class="cold-12">
                <label for="email">Email</label>
                <div class="icons">
                  <i class="fa fa-envelope icon"></i>
                  <input type="email" id="email" name="email" v-model = "data.email" placeholder="Email adresa" required>
                </div>
              </div>
              <div class="cold-12"> 
                <label for="password">Lozinka</label>
                <div class="icons"> 
                  <i class="fa fa-lock icon"></i>
                  <input type="password" id="password" name="password" v-model = "data.password" placeholder="Lozinka" required>
                </div>                
              </div>
          

              <div class="button_korisnik">
              <button @click="loginUser" type="submit">Prijavi se</button>
            </div>            
          </div>
        </div>       
    </div>
   
  </div>
</template>

<script>   
import Swal from 'sweetalert2';

export default {
  name: 'login',
  data() {
    return {
        data:{
          email:'',
          password:''
        },
        error: null,
        user: null,
    };
  },
  created() {  
 

    
  },
  methods: { 
    loginUser(){
      let res = axios.post('/api/login', this.data)
        .then((response)=>{ 
          this.user = response.data.user
          this.user.token = response.data.token
          this.user.isLogged = true;
          localStorage.setItem("currentUser",JSON.stringify(this.user));
          Swal.fire('Logged!', 'Uspješno ste se ulogirali.', 'success');
          
          this.$router.push({name: 'Home'})
        })
        .catch((error) =>{
          this.errors = error.response.data;
          console.log(error)
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
.cold-12{
  margin: auto;
}
.login{
  width: 70%;
  text-align: left;
  margin: auto;
  color: black;
}
.registracija h2{
  color: black !important;
  padding: 20px 0;
}

.tekst{
    display: flex;
    width: auto;
    text-align: right;
    margin-right: 60px;
    float: right;
}

.button_korisnik{
  width: 100%;
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

button:hover{ 
  transform: scale(1.05);
  transition: transform 330ms ease-in-out;
}
.forma{
  text-align:center;
  width: 40%;
  margin: auto;

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
</style>