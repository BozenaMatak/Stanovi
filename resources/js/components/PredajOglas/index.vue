<template>
  <div class="container">
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
                <label for="Povrsina">Površina *</label>
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

              <div class="col-6">
                <label for="Zupanija">Fotografije</label>
                <div class="button_fotografije" style="width:70%;">
                  <button type="submit">Odaberite fotografije</button>
                </div>
              </div>
 
              <div class="col-6" style="margin-bottom: 20px"> 
                <label for="Grad" style="margin-top:12px">Cijena *</label>
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
              <button @click.prevent="addOglas" type="submit">Predaj oglas</button>
            </div>           
      </div>        
    </div> 
  </div>   
</div>
</template>

<script>  

import axios from 'axios';
import {  PROZORI, VRATA, PODOVI,STANJE,GODINE,ZUPANIJE, TIP_PROSTORA, SOBNOST, NAMIJENA, GRADOVI } from '../../constants'; 

export default {
  name: 'register_private',
  data() {
    return {
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
  created() {  
    
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

    
  },
  methods: {
    addOglas(){ 
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
      if(!this.data.broj_park_mjes){
        this.errors.kontakt = true
      }
      axios.post('/api/predaj-oglas', this.data)
      .then(() =>{
        this.$router.push({name: 'Home'})
        console.log('saved')
      })
      .catch((e) =>{
        console.log(e.response.data.message)
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