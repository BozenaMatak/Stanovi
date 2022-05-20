"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_poslovni_registracija_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/js/constants.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'register-poslovni',
  data: function data() {
    return {
      name: '',
      countries: [],
      zupanije: [],
      country: '',
      zupanija: '' //zupanija predstavlja jednu zupaniju koju je korisnik odabrao prilikom registracije

    };
  },
  created: function created() {
    var _this = this;

    _constants__WEBPACK_IMPORTED_MODULE_0__.COUNTRIES.forEach(function (element) {
      _this.countries.push(element);
    });
    _constants__WEBPACK_IMPORTED_MODULE_0__.ZUPANIJE.forEach(function (element) {
      //zupanije predstavljaju polje svih zupanija
      _this.zupanije.push(element);
    });
    this.zupanije.sort(function (a, b) {
      return a.name > b.name ? 1 : -1;
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=template&id=249567a2&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=template&id=249567a2&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-249567a2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
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
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, " Registracija poslovnog korisnika ")], -1
  /* HOISTED */
  );
});

var _hoisted_5 = {
  "class": "tekst"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "width": "auto"
    }
  }, "Već imaš korisnički račun? ", -1
  /* HOISTED */
  );
});

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Prijavi se");

var _hoisted_8 = {
  action: "#"
};
var _hoisted_9 = {
  "class": "forma"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"email_username row section\" data-v-249567a2><div class=\"col-6\" data-v-249567a2><label for=\"email\" data-v-249567a2>Email *</label><div class=\"icons\" data-v-249567a2><i class=\"fa fa-envelope icon\" data-v-249567a2></i><input type=\"email\" id=\"email\" name=\"email\" value=\"\" placeholder=\"Email adresa\" required data-v-249567a2></div></div><div class=\"col-6\" data-v-249567a2><label for=\"Username\" data-v-249567a2>Korisničko ime *</label><div class=\"icons\" data-v-249567a2><i class=\"fa fa-user icon\" data-v-249567a2></i><input type=\"Username\" id=\"Username\" name=\"Username\" value=\"\" placeholder=\"Korisničko ime\" required data-v-249567a2></div></div></div><div class=\"email_username row section\" data-v-249567a2><div class=\"col-6\" data-v-249567a2><label for=\"password\" data-v-249567a2>Lozinka *</label><div class=\"icons\" data-v-249567a2><i class=\"fa fa-lock icon\" data-v-249567a2></i><input type=\"password\" id=\"password\" name=\"password\" value=\"\" placeholder=\"lozinka\" required data-v-249567a2></div></div><div class=\"col-6\" data-v-249567a2><label for=\"Repeat_password\" data-v-249567a2>Ponovi lozinku *</label><div class=\"icons\" data-v-249567a2><i class=\"fa fa-lock icon\" data-v-249567a2></i><input type=\"password\" id=\"Repeat_password\" name=\"Repeat_password\" value=\"\" placeholder=\"Ponovi lozinku\" required data-v-249567a2></div></div></div><hr data-v-249567a2><div class=\"col-6\" data-v-249567a2><label for=\"Naziv-poslovnog-subjekta\" data-v-249567a2>Naziv poslovnog subjekta *</label><div class=\"icons\" data-v-249567a2><input class=\"bez_ikone\" type=\"text\" id=\"Naziv-poslovnog-subjekta\" name=\"Naziv poslovnog subjekta\" value=\"\" placeholder=\"Naziv poslovnog subjekta\" required data-v-249567a2></div></div><div class=\"email_username row section\" data-v-249567a2><div class=\"col-6\" data-v-249567a2><label for=\"Ime\" data-v-249567a2>Ime *</label><div class=\"icons\" data-v-249567a2><input class=\"bez_ikone\" type=\"text\" id=\"Ime\" name=\"Ime\" value=\"\" placeholder=\"Ime\" required data-v-249567a2></div></div><div class=\"col-6\" data-v-249567a2><label for=\"Prezime\" data-v-249567a2>Prezime *</label><div class=\"icons\" data-v-249567a2><input class=\"bez_ikone\" type=\"text\" id=\"Prezime\" name=\"Prezime\" value=\"\" placeholder=\"Prezime\" required data-v-249567a2></div></div></div><hr data-v-249567a2>", 6);

var _hoisted_16 = {
  "class": "email_username row section"
};
var _hoisted_17 = {
  "class": "col-6"
};

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Drzava"
  }, "Država *", -1
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
  }, "Odabir države", -1
  /* HOISTED */
  );
});

var _hoisted_21 = ["value"];
var _hoisted_22 = {
  "class": "col-6"
};

var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Zupanija"
  }, "Županija *", -1
  /* HOISTED */
  );
});

var _hoisted_24 = {
  "class": "icons"
};

var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "Odabir županije", -1
  /* HOISTED */
  );
});

var _hoisted_26 = ["value"];

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"email_username row section\" data-v-249567a2><div class=\"col-6\" data-v-249567a2><label for=\"Grad\" data-v-249567a2>Grad</label><div class=\"icons\" data-v-249567a2><input class=\"bez_ikone\" type=\"text\" id=\"Grad\" name=\"Grad\" value=\"\" placeholder=\"Grad\" required data-v-249567a2></div></div><div class=\"col-6\" data-v-249567a2><label for=\"Postanski-broj\" data-v-249567a2>Poštanski broj</label><div class=\"icons\" data-v-249567a2><input class=\"bez_ikone\" type=\"text\" id=\"Postanski-broj\" name=\"Postanski broj\" value=\"\" placeholder=\"Poštanski broj\" required data-v-249567a2></div></div></div><div class=\"email_username row section\" data-v-249567a2><div class=\"col-6\" data-v-249567a2><label for=\"Adresa\" data-v-249567a2>Adresa</label><div class=\"icons\" data-v-249567a2><input class=\"bez_ikone\" type=\"text\" id=\"Adresa\" name=\"Adresa\" value=\"\" placeholder=\"Adresa\" required data-v-249567a2></div></div><div class=\"col-6\" data-v-249567a2><label for=\"Broj-mobitela\" data-v-249567a2>Broj mobitela*</label><div class=\"icons\" data-v-249567a2><i class=\"fa fa-phone\" data-v-249567a2></i><input type=\"text\" id=\"phone1_domestic_input\" placeholder=\"Pretplatnički broj\" value=\"\" data-v-249567a2></div></div></div>", 2);

var _hoisted_29 = {
  "class": "button_korisnik"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Završi registraciju");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    style: {
      "color": "rgb(255 219 0)",
      "width": "auto",
      "margin-left": "10px"
    },
    to: '/login'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.country = $event;
    }),
    required: ""
  }, [_hoisted_20, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.countries, function (option, idx) {
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.country]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.zupanija = $event;
    }),
    required: ""
  }, [_hoisted_25, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.zupanije, function (option, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: idx,
      value: option.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 9
    /* TEXT, PROPS */
    , _hoisted_26);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.zupanija]])])])]), _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    style: {
      "color": "black",
      "width": "auto",
      "text-decoration": "none"
    },
    to: '#'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_30];
    }),
    _: 1
    /* STABLE */

  })])])])])])])]);
}

/***/ }),

/***/ "./resources/js/constants.js":
/*!***********************************!*\
  !*** ./resources/js/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COUNTRIES": () => (/* binding */ COUNTRIES),
/* harmony export */   "GRADOVI": () => (/* binding */ GRADOVI),
/* harmony export */   "TIP_PROSTORA": () => (/* binding */ TIP_PROSTORA),
/* harmony export */   "ZUPANIJE": () => (/* binding */ ZUPANIJE)
/* harmony export */ });
var COUNTRIES = [{
  name: 'Afghanistan',
  dial_code: '+93',
  code: 'AF'
}, {
  name: 'Aland Islands',
  dial_code: '+358',
  code: 'AX'
}, {
  name: 'Albania',
  dial_code: '+355',
  code: 'AL'
}, {
  name: 'Algeria',
  dial_code: '+213',
  code: 'DZ'
}, {
  name: 'AmericanSamoa',
  dial_code: '+1684',
  code: 'AS'
}, {
  name: 'Andorra',
  dial_code: '+376',
  code: 'AD'
}, {
  name: 'Angola',
  dial_code: '+244',
  code: 'AO'
}, {
  name: 'Anguilla',
  dial_code: '+1264',
  code: 'AI'
}, {
  name: 'Antarctica',
  dial_code: '+672',
  code: 'AQ'
}, {
  name: 'Antigua and Barbuda',
  dial_code: '+1268',
  code: 'AG'
}, {
  name: 'Argentina',
  dial_code: '+54',
  code: 'AR'
}, {
  name: 'Armenia',
  dial_code: '+374',
  code: 'AM'
}, {
  name: 'Aruba',
  dial_code: '+297',
  code: 'AW'
}, {
  name: 'Australia',
  dial_code: '+61',
  code: 'AU'
}, {
  name: 'Austria',
  dial_code: '+43',
  code: 'AT'
}, {
  name: 'Azerbaijan',
  dial_code: '+994',
  code: 'AZ'
}, {
  name: 'Bahamas',
  dial_code: '+1242',
  code: 'BS'
}, {
  name: 'Bahrain',
  dial_code: '+973',
  code: 'BH'
}, {
  name: 'Bangladesh',
  dial_code: '+880',
  code: 'BD'
}, {
  name: 'Barbados',
  dial_code: '+1246',
  code: 'BB'
}, {
  name: 'Belarus',
  dial_code: '+375',
  code: 'BY'
}, {
  name: 'Belgium',
  dial_code: '+32',
  code: 'BE'
}, {
  name: 'Belize',
  dial_code: '+501',
  code: 'BZ'
}, {
  name: 'Benin',
  dial_code: '+229',
  code: 'BJ'
}, {
  name: 'Bermuda',
  dial_code: '+1441',
  code: 'BM'
}, {
  name: 'Bhutan',
  dial_code: '+975',
  code: 'BT'
}, {
  name: 'Bolivia, Plurinational State of',
  dial_code: '+591',
  code: 'BO'
}, {
  name: 'Bosnia and Herzegovina',
  dial_code: '+387',
  code: 'BA'
}, {
  name: 'Botswana',
  dial_code: '+267',
  code: 'BW'
}, {
  name: 'Brazil',
  dial_code: '+55',
  code: 'BR'
}, {
  name: 'British Indian Ocean Territory',
  dial_code: '+246',
  code: 'IO'
}, {
  name: 'Brunei Darussalam',
  dial_code: '+673',
  code: 'BN'
}, {
  name: 'Bulgaria',
  dial_code: '+359',
  code: 'BG'
}, {
  name: 'Burkina Faso',
  dial_code: '+226',
  code: 'BF'
}, {
  name: 'Burundi',
  dial_code: '+257',
  code: 'BI'
}, {
  name: 'Cambodia',
  dial_code: '+855',
  code: 'KH'
}, {
  name: 'Cameroon',
  dial_code: '+237',
  code: 'CM'
}, {
  name: 'Canada',
  dial_code: '+1',
  code: 'CA'
}, {
  name: 'Cape Verde',
  dial_code: '+238',
  code: 'CV'
}, {
  name: 'Cayman Islands',
  dial_code: '+ 345',
  code: 'KY'
}, {
  name: 'Central African Republic',
  dial_code: '+236',
  code: 'CF'
}, {
  name: 'Chad',
  dial_code: '+235',
  code: 'TD'
}, {
  name: 'Chile',
  dial_code: '+56',
  code: 'CL'
}, {
  name: 'China',
  dial_code: '+86',
  code: 'CN'
}, {
  name: 'Christmas Island',
  dial_code: '+61',
  code: 'CX'
}, {
  name: 'Cocos (Keeling) Islands',
  dial_code: '+61',
  code: 'CC'
}, {
  name: 'Colombia',
  dial_code: '+57',
  code: 'CO'
}, {
  name: 'Comoros',
  dial_code: '+269',
  code: 'KM'
}, {
  name: 'Congo',
  dial_code: '+242',
  code: 'CG'
}, {
  name: 'Congo, The Democratic Republic of the Congo',
  dial_code: '+243',
  code: 'CD'
}, {
  name: 'Cook Islands',
  dial_code: '+682',
  code: 'CK'
}, {
  name: 'Costa Rica',
  dial_code: '+506',
  code: 'CR'
}, {
  name: "Cote d'Ivoire",
  dial_code: '+225',
  code: 'CI'
}, {
  name: 'Croatia',
  dial_code: '+385',
  code: 'HR'
}, {
  name: 'Cuba',
  dial_code: '+53',
  code: 'CU'
}, {
  name: 'Cyprus',
  dial_code: '+357',
  code: 'CY'
}, {
  name: 'Czech Republic',
  dial_code: '+420',
  code: 'CZ'
}, {
  name: 'Denmark',
  dial_code: '+45',
  code: 'DK'
}, {
  name: 'Djibouti',
  dial_code: '+253',
  code: 'DJ'
}, {
  name: 'Dominica',
  dial_code: '+1767',
  code: 'DM'
}, {
  name: 'Dominican Republic',
  dial_code: '+1849',
  code: 'DO'
}, {
  name: 'Ecuador',
  dial_code: '+593',
  code: 'EC'
}, {
  name: 'Egypt',
  dial_code: '+20',
  code: 'EG'
}, {
  name: 'El Salvador',
  dial_code: '+503',
  code: 'SV'
}, {
  name: 'Equatorial Guinea',
  dial_code: '+240',
  code: 'GQ'
}, {
  name: 'Eritrea',
  dial_code: '+291',
  code: 'ER'
}, {
  name: 'Estonia',
  dial_code: '+372',
  code: 'EE'
}, {
  name: 'Ethiopia',
  dial_code: '+251',
  code: 'ET'
}, {
  name: 'Falkland Islands (Malvinas)',
  dial_code: '+500',
  code: 'FK'
}, {
  name: 'Faroe Islands',
  dial_code: '+298',
  code: 'FO'
}, {
  name: 'Fiji',
  dial_code: '+679',
  code: 'FJ'
}, {
  name: 'Finland',
  dial_code: '+358',
  code: 'FI'
}, {
  name: 'France',
  dial_code: '+33',
  code: 'FR'
}, {
  name: 'French Guiana',
  dial_code: '+594',
  code: 'GF'
}, {
  name: 'French Polynesia',
  dial_code: '+689',
  code: 'PF'
}, {
  name: 'Gabon',
  dial_code: '+241',
  code: 'GA'
}, {
  name: 'Gambia',
  dial_code: '+220',
  code: 'GM'
}, {
  name: 'Georgia',
  dial_code: '+995',
  code: 'GE'
}, {
  name: 'Germany',
  dial_code: '+49',
  code: 'DE'
}, {
  name: 'Ghana',
  dial_code: '+233',
  code: 'GH'
}, {
  name: 'Gibraltar',
  dial_code: '+350',
  code: 'GI'
}, {
  name: 'Greece',
  dial_code: '+30',
  code: 'GR'
}, {
  name: 'Greenland',
  dial_code: '+299',
  code: 'GL'
}, {
  name: 'Grenada',
  dial_code: '+1473',
  code: 'GD'
}, {
  name: 'Guadeloupe',
  dial_code: '+590',
  code: 'GP'
}, {
  name: 'Guam',
  dial_code: '+1671',
  code: 'GU'
}, {
  name: 'Guatemala',
  dial_code: '+502',
  code: 'GT'
}, {
  name: 'Guernsey',
  dial_code: '+44',
  code: 'GG'
}, {
  name: 'Guinea',
  dial_code: '+224',
  code: 'GN'
}, {
  name: 'Guinea-Bissau',
  dial_code: '+245',
  code: 'GW'
}, {
  name: 'Guyana',
  dial_code: '+595',
  code: 'GY'
}, {
  name: 'Haiti',
  dial_code: '+509',
  code: 'HT'
}, {
  name: 'Holy See (Vatican City State)',
  dial_code: '+379',
  code: 'VA'
}, {
  name: 'Honduras',
  dial_code: '+504',
  code: 'HN'
}, {
  name: 'Hong Kong',
  dial_code: '+852',
  code: 'HK'
}, {
  name: 'Hungary',
  dial_code: '+36',
  code: 'HU'
}, {
  name: 'Iceland',
  dial_code: '+354',
  code: 'IS'
}, {
  name: 'India',
  dial_code: '+91',
  code: 'IN'
}, {
  name: 'Indonesia',
  dial_code: '+62',
  code: 'ID'
}, {
  name: 'Iran, Islamic Republic of Persian Gulf',
  dial_code: '+98',
  code: 'IR'
}, {
  name: 'Iraq',
  dial_code: '+964',
  code: 'IQ'
}, {
  name: 'Ireland',
  dial_code: '+353',
  code: 'IE'
}, {
  name: 'Isle of Man',
  dial_code: '+44',
  code: 'IM'
}, {
  name: 'Israel',
  dial_code: '+972',
  code: 'IL'
}, {
  name: 'Italy',
  dial_code: '+39',
  code: 'IT'
}, {
  name: 'Jamaica',
  dial_code: '+1876',
  code: 'JM'
}, {
  name: 'Japan',
  dial_code: '+81',
  code: 'JP'
}, {
  name: 'Jersey',
  dial_code: '+44',
  code: 'JE'
}, {
  name: 'Jordan',
  dial_code: '+962',
  code: 'JO'
}, {
  name: 'Kazakhstan',
  dial_code: '+77',
  code: 'KZ'
}, {
  name: 'Kenya',
  dial_code: '+254',
  code: 'KE'
}, {
  name: 'Kiribati',
  dial_code: '+686',
  code: 'KI'
}, {
  name: "Korea, Democratic People's Republic of Korea",
  dial_code: '+850',
  code: 'KP'
}, {
  name: 'Korea, Republic of South Korea',
  dial_code: '+82',
  code: 'KR'
}, {
  name: 'Kuwait',
  dial_code: '+965',
  code: 'KW'
}, {
  name: 'Kyrgyzstan',
  dial_code: '+996',
  code: 'KG'
}, {
  name: 'Laos',
  dial_code: '+856',
  code: 'LA'
}, {
  name: 'Latvia',
  dial_code: '+371',
  code: 'LV'
}, {
  name: 'Lebanon',
  dial_code: '+961',
  code: 'LB'
}, {
  name: 'Lesotho',
  dial_code: '+266',
  code: 'LS'
}, {
  name: 'Liberia',
  dial_code: '+231',
  code: 'LR'
}, {
  name: 'Libyan Arab Jamahiriya',
  dial_code: '+218',
  code: 'LY'
}, {
  name: 'Liechtenstein',
  dial_code: '+423',
  code: 'LI'
}, {
  name: 'Lithuania',
  dial_code: '+370',
  code: 'LT'
}, {
  name: 'Luxembourg',
  dial_code: '+352',
  code: 'LU'
}, {
  name: 'Macao',
  dial_code: '+853',
  code: 'MO'
}, {
  name: 'Macedonia',
  dial_code: '+389',
  code: 'MK'
}, {
  name: 'Madagascar',
  dial_code: '+261',
  code: 'MG'
}, {
  name: 'Malawi',
  dial_code: '+265',
  code: 'MW'
}, {
  name: 'Malaysia',
  dial_code: '+60',
  code: 'MY'
}, {
  name: 'Maldives',
  dial_code: '+960',
  code: 'MV'
}, {
  name: 'Mali',
  dial_code: '+223',
  code: 'ML'
}, {
  name: 'Malta',
  dial_code: '+356',
  code: 'MT'
}, {
  name: 'Marshall Islands',
  dial_code: '+692',
  code: 'MH'
}, {
  name: 'Martinique',
  dial_code: '+596',
  code: 'MQ'
}, {
  name: 'Mauritania',
  dial_code: '+222',
  code: 'MR'
}, {
  name: 'Mauritius',
  dial_code: '+230',
  code: 'MU'
}, {
  name: 'Mayotte',
  dial_code: '+262',
  code: 'YT'
}, {
  name: 'Mexico',
  dial_code: '+52',
  code: 'MX'
}, {
  name: 'Micronesia, Federated States of Micronesia',
  dial_code: '+691',
  code: 'FM'
}, {
  name: 'Moldova',
  dial_code: '+373',
  code: 'MD'
}, {
  name: 'Monaco',
  dial_code: '+377',
  code: 'MC'
}, {
  name: 'Mongolia',
  dial_code: '+976',
  code: 'MN'
}, {
  name: 'Montenegro',
  dial_code: '+382',
  code: 'ME'
}, {
  name: 'Montserrat',
  dial_code: '+1664',
  code: 'MS'
}, {
  name: 'Morocco',
  dial_code: '+212',
  code: 'MA'
}, {
  name: 'Mozambique',
  dial_code: '+258',
  code: 'MZ'
}, {
  name: 'Myanmar',
  dial_code: '+95',
  code: 'MM'
}, {
  name: 'Namibia',
  dial_code: '+264',
  code: 'NA'
}, {
  name: 'Nauru',
  dial_code: '+674',
  code: 'NR'
}, {
  name: 'Nepal',
  dial_code: '+977',
  code: 'NP'
}, {
  name: 'Netherlands',
  dial_code: '+31',
  code: 'NL'
}, {
  name: 'Netherlands Antilles',
  dial_code: '+599',
  code: 'AN'
}, {
  name: 'New Caledonia',
  dial_code: '+687',
  code: 'NC'
}, {
  name: 'New Zealand',
  dial_code: '+64',
  code: 'NZ'
}, {
  name: 'Nicaragua',
  dial_code: '+505',
  code: 'NI'
}, {
  name: 'Niger',
  dial_code: '+227',
  code: 'NE'
}, {
  name: 'Nigeria',
  dial_code: '+234',
  code: 'NG'
}, {
  name: 'Niue',
  dial_code: '+683',
  code: 'NU'
}, {
  name: 'Norfolk Island',
  dial_code: '+672',
  code: 'NF'
}, {
  name: 'Northern Mariana Islands',
  dial_code: '+1670',
  code: 'MP'
}, {
  name: 'Norway',
  dial_code: '+47',
  code: 'NO'
}, {
  name: 'Oman',
  dial_code: '+968',
  code: 'OM'
}, {
  name: 'Pakistan',
  dial_code: '+92',
  code: 'PK'
}, {
  name: 'Palau',
  dial_code: '+680',
  code: 'PW'
}, {
  name: 'Palestinian Territory, Occupied',
  dial_code: '+970',
  code: 'PS'
}, {
  name: 'Panama',
  dial_code: '+507',
  code: 'PA'
}, {
  name: 'Papua New Guinea',
  dial_code: '+675',
  code: 'PG'
}, {
  name: 'Paraguay',
  dial_code: '+595',
  code: 'PY'
}, {
  name: 'Peru',
  dial_code: '+51',
  code: 'PE'
}, {
  name: 'Philippines',
  dial_code: '+63',
  code: 'PH'
}, {
  name: 'Pitcairn',
  dial_code: '+872',
  code: 'PN'
}, {
  name: 'Poland',
  dial_code: '+48',
  code: 'PL'
}, {
  name: 'Portugal',
  dial_code: '+351',
  code: 'PT'
}, {
  name: 'Puerto Rico',
  dial_code: '+1939',
  code: 'PR'
}, {
  name: 'Qatar',
  dial_code: '+974',
  code: 'QA'
}, {
  name: 'Romania',
  dial_code: '+40',
  code: 'RO'
}, {
  name: 'Russia',
  dial_code: '+7',
  code: 'RU'
}, {
  name: 'Rwanda',
  dial_code: '+250',
  code: 'RW'
}, {
  name: 'Reunion',
  dial_code: '+262',
  code: 'RE'
}, {
  name: 'Saint Barthelemy',
  dial_code: '+590',
  code: 'BL'
}, {
  name: 'Saint Helena, Ascension and Tristan Da Cunha',
  dial_code: '+290',
  code: 'SH'
}, {
  name: 'Saint Kitts and Nevis',
  dial_code: '+1869',
  code: 'KN'
}, {
  name: 'Saint Lucia',
  dial_code: '+1758',
  code: 'LC'
}, {
  name: 'Saint Martin',
  dial_code: '+590',
  code: 'MF'
}, {
  name: 'Saint Pierre and Miquelon',
  dial_code: '+508',
  code: 'PM'
}, {
  name: 'Saint Vincent and the Grenadines',
  dial_code: '+1784',
  code: 'VC'
}, {
  name: 'Samoa',
  dial_code: '+685',
  code: 'WS'
}, {
  name: 'San Marino',
  dial_code: '+378',
  code: 'SM'
}, {
  name: 'Sao Tome and Principe',
  dial_code: '+239',
  code: 'ST'
}, {
  name: 'Saudi Arabia',
  dial_code: '+966',
  code: 'SA'
}, {
  name: 'Senegal',
  dial_code: '+221',
  code: 'SN'
}, {
  name: 'Serbia',
  dial_code: '+381',
  code: 'RS'
}, {
  name: 'Seychelles',
  dial_code: '+248',
  code: 'SC'
}, {
  name: 'Sierra Leone',
  dial_code: '+232',
  code: 'SL'
}, {
  name: 'Singapore',
  dial_code: '+65',
  code: 'SG'
}, {
  name: 'Slovakia',
  dial_code: '+421',
  code: 'SK'
}, {
  name: 'Slovenia',
  dial_code: '+386',
  code: 'SI'
}, {
  name: 'Solomon Islands',
  dial_code: '+677',
  code: 'SB'
}, {
  name: 'Somalia',
  dial_code: '+252',
  code: 'SO'
}, {
  name: 'South Africa',
  dial_code: '+27',
  code: 'ZA'
}, {
  name: 'South Sudan',
  dial_code: '+211',
  code: 'SS'
}, {
  name: 'South Georgia and the South Sandwich Islands',
  dial_code: '+500',
  code: 'GS'
}, {
  name: 'Spain',
  dial_code: '+34',
  code: 'ES'
}, {
  name: 'Sri Lanka',
  dial_code: '+94',
  code: 'LK'
}, {
  name: 'Sudan',
  dial_code: '+249',
  code: 'SD'
}, {
  name: 'Suriname',
  dial_code: '+597',
  code: 'SR'
}, {
  name: 'Svalbard and Jan Mayen',
  dial_code: '+47',
  code: 'SJ'
}, {
  name: 'Swaziland',
  dial_code: '+268',
  code: 'SZ'
}, {
  name: 'Sweden',
  dial_code: '+46',
  code: 'SE'
}, {
  name: 'Switzerland',
  dial_code: '+41',
  code: 'CH'
}, {
  name: 'Syrian Arab Republic',
  dial_code: '+963',
  code: 'SY'
}, {
  name: 'Taiwan',
  dial_code: '+886',
  code: 'TW'
}, {
  name: 'Tajikistan',
  dial_code: '+992',
  code: 'TJ'
}, {
  name: 'Tanzania, United Republic of Tanzania',
  dial_code: '+255',
  code: 'TZ'
}, {
  name: 'Thailand',
  dial_code: '+66',
  code: 'TH'
}, {
  name: 'Timor-Leste',
  dial_code: '+670',
  code: 'TL'
}, {
  name: 'Togo',
  dial_code: '+228',
  code: 'TG'
}, {
  name: 'Tokelau',
  dial_code: '+690',
  code: 'TK'
}, {
  name: 'Tonga',
  dial_code: '+676',
  code: 'TO'
}, {
  name: 'Trinidad and Tobago',
  dial_code: '+1868',
  code: 'TT'
}, {
  name: 'Tunisia',
  dial_code: '+216',
  code: 'TN'
}, {
  name: 'Turkey',
  dial_code: '+90',
  code: 'TR'
}, {
  name: 'Turkmenistan',
  dial_code: '+993',
  code: 'TM'
}, {
  name: 'Turks and Caicos Islands',
  dial_code: '+1649',
  code: 'TC'
}, {
  name: 'Tuvalu',
  dial_code: '+688',
  code: 'TV'
}, {
  name: 'Uganda',
  dial_code: '+256',
  code: 'UG'
}, {
  name: 'Ukraine',
  dial_code: '+380',
  code: 'UA'
}, {
  name: 'United Arab Emirates',
  dial_code: '+971',
  code: 'AE'
}, {
  name: 'United Kingdom',
  dial_code: '+44',
  code: 'GB'
}, {
  name: 'United States',
  dial_code: '+1',
  code: 'US'
}, {
  name: 'Uruguay',
  dial_code: '+598',
  code: 'UY'
}, {
  name: 'Uzbekistan',
  dial_code: '+998',
  code: 'UZ'
}, {
  name: 'Vanuatu',
  dial_code: '+678',
  code: 'VU'
}, {
  name: 'Venezuela, Bolivarian Republic of Venezuela',
  dial_code: '+58',
  code: 'VE'
}, {
  name: 'Vietnam',
  dial_code: '+84',
  code: 'VN'
}, {
  name: 'Virgin Islands, British',
  dial_code: '+1284',
  code: 'VG'
}, {
  name: 'Virgin Islands, U.S.',
  dial_code: '+1340',
  code: 'VI'
}, {
  name: 'Wallis and Futuna',
  dial_code: '+681',
  code: 'WF'
}, {
  name: 'Yemen',
  dial_code: '+967',
  code: 'YE'
}, {
  name: 'Zambia',
  dial_code: '+260',
  code: 'ZM'
}, {
  name: 'Zimbabwe',
  dial_code: '+263',
  code: 'ZW'
}];
var ZUPANIJE = [{
  name: 'Zagrebačka županija'
}, {
  name: 'Krapinsko-zagorska županija'
}, {
  name: 'Sisačko-moslavačka županija'
}, {
  name: 'Karlovačka županija'
}, {
  name: 'Varaždinska županija'
}, {
  name: 'Koprivničko-križevačka županija'
}, {
  name: 'Bjelovarsko-bilogorska županija'
}, {
  name: 'Primorsko-goranska županija'
}, {
  name: 'Ličko-senjska županija'
}, {
  name: 'Virovitičko-podravska županija'
}, {
  name: 'Požeško-slavonska županija'
}, {
  name: 'Brodsko-posavska županija'
}, {
  name: 'Zadarska županija'
}, {
  name: 'Osječko-baranjska županija'
}, {
  name: 'Šibensko-kninska županija'
}, {
  name: 'Vukovarsko-srijemska županija'
}, {
  name: 'Splitsko-dalmatinska županija'
}, {
  name: 'Istarska županija'
}, {
  name: 'Dubrovačko-neretvanska županija'
}, {
  name: 'Međimurska županija'
}, {
  name: 'Grad Zagreb'
}];
var GRADOVI = [{
  name: "Bakar"
}, {
  name: "Beli Manastir"
}, {
  name: "Belišće"
}, {
  name: "Benkovac"
}, {
  name: "Biograd na Moru"
}, {
  name: "Bjelovar"
}, {
  name: "Buje"
}, {
  name: "Buzet"
}, {
  name: "Cres"
}, {
  name: "Crikvenica"
}, {
  name: "Čabar"
}, {
  name: "Čakovec"
}, {
  name: "Čazma"
}, {
  name: "Daruvar"
}, {
  name: "Delnice"
}, {
  name: "Donja Stubica"
}, {
  name: "Donji Miholjac"
}, {
  name: "Drniš"
}, {
  name: "Dubrovnik"
}, {
  name: "Duga Resa"
}, {
  name: "Dugo Selo"
}, {
  name: "Đakovo"
}, {
  name: "Đurđevac"
}, {
  name: "Garešnica"
}, {
  name: "Glina"
}, {
  name: "Gospić"
}, {
  name: "Grubišno Polje"
}, {
  name: "Hrvatska Kostajnica"
}, {
  name: "Hvar"
}, {
  name: "Ilok"
}, {
  name: "Imotski"
}, {
  name: "Ivanec"
}, {
  name: "Ivanić-Grad"
}, {
  name: "Jastrebarsko"
}, {
  name: "Karlovac"
}, {
  name: "Kastav"
}, {
  name: "Kaštela"
}, {
  name: "Klanjec"
}, {
  name: "Knin"
}, {
  name: "Komiža"
}, {
  name: "Koprivnica"
}, {
  name: "Korčula"
}, {
  name: "Kraljevica"
}, {
  name: "Krapina"
}, {
  name: "Križevci"
}, {
  name: "Krk"
}, {
  name: "Kutina"
}, {
  name: "Kutjevo"
}, {
  name: "Labin"
}, {
  name: "Lepoglava"
}, {
  name: "Lipik"
}, {
  name: "Ludbreg"
}, {
  name: "Makarska"
}, {
  name: "Mali Lošinj"
}, {
  name: "Metković"
}, {
  name: "Mursko Središće"
}, {
  name: "Našice"
}, {
  name: "Nin"
}, {
  name: "Nova Gradiška"
}, {
  name: "Novalja"
}, {
  name: "Novi Marof"
}, {
  name: "Novi Vinodolski"
}, {
  name: "Novigrad"
}, {
  name: "Novska"
}, {
  name: "Obrovac"
}, {
  name: "Ogulin"
}, {
  name: "Omiš"
}, {
  name: "Opatija"
}, {
  name: "Opuzen"
}, {
  name: "Orahovica"
}, {
  name: "Oroslavje"
}, {
  name: "Osijek"
}, {
  name: "Otočac"
}, {
  name: "Otok"
}, {
  name: "Ozalj"
}, {
  name: "Pag"
}, {
  name: "Pakrac"
}, {
  name: "Pazin"
}, {
  name: "Petrinja"
}, {
  name: "Pleternica"
}, {
  name: "Ploče"
}, {
  name: "Poreč"
}, {
  name: "Požega"
}, {
  name: "Pregrada"
}, {
  name: "Prelog"
}, {
  name: "Pula"
}, {
  name: "Rab"
}, {
  name: "Rijeka"
}, {
  name: "Rovinj"
}, {
  name: "Samobor"
}, {
  name: "Senj"
}, {
  name: "Sinj"
}, {
  name: "Sisak"
}, {
  name: "Skradin"
}, {
  name: "Slatina"
}, {
  name: "Slavonski Brod"
}, {
  name: "Slunj"
}, {
  name: "Solin"
}, {
  name: "Split"
}, {
  name: "Stari Grad"
}, {
  name: "Supetar"
}, {
  name: "Sveta Nedelja"
}, {
  name: "Sveti Ivan Zelina"
}, {
  name: "Šibenik"
}, {
  name: "Trilj"
}, {
  name: "Trogir"
}, {
  name: "Umag"
}, {
  name: "Valpovo"
}, {
  name: "Varaždin"
}, {
  name: "Varaždinske Toplice"
}, {
  name: "Velika Gorica"
}, {
  name: "Vinkovci"
}, {
  name: "Virovitica"
}, {
  name: "Vis"
}, {
  name: "Vodice"
}, {
  name: "Vodnjan"
}, {
  name: "Vrbovec"
}, {
  name: "Vrbovsko"
}, {
  name: "Vrgorac"
}, {
  name: "Vrlika"
}, {
  name: "Vukovar"
}, {
  name: "Zabok"
}, {
  name: "Zadar"
}, {
  name: "Zagreb"
}, {
  name: "Zaprešić"
}, {
  name: "Zlatar"
}, {
  name: "Županja"
}];
var TIP_PROSTORA = [{
  name: 'Stan'
}, {
  name: 'Kuća'
}, {
  name: 'Garsonjera'
}, {
  name: 'Apartman'
}, {
  name: 'Vikendica'
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.shadow[data-v-249567a2]{\r\n  margin-top: 50px;\r\n  text-align: center;\n}\n.registracija[data-v-249567a2]{\r\n  width: 80%;\r\n  text-align: left;\r\n  margin: auto;\r\n  color: black;\n}\n.registracija h2[data-v-249567a2]{\r\n  color: black;\r\n  padding: 30px 0;\r\n  font-weight: bold;\n}\n.tekst[data-v-249567a2]{\r\n  display: flex;\r\n  width: 80%;\r\n  text-align: left;\r\n  margin: auto;\n}\n.opis_korisnika[data-v-249567a2]{\r\n  width: 80%;\r\n  margin: auto;\n}\n.opis_korisnika2[data-v-249567a2]{\r\n  width: 100%;\r\n  margin: auto;\n}\n.button_korisnik[data-v-249567a2]{\r\n  width: 100%;\r\n  margin: auto;\r\n  padding-top: 40px;\r\n  padding-bottom: 30px;\n}\n.button_korisnik button[data-v-249567a2]{\r\n  width: 100%; \r\n  text-align: center;\r\n  padding: 10px;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  border-radius: 5px;\n}\nh4[data-v-249567a2]{\r\n  padding: 20px;\n}\nbutton[data-v-249567a2]:hover{ \r\n  transform: scale(1.02);\r\n  transition: transform 330ms ease-in-out;\n}\n.forma[data-v-249567a2]{\r\n  width: 70%;\r\n  margin: auto;\r\n  padding-bottom: 50px;\n}\nlabel[data-v-249567a2]{\r\n  width: 100%;\r\n  margin: 5px;\r\n  margin-left: 0px;\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 15px;\r\n  color: black !important;\n}\ninput[data-v-249567a2]{\r\n  width: 100%;\r\n  font-size: 15px;\r\n  padding: 10px 40px;\r\n  border: none;\r\n  border-bottom: 1px solid rgb(78, 78, 78);\r\n  background: transparent;\n}\n.icons i[data-v-249567a2]{\r\n  position: absolute;\r\n  font-size: 23px;\r\n  padding: 10px;\n}\n.section[data-v-249567a2]{\r\n  padding: 20px 0;\n}\n.bez_ikone[data-v-249567a2]{\r\n  padding: 10px;\n}\n[data-v-249567a2]:focus-visible {\r\n    outline: none;\n}\nselect[data-v-249567a2]{\r\n  width: 100%;\r\n  font-size: 15px;\r\n  padding: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid rgb(78, 78, 78);\r\n  background: transparent;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_249567a2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_249567a2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_249567a2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/poslovni_registracija/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/poslovni_registracija/index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_249567a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=249567a2&scoped=true */ "./resources/js/components/poslovni_registracija/index.vue?vue&type=template&id=249567a2&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/components/poslovni_registracija/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_249567a2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css */ "./resources/js/components/poslovni_registracija/index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css");
/* harmony import */ var C_Users_User_OneDrive_Radna_povr_ina_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_User_OneDrive_Radna_povr_ina_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_249567a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-249567a2"],['__file',"resources/js/components/poslovni_registracija/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/poslovni_registracija/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/poslovni_registracija/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/poslovni_registracija/index.vue?vue&type=template&id=249567a2&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/poslovni_registracija/index.vue?vue&type=template&id=249567a2&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_249567a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_249567a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=249567a2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=template&id=249567a2&scoped=true");


/***/ }),

/***/ "./resources/js/components/poslovni_registracija/index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/poslovni_registracija/index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_249567a2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/poslovni_registracija/index.vue?vue&type=style&index=0&id=249567a2&scoped=true&lang=css");


/***/ })

}]);