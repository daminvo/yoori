"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        phone: '',
        address: '',
        phone_no: '',
        otp: '',
        user_type: this.$route.params.type
      },
      optionTo: 'phone',
      loading: false,
      buttonText: 'Get OTP',
      phone_no: '',
      minute: 1,
      second: 60,
      otp: '',
      agreement: '',
      country_code: []
    };
  },
  watch: {
    $route: function $route(from, to) {
      this.form.user_type = from.params.type;
    }
  },
  mounted: function mounted() {
    this.loginOptions();
  },
  methods: {
    countDownTimer: function countDownTimer() {
      var _this = this;

      this.minute = 1;
      this.second = 60;
      setInterval(function () {
        _this.second--;

        if (_this.second == 0) {
          _this.minute--;
          _this.second = 60;

          if (_this.minute == 0) {
            _this.minute = 0;
          }
        }
      }, 1000);
    },
    register: function register() {
      var _this2 = this;

      if (this.settings.customer_agreement && !this.agreement) {
        return toastr.info(this.lang.accept_terms, this.lang.Error + ' !!');
      }

      this.loading = true;
      var url = this.getUrl('register');
      this.form.real_otp = this.otp;

      if (this.form.real_otp != this.otp) {
        toastr.error(this.lang.OTP_doesnt_match, this.lang.Error + ' !!');
      }

      axios.post(url, this.form).then(function (response) {
        _this2.loading = false;

        if (response.data.error) {
          _this2.$Progress.fail();

          toastr.error(response.data.error, _this2.lang.Error + ' !!');
        }

        if (response.data.success) {
          if (response.data.type == 1) {
            _this2.$store.dispatch('user', response.data.auth_user);

            _this2.$router.push({
              name: 'dashboard'
            });
          } else {
            _this2.$router.push({
              name: 'login'
            });
          }

          _this2.errors = [];
          toastr.success(response.data.success, _this2.lang.Success + ' !!');
        }
      })["catch"](function (error) {
        _this2.loading = false;

        _this2.$Progress.fail();

        if (error.response && error.response.status == 422) {
          _this2.errors = error.response.data.errors;
        }
      });
    },
    socialLogin: function socialLogin(provider) {
      var url = this.getUrl('login/' + provider);
      axios.get(url).then(function (response) {
        window.location.href = response.data;
      });
    },
    loginOptions: function loginOptions(optionTo) {
      if (optionTo) {
        if (optionTo == 'phone') {
          this.buttonText = 'Get OTP';
          this.optionTo = 'email';
        } else {
          this.buttonText = 'Sign Up';
          this.optionTo = 'phone';
        }
      } else {
        if (this.addons.includes('otp_system')) {
          this.optionTo = 'email';
          this.buttonText = 'Get OTP';
        } else {
          this.buttonText = 'Sign Up';
          this.optionTo = 'phone';
        }
      }
    },
    registerByPhone: function registerByPhone() {
      var _this3 = this;

      this.form.email = null;

      if (this.settings.customer_agreement && !this.agreement) {
        return toastr.info(this.lang.accept_terms, this.lang.Error + ' !!');
      }

      var url = this.getUrl('register/by-phone');
      this.loading = true;
      axios.post(url, this.form).then(function (response) {
        _this3.loading = false;

        if (response.data.error) {
          toastr.error(response.data.error, _this3.lang.Error + ' !!');
        } else {
          toastr.success(response.data.data, _this3.lang.Success + ' !!');
          _this3.errors = [];
          _this3.otp = true;

          _this3.countDownTimer();
        }
      })["catch"](function (error) {
        _this3.loading = false;

        _this3.$Progress.fail();

        if (error.response && error.response.status == 422) {
          _this3.errors = error.response.data.errors;
        }
      });
    },
    getNumber: function getNumber(number) {
      this.form.phone = number;
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

/***/ "./resources/js/components/frontend/pages/register.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/frontend/pages/register.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=4576e430& */ "./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/register.vue"
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

/***/ "./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=4576e430& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
              directives: [
                {
                  name: "lazy",
                  rawName: "v-lazy",
                  value: _vm.settings.sign_up_banner,
                  expression: "settings.sign_up_banner",
                },
              ],
              staticClass: "img-fluid img-fit",
              attrs: { alt: _vm.form.user_type },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-content" }, [
            _c("h1", [_vm._v(_vm._s(_vm.lang.sign_up) + " ")]),
            _vm._v(" "),
            _vm.otp
              ? _c("p", [
                  _vm._v(_vm._s(_vm.lang.enter_to_complete_registration)),
                ])
              : _c("p", [_vm._v(_vm._s(_vm.lang.sign_to_continue_shopping))]),
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
                  _vm.optionTo == "phone"
                    ? _c("div", { staticClass: "form-group" }, [
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
                          staticClass: "form-control mb-0",
                          class: { "error_border mb-0": _vm.errors.email },
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
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.errors.email && _vm.optionTo == "phone"
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.email[0])),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.optionTo == "email" && _vm.addons.includes("otp_system")
                    ? _c(
                        "div",
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
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.addons.includes("otp_system")
                    ? _c("div", { staticClass: "form-group text-end mb-3" }, [
                        !_vm.otp
                          ? _c(
                              "a",
                              {
                                staticClass: "btn sign-in-option",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function ($event) {
                                    return _vm.loginOptions(_vm.optionTo)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.optionTo == "email"
                                      ? _vm.lang.use_email_instead
                                      : _vm.lang.use_phone_instead
                                  )
                                ),
                              ]
                            )
                          : _vm._e(),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.optionTo == "phone"
                    ? _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "mt-4": !_vm.addons.includes("otp_system") },
                        },
                        [
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
                              placeholder: _vm.lang.Password,
                            },
                            domProps: { value: _vm.form.password },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "password",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.errors.password && _vm.optionTo == "phone"
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.password[0])),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _vm.addons.includes("otp_system") && _vm.otp
                  ? _c("div", { staticClass: "form-group mt-4" }, [
                      _c("span", {
                        staticClass: "mdi mdi-name mdi-lock-outline",
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.otp,
                            expression: "form.otp",
                          },
                        ],
                        staticClass: "form-control otp mb-0",
                        class: { error_border: _vm.errors.otp },
                        attrs: {
                          type: "text",
                          placeholder: _vm.lang.enter_oTP,
                        },
                        domProps: { value: _vm.form.otp },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "otp", $event.target.value)
                          },
                        },
                      }),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.addons.includes("otp_system") && _vm.otp
                  ? _c("div", [
                      _c("p", { staticClass: "count_down_timer" }, [
                        _vm.otp && _vm.minute >= 0 && _vm.second >= 0
                          ? _c("span", [
                              _vm._v(
                                "0" +
                                  _vm._s(_vm.minute) +
                                  ":" +
                                  _vm._s(_vm.second)
                              ),
                            ])
                          : _c("span", { on: { click: _vm.registerByPhone } }, [
                              _vm._v(_vm._s(_vm.lang.otp_request)),
                            ]),
                      ]),
                      _vm._v(" "),
                      _vm.otp && !_vm.loading
                        ? _c(
                            "button",
                            {
                              staticClass: "btn",
                              class: { disable_btn: _vm.form.otp.length != 5 },
                              attrs: { type: "submit" },
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.lang.sign_up) +
                                  "\n                                "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-checkbox" }, [
                  _vm.settings.customer_agreement
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
                                "\n                                        "
                            ),
                            _vm.urlCheck(_vm.settings.customer_agreement)
                              ? _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: _vm.settings.customer_agreement,
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.lang.terms))]
                                )
                              : _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        "page/" +
                                        _vm.settings.customer_agreement,
                                    },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.lang.terms) +
                                        "\n                                        "
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
                _vm.optionTo == "phone" && !_vm.loading
                  ? _c(
                      "button",
                      { staticClass: "btn", attrs: { type: "submit" } },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.lang.sign_up) +
                            "\n                            "
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.loading
                  ? _c("loading_button", { attrs: { class_name: "btn" } })
                  : _vm.optionTo == "email" && !_vm.otp
                  ? _c(
                      "button",
                      {
                        staticClass: "btn",
                        attrs: { type: "button" },
                        on: { click: _vm.registerByPhone },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.lang.get_oTP) +
                            "\n                            "
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _vm._v(
                      _vm._s(_vm.lang.have_an_account) +
                        "\n                                "
                    ),
                    _c("router-link", { attrs: { to: { name: "login" } } }, [
                      _vm._v(_vm._s(_vm.lang.sign_in)),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.settings.is_facebook_login_activated == 1 ||
                _vm.settings.is_google_login_activated == 1 ||
                _vm.settings.is_twitter_login_activated == 1
                  ? _c("div", { staticClass: "continue-with" }, [
                      _c("p", [_vm._v(_vm._s(_vm.lang.or_continue_with))]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.user_type != "seller"
                  ? _c("ul", { staticClass: "global-list" }, [
                      _vm.settings.is_facebook_login_activated == 1
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "facebook",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function ($event) {
                                    return _vm.socialLogin("facebook")
                                  },
                                },
                              },
                              [
                                _c("span", {
                                  staticClass: "mdi mdi-name mdi-facebook",
                                }),
                                _vm._v(_vm._s(_vm.lang.facebook)),
                              ]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.settings.is_twitter_login_activated == 1
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "twitter",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function ($event) {
                                    return _vm.socialLogin("twitter")
                                  },
                                },
                              },
                              [
                                _c("span", {
                                  staticClass: "mdi mdi-name mdi-twitter",
                                }),
                                _vm._v(_vm._s(_vm.lang.twitter)),
                              ]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.settings.is_google_login_activated == 1
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "google",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function ($event) {
                                    return _vm.socialLogin("google")
                                  },
                                },
                              },
                              [
                                _c("span", {
                                  staticClass: "mdi mdi-name mdi-google",
                                }),
                                _vm._v(_vm._s(_vm.lang.google)),
                              ]
                            ),
                          ])
                        : _vm._e(),
                    ])
                  : _vm._e(),
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