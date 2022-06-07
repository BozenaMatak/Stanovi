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
                    <div class="row" style="width: 100%">
                        <div class="col 6" style="width:50%; padding: 0;"><img src="/images/profil.jpg" alt="logo"></div>
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
</template>

<script>  

    import axios from 'axios';
    import { COUNTRIES } from '../../constants';
    import { ZUPANIJE } from '../../constants';

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
                broj_mob:''

            },
            errors : []
            };
    },
    created() {  
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
    this.id = user.id

    },
    methods: {

        editUser() {
          let uri = `/api/post/update/` + this.id;
          axios.post(uri, this.data).then((response) => {
            // this.$router.push({name: 'home'});
          });
        },

        // async editUser(){
        //     axios.post(`api/updateprofile/${this.id}`, this.data)
        //     .then((response) => {
        //         console.log(response.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        // }
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
</style>