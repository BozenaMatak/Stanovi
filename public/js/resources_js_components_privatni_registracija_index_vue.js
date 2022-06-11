"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_privatni_registracija_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/js/constants.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'register_private',
  data: function data() {
    return {
      name: '',
      countries: [],
      zupanije: [],
      gradovi: [],
      country: '',
      zupanija: '',
      //zupanija predstavlja jednu zupaniju koju je korisnik odabrao prilikom registracije
      repeate_password: '',
      data: {
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
        ime: '',
        prezime: '',
        drzava: '',
        zupanija: '',
        grad: '',
        postanskibroj: null,
        adresa: '',
        type: 'Privatni',
        broj_mob: null,
        image: null
      },
      image: null,
      errors: []
    };
  },
  created: function created() {
    var _this = this;

    if (user.isLogged == true) {
      this.$router.push({
        name: 'Home'
      });
    }

    _constants__WEBPACK_IMPORTED_MODULE_1__.COUNTRIES.forEach(function (element) {
      _this.countries.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.ZUPANIJE.forEach(function (element) {
      //zupanije predstavljaju polje svih zupanija
      _this.zupanije.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_1__.GRADOVI.forEach(function (element) {
      _this.gradovi.push(element);
    });
    this.zupanije.sort(function (a, b) {
      return a.name > b.name ? 1 : -1;
    });
  },
  methods: {
    addUser: function addUser() {
      var _this2 = this;

      this.data.image = this.image.name;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/register-private', this.data).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Registrirani ste!', 'Uspješno ste se registrirali u sustav.', 'success');

        _this2.onUpload();

        _this2.$router.push({
          name: 'login'
        });
      })["catch"](function (e) {
        console.log(e.response.data.message);
      });
    },
    onChange: function onChange(e) {
      console.log("Selected file", e.target.files[0]);
      this.image = e.target.files[0];
      console.log(this.image);
    },
    onUpload: function onUpload() {
      var fd = new FormData();
      fd.append('img', this.image);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/onUpload', fd).then(function (res) {
        console.log("Response", res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=template&id=d6b5ca28&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=template&id=d6b5ca28&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-d6b5ca28"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
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
var _hoisted_5 = {
  "class": "row"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6",
    style: {
      "margin": "0",
      "padding": "0",
      "text-align": "left",
      "color": "black"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, " Registracija privatnog korisnika ")], -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "col-6",
  style: {
    "margin": "0",
    "padding": "0",
    "text-align": "left",
    "color": "black"
  }
};
var _hoisted_8 = {
  "class": "row"
};
var _hoisted_9 = {
  "class": "col-6",
  style: {
    "width": "40%"
  }
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "profil",
    style: {
      "padding-top": "40px",
      "padding-bottom": "5px",
      "font-size": "19px"
    }
  }, "Odaberite profilnu sliku", -1
  /* HOISTED */
  );
});

var _hoisted_11 = {
  "class": "tekst"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "width": "auto"
    }
  }, "Već imaš korisnički račun? ", -1
  /* HOISTED */
  );
});

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Prijavi se");

var _hoisted_14 = {
  "class": "form"
};
var _hoisted_15 = {
  "class": "forma"
};
var _hoisted_16 = {
  "class": "email_username row section"
};
var _hoisted_17 = {
  "class": "col-6"
};

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "email"
  }, "Email *", -1
  /* HOISTED */
  );
});

var _hoisted_19 = {
  key: 0
};
var _hoisted_20 = {
  "class": "icons"
};

var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-envelope icon"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_22 = {
  "class": "col-6"
};

var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Username"
  }, "Korisničko ime *", -1
  /* HOISTED */
  );
});

var _hoisted_24 = {
  "class": "icons"
};

var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-user icon"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_26 = {
  "class": "email_username row section"
};
var _hoisted_27 = {
  "class": "col-6"
};

var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "password"
  }, "Lozinka *", -1
  /* HOISTED */
  );
});

var _hoisted_29 = {
  "class": "icons"
};

var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-lock icon"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_31 = {
  "class": "col-6"
};

var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Repeat_password"
  }, "Ponovi lozinku *", -1
  /* HOISTED */
  );
});

var _hoisted_33 = {
  "class": "icons"
};

var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-lock icon"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_36 = {
  "class": "email_username row section"
};
var _hoisted_37 = {
  "class": "col-6"
};

var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Ime"
  }, "Ime *", -1
  /* HOISTED */
  );
});

var _hoisted_39 = {
  "class": "icons"
};
var _hoisted_40 = {
  "class": "col-6"
};

var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Prezime"
  }, "Prezime *", -1
  /* HOISTED */
  );
});

var _hoisted_42 = {
  "class": "icons"
};

var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_44 = {
  "class": "email_username row section"
};
var _hoisted_45 = {
  "class": "col-6"
};

var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Drzava"
  }, "Država *", -1
  /* HOISTED */
  );
});

var _hoisted_47 = {
  "class": "icons"
};

var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: ""
  }, "Odabir države", -1
  /* HOISTED */
  );
});

var _hoisted_49 = ["value"];
var _hoisted_50 = {
  "class": "col-6"
};

var _hoisted_51 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Zupanija"
  }, "Županija *", -1
  /* HOISTED */
  );
});

var _hoisted_52 = {
  "class": "icons"
};

var _hoisted_53 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: ""
  }, "Odabir županije", -1
  /* HOISTED */
  );
});

var _hoisted_54 = ["value"];
var _hoisted_55 = {
  "class": "email_username row section"
};
var _hoisted_56 = {
  "class": "col-6"
};

var _hoisted_57 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "grad"
  }, "Grad *", -1
  /* HOISTED */
  );
});

var _hoisted_58 = {
  "class": "icons"
};

var _hoisted_59 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: ""
  }, "Odabir grada", -1
  /* HOISTED */
  );
});

var _hoisted_60 = ["value"];
var _hoisted_61 = {
  "class": "col-6"
};

var _hoisted_62 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Postanski-broj"
  }, "Poštanski broj", -1
  /* HOISTED */
  );
});

var _hoisted_63 = {
  "class": "icons"
};
var _hoisted_64 = {
  "class": "col-6"
};

var _hoisted_65 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Adresa"
  }, "Adresa", -1
  /* HOISTED */
  );
});

var _hoisted_66 = {
  "class": "icons"
};
var _hoisted_67 = {
  "class": "button_korisnik"
};
var _hoisted_68 = {
  "class": "site-footer",
  style: {
    "height": "300px",
    "background-color": "#666655"
  }
};
var _hoisted_69 = {
  "class": "container"
};
var _hoisted_70 = {
  "class": "row"
};
var _hoisted_71 = {
  "class": "col-sm-12 col-md-6"
};

var _hoisted_72 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    style: {
      "margin-top": "15px",
      "padding": "0"
    }
  }, "O nama", -1
  /* HOISTED */
  );
});

var _hoisted_73 = {
  "class": "text-justify"
};

var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Find a Place");

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" aplikacija omogućava pronalazak i oglašavanje nekretnina koje se mogu kupiti/prodati ili iznajmiti. ");

var _hoisted_76 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_77 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cilj aplikacije jest omogućiti korisnicima da na brz i jednostavan način mogu pregledavati nekretnine različitih tipova i namjene ili oglasiti svoj oglas i tako ga postaviti da bude vidljiv svim korisnicima ove aplikacije. ");

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\" data-v-d6b5ca28><div class=\"col-6\" data-v-d6b5ca28><ul class=\"footer-links\" data-v-d6b5ca28><li data-v-d6b5ca28>findaplace@gmail.com</li><li data-v-d6b5ca28>15 Gajeva Street, 10000 Zagreb, Croatia</li></ul></div><div class=\"col-6\" data-v-d6b5ca28><ul class=\"footer-links\" data-v-d6b5ca28><li data-v-d6b5ca28>+385 1 4815 111</li><li data-v-d6b5ca28>+385 98 367 582</li></ul></div></div>", 1);

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xs-6 col-md-3\" style=\"padding:0;\" data-v-d6b5ca28><h4 style=\"margin-top:15px;padding:0;\" data-v-d6b5ca28>Kategorije</h4><ul class=\"footer-links\" style=\"margin-left:30px;\" data-v-d6b5ca28><li data-v-d6b5ca28>Stan</li><li data-v-d6b5ca28>Kuća</li><li data-v-d6b5ca28>Garsonjera</li><li data-v-d6b5ca28>Apartman</li><li data-v-d6b5ca28>Vikendica</li><li data-v-d6b5ca28>Ostalo</li></ul></div><div class=\"col-xs-6 col-md-3\" data-v-d6b5ca28><h6 data-v-d6b5ca28>Quick Links</h6><ul class=\"footer-links\" data-v-d6b5ca28><li data-v-d6b5ca28><a href=\"http://scanfcode.com/about/\" data-v-d6b5ca28>About Us</a></li><li data-v-d6b5ca28><a href=\"http://scanfcode.com/contact/\" data-v-d6b5ca28>Contact Us</a></li><li data-v-d6b5ca28><a href=\"http://scanfcode.com/contribute-at-scanfcode/\" data-v-d6b5ca28>Contribute</a></li><li data-v-d6b5ca28><a href=\"http://scanfcode.com/privacy-policy/\" data-v-d6b5ca28>Privacy Policy</a></li><li data-v-d6b5ca28><a href=\"http://scanfcode.com/sitemap/\" data-v-d6b5ca28>Sitemap</a></li></ul></div>", 2);

var _hoisted_82 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_bold = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("bold");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.onChange && $options.onChange.apply($options, arguments);
    }),
    style: {
      "border-bottom": "0",
      "padding": "0",
      "padding-bottom": "40px"
    }
  }, null, 32
  /* HYDRATE_EVENTS */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    style: {
      "color": "rgb(255 219 0)",
      "width": "auto",
      "margin-left": "10px"
    },
    to: '/login'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_13];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, $data.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errors.name[0]), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    id: "email",
    name: "email",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.data.email = $event;
    }),
    placeholder: "Email adresa"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.email]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "Username",
    id: "Username",
    name: "Username",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.data.username = $event;
    }),
    placeholder: "Korisničko ime",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.username]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    id: "password",
    name: "password",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.data.password = $event;
    }),
    placeholder: "Lozinka",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.password]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    id: "password_confirmation",
    name: "password_confirmation",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.data.password_confirmation = $event;
    }),
    placeholder: "Ponovi lozinku",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.password_confirmation]])])])]), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "Ime",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.data.ime = $event;
    }),
    name: "Ime",
    placeholder: "Ime",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.ime]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "Prezime",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.data.prezime = $event;
    }),
    name: "Prezime",
    placeholder: "Prezime",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.prezime]])])])]), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.data.drzava = $event;
    }),
    required: ""
  }, [_hoisted_48, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.countries, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_49);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.drzava]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.data.zupanija = $event;
    }),
    required: ""
  }, [_hoisted_53, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.zupanije, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_54);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.zupanija]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.data.grad = $event;
    }),
    required: ""
  }, [_hoisted_59, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.gradovi, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_60);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.data.grad]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "Postanski-broj",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.data.postanskibroj = $event;
    }),
    name: "Postanski broj",
    placeholder: "Poštanski broj",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.postanskibroj]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bez_ikone",
    type: "text",
    id: "Adresa",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.data.adresa = $event;
    }),
    name: "Adresa",
    placeholder: "Adresa",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.adresa]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addUser && $options.addUser.apply($options, arguments);
    }, ["prevent"])),
    type: "submit"
  }, "Završi registraciju")])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_bold, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_74];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_75, _hoisted_76, _hoisted_77, _hoisted_78]), _hoisted_79]), _hoisted_80]), _hoisted_82])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.shadow[data-v-d6b5ca28]{\r\n  margin-top: 50px;\r\n  text-align: center;\n}\nh3[data-v-d6b5ca28]{\r\n  color: black;\r\n  padding: 40px 0;\r\n  font-weight: bold;\r\n  margin-left: 50px;\n}\n.tekst[data-v-d6b5ca28]{\r\n  display: flex;\r\n  width: 80%;\r\n  text-align: left;\r\n  margin: auto;\n}\n.opis_korisnika[data-v-d6b5ca28]{\r\n  width: 80%;\r\n  margin: auto;\n}\n.opis_korisnika2[data-v-d6b5ca28]{\r\n  width: 100%;\r\n  margin: auto;\n}\n.button_korisnik[data-v-d6b5ca28]{\r\n  width: 100%;\r\n  margin: auto;\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\n}\n.button_korisnik button[data-v-d6b5ca28]{\r\n  width: 100%; \r\n  text-align: center;\r\n  padding: 10px;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  border-radius: 5px;\n}\nh4[data-v-d6b5ca28]{\r\n  padding: 20px;\n}\nbutton[data-v-d6b5ca28]:hover{ \r\n  transform: scale(1.02);\r\n  transition: transform 330ms ease-in-out;\n}\n.forma[data-v-d6b5ca28]{\r\n  width: 70%;\r\n  margin: auto;\r\n  padding-bottom: 50px;\n}\nlabel[data-v-d6b5ca28]{\r\n  width: 100%;\r\n  margin: 5px;\r\n  margin-left: 0px;\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 15px;\r\n  color: black !important;\n}\ninput[data-v-d6b5ca28]{\r\n  width: 100%;\r\n  font-size: 15px;\r\n  padding: 10px 40px;\r\n  border: none;\r\n  border-bottom: 1px solid rgb(78, 78, 78);\r\n  background: transparent;\n}\n.icons i[data-v-d6b5ca28]{\r\n  position: absolute;\r\n  font-size: 23px;\r\n  padding: 10px;\n}\n.section[data-v-d6b5ca28]{\r\n  padding: 20px 0;\n}\n.bez_ikone[data-v-d6b5ca28]{\r\n  padding: 10px;\n}\n[data-v-d6b5ca28]:focus-visible {\r\n    outline: none;\n}\nselect[data-v-d6b5ca28]{\r\n  width: 100%;\r\n  font-size: 15px;\r\n  padding: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid rgb(78, 78, 78);\r\n  background: transparent;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.site-footer[data-v-d6b5ca28]\r\n{\r\n  padding:0;\r\n  font-size:16px;\r\n  line-height:25px;\r\n  color:#ffffff;\n}\n.site-footer hr[data-v-d6b5ca28]\r\n{\r\n  border-top-color:#bbb;\r\n  opacity:0.5\n}\n.site-footer hr.small[data-v-d6b5ca28]\r\n{\r\n  margin:25px 0\n}\n.site-footer h6[data-v-d6b5ca28]\r\n{\r\n  color:#fff;\r\n  font-size:16px;\r\n  text-transform:uppercase;\r\n  margin-top:5px;\r\n  letter-spacing:2px\n}\n.site-footer a[data-v-d6b5ca28]\r\n{\r\n  color:#737373;\n}\n.site-footer a[data-v-d6b5ca28]:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\n}\n.footer-links[data-v-d6b5ca28]\r\n{\r\n  padding-left:0;\r\n  list-style:none\n}\n@media (max-width:991px)\r\n{\n.site-footer [class^=col-][data-v-d6b5ca28]\r\n  {\r\n    margin-bottom:30px\n}\n}\n@media (max-width:767px)\r\n{\n.site-footer[data-v-d6b5ca28]\r\n  {\r\n    padding-bottom:0\n}\n.site-footer .copyright-text[data-v-d6b5ca28],.site-footer .social-icons[data-v-d6b5ca28]\r\n  {\r\n    text-align:center\n}\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_d6b5ca28_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_d6b5ca28_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_d6b5ca28_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_d6b5ca28_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_d6b5ca28_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_d6b5ca28_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/privatni_registracija/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/privatni_registracija/index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_d6b5ca28_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d6b5ca28&scoped=true */ "./resources/js/components/privatni_registracija/index.vue?vue&type=template&id=d6b5ca28&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/components/privatni_registracija/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_d6b5ca28_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css */ "./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_d6b5ca28_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css */ "./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css");
/* harmony import */ var C_Users_User_OneDrive_Radna_povr_ina_laravel_vue_final_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,C_Users_User_OneDrive_Radna_povr_ina_laravel_vue_final_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_d6b5ca28_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-d6b5ca28"],['__file',"resources/js/components/privatni_registracija/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/privatni_registracija/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/privatni_registracija/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/privatni_registracija/index.vue?vue&type=template&id=d6b5ca28&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/privatni_registracija/index.vue?vue&type=template&id=d6b5ca28&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_d6b5ca28_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_d6b5ca28_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=d6b5ca28&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=template&id=d6b5ca28&scoped=true");


/***/ }),

/***/ "./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_d6b5ca28_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=0&id=d6b5ca28&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_d6b5ca28_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/privatni_registracija/index.vue?vue&type=style&index=1&id=d6b5ca28&scoped=true&lang=css");


/***/ })

}]);