<template>
    <div class="section page_content user_area bgnd-light-grey">
        <div class="container">
            <div class="row">
                <div class="s12 13 left" style=" margin-left: 0; padding: 0; width: 25%;">
                        <div class="menu_left hide-on-med-and-down" style="border: 1px solid grey; background-color: transparent; width: 80%;">
                            <table>
                                <tr style="border-bottom: 1px solid #aea8a8;">
                                    <router-link style= " text-decoration: none; color: black;" :to="'/moji-oglasi'"><td>Moji oglasi</td></router-link>
                                </tr>
                                <tr style="border-bottom: 1px solid #aea8a8;">
                                    <router-link style= " text-decoration: none; color: black;" :to="'moji-podaci'"><td>Moji podaci</td></router-link>
                                </tr>
                                <tr style="border-bottom: 1px solid #aea8a8;">
                                    <router-link style= " text-decoration: none; color: black;" :to="'/promjena-lozinke'"><td>Lozinka</td></router-link>
                                </tr>
                                <tr>
                                    <router-link style= " text-decoration: none; color: black;" :to="'/'"><td>Odjava</td></router-link>
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
                                    <input type="text" placeholder="Stara lozinka" name="username" required>  
                                    <input type="password" placeholder="Lozinka" name="password" required>
                                    <input type="password" placeholder="Nova lozinka" name="password" required>                                                     
                                    <div class="button_korisnik">
                                        <button  type="submit">Spremi promjene</button>
                                    </div> 
                                </div>
                            </form>                                       
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