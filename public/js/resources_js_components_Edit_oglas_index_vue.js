(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Edit_oglas_index_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./resources/js/constants.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/index */ "./resources/js/api/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'edit-oglas',
  data: function data() {
    return {
      oglasi: [],
      oglas: {},
      id: null,
      name: '',
      podovi: [],
      pod: '',
      vrata: [],
      vanjska: '',
      prozori: [],
      prozor: '',
      stanje: [],
      stanja: '',
      godine: [],
      godina: '',
      zupanije: [],
      sobnost: [],
      soba: '',
      tip_prostora: [],
      gradovi: [],
      tip: '',
      namijena: [],
      namijene: '',
      zupanija: '',
      //zupanija predstavlja jednu zupaniju koju je korisnik odabrao prilikom registracije
      data: {
        tip: '',
        namjena: '',
        naslov: '',
        povrsina: '',
        soba: '',
        opis: '',
        cijena: '',
        zupanija: '',
        grad: '',
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
      errors: {
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
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (user.isLogged == false) {
                _this.$router.push({
                  name: 'Home'
                });
              }

              _constants__WEBPACK_IMPORTED_MODULE_2__.ZUPANIJE.forEach(function (element) {
                //zupanije predstavljaju polje svih zupanija
                _this.zupanije.push(element);
              });

              _this.zupanije.sort(function (a, b) {
                return a.name > b.name ? 1 : -1;
              });

              _constants__WEBPACK_IMPORTED_MODULE_2__.TIP_PROSTORA.forEach(function (element) {
                //zupanije predstavljaju polje svih zupanija
                _this.tip_prostora.push(element);
              });
              _constants__WEBPACK_IMPORTED_MODULE_2__.SOBNOST.forEach(function (element) {
                _this.sobnost.push(element);
              });
              _constants__WEBPACK_IMPORTED_MODULE_2__.NAMIJENA.forEach(function (element) {
                _this.namijena.push(element);
              });
              _constants__WEBPACK_IMPORTED_MODULE_2__.GODINE.forEach(function (element) {
                _this.godine.push(element);
              });
              _constants__WEBPACK_IMPORTED_MODULE_2__.STANJE.forEach(function (element) {
                _this.stanje.push(element);
              });
              _constants__WEBPACK_IMPORTED_MODULE_2__.PROZORI.forEach(function (element) {
                _this.prozori.push(element);
              });
              _constants__WEBPACK_IMPORTED_MODULE_2__.VRATA.forEach(function (element) {
                _this.vrata.push(element);
              });
              _constants__WEBPACK_IMPORTED_MODULE_2__.PODOVI.forEach(function (element) {
                _this.podovi.push(element);
              });
              _constants__WEBPACK_IMPORTED_MODULE_2__.GRADOVI.forEach(function (element) {
                _this.gradovi.push(element);
              });
              _this.data.user_id = user.id;
              _context.next = 15;
              return (0,_api_index__WEBPACK_IMPORTED_MODULE_3__.getOglas)();

            case 15:
              _this.oglasi = _context.sent;
              _this.id = _this.$route.params.id;

              _this.oglasi.forEach(function (element) {
                if (_this.id == element.id) {
                  _this.oglas = element;
                }
              });

              _this.data.tip = _this.oglas.tip;
              _this.data.namjena = _this.oglas.namjena;
              _this.data.naslov = _this.oglas.naslov;
              _this.data.povrsina = _this.oglas.povrsina;
              _this.data.soba = _this.oglas.soba;
              _this.data.opis = _this.oglas.opis;
              _this.data.cijena = _this.oglas.cijena;
              _this.data.zupanija = _this.oglas.zupanija;
              _this.data.grad = _this.oglas.grad;
              _this.data.adresa = _this.oglas.adresa;
              _this.data.broj_kupaona = _this.oglas.broj_kupaona;
              _this.data.san_cvor = _this.oglas.san_cvor;
              _this.data.balkon = _this.oglas.balkon;
              _this.data.terasa = _this.oglas.terasa;
              _this.data.etaza = _this.oglas.etaza;
              _this.data.grijanje = _this.oglas.grijanje;
              _this.data.godina_iz = _this.oglas.godina_iz;
              _this.data.kat = _this.oglas.kat;
              _this.data.en_cer = _this.oglas.en_car;
              _this.data.tip_gradnja = _this.oglas.tip_gradnja;
              _this.data.stanja = _this.oglas.stanja;
              _this.data.prozor = _this.oglas.prozor;
              _this.data.vanjska_vrata = _this.oglas.vanjska_vrata;
              _this.data.pod = _this.oglas.pod;
              _this.data.broj_park_mjes = _this.oglas.broj_park_mjes;

              if (_this.oglas.podzemna_garaza == 1) {
                _this.data.podzemna_garaza = true;
              }

              if (_this.oglas.parkirno_mjesto == 1) {
                _this.data.parkirno_mjesto = true;
              }

              if (_this.oglas.samostojeca_garaza == 1) {
                _this.data.samostojeca_garaza = true;
              }

              if (_this.oglas.javni_parking == 1) {
                _this.data.javni_parking = true;
              }

              if (_this.oglas.gradevinska_dozvola == 1) {
                _this.data.gradevinska_dozvola = true;
              }

              if (_this.oglas.vlasnicki_list == 1) {
                _this.data.vlasnicki_list = true;
              }

              if (_this.oglas.uporabna_dozvola == 1) {
                _this.data.uporabna_dozvola = true;
              }

              if (_this.oglas.lift == 1) {
                _this.data.lift = true;
              }

              if (_this.oglas.klima == 1) {
                _this.data.klima = true;
              }

              if (_this.oglas.pristup_inv == 1) {
                _this.data.pristup_inv = true;
              }

              if (_this.oglas.fiksni_tel == 1) {
                _this.data.fiksni_tel = true;
              }

              if (_this.oglas.isdn == 1) {
                _this.data.isdn = true;
              }

              if (_this.oglas.adsl == 1) {
                _this.data.adsl = true;
              }

              if (_this.oglas.wifi == 1) {
                _this.data.wifi = true;
              }

              if (_this.oglas.kablovski == 1) {
                _this.data.kablovski = true;
              }

              if (_this.oglas.opticki == 1) {
                _this.data.opticki = true;
              }

              if (_this.oglas.tv_antena == 1) {
                _this.data.tv_antena = true;
              }

              if (_this.oglas.satelitski_prikljucak == 1) {
                _this.data.satelitski_prikljucak = true;
              }

              if (_this.oglas.video_nadzor == 1) {
                _this.data.video_nadzor = true;
              }

              if (_this.oglas.alarm == 1) {
                _this.data.alarm = true;
              }

              if (_this.oglas.niskoenergetska == 1) {
                _this.data.niskoenergetska = true;
              }

              if (_this.oglas.rostilj == 1) {
                _this.data.rostilj = true;
              }

              if (_this.oglas.bazen == 1) {
                _this.data.bazen = true;
              }

              if (_this.oglas.autobus == 1) {
                _this.data.autobus = true;
              }

              if (_this.oglas.bolnica == 1) {
                _this.data.bolnica = true;
              }

              if (_this.oglas.dom_zdravlja == 1) {
                _this.data.dom_zdravlja = true;
              }

              if (_this.oglas.fakultet == 1) {
                _this.data.fakultet = true;
              }

              if (_this.oglas.jez_mor_rij == 1) {
                _this.data.jez_mor_rij = true;
              }

              if (_this.oglas.osnovna_skola == 1) {
                _this.data.osnovna_skola = true;
              }

              if (_this.oglas.park_suma == 1) {
                _this.data.park_suma = true;
              }

              if (_this.oglas.sportski_objekt == 1) {
                _this.data.sportski_objekt = true;
              }

              if (_this.oglas.srednja_skola == 1) {
                _this.data.srednja_skola = true;
              }

              if (_this.oglas.tramvaj == 1) {
                _this.data.tramvaj = true;
              }

              if (_this.oglas.trgovacki_centar == 1) {
                _this.data.trgovacki_centar = true;
              }

              if (_this.oglas.vlak == 1) {
                _this.data.vlak = true;
              }

              if (_this.oglas.vrtic == 1) {
                _this.data.vrtic = true;
              }

              _this.data.kontakt = _this.oglas.kontakt;
              _this.data.user_id = _this.oglas.user_id;

            case 81:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    editOglas: function editOglas() {
      var _this2 = this;

      this.errors.tip = false;
      this.errors.namjena = false;
      this.errors.naslov = false;
      this.errors.povrsina = false;
      this.errors.soba = false;
      this.errors.opis = false;
      this.errors.cijena = false;
      this.errors.zupanija = false;
      this.errors.grad = false;
      this.errors.adresa = false;
      this.errors.broj_kupaona = false;
      this.errors.grijanje = false;
      this.errors.godina_iz = false;
      this.errors.broj_park_mjes = false;
      this.errors.kontakt = false;

      if (!this.data.tip) {
        this.errors.tip = true;
      }

      if (!this.data.namjena) {
        this.errors.namjena = true;
      }

      if (!this.data.naslov) {
        this.errors.naslov = true;
      }

      if (!this.data.povrsina) {
        this.errors.povrsina = true;
      }

      if (!this.data.soba) {
        this.errors.soba = true;
      }

      if (!this.data.opis) {
        this.errors.opis = true;
      }

      if (!this.data.cijena) {
        this.errors.cijena = true;
      }

      if (!this.data.zupanija) {
        this.errors.zupanija = true;
      }

      if (!this.data.grad) {
        this.errors.grad = true;
      }

      if (!this.data.adresa) {
        this.errors.adresa = true;
      }

      if (!this.data.broj_kupaona) {
        this.errors.broj_kupaona = true;
      }

      if (!this.data.grijanje) {
        this.errors.grijanje = true;
      }

      if (!this.data.godina_iz) {
        this.errors.godina_iz = true;
      }

      if (!this.data.broj_park_mjes) {
        this.errors.broj_park_mjes = true;
      }

      if (!this.data.kontakt) {
        this.errors.kontakt = true;
      }

      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        title: 'Jeste li sigurni da želite izmjeniti oglas?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Da, izmjeni!'
      }).then(function (res) {
        if (res.isConfirmed == true) {
          axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/update-oglas/".concat(_this2.id), _this2.data).then(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Promjenjeno!', 'Uspješno ste promjenili oglas.', 'success').then(function (res) {
              _this2.$router.go();
            });
          })["catch"](function (e) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Pogreška!', 'Pojavila se pogreška pri izmjeni oglasa', 'warning');
            console.log(e);
          });
        }
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=template&id=6f0fc802&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=template&id=6f0fc802&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6f0fc802"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  style: {
    "position": "relative"
  }
};
var _hoisted_2 = {
  "class": "container",
  style: {
    "margin-bottom": "70px"
  }
};
var _hoisted_3 = {
  "class": "shadow"
};
var _hoisted_4 = {
  "class": "col-12"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "registracija"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, " Predaja novog oglasa ")], -1
  /* HOISTED */
  );
});

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "tekst"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    style: {
      "width": "auto",
      "padding-top": "0",
      "font-weight": "bold"
    }
  }, "Osnovni podaci ")], -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "form"
};
var _hoisted_8 = {
  "class": "forma"
};
var _hoisted_9 = {
  "class": "email_username row section"
};
var _hoisted_10 = {
  "class": "col-6"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "email"
  }, "Tip nekretnine *", -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  "class": "icons"
};

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir nekretnine", -1
  /* HOISTED */
  );
});

var _hoisted_14 = ["value"];
var _hoisted_15 = {
  "class": "error"
};
var _hoisted_16 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_17 = {
  "class": "col-6"
};

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Username"
  }, "Namjena oglasa *", -1
  /* HOISTED */
  );
});

var _hoisted_19 = {
  "class": "icons"
};

var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir namijene", -1
  /* HOISTED */
  );
});

var _hoisted_21 = ["value"];
var _hoisted_22 = {
  "class": "error"
};
var _hoisted_23 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_24 = {
  "class": "email_username row section"
};
var _hoisted_25 = {
  "class": ""
};

var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Naslov"
  }, "Naslov *", -1
  /* HOISTED */
  );
});

var _hoisted_27 = {
  "class": "error"
};
var _hoisted_28 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_29 = {
  "class": "email_username row section"
};
var _hoisted_30 = {
  "class": "col-6"
};

var _hoisted_31 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Povrsina"
  }, "Površina (m²) *", -1
  /* HOISTED */
  );
});

var _hoisted_32 = {
  "class": "icons"
};
var _hoisted_33 = {
  "class": "error"
};
var _hoisted_34 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_35 = {
  "class": "col-6"
};

var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Prezime"
  }, "Sobnost *", -1
  /* HOISTED */
  );
});

var _hoisted_37 = {
  "class": "icons"
};

var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir sobnosti", -1
  /* HOISTED */
  );
});

var _hoisted_39 = ["value"];
var _hoisted_40 = {
  "class": "error"
};
var _hoisted_41 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_42 = {
  "class": "row"
};

var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Drzava"
  }, "Opis*", -1
  /* HOISTED */
  );
});

var _hoisted_44 = {
  "class": "icons"
};
var _hoisted_45 = {
  "class": "error"
};
var _hoisted_46 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_47 = {
  "class": "col-6",
  style: {
    "margin-bottom": "20px"
  }
};

var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Grad",
    style: {
      "margin-top": "12px"
    }
  }, "Cijena (€)*", -1
  /* HOISTED */
  );
});

var _hoisted_49 = {
  "class": "icons"
};
var _hoisted_50 = {
  "class": "error"
};
var _hoisted_51 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_52 = {
  "class": "col-6",
  style: {
    "margin-bottom": "20px"
  }
};

var _hoisted_53 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Zupanija"
  }, "Županija *", -1
  /* HOISTED */
  );
});

var _hoisted_54 = {
  "class": "icons"
};

var _hoisted_55 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir županije", -1
  /* HOISTED */
  );
});

var _hoisted_56 = ["value"];
var _hoisted_57 = {
  "class": "error"
};
var _hoisted_58 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_59 = {
  "class": "col-6",
  style: {
    "margin-bottom": "20px"
  }
};

var _hoisted_60 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Grad"
  }, "Grad *", -1
  /* HOISTED */
  );
});

var _hoisted_61 = {
  "class": "icons"
};

var _hoisted_62 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir grada", -1
  /* HOISTED */
  );
});

var _hoisted_63 = ["value"];
var _hoisted_64 = {
  "class": "error"
};
var _hoisted_65 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_66 = {
  "class": "col-6"
};

var _hoisted_67 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Adresa"
  }, "Adresa *", -1
  /* HOISTED */
  );
});

var _hoisted_68 = {
  "class": "icons"
};
var _hoisted_69 = {
  "class": "error"
};
var _hoisted_70 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};

var _hoisted_71 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
    style: {
      "width": "78%",
      "margin": "30px auto"
    }
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_72 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "tekst"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    style: {
      "width": "auto",
      "padding-top": "0",
      "font-weight": "bold"
    }
  }, "Detalji o nekretnini ")], -1
  /* HOISTED */
  );
});

var _hoisted_73 = {
  "class": "forma"
};
var _hoisted_74 = {
  "class": "row",
  style: {
    "margin-bottom": "20px"
  }
};
var _hoisted_75 = {
  "class": "col-3"
};

var _hoisted_76 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Kupaona"
  }, "Broj kupaonica *", -1
  /* HOISTED */
  );
});

var _hoisted_77 = {
  "class": "icons"
};
var _hoisted_78 = {
  "class": "error"
};
var _hoisted_79 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_80 = {
  "class": "col-3"
};

var _hoisted_81 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Sanitarni cvor"
  }, "Broj sanitarnih čvorova", -1
  /* HOISTED */
  );
});

var _hoisted_82 = {
  "class": "icons"
};
var _hoisted_83 = {
  "class": "col-3"
};

var _hoisted_84 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "balkon"
  }, "Broj balkona", -1
  /* HOISTED */
  );
});

var _hoisted_85 = {
  "class": "icons"
};
var _hoisted_86 = {
  "class": "col-3"
};

var _hoisted_87 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Parkiralisno mjesto"
  }, "Broj parkirališnih mjesta *", -1
  /* HOISTED */
  );
});

var _hoisted_88 = {
  "class": "icons"
};
var _hoisted_89 = {
  "class": "error"
};
var _hoisted_90 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_91 = {
  "class": "row",
  style: {
    "margin-bottom": "20px"
  }
};
var _hoisted_92 = {
  "class": "col-3"
};

var _hoisted_93 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "terasa"
  }, "Broj terasa", -1
  /* HOISTED */
  );
});

var _hoisted_94 = {
  "class": "icons"
};
var _hoisted_95 = {
  "class": "col-3"
};

var _hoisted_96 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "etaza"
  }, "Broj etaža", -1
  /* HOISTED */
  );
});

var _hoisted_97 = {
  "class": "icons"
};
var _hoisted_98 = {
  "class": "col-3"
};

var _hoisted_99 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Grijanje"
  }, "Grijanje *", -1
  /* HOISTED */
  );
});

var _hoisted_100 = {
  "class": "icons"
};
var _hoisted_101 = {
  "class": "error"
};
var _hoisted_102 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_103 = {
  "class": "col-3"
};

var _hoisted_104 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "tip prostora"
  }, "Godina izgradnje *", -1
  /* HOISTED */
  );
});

var _hoisted_105 = {
  "class": "icons"
};

var _hoisted_106 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir godine izgradnje", -1
  /* HOISTED */
  );
});

var _hoisted_107 = ["value"];
var _hoisted_108 = {
  "class": "error"
};
var _hoisted_109 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_110 = {
  "class": "row",
  style: {
    "margin-bottom": "20px"
  }
};
var _hoisted_111 = {
  "class": "col-3"
};

var _hoisted_112 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Kat"
  }, "Kat", -1
  /* HOISTED */
  );
});

var _hoisted_113 = {
  "class": "icons"
};
var _hoisted_114 = {
  "class": "col-3"
};

var _hoisted_115 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Energetski certifikat"
  }, "Energetski certifikat", -1
  /* HOISTED */
  );
});

var _hoisted_116 = {
  "class": "icons"
};
var _hoisted_117 = {
  "class": "col-3"
};

var _hoisted_118 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Tipgradnja"
  }, "Tip gradnje", -1
  /* HOISTED */
  );
});

var _hoisted_119 = {
  "class": "icons"
};
var _hoisted_120 = {
  "class": "col-3"
};

var _hoisted_121 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Stanje"
  }, "Stanje nekretnine", -1
  /* HOISTED */
  );
});

var _hoisted_122 = {
  "class": "icons"
};

var _hoisted_123 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir stanja nekretnine", -1
  /* HOISTED */
  );
});

var _hoisted_124 = ["value"];
var _hoisted_125 = {
  "class": "row",
  style: {
    "margin-bottom": "20px"
  }
};
var _hoisted_126 = {
  "class": "col-3"
};

var _hoisted_127 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Prozor"
  }, "Tip prozora", -1
  /* HOISTED */
  );
});

var _hoisted_128 = {
  "class": "icons"
};

var _hoisted_129 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir tipa prozora", -1
  /* HOISTED */
  );
});

var _hoisted_130 = ["value"];
var _hoisted_131 = {
  "class": "col-3"
};

var _hoisted_132 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Adresa"
  }, "Vanjska vrata", -1
  /* HOISTED */
  );
});

var _hoisted_133 = {
  "class": "icons"
};

var _hoisted_134 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir vanjskih vrata", -1
  /* HOISTED */
  );
});

var _hoisted_135 = ["value"];
var _hoisted_136 = {
  "class": "col-3"
};

var _hoisted_137 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Tip poda"
  }, "Tip poda", -1
  /* HOISTED */
  );
});

var _hoisted_138 = {
  "class": "icons"
};

var _hoisted_139 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir tipa poda", -1
  /* HOISTED */
  );
});

var _hoisted_140 = ["value"];

var _hoisted_141 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_142 = {
  "class": "row",
  style: {
    "margin-bottom": "20px"
  }
};
var _hoisted_143 = {
  "class": "col-3"
};

var _hoisted_144 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Adresa"
  }, "Garaža", -1
  /* HOISTED */
  );
});

var _hoisted_145 = {
  "class": "row"
};
var _hoisted_146 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_147 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "podzemna_garaza",
    style: {
      "font-weight": "300 !important"
    }
  }, " Podzemna garaža"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_148 = {
  "class": "row"
};
var _hoisted_149 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_150 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "samostojeca_garaza"
  }, " Samostojeća garaža"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_151 = {
  "class": "row"
};
var _hoisted_152 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_153 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "park_mjes"
  }, " Parkirno mjesto"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_154 = {
  "class": "row"
};
var _hoisted_155 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_156 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "jav_park"
  }, " Javni parking"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_157 = {
  "class": "col-3",
  style: {
    "margin-top": "35px"
  }
};
var _hoisted_158 = {
  "class": "row"
};
var _hoisted_159 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_160 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "grad_doz"
  }, " Građevinska dozvola"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_161 = {
  "class": "col-3",
  style: {
    "margin-top": "35px"
  }
};
var _hoisted_162 = {
  "class": "row"
};
var _hoisted_163 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_164 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "vlas_list"
  }, " Vlasnički list"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_165 = {
  "class": "col-3",
  style: {
    "margin-top": "35px"
  }
};
var _hoisted_166 = {
  "class": "row"
};
var _hoisted_167 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_168 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "up_doz"
  }, " Uporabna dozvola"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_169 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
    style: {
      "width": "78%",
      "margin": "30px auto"
    }
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_170 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "tekst"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    style: {
      "width": "auto",
      "padding-top": "0",
      "font-weight": "bold"
    }
  }, "Dodatno ")], -1
  /* HOISTED */
  );
});

var _hoisted_171 = {
  "class": "forma"
};
var _hoisted_172 = {
  "class": "row",
  style: {
    "margin-bottom": "20px"
  }
};
var _hoisted_173 = {
  "class": "col-3"
};

var _hoisted_174 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Dodatno", -1
  /* HOISTED */
  );
});

var _hoisted_175 = {
  "class": "row"
};
var _hoisted_176 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_177 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "lift"
  }, " Lift"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_178 = {
  "class": "row"
};
var _hoisted_179 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_180 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "klima"
  }, " Klima"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_181 = {
  "class": "row"
};
var _hoisted_182 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_183 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "pristup_invd"
  }, " Pristup invalidima"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_184 = {
  "class": "row"
};
var _hoisted_185 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_186 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "fiks_tel"
  }, " Fiksni telefon"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_187 = {
  "class": "row"
};
var _hoisted_188 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_189 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "isdn"
  }, " ISDN priključak"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_190 = {
  "class": "row"
};
var _hoisted_191 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_192 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "adsl"
  }, " ADSL"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_193 = {
  "class": "row"
};
var _hoisted_194 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_195 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "wifi"
  }, " WIFI"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_196 = {
  "class": "row"
};
var _hoisted_197 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_198 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "kabl"
  }, " Kablovski pristup"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_199 = {
  "class": "row"
};
var _hoisted_200 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_201 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "optik"
  }, " Optički pristup"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_202 = {
  "class": "row"
};
var _hoisted_203 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_204 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "tv_antena"
  }, " TV antena"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_205 = {
  "class": "row"
};
var _hoisted_206 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_207 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "sat_prik"
  }, " Satelitski priključak"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_208 = {
  "class": "row"
};
var _hoisted_209 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_210 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "video"
  }, " Video nadzor"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_211 = {
  "class": "row"
};
var _hoisted_212 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_213 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "alarm"
  }, " Alarm"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_214 = {
  "class": "row"
};
var _hoisted_215 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_216 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "nisko"
  }, " Niskoenergetska učinkovitost"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_217 = {
  "class": "row"
};
var _hoisted_218 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_219 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "bazen"
  }, " Bazen"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_220 = {
  "class": "row"
};
var _hoisted_221 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_222 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "rostilj"
  }, " Roštilj"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_223 = {
  "class": "col-3"
};

var _hoisted_224 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Blizina", -1
  /* HOISTED */
  );
});

var _hoisted_225 = {
  "class": "row"
};
var _hoisted_226 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_227 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "autobus"
  }, " Autobus"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_228 = {
  "class": "row"
};
var _hoisted_229 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_230 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "bolnica"
  }, " Bolnica"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_231 = {
  "class": "row"
};
var _hoisted_232 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_233 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "dom_zdrav"
  }, " Dom zdravlja"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_234 = {
  "class": "row"
};
var _hoisted_235 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_236 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "fakultet"
  }, " Fakultet"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_237 = {
  "class": "row"
};
var _hoisted_238 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_239 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "jez_mor_rij"
  }, " Jezero, more ili rijeka"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_240 = {
  "class": "row"
};
var _hoisted_241 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_242 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "os_skola"
  }, " Osnovna škola"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_243 = {
  "class": "row"
};
var _hoisted_244 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_245 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "park_suma"
  }, " Park ili šuma"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_246 = {
  "class": "row"
};
var _hoisted_247 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_248 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "sportski_objekt"
  }, " Sportski objekti"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_249 = {
  "class": "row"
};
var _hoisted_250 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_251 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "srednja_skola"
  }, " Srednja škola"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_252 = {
  "class": "row"
};
var _hoisted_253 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_254 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "tramvaj"
  }, " Tramvaj"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_255 = {
  "class": "row"
};
var _hoisted_256 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_257 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "trg_centar"
  }, " Trgovački centar"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_258 = {
  "class": "row"
};
var _hoisted_259 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_260 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "vlak"
  }, " Vlak"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_261 = {
  "class": "row"
};
var _hoisted_262 = {
  "class": "col-6",
  style: {
    "padding": "0"
  }
};

var _hoisted_263 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "padding": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "vrtic"
  }, " Vrtić"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1
  /* HOISTED */
  );
});

var _hoisted_264 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
    style: {
      "width": "78%",
      "margin": "30px auto"
    }
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_265 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "tekst"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    style: {
      "width": "auto",
      "padding-top": "0",
      "font-weight": "bold"
    }
  }, "Kontakt broj ")], -1
  /* HOISTED */
  );
});

var _hoisted_266 = {
  "class": "forma"
};
var _hoisted_267 = {
  "class": "row",
  style: {
    "margin-bottom": "20px"
  }
};
var _hoisted_268 = {
  "class": "col-6"
};

var _hoisted_269 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Kontakt"
  }, "Kontakt broj", -1
  /* HOISTED */
  );
});

var _hoisted_270 = {
  "class": "icons"
};
var _hoisted_271 = {
  "class": "error"
};
var _hoisted_272 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};

var _hoisted_273 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
    style: {
      "width": "78%",
      "margin": "30px auto"
    }
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_274 = {
  "class": "button_korisnik"
};

var _hoisted_275 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"site-footer\" style=\"height:300px;background-color:#666655;\" data-v-6f0fc802><div class=\"container\" data-v-6f0fc802><div class=\"row\" data-v-6f0fc802><div class=\"col-sm-12 col-md-6\" data-v-6f0fc802><h4 style=\"margin-top:15px;padding:0;\" data-v-6f0fc802>O nama</h4><p class=\"text-justify\" data-v-6f0fc802><span style=\"color:#a39053;font-weight:bold;\" data-v-6f0fc802>Find a Place</span> aplikacija omogućava pronalazak i oglašavanje nekretnina koje se mogu kupiti/prodati ili iznajmiti. <br data-v-6f0fc802><br data-v-6f0fc802> Cilj aplikacije jest omogućiti korisnicima da na brz i jednostavan način mogu pregledavati nekretnine različitih tipova i namjene ili oglasiti svoju nekretninu. </p></div><div class=\"col-xs-6 col-md-3\" style=\"padding:0;\" data-v-6f0fc802><h4 style=\"margin-top:15px;padding:0;\" data-v-6f0fc802>Kategorije</h4><ul class=\"footer-links\" style=\"margin-left:30px;\" data-v-6f0fc802><li data-v-6f0fc802>Stan</li><li data-v-6f0fc802>Kuća</li><li data-v-6f0fc802>Garsonjera</li><li data-v-6f0fc802>Apartman</li><li data-v-6f0fc802>Vikendica</li><li data-v-6f0fc802>Ostalo</li></ul></div><div class=\"col-xs-6 col-md-3\" data-v-6f0fc802><h4 style=\"margin-top:15px;padding:0;\" data-v-6f0fc802>Podaci</h4><ul class=\"footer-links\" data-v-6f0fc802><li data-v-6f0fc802>findaplace@gmail.com</li><li data-v-6f0fc802>15 Gajeva Street, 10000 Zagreb, Croatia</li><li data-v-6f0fc802>+385 1 4815 111</li><li data-v-6f0fc802>+385 98 367 582</li></ul></div></div><hr data-v-6f0fc802></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.data.tip = $event;
    }),
    required: ""
  }, [_hoisted_13, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.tip_prostora, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_14);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.tip]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [$data.errors.tip ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_16, " Tip nekretnine je obavezan! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.data.namjena = $event;
    }),
    required: ""
  }, [_hoisted_20, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.namijena, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_21);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.namjena]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [$data.errors.namjena ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_23, " Namjena oglasa je obavezna! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.data.naslov = $event;
    }),
    "class": "bez_ikone",
    type: "text",
    id: "Naslov",
    name: "Naslov",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.naslov]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [$data.errors.naslov ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_28, " Naslov je obavezan! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.data.povrsina = $event;
    }),
    type: "text",
    id: "Povrsina",
    name: "Povrsina",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.povrsina]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [$data.errors.povrsina ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_34, " Površina je obavezna! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.data.soba = $event;
    }),
    required: ""
  }, [_hoisted_38, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.sobnost, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_39);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.soba]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [$data.errors.soba ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_41, " Sobnost je obavezna! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.data.opis = $event;
    }),
    style: {
      "padding": "30px",
      "width": "100%",
      "border-radius": "8px"
    },
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.opis]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [$data.errors.opis ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_46, " Opis je obavezan! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.data.cijena = $event;
    }),
    "class": "bez_ikone",
    type: "text",
    id: "Cijena",
    name: "Cijena",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.cijena]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [$data.errors.cijena ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_51, " Cijena je obavezna! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.data.zupanija = $event;
    }),
    required: ""
  }, [_hoisted_55, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.zupanije, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_56);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.zupanija]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [$data.errors.zupanija ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_58, " Županija je obavezna! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.data.grad = $event;
    }),
    required: ""
  }, [_hoisted_62, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.gradovi, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_63);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.grad]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [$data.errors.grad ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_65, " Grad je obavezan! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "Adresa",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.data.adresa = $event;
    }),
    name: "Adresa",
    placeholder: "Adresa",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.adresa]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [$data.errors.adresa ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_70, " Adresa je obavezna! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), _hoisted_71, _hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [_hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.data.broj_kupaona = $event;
    }),
    type: "text",
    id: "Kupaona",
    name: "Kupaona",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.broj_kupaona]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [$data.errors.broj_kupaona ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_79, " Broj kupaonica je obavezan! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "Sanitarni cvor",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.data.san_cvor = $event;
    }),
    name: "Sanitarni cvor"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.san_cvor]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "balkon",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.data.balkon = $event;
    }),
    name: "balkon"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.balkon]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [_hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "Parkiralisno mjesto",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.data.broj_park_mjes = $event;
    }),
    name: "Parkiralisno mjesto",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.broj_park_mjes]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [$data.errors.broj_park_mjes ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_90, " Broj parkirališnih mjesta je obavezan! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [_hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "terasa",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.data.terasa = $event;
    }),
    name: "terasa"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.terasa]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "etaza",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.data.etaza = $event;
    }),
    name: "etaza"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.etaza]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [_hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "Grijanje",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.data.grijanje = $event;
    }),
    name: "Grijanje",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.grijanje]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [$data.errors.grijanje ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_102, " Grijanje je obavezno! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [_hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $data.data.godina_iz = $event;
    }),
    required: ""
  }, [_hoisted_106, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.godine, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_107);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.godina_iz]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [$data.errors.godina_iz ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_109, " Godina izgradnje je obavezna! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [_hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.data.kat = $event;
    }),
    type: "text",
    id: "Kat",
    name: "Kat"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.kat]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [_hoisted_115, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "Energetski certifikat",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $data.data.en_cer = $event;
    }),
    name: "Energetski certifikat"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.en_cer]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [_hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "Tipgradnja",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.data.tip_gradnja = $event;
    }),
    name: "Tipgradnja"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.tip_gradnja]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [_hoisted_121, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $data.data.stanja = $event;
    })
  }, [_hoisted_123, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.stanje, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_124);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.stanja]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [_hoisted_127, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $data.data.prozor = $event;
    })
  }, [_hoisted_129, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.prozori, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_130);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.prozor]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [_hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $data.data.vanjska_vrata = $event;
    })
  }, [_hoisted_134, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.vrata, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_135);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.vanjska_vrata]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [_hoisted_137, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_138, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $data.data.pod = $event;
    })
  }, [_hoisted_139, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.podovi, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_140);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.pod]])])]), _hoisted_141]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [_hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_146, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "podzemna_garaza",
    name: "podzemna_garaza",
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $data.data.podzemna_garaza = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.podzemna_garaza]])]), _hoisted_147]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "samostojeca_garaza",
    name: "samostojeca_garaza",
    "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
      return $data.data.samostojeca_garaza = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.samostojeca_garaza]])]), _hoisted_150]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "park_mjes",
    name: "park_mjes",
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $data.data.parkirno_mjesto = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.parkirno_mjesto]])]), _hoisted_153]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_155, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "jav_park",
    name: "jav_park",
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return $data.data.javni_parking = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.javni_parking]])]), _hoisted_156])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_157, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_158, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "grad_doz",
    name: "grad_doz",
    "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
      return $data.data.gradevinska_dozvola = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.gradevinska_dozvola]])]), _hoisted_160])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_161, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "vlas_list",
    name: "vlas_list",
    "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
      return $data.data.vlasnicki_list = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.vlasnicki_list]])]), _hoisted_164])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_165, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_167, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "up_doz",
    name: "up_doz",
    "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
      return $data.data.uporabna_dozvola = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.uporabna_dozvola]])]), _hoisted_168])])])]), _hoisted_169, _hoisted_170, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_171, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_172, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_173, [_hoisted_174, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_175, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_176, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "lift",
    name: "lift",
    "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
      return $data.data.lift = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.lift]])]), _hoisted_177]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_178, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_179, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "klima",
    name: "klima",
    "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
      return $data.data.klima = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.klima]])]), _hoisted_180]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_181, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "pristup_invd",
    name: "pristup_invd",
    "onUpdate:modelValue": _cache[34] || (_cache[34] = function ($event) {
      return $data.data.pristup_inv = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.pristup_inv]])]), _hoisted_183]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_184, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "fiks_tel",
    name: "fiks_tel",
    "onUpdate:modelValue": _cache[35] || (_cache[35] = function ($event) {
      return $data.data.fiksni_tel = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.fiksni_tel]])]), _hoisted_186]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_187, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_188, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "isdn",
    name: "isdn",
    "onUpdate:modelValue": _cache[36] || (_cache[36] = function ($event) {
      return $data.data.isdn = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.isdn]])]), _hoisted_189]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_190, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_191, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "adsl",
    name: "adsl",
    "onUpdate:modelValue": _cache[37] || (_cache[37] = function ($event) {
      return $data.data.adsl = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.adsl]])]), _hoisted_192]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_193, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_194, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "wifi",
    name: "wifi",
    "onUpdate:modelValue": _cache[38] || (_cache[38] = function ($event) {
      return $data.data.wifi = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.wifi]])]), _hoisted_195]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_196, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_197, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "kabl",
    name: "kabl",
    "onUpdate:modelValue": _cache[39] || (_cache[39] = function ($event) {
      return $data.data.kablovski = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.kablovski]])]), _hoisted_198]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_199, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_200, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "optik",
    name: "optik",
    "onUpdate:modelValue": _cache[40] || (_cache[40] = function ($event) {
      return $data.data.opticki = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.opticki]])]), _hoisted_201]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_202, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_203, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "tv_antena",
    name: "tv_antena",
    "onUpdate:modelValue": _cache[41] || (_cache[41] = function ($event) {
      return $data.data.tv_antena = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.tv_antena]])]), _hoisted_204]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_205, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_206, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "sat_prik",
    name: "sat_prik",
    "onUpdate:modelValue": _cache[42] || (_cache[42] = function ($event) {
      return $data.data.satelitski_prikljucak = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.satelitski_prikljucak]])]), _hoisted_207]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_208, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_209, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "video",
    name: "video",
    "onUpdate:modelValue": _cache[43] || (_cache[43] = function ($event) {
      return $data.data.video_nadzor = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.video_nadzor]])]), _hoisted_210]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_211, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_212, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "alarm",
    name: "alarm",
    "onUpdate:modelValue": _cache[44] || (_cache[44] = function ($event) {
      return $data.data.alarm = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.alarm]])]), _hoisted_213]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_214, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_215, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "nisko",
    name: "nisko",
    "onUpdate:modelValue": _cache[45] || (_cache[45] = function ($event) {
      return $data.data.niskoenergetska = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.niskoenergetska]])]), _hoisted_216]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_217, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_218, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "bazen",
    name: "bazen",
    "onUpdate:modelValue": _cache[46] || (_cache[46] = function ($event) {
      return $data.data.bazen = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.bazen]])]), _hoisted_219]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_220, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_221, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "rostilj",
    name: "rostilj",
    "onUpdate:modelValue": _cache[47] || (_cache[47] = function ($event) {
      return $data.data.rostilj = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.rostilj]])]), _hoisted_222])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_223, [_hoisted_224, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_225, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_226, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "autobus",
    name: "autobus",
    "onUpdate:modelValue": _cache[48] || (_cache[48] = function ($event) {
      return $data.data.autobus = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.autobus]])]), _hoisted_227]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_228, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_229, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "bolnica",
    name: "bolnica",
    "onUpdate:modelValue": _cache[49] || (_cache[49] = function ($event) {
      return $data.data.bolnica = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.bolnica]])]), _hoisted_230]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_231, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_232, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "dom_zdrav",
    name: "dom_zdrav",
    "onUpdate:modelValue": _cache[50] || (_cache[50] = function ($event) {
      return $data.data.dom_zdravlja = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.dom_zdravlja]])]), _hoisted_233]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_234, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_235, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "fakultet",
    name: "fakultet",
    "onUpdate:modelValue": _cache[51] || (_cache[51] = function ($event) {
      return $data.data.fakultet = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.fakultet]])]), _hoisted_236]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_237, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_238, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "jez_mor_rij",
    name: "jez_mor_rij",
    "onUpdate:modelValue": _cache[52] || (_cache[52] = function ($event) {
      return $data.data.jez_mor_rij = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.jez_mor_rij]])]), _hoisted_239]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_240, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_241, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "os_skola",
    name: "os_skola",
    "onUpdate:modelValue": _cache[53] || (_cache[53] = function ($event) {
      return $data.data.osnovna_skola = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.osnovna_skola]])]), _hoisted_242]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_243, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_244, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "park_suma",
    name: "park_suma",
    "onUpdate:modelValue": _cache[54] || (_cache[54] = function ($event) {
      return $data.data.park_suma = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.park_suma]])]), _hoisted_245]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_246, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_247, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "sportski_objekt",
    name: "sportski_objekt",
    "onUpdate:modelValue": _cache[55] || (_cache[55] = function ($event) {
      return $data.data.sportski_objekt = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.sportski_objekt]])]), _hoisted_248]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_249, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_250, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "srednja_skola",
    name: "srednja_skola",
    "onUpdate:modelValue": _cache[56] || (_cache[56] = function ($event) {
      return $data.data.srednja_skola = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.srednja_skola]])]), _hoisted_251]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_252, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_253, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "tramvaj",
    name: "tramvaj",
    "onUpdate:modelValue": _cache[57] || (_cache[57] = function ($event) {
      return $data.data.tramvaj = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.tramvaj]])]), _hoisted_254]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_255, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_256, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "trg_centar",
    name: "trg_centar",
    "onUpdate:modelValue": _cache[58] || (_cache[58] = function ($event) {
      return $data.data.trgovacki_centar = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.trgovacki_centar]])]), _hoisted_257]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_258, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_259, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "vlak",
    name: "vlak",
    "onUpdate:modelValue": _cache[59] || (_cache[59] = function ($event) {
      return $data.data.vlak = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.vlak]])]), _hoisted_260]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_261, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_262, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    id: "vrtic",
    name: "vrtic",
    "onUpdate:modelValue": _cache[60] || (_cache[60] = function ($event) {
      return $data.data.vrtic = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.vrtic]])]), _hoisted_263])])])]), _hoisted_264, _hoisted_265, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_266, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_267, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_268, [_hoisted_269, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_270, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    "onUpdate:modelValue": _cache[61] || (_cache[61] = function ($event) {
      return $data.data.kontakt = $event;
    }),
    type: "text",
    id: "Kontakt",
    name: "Kontakt"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.kontakt]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_271, [$data.errors.kontakt ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_272, " Kontakt je obavezan! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), _hoisted_273, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_274, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[62] || (_cache[62] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.editOglas && $options.editOglas.apply($options, arguments);
    }, ["prevent"])),
    type: "submit"
  }, "Izmjeni oglas")])])])])]), _hoisted_275]);
}

/***/ }),

/***/ "./resources/js/api/index.js":
/*!***********************************!*\
  !*** ./resources/js/api/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOglas": () => (/* binding */ getOglas),
/* harmony export */   "getOglas_korisnik": () => (/* binding */ getOglas_korisnik),
/* harmony export */   "getOglas_korisnika": () => (/* binding */ getOglas_korisnika),
/* harmony export */   "getOglas_tip": () => (/* binding */ getOglas_tip),
/* harmony export */   "getUser": () => (/* binding */ getUser)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var getOglas = function getOglas() {
  return new Promise(function (resolve, reject) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/dohvati-oglase").then(function (res) {
        if (res && res.data) {
          resolve(res.data);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    } catch (err) {
      console.log(err);
    }
  });
};
var getUser = function getUser() {
  return new Promise(function (resolve, reject) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/get-user").then(function (res) {
        if (res && res.data) {
          resolve(res.data);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    } catch (err) {
      console.log(err);
    }
  });
};
var getOglas_tip = function getOglas_tip(tip) {
  return new Promise(function (resolve, reject) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/dohvati-oglase/".concat(tip)).then(function (res) {
        if (res && res.data) {
          resolve(res.data);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    } catch (err) {
      console.log(err);
    }
  });
};
var getOglas_korisnik = function getOglas_korisnik(id_korisnik) {
  return new Promise(function (resolve, reject) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/dohvati-oglase-2/".concat(id_korisnik)).then(function (res) {
        if (res && res.data) {
          resolve(res.data);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    } catch (err) {
      console.log(err);
    }
  });
};
var getOglas_korisnika = function getOglas_korisnika(id_korisnika) {
  return new Promise(function (resolve, reject) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/dohvati-oglase-3/".concat(id_korisnika)).then(function (res) {
        if (res && res.data) {
          resolve(res.data);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    } catch (err) {
      console.log(err);
    }
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.shadow[data-v-6f0fc802]{\r\n  margin-top: 50px;\r\n  text-align: center;\n}\n.registracija[data-v-6f0fc802]{\r\n  width: 80%;\r\n  text-align: left;\r\n  margin: auto;\r\n  color: black;\n}\n.registracija h2[data-v-6f0fc802]{\r\n  color: black;\r\n  padding: 20px 0;\r\n  font-weight: bold;\n}\n.tekst[data-v-6f0fc802]{\r\n  display: flex;\r\n  width: 80%;\r\n  text-align: left;\r\n  margin: auto;\n}\n.opis_korisnika[data-v-6f0fc802]{\r\n  width: 80%;\r\n  margin: auto;\n}\n.opis_korisnika2[data-v-6f0fc802]{\r\n  width: 100%;\r\n  margin: auto;\n}\n.button_korisnik[data-v-6f0fc802]{\r\n  width: 100%;\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\n}\n.button_korisnik button[data-v-6f0fc802]{\r\n  width: 20%; \r\n  padding: 10px;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  border-radius: 5px;\n}\n.button_fotografije button[data-v-6f0fc802]{\r\n  width: 70%; \r\n  text-align: center;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  border-radius: 5px;\r\n  padding-top: 8px;\r\n  padding-bottom: 10px;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  color: rgb(255, 255, 255);\r\n  background-color: #decb95;\r\n  border-color:#decb95;\n}\nh4[data-v-6f0fc802]{\r\n  padding: 20px;\n}\nbutton[data-v-6f0fc802]:hover{ \r\n  transform: scale(1.02);\r\n  transition: transform 330ms ease-in-out;\n}\n.forma[data-v-6f0fc802]{\r\n  width: 70%;\r\n  margin: auto;\r\n  padding-bottom: 20px;\n}\nlabel[data-v-6f0fc802]{\r\n  width: 100%;\r\n  margin: 5px;\r\n  margin-left: 0px;\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 17px;\r\n  color: black !important;\n}\ninput[data-v-6f0fc802]{\r\n  width: 100%;\r\n  font-size: 15px;\r\n  padding: 10px 40px;\r\n  border: none;\r\n  border-bottom: 1px solid rgb(78, 78, 78);\r\n  background: transparent;\n}\n.icons i[data-v-6f0fc802]{\r\n  position: absolute;\r\n  font-size: 23px;\r\n  padding: 10px;\n}\n.section[data-v-6f0fc802]{\r\n  padding: 20px 0;\n}\n.bez_ikone[data-v-6f0fc802]{\r\n  padding: 10px;\n}\n[data-v-6f0fc802]:focus-visible {\r\n    outline: none;\n}\nselect[data-v-6f0fc802]{\r\n  width: 100%;\r\n  font-size: 15px;\r\n  padding: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid rgb(78, 78, 78);\r\n  background: transparent;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.site-footer[data-v-6f0fc802]\r\n{\r\n  padding:0;\r\n  font-size:16px;\r\n  line-height:25px;\r\n  color:#ffffff;\n}\n.site-footer hr[data-v-6f0fc802]\r\n{\r\n  border-top-color:#bbb;\r\n  opacity:0.5\n}\n.site-footer hr.small[data-v-6f0fc802]\r\n{\r\n  margin:25px 0\n}\n.site-footer h6[data-v-6f0fc802]\r\n{\r\n  color:#fff;\r\n  font-size:16px;\r\n  text-transform:uppercase;\r\n  margin-top:5px;\r\n  letter-spacing:2px\n}\n.site-footer a[data-v-6f0fc802]\r\n{\r\n  color:#737373;\n}\n.site-footer a[data-v-6f0fc802]:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\n}\n.footer-links[data-v-6f0fc802]\r\n{\r\n  padding-left:0;\r\n  list-style:none\n}\n@media (max-width:991px)\r\n{\n.site-footer [class^=col-][data-v-6f0fc802]\r\n  {\r\n    margin-bottom:30px\n}\n}\n@media (max-width:767px)\r\n{\n.site-footer[data-v-6f0fc802]\r\n  {\r\n    padding-bottom:0\n}\n.site-footer .copyright-text[data-v-6f0fc802],.site-footer .social-icons[data-v-6f0fc802]\r\n  {\r\n    text-align:center\n}\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_6f0fc802_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_6f0fc802_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_6f0fc802_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_6f0fc802_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_6f0fc802_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_6f0fc802_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Edit_oglas/index.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Edit_oglas/index.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_6f0fc802_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6f0fc802&scoped=true */ "./resources/js/components/Edit_oglas/index.vue?vue&type=template&id=6f0fc802&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/components/Edit_oglas/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_6f0fc802_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css */ "./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_6f0fc802_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css */ "./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css");
/* harmony import */ var C_Users_User_OneDrive_Radna_povr_ina_laravel_vue_final_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,C_Users_User_OneDrive_Radna_povr_ina_laravel_vue_final_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_6f0fc802_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6f0fc802"],['__file',"resources/js/components/Edit_oglas/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Edit_oglas/index.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Edit_oglas/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Edit_oglas/index.vue?vue&type=template&id=6f0fc802&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Edit_oglas/index.vue?vue&type=template&id=6f0fc802&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_6f0fc802_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_6f0fc802_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=6f0fc802&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=template&id=6f0fc802&scoped=true");


/***/ }),

/***/ "./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_6f0fc802_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=0&id=6f0fc802&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_6f0fc802_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Edit_oglas/index.vue?vue&type=style&index=1&id=6f0fc802&scoped=true&lang=css");


/***/ })

}]);