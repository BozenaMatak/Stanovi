<template>
    <div class="section page_content user_area bgnd-light-grey">
        <div class="container">
            <div class="row">
                <div class="s12 13 left" style=" margin-left: 0; padding: 0; width: 25%;">
                    <div class="menu_left hide-on-med-and-down" style="border: 1px solid grey; background-color: transparent; width: 80%;">
                        <div style="height: auto; padding-left: 20px; padding-right: 20px; padding-top: 15px; padding-bottom: 15px; font-size: 18px; font-weight: bold;"><router-link style= "margin: 10px; text-decoration: none; color: black;" :to="'/moji-oglasi'">Moji oglasi</router-link></div>                            
                        <div style="height: auto; padding-left:20px; padding-right:20px; padding-top: 15px; padding-bottom: 15px; font-size: 18px; font-weight: bold"><router-link style= "margin: 10px; text-decoration: none; color: black;" :to="'moji-podaci'">Moji podaci</router-link></div>
                        <div style="height: auto; padding-left:20px; padding-right:20px; padding-top: 15px; padding-bottom: 15px; font-size: 18px; font-weight: bold"><router-link style= "margin: 10px; text-decoration: none; color: black;" :to="'/promjena-lozinke'">Lozinka</router-link></div>
                        <div style="height: auto; padding-left: 20px; padding-right:20px; padding-top: 15px; padding-bottom: 15px; font-size: 18px; font-weight: bold"><router-link style= "margin: 10px; text-decoration: none; color: black;" :to="'/'">Odjava</router-link></div>                            
                    </div>
                </div>
                <div class=" s12 19 main" style=" margin-left:0; width: 75%;">
                    <div class="content_body white_bgnd_with_border" style="border: 1px solid grey; background-color: white; padding-left: 50px; padding-right: 50px;">
                        <div class="row" style="width: 100%">
                            <div class="col 6" style="width:50%; padding: 0;"><img src="/images/profil.jpg" alt="logo"></div>
                            <div class="col 6" style="width:50%;  padding: 0;"><h3 style="margin-top:70px; font-weight: bold;">PlaviGlobus</h3></div>
                        </div>
                            <div class="row" style="width:100%; margin-left: 0;">
                                <div class="col-6" style="width:50%;">
                                    <h6>Email </h6>
                                    <h6>Username </h6>
                                    <h6>Ime </h6>
                                    <h6>Prezime </h6>
                                    <h6>Država </h6>
                                    <h6>Županija </h6>
                                    <h6>Grad </h6>
                                    <h6>Poštanski broj </h6>
                                    <h6>Adresa </h6>
                                    <h6>Broj mobitela </h6>
                                    <h6>Naziv poslovnog subjekta </h6>
                                </div>
                                <div class="col-6" style="width:50%; padding:0">
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>
                                    <input type="text" placeholder="" name="username" required>    
                                </div>
                                <div class="button_korisnik">
                                    <button  type="submit">Spremi promjene</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>    
            </div>    
        </div>                   
</template>

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
        width: 100%;   
        margin: 10px 0;  
        padding: 10px 18px;   
        display: inline-block;   
        box-sizing: border-box;
        border-color:#dcd8c9; 
        border-radius: 3px;  
        font-size: 16px; 
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
    
</style>