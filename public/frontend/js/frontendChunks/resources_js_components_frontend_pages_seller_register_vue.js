"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_seller_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/seller_register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/seller_register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_telephone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/telephone */ "./resources/js/components/frontend/partials/telephone.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "register",
  components: {
    telePhone: _partials_telephone__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        shop_name: '',
        phone: '',
        address: '',
        phone_no: '',
        otp: '',
        user_type: this.$route.params.type
      },
      loading: false,
      agreement: null
    };
  },
  mounted: function mounted() {},
  methods: {
    getNumber: function getNumber(number) {
      this.form.phone = number;
    },
    register: function register() {
      var _this = this;

      if (this.settings.seller_agreement && !this.agreement) {
        return toastr.info(this.lang.accept_terms, this.lang.Error + ' !!');
      }

      var url = this.getUrl('seller-register');
      this.loading = true;
      this.form.real_otp = this.otp;
      axios.post(url, this.form).then(function (response) {
        _this.loading = false;

        if (response.data.error) {
          _this.$Progress.fail();

          toastr.error(response.data.error, _this.lang.Error + ' !!');
        }

        if (response.data.success) {
          _this.$router.push({
            name: 'login'
          });

          _this.errors = [];
          toastr.success(response.data.success, _this.lang.Success + ' !!');
        }
      })["catch"](function (error) {
        _this.loading = false;

        _this.$Progress.fail();

        if (error.response && error.response.status == 422) {
          _this.errors = error.response.data.errors;
        }
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "telephone",
  data: function data() {
    return {
      dropdown_active: false,
      search_key: '',
      selected_country: '',
      defaultCountry: {
        flag: '',
        code: '',
        name: ''
      },
      activeClass: 'hideShow',
      phone_no: '',
      count: 1,
      countries: [],
      filtered_countries: []
    };
  },
  watch: {
    phone: function phone() {
      this.phone_no = this.phone;
    }
  },
  mounted: function mounted() {
    this.country();
  },
  computed: {
    phone: function phone() {
      return this.$store.getters.getMobileNo;
    }
  },
  methods: {
    PlusCheck: function PlusCheck(country) {
      if (country) {
        return country.phonecode.includes("+");
      } else {
        return false;
      }
    },
    getCountryCode: function getCountryCode(country) {
      this.activeClass = 'hideShow';
      this.phone_no = '';
      this.count = 1;

      if (country) {
        this.defaultCountry.flag = country.flag_icon;
      } else {
        this.defaultCountry.flag = this.getUrl('public/images/flags/bd.png');
      }

      var code = '+880';

      if (!country) {
        this.defaultCountry.code = code;
        this.defaultCountry.name = 'Bangladesh';
      } else {
        if (country.phonecode.includes("+")) {
          this.defaultCountry.code = country.phonecode;
        } else {
          this.defaultCountry.code = '+' + country.phonecode;
        }

        this.defaultCountry.name = country.name;
      }
    },
    activeDropDown: function activeDropDown() {
      var _this = this;

      if (this.activeClass == 'hideShow') {
        this.activeClass = '';
      } else {
        this.activeClass = 'hideShow';
      }

      this.$nextTick(function () {
        document.addEventListener('click', _this.hideSearchDropdown);
      });
    },
    hideSearchDropdown: function hideSearchDropdown() {
      this.activeClass = 'hideShow';
      document.removeEventListener('click', this.hideSearchDropdown);
    },
    countrySearch: function countrySearch() {
      var _this2 = this;

      var res;
      res = this.countries.filter(function (d) {
        return d.name;
      });
      this.filtered_countries = res.filter(function (d) {
        return d.name && d.name.toLowerCase().includes(_this2.search_key);
      });
      return this.filtered_countries;
    },
    getNum: function getNum() {
      if (this.count == 1) {
        this.phone_no = this.defaultCountry.code + this.phone_no;
      } else if (this.phone_no == '') {
        this.phone_no = this.defaultCountry.code + this.phone_no;
      }

      this.$emit('phone_no', this.phone_no);
      this.count++;
    },
    country: function country() {
      var _this3 = this;

      var url = this.getUrl('get/country-list');

      if (JSON.parse(sessionStorage.getItem('countries'))) {
        var countries = JSON.parse(sessionStorage.getItem('countries'));
        this.countries = countries;
        this.filtered_countries = countries;
        var country = this.countries.find(function (el) {
          return el.id == _this3.settings.default_country;
        });
        this.getCountryCode(country);
      } else {
        axios.get(url).then(function (response) {
          if (response.data.error) {
            toastr.error(response.data.error, _this3.lang.Error + ' !!');
          } else {
            _this3.countries = response.data.countries;
            _this3.filtered_countries = response.data.countries;

            var _country = _this3.countries.find(function (el) {
              return el.id == _this3.settings.default_country;
            });

            _this3.getCountryCode(_country);

            sessionStorage.setItem('countries', JSON.stringify(_this3.countries));
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/pages/seller_register.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/frontend/pages/seller_register.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _seller_register_vue_vue_type_template_id_b8536334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seller_register.vue?vue&type=template&id=b8536334& */ "./resources/js/components/frontend/pages/seller_register.vue?vue&type=template&id=b8536334&");
/* harmony import */ var _seller_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seller_register.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/seller_register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _seller_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _seller_register_vue_vue_type_template_id_b8536334___WEBPACK_IMPORTED_MODULE_0__.render,
  _seller_register_vue_vue_type_template_id_b8536334___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/seller_register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/telephone.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/frontend/partials/telephone.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telephone.vue?vue&type=template&id=f4c5412e&scoped=true& */ "./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true&");
/* harmony import */ var _telephone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telephone.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _telephone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f4c5412e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/telephone.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/pages/seller_register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/seller_register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./seller_register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/seller_register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_telephone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./telephone.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_telephone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/pages/seller_register.vue?vue&type=template&id=b8536334&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/seller_register.vue?vue&type=template&id=b8536334& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_register_vue_vue_type_template_id_b8536334___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_register_vue_vue_type_template_id_b8536334___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_register_vue_vue_type_template_id_b8536334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./seller_register.vue?vue&type=template&id=b8536334& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/seller_register.vue?vue&type=template&id=b8536334&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./telephone.vue?vue&type=template&id=f4c5412e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/seller_register.vue?vue&type=template&id=b8536334&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/seller_register.vue?vue&type=template&id=b8536334& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sg-page-content" }, [
    _c("section", { staticClass: "ragister-account text-center" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "account-content" }, [
          _c("div", { staticClass: "thumb" }, [
            _c("img", {
              staticClass: "img-fluid img-fit",
              attrs: {
                src: _vm.settings.seller_sing_up_banner,
                alt: _vm.form.user_type,
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-content" }, [
            _c("h1", [_vm._v(_vm._s(_vm.lang.sign_up))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.lang.sign_up_to_continue_shopping))]),
            _vm._v(" "),
            _vm.form.user_type == "seller"
              ? _c("h5", { staticClass: "registration_heading" }, [
                  _vm._v(_vm._s(_vm.lang.personal_info)),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "ragister-form",
                attrs: { name: "ragister-form" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.register.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", [
                  _c("div", { staticClass: "form-group" }, [
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-account-outline",
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.first_name,
                          expression: "form.first_name",
                        },
                      ],
                      staticClass: "form-control",
                      class: { error_border: _vm.errors.first_name },
                      attrs: { type: "text", placeholder: _vm.lang.first_name },
                      domProps: { value: _vm.form.first_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "first_name", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm.errors.first_name
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.first_name[0])),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-account-outline",
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.last_name,
                          expression: "form.last_name",
                        },
                      ],
                      staticClass: "form-control",
                      class: { error_border: _vm.errors.last_name },
                      attrs: { type: "text", placeholder: _vm.lang.last_name },
                      domProps: { value: _vm.form.last_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "last_name", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm.errors.last_name
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.last_name[0])),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-email-outline",
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email",
                        },
                      ],
                      staticClass: "form-control",
                      class: { error_border: _vm.errors.email },
                      attrs: { type: "email", placeholder: _vm.lang.email },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm.errors.email
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.email[0])),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("telePhone", { on: { phone_no: _vm.getNumber } }),
                      _vm._v(" "),
                      _vm.errors.phone
                        ? _c("span", { staticClass: "validation_error" }, [
                            _vm._v(_vm._s(_vm.errors.phone[0])),
                          ])
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-lock-outline",
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password,
                          expression: "form.password",
                        },
                      ],
                      staticClass: "form-control",
                      class: { error_border: _vm.errors.password },
                      attrs: {
                        type: "password",
                        placeholder: _vm.lang.password,
                      },
                      domProps: { value: _vm.form.password },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "password", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm.errors.password
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.password[0])),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _vm.form.user_type == "seller"
                  ? _c("h5", { staticClass: "registration_heading" }, [
                      _vm._v(_vm._s(_vm.lang.shop_info)),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("span", {
                    staticClass: "mdi mdi-name mdi-shopping-outline",
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.shop_name,
                        expression: "form.shop_name",
                      },
                    ],
                    staticClass: "form-control",
                    class: { error_border: _vm.errors.shop_name },
                    attrs: { type: "text", placeholder: _vm.lang.shop_name },
                    domProps: { value: _vm.form.shop_name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "shop_name", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _vm.errors.shop_name
                  ? _c("span", { staticClass: "validation_error" }, [
                      _vm._v(_vm._s(_vm.errors.shop_name[0])),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("span", {
                    staticClass: "mdi mdi-name mdi-map-marker-outline",
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.address,
                        expression: "form.address",
                      },
                    ],
                    staticClass: "form-control",
                    class: { error_border: _vm.errors.address },
                    attrs: { type: "text", placeholder: _vm.lang.shop_address },
                    domProps: { value: _vm.form.address },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "address", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _vm.errors.address
                  ? _c("span", { staticClass: "validation_error" }, [
                      _vm._v(_vm._s(_vm.errors.address[0])),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-checkbox" }, [
                  _vm.settings.seller_agreement
                    ? _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.agreement,
                              expression: "agreement",
                            },
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "checkbox", id: "tnc", value: "2" },
                          domProps: {
                            checked: Array.isArray(_vm.agreement)
                              ? _vm._i(_vm.agreement, "2") > -1
                              : _vm.agreement,
                          },
                          on: {
                            change: function ($event) {
                              var $$a = _vm.agreement,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = "2",
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 && (_vm.agreement = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.agreement = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.agreement = $$c
                              }
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          { attrs: { for: "tnc" } },
                          [
                            _vm._v(
                              _vm._s(_vm.lang.agreement) +
                                "\n                                    "
                            ),
                            _vm.urlCheck(_vm.settings.seller_agreement)
                              ? _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: _vm.settings.seller_agreement,
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.lang.terms))]
                                )
                              : _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        "/page/" +
                                        _vm.settings.seller_agreement,
                                    },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.lang.terms) +
                                        "\n                                    "
                                    ),
                                  ]
                                ),
                          ],
                          1
                        ),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _vm.loading
                  ? _c("loading_button", { attrs: { class_name: "btn" } })
                  : _c(
                      "button",
                      { staticClass: "btn", attrs: { type: "submit" } },
                      [_vm._v(_vm._s(_vm.lang.sign_up))]
                    ),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _vm._v(_vm._s(_vm.lang.have_an_account) + " "),
                    _c("router-link", { attrs: { to: { name: "login" } } }, [
                      _vm._v(_vm._s(_vm.lang.sign_in)),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    { staticClass: "yoori__signup--form", attrs: { action: "#" } },
    [
      _c(
        "div",
        {
          staticClass: "country__code--config",
          on: {
            click: function ($event) {
              $event.stopPropagation()
              return _vm.activeDropDown.apply(null, arguments)
            },
          },
        },
        [
          _c("div", { staticClass: "country__code--config-details" }, [
            _c("span", { staticClass: "country__code--flag" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: _vm.defaultCountry.flag, alt: "Flag" },
              }),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "country__code--number" }, [
              _vm._v(
                "\n                  " +
                  _vm._s(_vm.defaultCountry.code) +
                  "\n              "
              ),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "country__dropdown" }),
          ]),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass: "country__code--list",
              class: _vm.activeClass,
              on: {
                click: function ($event) {
                  $event.stopPropagation()
                },
              },
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search_key,
                    expression: "search_key",
                  },
                ],
                staticClass: "country__search",
                attrs: { placeholder: "Search", type: "text" },
                domProps: { value: _vm.search_key },
                on: {
                  keyup: _vm.countrySearch,
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search_key = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _vm._l(_vm.filtered_countries, function (country, index) {
                return _c(
                  "li",
                  {
                    on: {
                      click: function ($event) {
                        return _vm.getCountryCode(country)
                      },
                    },
                  },
                  [
                    _c("span", { staticClass: "country__code--flag" }, [
                      _c("img", {
                        directives: [
                          {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: country.flag_icon,
                            expression: "country.flag_icon",
                          },
                        ],
                        staticClass: "img-fluid",
                        attrs: { alt: "Flag" },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "country__name" }, [
                      _c("strong", [_vm._v(_vm._s(country.name))]),
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "country__code--number" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm.PlusCheck(country)
                              ? country.phonecode
                              : "+" + country.phonecode
                          ) +
                          "\n                      "
                      ),
                    ]),
                  ]
                )
              }),
            ],
            2
          ),
        ]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.phone_no,
            expression: "phone_no",
          },
        ],
        staticClass: "number",
        attrs: { type: "tel" },
        domProps: { value: _vm.phone_no },
        on: {
          keyup: _vm.getNum,
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.phone_no = $event.target.value
          },
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);