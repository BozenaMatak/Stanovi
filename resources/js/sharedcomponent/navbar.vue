<template> 
    <div  style="background-color: #adad85; padding-top: 10px; padding-bottom: 10px; font-size: 20px;">
        <div class="container" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
            <div class="row">
                <div style="width:50%;">
                    <router-link :to="'/'"><img src="/images/stanovi_logo.png" alt="logo"></router-link>
                        <router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/'">Home</router-link>
                        <nav v-if="isLogged == true">
                            <ul style="width: 200px">
                                <li style="width: 100%"><a style= "margin: 10px; text-decoration: none; color: white;" :to="'/'">Moj račun</a>
                                    <ul>
                                        <li style="width: 100%"><router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/moji-oglasi'">Moji oglasi</router-link></li>
                                        <li style="width: 100%"><router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'moji-podaci'">Moji podaci</router-link></li>
                                        <li style="width: 100%"><router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/promjena-lozinke'">Lozinka</router-link></li>
                                        <li><button style= "margin: 10px; text-decoration: none; color: white; background: transparent; border: none; padding: 0;" @click.prevent="logout">Odjava</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>     
                </div>
                <div style="text-align: right; width:50%;">
                        <router-link style= " width: auto; text-decoration: none;" :to="'/predajoglas'">
                            <button style="background-color: #e6d49c; width: 25%; color: white; text-align: center; padding: 7px; border-color:#e6d49c; border-radius: 5px;"><i class="fa fa-plus" aria-hidden="true"></i> Predaj oglas</button>
                        </router-link>
                    <router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/login'">Prijava</router-link>    
                    <router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/register'">Registracija</router-link> 
                </div>
            </div>
        </div>
           
    </div> 
</template>


<script>
 

export default { 
  data() {
    return {
      isLogged: false,
      user:{
        isLogged: false,
      }
    };
  },
  created(){
    this.isLogged = user.isLogged
  },

  methods: {
    logout(evt) {
       if(confirm("Are you sure you want to log out?")) {
         axios.get('api/logout')
         .then(response => {
          localStorage.removeItem('currentUser');
          localStorage.setItem("currentUser",JSON.stringify(this.user));

          // remove any other authenticated user data you put in local storage

          // Assuming that you set this earlier for subsequent Ajax request at some point like so:
          // axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth_token ;
          delete axios.defaults.headers.common['Authorization'];

          // If using 'vue-router' redirect to login page
          this.$router.push('/');
        })
        .catch(error => {
          // If the api request failed then you still might want to remove
          // the same data from localStorage anyways
          // perhaps this code should go in a finally method instead of then and catch
          // methods to avoid duplication.
          localStorage.removeItem('currentUser');
          localStorage.setItem("currentUser",JSON.stringify(this.user));
          delete axios.defaults.headers.common['Authorization'];
          this.$router.push('/');
        });       
       }
     }
   }


};

</script>




<style scoped>
    img{
        height: 60px;
    }
    body{ 
        margin:0;
    }

nav {
  margin:0 auto;
  display:inline-block;
}

nav ul {
  margin:0;
  padding:0;
  display:inline-block;
  border-radius: 5px;
}

nav ul li {
  position:relative;
  margin:0 10px 0 0;
  padding-right: 50px;
  display:inline-block;
}
li > a:after { content: ' »'; } /* Change this in order to change the Dropdown symbol */
li > a:only-child:after { content: ''; }
nav ul li a {
  display:inline-block;
  color:white;
  text-decoration:none;
}
nav ul li a:hover {
  opacity:0.5;
}
nav ul li button:hover {
  opacity:0.5;
}
nav ul li ul {
  display:none;
  position:absolute;
  background:#ded4b7;

}
nav ul li ul li {
  border-bottom:1px solid rgba(255,255,255,.3);
}

nav ul li:hover ul {
  display:block;
}
  
</style>
