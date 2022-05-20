<template> 
    <div  style="background-color: #adad85; padding-top: 10px; padding-bottom: 10px; font-size: 20px;">
        <div class="container" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
            <div class="row">
                <div style="width:50%;">
                    <router-link :to="'/'"><img src="/images/stanovi_logo.png" alt="logo"></router-link>
                        <router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/'">Home</router-link>
                        <nav>
                            <ul style="width: 200px">
                                <li style="width: 100%"><a style= "margin: 10px; text-decoration: none; color: white;" :to="'/'">Moj račun</a>
                                    <ul>
                                        <li style="width: 100%"><router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/moji-oglasi'">Moji oglasi</router-link></li>
                                        <li style="width: 100%"><router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'moji-podaci'">Moji podaci</router-link></li>
                                        <li style="width: 100%"><router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/promjena-lozinke'">Lozinka</router-link></li>
                                        <li><router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/'">Odjava</router-link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>     
                </div>
                <div style="text-align: right; width:50%;">
                        <router-link style= " width: auto; text-decoration: none;" :to="'/predajoglas'">
                            <button style="background-color: #e6d49c; width: 25%; color: white; text-align: center; padding: 7px; border-color:#e6d49c; border-radius: 5px;"><i class="fa fa-plus" aria-hidden="true"></i> Predaj oglas</button>
                        </router-link>
                    <router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/login'">Login</router-link>    
                    <router-link style= "margin: 10px; text-decoration: none; color: white;" :to="'/register'">Registracija</router-link> 
                </div>
            </div>
        </div>
           
    </div> 
</template>

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
