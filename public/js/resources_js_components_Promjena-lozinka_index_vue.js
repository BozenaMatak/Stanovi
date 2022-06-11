"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Promjena-lozinka_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'promjena-lozinke',
  data: function data() {
    return {
      id: '',
      data: {
        password: '',
        password_confirmation: ''
      },
      user: {
        isLogged: false
      }
    };
  },
  created: function created() {
    if (user.isLogged == false) {
      this.$router.push({
        name: 'login'
      });
    }

    this.type = user.type;
    this.id = user.id;
  },
  methods: {
    logout: function logout(evt) {
      var _this = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: 'Jeste li sigurni da se želite odjaviti?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Da, odjavi me!'
      }).then(function (res) {
        console.log(res.isConfirmed);

        if (res.isConfirmed == true) {
          axios__WEBPACK_IMPORTED_MODULE_0___default().get('api/logout').then(function (response) {
            localStorage.removeItem('currentUser');
            localStorage.setItem("currentUser", JSON.stringify(_this.user)); // remove any other authenticated user data you put in local storage
            // Assuming that you set this earlier for subsequent Ajax request at some point like so:
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth_token ;

            delete (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.Authorization); // If using 'vue-router' redirect to login page

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Odjavljeni ste!', 'Uspješno ste se odjavili.', 'success').then(function (res) {
              _this.$router.go();
            });
          })["catch"](function (error) {
            // If the api request failed then you still might want to remove
            // the same data from localStorage anyways
            // perhaps this code should go in a finally method instead of then and catch
            // methods to avoid duplication.
            localStorage.removeItem('currentUser');
            localStorage.setItem("currentUser", JSON.stringify(_this.user));
            delete (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.Authorization);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Odjavljeni ste!', 'Uspješno ste se odjavili.', 'success').then(function (res) {
              _this.$router.go();
            });
          });
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    editPassowrd: function editPassowrd() {
      var _this2 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: 'Jeste li sigurni da želite promjeniti lozinku?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Da, promjeni!'
      }).then(function (res) {
        if (res.isConfirmed == true) {
          axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/change-password/".concat(_this2.id), _this2.data).then(function (res) {
            console.log(res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Uspješno ste promjenili lozinku!', 'Molim vas prijavite se ponovno', 'success').then(function (res) {
              _this2.logout();
            });
          })["catch"](function (e) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Pogreška!', 'Pojavila se pogreška pri izmjeni lozinke', 'warning');
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=template&id=f8e7d27e&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=template&id=f8e7d27e&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f8e7d27e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  style: {
    "position": "relative",
    "background": "rgb(216, 216, 210)"
  }
};
var _hoisted_2 = {
  "class": "section page_content user_area bgnd-light-grey"
};
var _hoisted_3 = {
  "class": "container",
  style: {
    "margin-bottom": "120px",
    "margin-top": "70px"
  }
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "s12 13 left",
  style: {
    "margin-left": "0",
    "padding": "0",
    "width": "25%"
  }
};
var _hoisted_6 = {
  "class": "menu_left hide-on-med-and-down",
  style: {
    "border": "1px solid grey",
    "background-color": "transparent",
    "width": "80%"
  }
};
var _hoisted_7 = {
  key: 0,
  style: {
    "border-bottom": "1px solid #aea8a8"
  }
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Moji oglasi", -1
  /* HOISTED */
  );
});

var _hoisted_9 = {
  style: {
    "border-bottom": "1px solid #aea8a8"
  }
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Moji podaci", -1
  /* HOISTED */
  );
});

var _hoisted_11 = {
  style: {
    "border-bottom": "1px solid #aea8a8"
  }
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Lozinka", -1
  /* HOISTED */
  );
});

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Odjava", -1
  /* HOISTED */
  );
});

var _hoisted_14 = {
  "class": "s12 19 main",
  style: {
    "margin-left": "0",
    "width": "75%"
  }
};
var _hoisted_15 = {
  "class": "content_body white_bgnd_with_border",
  style: {
    "border": "1px solid grey",
    "background-color": "white",
    "padding-left": "50px",
    "padding-right": "50px"
  }
};

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "head small_title hide-on-med-and-down",
    style: {
      "font-size": "27px",
      "font-weight": "700",
      "line-height": "32px",
      "padding": "10px",
      "color": "#e6d49c"
    }
  }, "Lozinka", -1
  /* HOISTED */
  );
});

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "font-size": "18px",
      "padding-left": "10px"
    }
  }, "Izmjena Vaše lozinke: ", -1
  /* HOISTED */
  );
});

var _hoisted_18 = {
  "class": "form-wrapper"
};
var _hoisted_19 = {
  "class": "container",
  style: {
    "padding": "10px",
    "margin": "0"
  }
};
var _hoisted_20 = {
  "class": "button_korisnik"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"site-footer\" style=\"height:300px;background-color:#666655;\" data-v-f8e7d27e><div class=\"container\" data-v-f8e7d27e><div class=\"row\" data-v-f8e7d27e><div class=\"col-sm-12 col-md-6\" data-v-f8e7d27e><h4 style=\"margin-top:15px;padding:0;\" data-v-f8e7d27e>O nama</h4><p class=\"text-justify\" data-v-f8e7d27e><span style=\"color:#a39053;font-weight:bold;\" data-v-f8e7d27e>Find a Place</span> aplikacija omogućava pronalazak i oglašavanje nekretnina koje se mogu kupiti/prodati ili iznajmiti. <br data-v-f8e7d27e><br data-v-f8e7d27e> Cilj aplikacije jest omogućiti korisnicima da na brz i jednostavan način mogu pregledavati nekretnine različitih tipova i namjene ili oglasiti svoju nekretninu. </p></div><div class=\"col-xs-6 col-md-3\" style=\"padding:0;\" data-v-f8e7d27e><h4 style=\"margin-top:15px;padding:0;\" data-v-f8e7d27e>Kategorije</h4><ul class=\"footer-links\" style=\"margin-left:30px;\" data-v-f8e7d27e><li data-v-f8e7d27e>Stan</li><li data-v-f8e7d27e>Kuća</li><li data-v-f8e7d27e>Garsonjera</li><li data-v-f8e7d27e>Apartman</li><li data-v-f8e7d27e>Vikendica</li><li data-v-f8e7d27e>Ostalo</li></ul></div><div class=\"col-xs-6 col-md-3\" data-v-f8e7d27e><h4 style=\"margin-top:15px;padding:0;\" data-v-f8e7d27e>Podaci</h4><ul class=\"footer-links\" data-v-f8e7d27e><li data-v-f8e7d27e>findaplace@gmail.com</li><li data-v-f8e7d27e>15 Gajeva Street, 10000 Zagreb, Croatia</li><li data-v-f8e7d27e>+385 1 4815 111</li><li data-v-f8e7d27e>+385 98 367 582</li></ul></div></div><hr data-v-f8e7d27e></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [_ctx.type == 'Poslovni' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    style: {
      "text-decoration": "none",
      "color": "black"
    },
    to: '/moji-oglasi'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    style: {
      "text-decoration": "none",
      "color": "black"
    },
    to: 'moji-podaci'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    style: {
      "text-decoration": "none",
      "color": "black"
    },
    to: '/promjena-lozinke'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    style: {
      "text-decoration": "none",
      "color": "black"
    },
    to: '/promjena-lozinke',
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.logout, ["prevent"])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_13];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.data.password = $event;
    }),
    placeholder: "Lozinka",
    name: "password",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.data.password_confirmation = $event;
    }),
    placeholder: "Nova lozinka",
    name: "password",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.password_confirmation]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.editPassowrd && $options.editPassowrd.apply($options, arguments);
    }, ["prevent"])),
    type: "submit"
  }, "Spremi promjene")])])])])])])])])]), _hoisted_21]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bgnd-light-grey[data-v-f8e7d27e]{\r\n    background: rgb(216, 216, 210);\n}\n.section[data-v-f8e7d27e]{\r\n    margin: 0;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\n}\n.container[data-v-f8e7d27e]{\r\n    margin-top: 30px;\r\n    max-width: 1220px;\r\n    margin-bottom: 30px;\n}\n.button_korisnik[data-v-f8e7d27e]{\r\n  margin: auto;\r\n  padding-top: 20px;\r\n  padding-bottom: 30px;\n}\n.button_korisnik button[data-v-f8e7d27e]{\r\n  width: 40%;  \r\n  text-align: center;\r\n  padding: 10px;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  border-radius: 5px;\r\n  background-color:#e6d49c;\r\n  color: white;\n}\nbutton[data-v-f8e7d27e]:hover{ \r\n  transform: scale(1.05);\r\n  transition: transform 330ms ease-in-out;\n}\ninput[type=text][data-v-f8e7d27e], input[type=password][data-v-f8e7d27e] {   \r\n        width: 90%;   \r\n        margin: 10px 0;  \r\n        padding: 10px 18px;   \r\n        display: inline-block;   \r\n        box-sizing: border-box;\r\n        border-color:#dcd8c9; \r\n        border-radius: 5px;  \r\n        font-size: 16px;\n}\ntable[data-v-f8e7d27e] {\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 18px;\r\n  width: 100%;\n}\ntd[data-v-f8e7d27e], th[data-v-f8e7d27e] {\r\n  text-align: left;\r\n  padding: 15px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.site-footer[data-v-f8e7d27e]\r\n{\r\n  padding:0;\r\n  font-size:16px;\r\n  line-height:25px;\r\n  color:#ffffff;\n}\n.site-footer hr[data-v-f8e7d27e]\r\n{\r\n  border-top-color:#bbb;\r\n  opacity:0.5\n}\n.site-footer hr.small[data-v-f8e7d27e]\r\n{\r\n  margin:25px 0\n}\n.site-footer h6[data-v-f8e7d27e]\r\n{\r\n  color:#fff;\r\n  font-size:16px;\r\n  text-transform:uppercase;\r\n  margin-top:5px;\r\n  letter-spacing:2px\n}\n.site-footer a[data-v-f8e7d27e]\r\n{\r\n  color:#737373;\n}\n.site-footer a[data-v-f8e7d27e]:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\n}\n.footer-links[data-v-f8e7d27e]\r\n{\r\n  padding-left:0;\r\n  list-style:none\n}\n@media (max-width:991px)\r\n{\n.site-footer [class^=col-][data-v-f8e7d27e]\r\n  {\r\n    margin-bottom:30px\n}\n}\n@media (max-width:767px)\r\n{\n.site-footer[data-v-f8e7d27e]\r\n  {\r\n    padding-bottom:0\n}\n.site-footer .copyright-text[data-v-f8e7d27e],.site-footer .social-icons[data-v-f8e7d27e]\r\n  {\r\n    text-align:center\n}\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_f8e7d27e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_f8e7d27e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_f8e7d27e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_f8e7d27e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_f8e7d27e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_f8e7d27e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Promjena-lozinka/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Promjena-lozinka/index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_f8e7d27e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f8e7d27e&scoped=true */ "./resources/js/components/Promjena-lozinka/index.vue?vue&type=template&id=f8e7d27e&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/components/Promjena-lozinka/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_f8e7d27e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css */ "./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_f8e7d27e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css */ "./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css");
/* harmony import */ var C_Users_User_OneDrive_Radna_povr_ina_laravel_vue_final_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,C_Users_User_OneDrive_Radna_povr_ina_laravel_vue_final_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_f8e7d27e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f8e7d27e"],['__file',"resources/js/components/Promjena-lozinka/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Promjena-lozinka/index.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Promjena-lozinka/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Promjena-lozinka/index.vue?vue&type=template&id=f8e7d27e&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Promjena-lozinka/index.vue?vue&type=template&id=f8e7d27e&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_f8e7d27e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_f8e7d27e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=f8e7d27e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=template&id=f8e7d27e&scoped=true");


/***/ }),

/***/ "./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_f8e7d27e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=0&id=f8e7d27e&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_f8e7d27e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Promjena-lozinka/index.vue?vue&type=style&index=1&id=f8e7d27e&scoped=true&lang=css");


/***/ })

}]);