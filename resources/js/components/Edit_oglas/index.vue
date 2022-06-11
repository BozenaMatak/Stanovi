<template>
<div style="position: relative;">
  <div class="container" style="margin-bottom: 70px;">
    <div class="shadow">
      <div class="col-12">
        <div class="registracija">
          <h2>
            Predaja novog oglasa
          </h2>
        </div>
        <div class="tekst">
          <h4 style="width: auto; padding-top: 0; font-weight: bold;">Osnovni podaci </h4>
        </div>
        <div class="form">
          <div class="forma">
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="email">Tip nekretnine *</label>
                <div class="icons">
                  <select v-model="data.tip" required>
                    <option value="" disabled >Odabir nekretnine</option>
                    <option
                      v-for="(option, idx) in tip_prostora"
                        :key="idx"
                        :value="option.name"
                      >
                      {{ option.name }}
                    </option> 
                  </select>
                </div> 
                <div class="error">
                  <p v-if="errors.tip" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Tip nekretnine je obavezan!
                  </p>
                </div>  

              </div>

              <div class="col-6">
                <label for="Username">Namjena oglasa *</label>
                <div class="icons">
                    <select v-model="data.namjena"  required>
                      <option value="" disabled >Odabir namijene</option>
                      <option
                        v-for="(option, idx) in namijena"
                          :key="idx"
                          :value="option.name"
                        >
                        {{ option.name }}
                      </option> 
                    </select>
                </div> 
                <div class="error">
                  <p v-if="errors.namjena" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Namjena oglasa je obavezna!
                  </p>
                </div> 
              </div>
            </div>

            <div class="email_username row section">
              <div class=""> 
                <label for="Naslov">Naslov *</label>
                <div> 
                  <input v-model="data.naslov" class="bez_ikone" type="text" id="Naslov" name="Naslov" required>
                </div>                
              </div>
              <div class="error">
                  <p v-if="errors.naslov" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Naslov je obavezan!
                  </p>
                </div> 
            </div>
        
            <div class="email_username row section">
              <div class="col-6"> 
                <label for="Povrsina">Površina (m²) *</label>
                <div class="icons">
                  <input class="bez_ikone" v-model="data.povrsina" type="text" id="Povrsina" name="Povrsina" required>
                </div> 
                <div class="error">
                  <p v-if="errors.povrsina" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Površina je obavezna!
                  </p>
                </div>                
              </div>

              <div class="col-6">
                <label for="Prezime">Sobnost *</label>
                <div class="icons">
                  <select v-model="data.soba" required>
                    <option value="" disabled >Odabir sobnosti</option>
                    <option
                      v-for="(option, idx) in sobnost"
                        :key="idx"
                        :value="option.name"
                      >
                      {{ option.name }}
                    </option> 
                  </select>
                </div>
                <div class="error">
                  <p v-if="errors.soba" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Sobnost je obavezna!
                  </p>
                </div> 
              </div>
            </div>

              <div class="row"> 
                <label for="Drzava">Opis*</label>
                <div class="icons">
                  <textarea v-model="data.opis" style="padding:30px; width:100%; border-radius: 8px;" required></textarea>
                </div>   
                <div class="error">
                  <p v-if="errors.opis" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Opis je obavezan!
                  </p>
                </div>               
              </div>

 
              <div class="col-6" style="margin-bottom: 20px"> 
                <label for="Grad" style="margin-top:12px">Cijena (€)*</label>
                <div class="icons">
                  <input v-model="data.cijena" class="bez_ikone" type="text" id="Cijena" name="Cijena" required>
                </div>    
                <div class="error">
                  <p v-if="errors.cijena" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Cijena je obavezna!
                  </p>
                </div>             
              </div>

              <div class="col-6" style="margin-bottom: 20px">
                <label for="Zupanija">Županija *</label>
                <div class="icons">
                  <select v-model="data.zupanija" required>
                    <option value="" disabled >Odabir županije</option>
                    <option
                      v-for="(option, idx) in zupanije"
                        :key="idx"
                        :value="option.name"
                      >
                      {{ option.name }}
                    </option> 
                  </select>
                </div>
                <div class="error">
                  <p v-if="errors.zupanija" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Županija je obavezna!
                  </p>
                </div> 
              </div>

              <div class="col-6" style="margin-bottom: 20px">
                <label for="Grad">Grad *</label>
                <div class="icons">
                  <select v-model="data.grad" required>
                    <option value="" disabled >Odabir grada</option>
                    <option
                      v-for="(option, idx) in gradovi"
                        :key="idx"
                        :value="option.name"
                      >
                      {{ option.name }}
                    </option> 
                  </select>
                </div>
                <div class="error">
                  <p v-if="errors.grad" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Grad je obavezan!
                  </p>
                </div> 
              </div>

            <div class="col-6"> 
              <label for="Adresa">Adresa *</label>
              <div class="icons">
                <input class="bez_ikone" type="text" id="Adresa" v-model="data.adresa" name="Adresa" placeholder="Adresa" required>
              </div>
              <div class="error">
                  <p v-if="errors.adresa" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Adresa je obavezna!
                  </p>
                </div>                 
            </div>      
          </div>

            <hr style="width:78%; margin:30px auto; ">
            <div class="tekst">
              <h4 style="width: auto; padding-top: 0; font-weight: bold;">Detalji o nekretnini </h4>
            </div>

            <div class="forma">
              <div class="row" style="margin-bottom: 20px">                    
                <div class="col-3">
                  <label for="Kupaona">Broj kupaonica *</label>
                  <div class="icons">
                    <input class="bez_ikone" v-model="data.broj_kupaona" type="text" id="Kupaona" name="Kupaona" required>
                  </div>
                  <div class="error">
                  <p v-if="errors.broj_kupaona" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Broj kupaonica je obavezan!
                  </p>
                </div> 
                </div>
                <div class="col-3">
                  <label for="Sanitarni cvor">Broj sanitarnih čvorova</label>
                  <div class="icons">
                    <input class="bez_ikone" type="text" id="Sanitarni cvor" v-model="data.san_cvor" name="Sanitarni cvor">
                  </div>
                </div>
                <div class="col-3">
                  <label for="balkon">Broj balkona</label>
                  <div class="icons">
                    <input class="bez_ikone" type="text" id="balkon" v-model="data.balkon" name="balkon">
                  </div>
                </div>
                <div class="col-3">
                  <label for="Parkiralisno mjesto">Broj parkirališnih mjesta *</label>
                  <div class="icons">
                    <input class="bez_ikone" type="text" id="Parkiralisno mjesto" v-model="data.broj_park_mjes" name="Parkiralisno mjesto" required>
                  </div>
                  <div class="error">
                  <p v-if="errors.broj_park_mjes" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Broj parkirališnih mjesta je obavezan!
                  </p>
                </div> 
                </div>
              </div>
              <div class="row" style="margin-bottom: 20px">
                <div class="col-3">
                  <label for="terasa">Broj terasa</label>
                  <div class="icons">
                    <input class="bez_ikone" type="text" id="terasa" v-model="data.terasa" name="terasa">
                  </div>
                </div>
                <div class="col-3">
                  <label for="etaza">Broj etaža</label>
                  <div class="icons">
                    <input class="bez_ikone" type="text" id="etaza" v-model="data.etaza" name="etaza">
                  </div>
                </div>
                <div class="col-3">
                  <label for="Grijanje">Grijanje *</label>
                  <div class="icons">
                    <input class="bez_ikone" type="text" id="Grijanje" v-model="data.grijanje" name="Grijanje" required>
                  </div>
                  <div class="error">
                  <p v-if="errors.grijanje" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                    Grijanje je obavezno!
                  </p>
                </div> 
                </div>
                <div class="col-3">
                  <label for="tip prostora">Godina izgradnje *</label>
                  <div class="icons">
                    <select v-model="data.godina_iz" required>
                      <option value="" disabled >Odabir godine izgradnje</option>
                      <option
                        v-for="(option, idx) in godine"
                          :key="idx"
                          :value="option.name"
                        >
                        {{ option.name }}
                      </option> 
                    </select>
                  </div>
                  <div class="error">
                    <p v-if="errors.godina_iz" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                      Godina izgradnje je obavezna!
                    </p>
                  </div> 
                </div>
              </div>
              <div class="row" style="margin-bottom: 20px">                    
                <div class="col-3">
                  <label for="Kat">Kat</label>
                  <div class="icons">
                    <input class="bez_ikone" v-model="data.kat" type="text" id="Kat" name="Kat">
                  </div>
                </div>
                <div class="col-3">
                  <label for="Energetski certifikat">Energetski certifikat</label>
                  <div class="icons">
                    <input class="bez_ikone" type="text" id="Energetski certifikat" v-model="data.en_cer" name="Energetski certifikat">
                  </div>
                </div>
                <div class="col-3">
                  <label for="Tipgradnja">Tip gradnje</label>
                  <div class="icons">
                    <input class="bez_ikone" type="text" id="Tipgradnja" v-model="data.tip_gradnja" name="Tipgradnja">
                  </div>
                </div>
                <div class="col-3">
                  <label for="Stanje">Stanje nekretnine</label>
                  <div class="icons">
                    <select v-model="data.stanja">
                      <option value="" disabled >Odabir stanja nekretnine</option>
                      <option
                        v-for="(option, idx) in stanje"
                          :key="idx"
                          :value="option.name"
                        >
                        {{ option.name }}
                      </option> 
                    </select>
                  </div>
                </div>
              </div>

              <div class="row" style="margin-bottom: 20px">                    
                <div class="col-3">
                  <label for="Prozor">Tip prozora</label>
                  <div class="icons">
                    <select v-model="data.prozor">
                      <option value="" disabled >Odabir tipa prozora</option>
                      <option
                        v-for="(option, idx) in prozori"
                          :key="idx"
                          :value="option.name"
                        >
                        {{ option.name }}
                      </option> 
                    </select>
                  </div>
                </div>
                <div class="col-3">
                  <label for="Adresa">Vanjska vrata</label>
                  <div class="icons">
                    <select v-model="data.vanjska_vrata">
                      <option value="" disabled >Odabir vanjskih vrata</option>
                      <option
                        v-for="(option, idx) in vrata"
                          :key="idx"
                          :value="option.name"
                        >
                        {{ option.name }}
                      </option> 
                    </select>
                  </div>
                </div>

                <div class="col-3">
                  <label for="Tip poda">Tip poda</label>
                  <div class="icons">
                    <select v-model="data.pod">
                      <option value="" disabled >Odabir tipa poda</option>
                      <option
                        v-for="(option, idx) in podovi"
                          :key="idx"
                          :value="option.name"
                        >
                        {{ option.name }}
                      </option> 
                    </select>
                  </div>
                </div>
                <div class="col-3">
                  
                </div>
              </div>

              <div class="row" style="margin-bottom: 20px">                    
                <div class="col-3">
                  <label for="Adresa">Garaža</label>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="podzemna_garaza" name="podzemna_garaza" v-model="data.podzemna_garaza" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="podzemna_garaza" style="font-weight: 300 !important;"> Podzemna garaža</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="samostojeca_garaza" name="samostojeca_garaza" v-model="data.samostojeca_garaza" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="samostojeca_garaza"> Samostojeća garaža</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="park_mjes" name="park_mjes" v-model="data.parkirno_mjesto" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="park_mjes"> Parkirno mjesto</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="jav_park" name="jav_park" v-model="data.javni_parking" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="jav_park"> Javni parking</label><br></div>                         
                  </div>
                </div>

                <div class="col-3" style="margin-top: 35px">
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="grad_doz" name="grad_doz" v-model="data.gradevinska_dozvola" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="grad_doz"> Građevinska dozvola</label><br></div>  
                  </div>
                </div>

                <div class="col-3" style="margin-top: 35px">
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="vlas_list" name="vlas_list" v-model="data.vlasnicki_list" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="vlas_list"> Vlasnički list</label><br></div>  
                  </div>
                </div>

                <div class="col-3" style="margin-top: 35px">
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="up_doz" name="up_doz" v-model="data.uporabna_dozvola" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="up_doz"> Uporabna dozvola</label><br></div>  
                  </div>
                </div>
              </div>               
            </div>

            <hr style="width:78%; margin:30px auto; ">
            <div class="tekst">
              <h4 style="width: auto; padding-top: 0; font-weight: bold;">Dodatno </h4>
            </div>

            <div class="forma">
              <div class="row" style="margin-bottom: 20px">                    
                <div class="col-3">
                  <label>Dodatno</label>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="lift" name="lift" v-model="data.lift" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="lift"> Lift</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="klima" name="klima" v-model="data.klima" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="klima"> Klima</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="pristup_invd" name="pristup_invd" v-model="data.pristup_inv" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="pristup_invd"> Pristup invalidima</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="fiks_tel" name="fiks_tel" v-model="data.fiksni_tel" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="fiks_tel"> Fiksni telefon</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="isdn" name="isdn" v-model="data.isdn" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="isdn"> ISDN priključak</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="adsl" name="adsl" v-model="data.adsl" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="adsl"> ADSL</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="wifi" name="wifi" v-model="data.wifi" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="wifi"> WIFI</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="kabl" name="kabl" v-model="data.kablovski" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="kabl"> Kablovski pristup</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="optik" name="optik" v-model="data.opticki" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="optik"> Optički pristup</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="tv_antena" name="tv_antena" v-model="data.tv_antena" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="tv_antena"> TV antena</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="sat_prik" name="sat_prik" v-model="data.satelitski_prikljucak" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="sat_prik"> Satelitski priključak</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="video" name="video" v-model="data.video_nadzor" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="video"> Video nadzor</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="alarm" name="alarm" v-model="data.alarm" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="alarm"> Alarm</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="nisko" name="nisko" v-model="data.niskoenergetska" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="nisko"> Niskoenergetska učinkovitost</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="bazen" name="bazen" v-model="data.bazen" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="bazen"> Bazen</label><br></div>                         
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="rostilj" name="rostilj" v-model="data.rostilj" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="rostilj"> Roštilj</label><br></div>                         
                  </div>
                </div>

                <div class="col-3">
                  <label>Blizina</label>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="autobus" name="autobus" v-model="data.autobus" value="true"></div>
                    <div class="col-6" style="padding:0;"><label for="autobus"> Autobus</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="bolnica" name="bolnica" v-model="data.bolnica" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="bolnica"> Bolnica</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="dom_zdrav" name="dom_zdrav" v-model="data.dom_zdravlja" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="dom_zdrav"> Dom zdravlja</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="fakultet" name="fakultet" v-model="data.fakultet" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="fakultet"> Fakultet</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="jez_mor_rij" name="jez_mor_rij" v-model="data.jez_mor_rij" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="jez_mor_rij"> Jezero, more ili rijeka</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="os_skola" name="os_skola" v-model="data.osnovna_skola" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="os_skola"> Osnovna škola</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="park_suma" name="park_suma" v-model="data.park_suma" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="park_suma"> Park ili šuma</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="sportski_objekt" name="sportski_objekt" v-model="data.sportski_objekt" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="sportski_objekt"> Sportski objekti</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="srednja_skola" name="srednja_skola" v-model="data.srednja_skola" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="srednja_skola"> Srednja škola</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="tramvaj" name="tramvaj" v-model="data.tramvaj" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="tramvaj"> Tramvaj</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="trg_centar" name="trg_centar" v-model="data.trgovacki_centar" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="trg_centar"> Trgovački centar</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="vlak" name="vlak" v-model="data.vlak" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="vlak"> Vlak</label><br></div>  
                  </div>
                  <div class="row">
                    <div class="col-6" style="padding:0"><input type="checkbox" id="vrtic" name="vrtic" v-model="data.vrtic" value="true"></div>
                    <div class="col-6" style="padding:0"><label for="vrtic"> Vrtić</label><br></div>  
                  </div>
                </div>
              </div>
            </div>

            <hr style="width:78%; margin:30px auto; ">
            <div class="tekst">
              <h4 style="width: auto; padding-top: 0; font-weight: bold;">Kontakt broj </h4>
            </div>
            <div class="forma">
              <div class="row" style="margin-bottom: 20px">                    
                <div class="col-6"> 
                  <label for="Kontakt">Kontakt broj</label>
                  <div class="icons">
                    <input class="bez_ikone" v-model="data.kontakt" type="text" id="Kontakt" name="Kontakt">
                  </div> 
                  <div class="error">
                    <p v-if="errors.kontakt" style="margin: 0; padding: 0; color: red; font-weight: bold;">
                      Kontakt je obavezan!
                    </p>
                  </div>                
                </div>
              </div>
            </div>

            <hr style="width:78%; margin:30px auto; ">
            <div class="button_korisnik">
              <button @click.prevent="editOglas" type="submit">Izmjeni oglas</button>
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

import axios from 'axios';
import {  PROZORI, VRATA, PODOVI,STANJE,GODINE,ZUPANIJE, TIP_PROSTORA, SOBNOST, NAMIJENA, GRADOVI } from '../../constants'; 
import { getOglas } from '../../api/index';
import Swal from 'sweetalert2';
export default {
  name: 'edit-oglas',
  data() {
    return {
        oglasi: [],
        oglas:{},
        id: null,
        name: '',
        podovi:[],
        pod:'',
        vrata:[],
        vanjska:'',
        prozori:[],
        prozor:'',
        stanje:[],
        stanja:'',
        godine:[],
        godina:'',
        zupanije: [],
        sobnost:[],
        soba: '',
        tip_prostora: [],
        gradovi: [],
        tip: '',
        namijena:[],
        namijene: '',
        zupanija: '',   //zupanija predstavlja jednu zupaniju koju je korisnik odabrao prilikom registracije
        data: {
          tip: '',
          namjena: '',
          naslov: '',
          povrsina: '',
          soba: '',
          opis: '',
          cijena: '',
          zupanija: '',
          grad:'',
          adresa: '',
          broj_kupaona: '',
          san_cvor: '',
          balkon: '',
          terasa: '',
          etaza: '',
          grijanje: '',
          godina_iz: '',
          kat: '',
          en_cer: '',
          tip_gradnja: '',
          stanja: '',
          prozor: '',
          vanjska_vrata: '',
          pod: '',
          broj_park_mjes: '',
          podzemna_garaza: false,
          samostojeca_garaza: false,
          parkirno_mjesto: false,
          javni_parking: false,
          gradevinska_dozvola: false,
          vlasnicki_list: false,
          uporabna_dozvola: false,
          lift: false,
          klima: false,
          pristup_inv: false,
          fiksni_tel: false,
          isdn: false,
          adsl: false,
          wifi: false,
          kablovski: false,
          opticki: false,
          tv_antena: false,
          satelitski_prikljucak: false,
          video_nadzor: false,
          alarm: false,
          niskoenergetska: false,
          bazen: false,
          rostilj: false,
          autobus: false,
          bolnica: false,
          dom_zdravlja: false,
          fakultet: false,
          jez_mor_rij: false,
          osnovna_skola: false,
          park_suma: false,
          sportski_objekt: false,
          srednja_skola: false,
          tramvaj: false,
          trgovacki_centar: false,
          vlak: false,
          vrtic: false,
          kontakt: '',
          user_id: null
        },
        errors : {
          tip: false,
          namjena: false,
          naslov: false,
          povrsina: false,
          soba: false,
          opis: false,
          cijena: false,
          zupanija: false,
          grad: false,
          adresa: false,
          broj_kupaona: false,
          grijanje: false,
          godina_iz: false,
          broj_park_mjes: false,
          kontakt: false
        }
    };
  },
  async created() {  
    if(user.isLogged == false){
      this.$router.push({name: 'Home'})
    }
    
    ZUPANIJE.forEach(element => { //zupanije predstavljaju polje svih zupanija
      this.zupanije.push(element) 
    }); 
    this.zupanije.sort((a, b) => (a.name > b.name) ? 1 : -1)
    
    TIP_PROSTORA.forEach(element => { //zupanije predstavljaju polje svih zupanija
      this.tip_prostora.push(element) 
    });
    SOBNOST.forEach(element => {
      this.sobnost.push(element) 
    });
    NAMIJENA.forEach(element => {
      this.namijena.push(element) 
    });
    GODINE.forEach(element => {
      this.godine.push(element) 
    });
    STANJE.forEach(element => {
      this.stanje.push(element) 
    });
    PROZORI.forEach(element => {
      this.prozori.push(element) 
    });
    VRATA.forEach(element => {
      this.vrata.push(element) 
    });
    PODOVI.forEach(element => {
      this.podovi.push(element) 
    }); 
    GRADOVI.forEach(element => {
      this.gradovi.push(element) 
    });  
    

    this.data.user_id = user.id

    this.oglasi = await getOglas();  



    this.id = this.$route.params.id

    this.oglasi.forEach(element => {
        if(this.id == element.id){
            this.oglas = element
        }
    });
          
          this.data.tip = this.oglas.tip
          this.data.namjena = this.oglas.namjena
          this.data.naslov = this.oglas.naslov
          this.data.povrsina = this.oglas.povrsina
          this.data.soba = this.oglas.soba
          this.data.opis = this.oglas.opis
          this.data.cijena = this.oglas.cijena
          this.data.zupanija = this.oglas.zupanija
          this.data.grad = this.oglas.grad
          this.data.adresa = this.oglas.adresa
          this.data.broj_kupaona = this.oglas.broj_kupaona
          this.data.san_cvor = this.oglas.san_cvor
          this.data.balkon = this.oglas.balkon
          this.data.terasa = this.oglas.terasa
          this.data.etaza = this.oglas.etaza
          this.data.grijanje = this.oglas.grijanje
          this.data.godina_iz = this.oglas.godina_iz
          this.data.kat = this.oglas.kat
          this.data.en_cer = this.oglas.en_car
          this.data.tip_gradnja = this.oglas.tip_gradnja
          this.data.stanja = this.oglas.stanja
          this.data.prozor = this.oglas.prozor
          this.data.vanjska_vrata = this.oglas.vanjska_vrata
          this.data.pod = this.oglas.pod
          this.data.broj_park_mjes = this.oglas.broj_park_mjes
          if(this.oglas.podzemna_garaza == 1){
            this.data.podzemna_garaza = true
          }
          if(this.oglas.parkirno_mjesto == 1){
            this.data.parkirno_mjesto = true
          }  
          if(this.oglas.samostojeca_garaza == 1){
            this.data.samostojeca_garaza = true
          } 
          if(this.oglas.javni_parking == 1){
            this.data.javni_parking = true
          } 
          if(this.oglas.gradevinska_dozvola == 1){
            this.data.gradevinska_dozvola = true
          } 
          if(this.oglas.vlasnicki_list == 1){
            this.data.vlasnicki_list = true
          } 
          if(this.oglas.uporabna_dozvola == 1){
            this.data.uporabna_dozvola = true
          } 
          if(this.oglas.lift == 1){
            this.data.lift = true
          } 
          if(this.oglas.klima == 1){
            this.data.klima = true
          } 
          if(this.oglas.pristup_inv == 1){
            this.data.pristup_inv = true
          } 
          if(this.oglas.fiksni_tel == 1){
            this.data.fiksni_tel = true
          }   
          if(this.oglas.isdn == 1){
            this.data.isdn = true
          }  
          if(this.oglas.adsl == 1){
            this.data.adsl = true
          }  
          if(this.oglas.wifi == 1){
            this.data.wifi = true
          }  
          if(this.oglas.kablovski == 1){
            this.data.kablovski = true
          }  
          if(this.oglas.opticki == 1){
            this.data.opticki = true
          }  
          if(this.oglas.tv_antena == 1){
            this.data.tv_antena = true
          }  
          if(this.oglas.satelitski_prikljucak == 1){
            this.data.satelitski_prikljucak = true
          }  
          if(this.oglas.video_nadzor == 1){
            this.data.video_nadzor = true
          }  
          if(this.oglas.alarm == 1){
            this.data.alarm = true
          }   
          if(this.oglas.niskoenergetska == 1){
            this.data.niskoenergetska = true
          }   
          if(this.oglas.rostilj == 1){
            this.data.rostilj = true
          }   
          if(this.oglas.bazen == 1){
            this.data.bazen = true
          }   
          if(this.oglas.autobus == 1){
            this.data.autobus = true
          }   
          if(this.oglas.bolnica == 1){
            this.data.bolnica = true
          }   
          if(this.oglas.dom_zdravlja == 1){
            this.data.dom_zdravlja = true
          }   
          if(this.oglas.fakultet == 1){
            this.data.fakultet = true
          }   
          if(this.oglas.jez_mor_rij == 1){
            this.data.jez_mor_rij = true
          }   
          if(this.oglas.osnovna_skola == 1){
            this.data.osnovna_skola = true
          }   
          if(this.oglas.park_suma == 1){
            this.data.park_suma = true
          }   
          if(this.oglas.sportski_objekt == 1){
            this.data.sportski_objekt = true
          }   
          if(this.oglas.srednja_skola == 1){
            this.data.srednja_skola = true
          }     
          if(this.oglas.tramvaj == 1){
            this.data.tramvaj = true
          }   
          if(this.oglas.trgovacki_centar == 1){
            this.data.trgovacki_centar = true
          }   
          if(this.oglas.vlak == 1){
            this.data.vlak = true
          }   
          if(this.oglas.vrtic == 1){
            this.data.vrtic = true
          }     
          this.data.kontakt = this.oglas.kontakt
          this.data.user_id = this.oglas.user_id 
    
  },
  methods: {
    editOglas(){ 
      this.errors.tip = false
      this.errors.namjena = false
      this.errors.naslov= false
      this.errors.povrsina= false
      this.errors.soba= false
      this.errors.opis= false
      this.errors.cijena= false
      this.errors.zupanija= false
      this.errors.grad= false
      this.errors.adresa= false
      this.errors.broj_kupaona= false
      this.errors.grijanje= false
      this.errors.godina_iz= false
      this.errors.broj_park_mjes= false
      this.errors.kontakt= false

      if(!this.data.tip){
        this.errors.tip = true
      }
      if(!this.data.namjena){
        this.errors.namjena = true
      }
      if(!this.data.naslov){
        this.errors.naslov = true
      }
      if(!this.data.povrsina){
        this.errors.povrsina = true
      }
      if(!this.data.soba){
        this.errors.soba = true
      }
      if(!this.data.opis){
        this.errors.opis = true
      }
      if(!this.data.cijena){
        this.errors.cijena = true
      }
      if(!this.data.zupanija){
        this.errors.zupanija = true
      }
      if(!this.data.grad){
        this.errors.grad = true
      }
      if(!this.data.adresa){
        this.errors.adresa = true
      }
      if(!this.data.broj_kupaona){
        this.errors.broj_kupaona = true
      }
      if(!this.data.grijanje){
        this.errors.grijanje = true
      }
      if(!this.data.godina_iz){
        this.errors.godina_iz = true
      }
      if(!this.data.broj_park_mjes){
        this.errors.broj_park_mjes = true
      }
      if(!this.data.kontakt){
        this.errors.kontakt = true
      }
 
      Swal.fire({
            title: 'Jeste li sigurni da želite izmjeniti oglas?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Da, izmjeni!'
          })
          .then(res=>{ 
            if(res.isConfirmed == true){
              axios.post(`/api/update-oglas/${this.id}`, this.data)
              .then((res) =>{
                Swal.fire('Promjenjeno!', 'Uspješno ste promjenili oglas.', 'success')
                .then(res=>{
                  this.$router.go()
                })
              })
              .catch((e) =>{
                Swal.fire('Pogreška!', 'Pojavila se pogreška pri izmjeni oglasa', 'warning');
                console.log(e)
              })
            }
          })
          .catch(err=>{
            console.log(err)
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
.registracija{
  width: 80%;
  text-align: left;
  margin: auto;
  color: black;
}
.registracija h2{
  color: black;
  padding: 20px 0;
  font-weight: bold;
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
  width: 100%;
  padding-top: 40px;
  padding-bottom: 30px;
}
.button_korisnik button{
  width: 20%; 
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
}

.button_fotografije button{
  width: 70%; 
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-radius: 5px;
  padding-top: 8px;
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  background-color: #decb95;
  border-color:#decb95;
}

h4{
  padding: 20px;
}
button:hover{ 
  transform: scale(1.02);
  transition: transform 330ms ease-in-out;
}
.forma{
  width: 70%;
  margin: auto;
  padding-bottom: 20px;
}
label{
  width: 100%;
  margin: 5px;
  margin-left: 0px;
  text-align: left;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 17px;
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

.bez_ikone{
  padding: 10px;
}
 :focus-visible {
    outline: none;
}
select{
  width: 100%;
  font-size: 15px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid rgb(78, 78, 78);
  background: transparent;
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