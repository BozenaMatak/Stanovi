import axios from 'axios';

export const getOglas = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/dohvati-oglase`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          } 
        })
        .catch(err => { 
          console.log(err)
        });
    } catch (err) { 
      console.log(err)
    }
  });
};

export const getUser = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/user`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          } 
        })
        .catch(err => { 
          console.log(err)
        });
    } catch (err) { 
      console.log(err)
    }
  });
};

export const getOglas_tip = (tip) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/dohvati-oglase/${tip}`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data); 
          } 
        })
        .catch(err => { 
          console.log(err)
        });
    } catch (err) { 
      console.log(err)
    }
  });
};

export const getOglas_korisnik = (id_korisnik) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/dohvati-oglase-2/${id_korisnik}`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data); 
          } 
        })
        .catch(err => { 
          console.log(err)
        });
    } catch (err) { 
      console.log(err)
    }
  });
};