<template>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">

<div class="container" style="width:90%">
    <div class="shadow" style="margin-bottom: 50px;">   
        <div class="row" style="margin:0; padding:0;">
            <div class="col-2" style="width:40%; padding:0; background-color:#e6d49c">
                <div class="column1" style="text-align:center; margin-top: 40px;">
                    <img src="/images/profil.jpg" alt="logo">
                    <h5 style="padding-bottom:10px">PlaviGlobus</h5>
                    <p>Split, Jurja Križanića 21</p>
                    <p>Mob: 095/900-0936</p>
                    <router-link style= "margin: 10px; text-decoration: none; color: black;" :to="'/moji-oglasi'"><p><i class="fa fa-arrow-right" aria-hidden="true"></i> Svi oglasi ovog oglašivača</p></router-link>
                </div>
            </div>

            <div class="col-4" style="width:59%; padding:0">
                <div class="container" style="display: flex; padding:5px">
                    <div class="row" style="width:100%;">
                        <div class="col-6" style="width:50%; padding:0">
                        <h4>Stan Split Sućidar</h4>
                        <p style="font-size: 18px;">Cijena: 465€ ~ 3.500kn</p>
                    </div>
                    <div class="col-6" style="width:50%; padding:0">
                        <p style="font-size: 18px;"> <i class="fa fa-clock-o" aria-hidden="true"></i> Objavljeno prije 45 min</p>
                    </div>
                    </div>
	            </div>
                <div class="stupac2" style="margin-left:10px">
                        <img src="/images/detalji-slika.jpg" alt="logo">
                    
                    <div>
                        <div style="margin-top:25px; padding-left: 15px;  margin-left: 10px;">
                            <h4 style="font-weight: bolder;">OSNOVNO</h4>
                        </div>

                    <div class="row" style="width:100%; background-color:#e6e2d3; margin-left: 0;">
                        <div class="col-6" style="width:50%; padding:0">
                        <h6>Županija: Splitsko-dalmatinska </h6>
                        <h6>Grad/općina: Split </h6>
                        <h6>Naselje: Grad </h6>
                        <h6>Broj osoba: 3 </h6>
                        <h6>Godina izgradnje: 2003 </h6>
                        <h6>Godina zadnje adaptacije: 2007 </h6>
                    </div>

                    <div class="col-6" style="width:50%; padding:0">
                       <h6>Stambena površina u m2: 80 </h6>
                        <h6>Namještenost: Potpuna </h6>
                        <h6>Kat: 4 </h6>
                        <h6>Zamjena: ne </h6>
                        <h6>Tip oglasa: ponuda </h6>
                        <h6>Prodavač: privatna osoba </h6>     
                    </div>
                    </div>

                    <div style="margin-left:8px">
                        <p style="padding-top:35px; padding-bottom:35px; font-size: 18px; line-height:40px;">
                            Prodaje se prekrasan, komforan dvosobni stan na izvrsnoj lokaciji u gradu.
                            <br>
                            Sastoji se od hodnika, dvije spavaće sobe, kupaonice s wc-om, malog wc-a, kuhinje s blagovaonom i dnevnog boravka.
                            <br>
                            Stan je izvrsnog rasporeda, maksimalno iskorišten.
                            <br>
                            Dnevni dio, blagovaona i kuhinja su spojeni, prostrani i puni svjetlosti.
                            <br>
                            Nalazi se na 3. katu zgrade s liftom.
                            <br>
                            Prostor je uređen i u funkciji apartmana, kategoriziran kao apartman s 4 zvjezdice.
                            <br>
                            Vlasništvo uredno, prodajemo!
                        </p>
                    </div>

                    <div style="margin-top:25px; padding-left: 15px;  margin-left: 10px;">
                            <h4 style="font-weight: bolder;">VIŠE INFORMACIJA</h4>
                        </div>

                    <div class="row" style="width:100%; background-color:#e6e2d3; margin-left: 0;">
                        <div class="col-6" style="width:50%; padding:0">
                        <h6>Broj etaža stana: Jednoetažni </h6>
                        <h6>Orijentacija: Istok, Sjever </h6>
                        <h6>Tip stana: U stambenoj zgradi </h6>
                        
                    </div>

                    <div class="col-6" style="width:50%; padding:0">
                       <h6>Ulaz: Zajednički </h6>
                        <h6>Vlastita šifra objekta: 00010 </h6>
                        <h6>email: plaviglobus@gmail.com </h6>
                        <h6>Tel ili mob: 095/900-0936 </h6>         
                    </div>
                    </div>
                    <br>
                </div>
                </div> 

            </div>        
        </div>
    </div>

</div>
   
</template>


<style scoped>
.shadow{
  margin-top: 50px;
}

h4{
    padding-bottom: 10px;
}

h5
{
padding-top: 15px;
}

h6{
    padding: 8px;
}

.row{
    padding: 15px;
    margin-left: 10px;
}

</style>