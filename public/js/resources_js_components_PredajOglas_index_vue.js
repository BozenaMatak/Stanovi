"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_PredajOglas_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/js/constants.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'register_private',
  data: function data() {
    return {
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

    _constants__WEBPACK_IMPORTED_MODULE_1__.ZUPANIJE.forEach(function (element) {
      //zupanije predstavljaju polje svih zupanija
      _this.zupanije.push(element);
    });
    this.zupanije.sort(function (a, b) {
      return a.name > b.name ? 1 : -1;
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.TIP_PROSTORA.forEach(function (element) {
      //zupanije predstavljaju polje svih zupanija
      _this.tip_prostora.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.SOBNOST.forEach(function (element) {
      _this.sobnost.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.NAMIJENA.forEach(function (element) {
      _this.namijena.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.GODINE.forEach(function (element) {
      _this.godine.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.STANJE.forEach(function (element) {
      _this.stanje.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.PROZORI.forEach(function (element) {
      _this.prozori.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.VRATA.forEach(function (element) {
      _this.vrata.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.PODOVI.forEach(function (element) {
      _this.podovi.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.GRADOVI.forEach(function (element) {
      _this.gradovi.push(element);
    });
    this.data.user_id = user.id;
  },
  methods: {
    addOglas: function addOglas() {
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

      if (!this.data.broj_park_mjes) {
        this.errors.kontakt = true;
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/predaj-oglas', this.data).then(function () {
        _this2.$router.push({
          name: 'Home'
        });

        console.log('saved');
      })["catch"](function (e) {
        console.log(e.response.data.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=template&id=21185f84&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=template&id=21185f84&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-21185f84"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "shadow"
};
var _hoisted_3 = {
  "class": "col-12"
};

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "registracija"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, " Predaja novog oglasa ")], -1
  /* HOISTED */
  );
});

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
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

var _hoisted_6 = {
  "class": "form"
};
var _hoisted_7 = {
  "class": "forma"
};
var _hoisted_8 = {
  "class": "email_username row section"
};
var _hoisted_9 = {
  "class": "col-6"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "email"
  }, "Tip nekretnine *", -1
  /* HOISTED */
  );
});

var _hoisted_11 = {
  "class": "icons"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir nekretnine", -1
  /* HOISTED */
  );
});

var _hoisted_13 = ["value"];
var _hoisted_14 = {
  "class": "error"
};
var _hoisted_15 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_16 = {
  "class": "col-6"
};

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Username"
  }, "Namjena oglasa *", -1
  /* HOISTED */
  );
});

var _hoisted_18 = {
  "class": "icons"
};

var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir namijene", -1
  /* HOISTED */
  );
});

var _hoisted_20 = ["value"];
var _hoisted_21 = {
  "class": "error"
};
var _hoisted_22 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_23 = {
  "class": "email_username row section"
};
var _hoisted_24 = {
  "class": ""
};

var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Naslov"
  }, "Naslov *", -1
  /* HOISTED */
  );
});

var _hoisted_26 = {
  "class": "error"
};
var _hoisted_27 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_28 = {
  "class": "email_username row section"
};
var _hoisted_29 = {
  "class": "col-6"
};

var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Povrsina"
  }, "Površina *", -1
  /* HOISTED */
  );
});

var _hoisted_31 = {
  "class": "icons"
};
var _hoisted_32 = {
  "class": "error"
};
var _hoisted_33 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_34 = {
  "class": "col-6"
};

var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Prezime"
  }, "Sobnost *", -1
  /* HOISTED */
  );
});

var _hoisted_36 = {
  "class": "icons"
};

var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir sobnosti", -1
  /* HOISTED */
  );
});

var _hoisted_38 = ["value"];
var _hoisted_39 = {
  "class": "error"
};
var _hoisted_40 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_41 = {
  "class": "row"
};

var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Drzava"
  }, "Opis*", -1
  /* HOISTED */
  );
});

var _hoisted_43 = {
  "class": "icons"
};
var _hoisted_44 = {
  "class": "error"
};
var _hoisted_45 = {
  key: 0,
  style: {
    "margin": "0",
    "padding": "0",
    "color": "red",
    "font-weight": "bold"
  }
};

var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Zupanija"
  }, "Fotografije"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "button_fotografije",
    style: {
      "width": "70%"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit"
  }, "Odaberite fotografije")])], -1
  /* HOISTED */
  );
});

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
  }, "Cijena *", -1
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.data.tip = $event;
    }),
    required: ""
  }, [_hoisted_12, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.tip_prostora, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_13);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.tip]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [$data.errors.tip ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_15, " Tip nekretnine je obavezan! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.data.namjena = $event;
    }),
    required: ""
  }, [_hoisted_19, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.namijena, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_20);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.namjena]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [$data.errors.namjena ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_22, " Namjena oglasa je obavezna! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.naslov]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [$data.errors.naslov ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_27, " Naslov je obavezan! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.povrsina]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [$data.errors.povrsina ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_33, " Površina je obavezna! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.data.soba = $event;
    }),
    required: ""
  }, [_hoisted_37, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.sobnost, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_38);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.soba]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [$data.errors.soba ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_40, " Sobnost je obavezna! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.opis]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [$data.errors.opis ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_45, " Opis je obavezan! ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
      return $options.addOglas && $options.addOglas.apply($options, arguments);
    }, ["prevent"])),
    type: "submit"
  }, "Predaj oglas")])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.shadow[data-v-21185f84]{\r\n  margin-top: 50px;\r\n  text-align: center;\n}\n.registracija[data-v-21185f84]{\r\n  width: 80%;\r\n  text-align: left;\r\n  margin: auto;\r\n  color: black;\n}\n.registracija h2[data-v-21185f84]{\r\n  color: black;\r\n  padding: 20px 0;\r\n  font-weight: bold;\n}\n.tekst[data-v-21185f84]{\r\n  display: flex;\r\n  width: 80%;\r\n  text-align: left;\r\n  margin: auto;\n}\n.opis_korisnika[data-v-21185f84]{\r\n  width: 80%;\r\n  margin: auto;\n}\n.opis_korisnika2[data-v-21185f84]{\r\n  width: 100%;\r\n  margin: auto;\n}\n.button_korisnik[data-v-21185f84]{\r\n  width: 100%;\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\n}\n.button_korisnik button[data-v-21185f84]{\r\n  width: 20%; \r\n  padding: 10px;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  border-radius: 5px;\n}\n.button_fotografije button[data-v-21185f84]{\r\n  width: 70%; \r\n  text-align: center;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  border-radius: 5px;\r\n  padding-top: 8px;\r\n  padding-bottom: 10px;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  color: rgb(255, 255, 255);\r\n  background-color: #decb95;\r\n  border-color:#decb95;\n}\nh4[data-v-21185f84]{\r\n  padding: 20px;\n}\nbutton[data-v-21185f84]:hover{ \r\n  transform: scale(1.02);\r\n  transition: transform 330ms ease-in-out;\n}\n.forma[data-v-21185f84]{\r\n  width: 70%;\r\n  margin: auto;\r\n  padding-bottom: 20px;\n}\nlabel[data-v-21185f84]{\r\n  width: 100%;\r\n  margin: 5px;\r\n  margin-left: 0px;\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 17px;\r\n  color: black !important;\n}\ninput[data-v-21185f84]{\r\n  width: 100%;\r\n  font-size: 15px;\r\n  padding: 10px 40px;\r\n  border: none;\r\n  border-bottom: 1px solid rgb(78, 78, 78);\r\n  background: transparent;\n}\n.icons i[data-v-21185f84]{\r\n  position: absolute;\r\n  font-size: 23px;\r\n  padding: 10px;\n}\n.section[data-v-21185f84]{\r\n  padding: 20px 0;\n}\n.bez_ikone[data-v-21185f84]{\r\n  padding: 10px;\n}\n[data-v-21185f84]:focus-visible {\r\n    outline: none;\n}\nselect[data-v-21185f84]{\r\n  width: 100%;\r\n  font-size: 15px;\r\n  padding: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid rgb(78, 78, 78);\r\n  background: transparent;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_21185f84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_21185f84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_21185f84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/PredajOglas/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/PredajOglas/index.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_21185f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=21185f84&scoped=true */ "./resources/js/components/PredajOglas/index.vue?vue&type=template&id=21185f84&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/components/PredajOglas/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_21185f84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css */ "./resources/js/components/PredajOglas/index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css");
/* harmony import */ var C_Users_User_OneDrive_Radna_povr_ina_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_User_OneDrive_Radna_povr_ina_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_21185f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-21185f84"],['__file',"resources/js/components/PredajOglas/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/PredajOglas/index.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/PredajOglas/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/PredajOglas/index.vue?vue&type=template&id=21185f84&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/PredajOglas/index.vue?vue&type=template&id=21185f84&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_21185f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_21185f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=21185f84&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=template&id=21185f84&scoped=true");


/***/ }),

/***/ "./resources/js/components/PredajOglas/index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/PredajOglas/index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_21185f84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PredajOglas/index.vue?vue&type=style&index=0&id=21185f84&scoped=true&lang=css");


/***/ })

}]);