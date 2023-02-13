"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/login.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "sign_in",
  components: {
    telePhone: _partials_telephone__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        email: '',
        password: '',
        _token: this.token,
        remember: 0,
        captcha: ''
      },
      phoneForm: {
        phone: '',
        otp: ''
      },
      otp_field: false,
      loading: false,
      optionTo: 'phone',
      buttonText: 'Sign In'
    };
  },
  mounted: function mounted() {
    if (this.authUser) {
      this.$router.go(-1);
    }

    if (this.settings.is_recaptcha_activated == 1) {
      this.captcha();
    }

    this.loginOptions();
  },
  watch: {
    lang: function lang() {
      this.loginOptions();
    }
  },
  computed: {
    loginRedirect: function loginRedirect() {
      return this.$store.getters.getLoginRedirection;
    }
  },
  methods: {
    login: function login(direct_login) {
      var _this = this;

      var form = this.form;
      var url = this.getUrl('login');

      if (direct_login == 'direct_login') {
        this.form.captcha = '1313132';
      } else {
        if (this.settings.is_recaptcha_activated == 1 && this.optionTo == 'phone') {
          var captcha = window.captcha;

          if (captcha) {
            this.form.captcha = captcha;
          } else {
            return toastr.warning(this.lang.verify_google_recaptcha, this.lang.Warning + ' !!');
          }
        }
      }

      var axiosWithCredentials = axios.create({
        withCredentials: true
      });
      this.$store.commit('getCountCompare', true);

      if (direct_login != 'direct_login') {
        if (this.optionTo == 'phone') {
          form = this.form;
        } else if (this.optionTo == 'email' && !this.otp_field) {
          url = this.getUrl('get-otp');
          form = this.phoneForm;
        } else if (this.otp_field) {
          url = this.getUrl('submit-otp');
          form = this.phoneForm;
        }
      }

      this.loading = true;
      axiosWithCredentials.post(url, form).then(function (response) {
        _this.loading = false;

        if (response.data.error) {
          toastr.error(response.data.error, _this.lang.Error + ' !!');
        }

        if (response.data.success) {
          window.captcha = '';
          _this.errors = [];

          if (_this.optionTo == 'email' && !_this.otp_field && direct_login != 'direct_login') {
            _this.otp_field = true;
            _this.buttonText = _this.lang.sign_in;
          } else {
            if (_this.loginRedirect) {
              _this.$router.push({
                name: _this.loginRedirect
              });
            } else {
              var user = response.data.user;

              if (user.user_type == 'customer') {
                _this.$router.push({
                  name: 'dashboard'
                });
              } else if (user.user_type == 'admin' || user.user_type == 'staff') {
                _this.loading = true;
                document.location.href = _this.getUrl('admin/dashboard');
              } else if (user.user_type == 'seller') {
                _this.loading = true;
                document.location.href = _this.getUrl('seller/dashboard');
              }
            }

            _this.$store.dispatch('carts', response.data.carts);

            _this.$store.dispatch('user', response.data.user);

            _this.$store.dispatch('compareList', response.data.compare_list);

            _this.$store.dispatch('wishlists', response.data.wishlists);
          }
        }
      })["catch"](function (error) {
        _this.loading = false;

        if (error.response && error.response.status == 422) {
          _this.errors = error.response.data.errors;
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
      this.errors = [];

      if (optionTo) {
        if (optionTo == 'phone') {
          this.buttonText = this.lang.get_oTP;
          this.optionTo = 'email';
        } else {
          this.buttonText = this.lang.sign_in;
          this.optionTo = 'phone';
        }
      } else {
        if (this.addons.includes('otp_system')) {
          this.optionTo = 'email';
          this.buttonText = this.lang.get_oTP;
        } else {
          this.buttonText = this.lang.sign_in;
          this.optionTo = 'phone';
        }
      }
    },
    captcha: function captcha() {
      var script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      document.body.appendChild(script);
    },
    copyLoginInfo: function copyLoginInfo(email) {
      this.form.email = email;
      this.form.password = '123456';
      this.login('direct_login');
    },
    getNumber: function getNumber(number) {
      this.phoneForm.phone = number;
    }
  }
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

/***/ "./resources/js/components/frontend/pages/login.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/frontend/pages/login.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_3f8bd5a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=3f8bd5a8& */ "./resources/js/components/frontend/pages/login.vue?vue&type=template&id=3f8bd5a8&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_3f8bd5a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_3f8bd5a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/login.vue"
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

/***/ "./resources/js/components/frontend/pages/login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/frontend/pages/login.vue?vue&type=template&id=3f8bd5a8&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/login.vue?vue&type=template&id=3f8bd5a8& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_3f8bd5a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_3f8bd5a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_3f8bd5a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=3f8bd5a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/login.vue?vue&type=template&id=3f8bd5a8&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/login.vue?vue&type=template&id=3f8bd5a8&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/login.vue?vue&type=template&id=3f8bd5a8& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  value: _vm.settings.login_banner,
                  expression: "settings.login_banner",
                },
              ],
              staticClass: "img-fluid",
              attrs: { alt: "login_banner" },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-content" }, [
            _c("h1", [_vm._v(_vm._s(_vm.lang.sign_in))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.lang.sign_continue_shopping))]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "ragister-form",
                attrs: { name: "ragister-form" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.login.apply(null, arguments)
                  },
                },
              },
              [
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
                        staticClass: "form-control mb-1",
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
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.errors.email
                  ? _c("span", { staticClass: "validation_error" }, [
                      _vm._v(_vm._s(_vm.errors.email[0])),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.optionTo == "email"
                  ? _c(
                      "div",
                      [_c("telePhone", { on: { phone_no: _vm.getNumber } })],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.errors.phone
                  ? _c("span", { staticClass: "validation_error" }, [
                      _vm._v(_vm._s(_vm.errors.phone[0])),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.addons.includes("otp_system") && !_vm.otp_field
                  ? _c("div", { staticClass: "form-group text-end mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn sign-in-option",
                          attrs: { href: "javaScript:void(0)" },
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
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.otp_field
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
                            value: _vm.phoneForm.otp,
                            expression: "phoneForm.otp",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: _vm.lang.enter_your_otp,
                        },
                        domProps: { value: _vm.phoneForm.otp },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.phoneForm, "otp", $event.target.value)
                          },
                        },
                      }),
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
                _vm.errors.password
                  ? _c("span", { staticClass: "validation_error" }, [
                      _vm._v(_vm._s(_vm.errors.password[0])),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.optionTo == "phone"
                  ? _c(
                      "div",
                      { staticClass: "middle-content d-flex" },
                      [
                        _c("div", { staticClass: "form-group remember" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.remember,
                                expression: "form.remember",
                              },
                            ],
                            attrs: {
                              type: "checkbox",
                              name: "remember",
                              value: "1",
                              id: "remember",
                            },
                            domProps: {
                              checked: Array.isArray(_vm.form.remember)
                                ? _vm._i(_vm.form.remember, "1") > -1
                                : _vm.form.remember,
                            },
                            on: {
                              change: function ($event) {
                                var $$a = _vm.form.remember,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = "1",
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "remember",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "remember",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "remember", $$c)
                                }
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "remember" } }, [
                            _vm._v(_vm._s(_vm.lang.remember_me)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          { attrs: { to: { name: "reset.password" } } },
                          [
                            _c("a", { attrs: { href: "javaScript:void(0)" } }, [
                              _vm._v(_vm._s(_vm.lang.forgot_your_password)),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.settings.is_recaptcha_activated == 1
                  ? _c("div", {
                      staticClass: "g-recaptcha mb-2",
                      class: _vm.optionTo == "email" ? "d-none" : "",
                      attrs: {
                        "data-callback": "myCallback",
                        "data-sitekey": _vm.settings.recaptcha_Site_key,
                      },
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.loading
                  ? _c("loading_button", { attrs: { class_name: "btn" } })
                  : _c(
                      "button",
                      { staticClass: "btn", attrs: { type: "submit" } },
                      [_vm._v(_vm._s(_vm.buttonText))]
                    ),
                _vm._v(" "),
                _vm.settings.demo_mode && !_vm.loading
                  ? _c(
                      "div",
                      { staticClass: "d-flex justify-content-between mb-3" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn copy_btn",
                            attrs: {
                              type: "button",
                              href: "javascript:void(0)",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.copyLoginInfo("admin@spagreen.net")
                              },
                            },
                          },
                          [_vm._v("Admin")]
                        ),
                        _vm._v(" "),
                        _vm.settings.seller_system == 1
                          ? _c(
                              "button",
                              {
                                staticClass: "btn copy_btn",
                                attrs: {
                                  type: "button",
                                  href: "javascript:void(0)",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.copyLoginInfo(
                                      "seller@spagreen.net"
                                    )
                                  },
                                },
                              },
                              [_vm._v("Seller")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn copy_btn",
                            attrs: {
                              type: "button",
                              href: "javascript:void(0)",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.copyLoginInfo(
                                  "customer@spagreen.net"
                                )
                              },
                            },
                          },
                          [_vm._v("Customer")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn copy_btn",
                            attrs: {
                              type: "button",
                              href: "javascript:void(0)",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.copyLoginInfo("staff@spagreen.net")
                              },
                            },
                          },
                          [_vm._v("Staff")]
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _vm._v(
                      _vm._s(_vm.lang.don_have_an_account) +
                        "\n                            "
                    ),
                    _c("router-link", { attrs: { to: { name: "register" } } }, [
                      _vm._v(_vm._s(_vm.lang.sign_up)),
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
                _c("ul", { staticClass: "global-list" }, [
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
                ]),
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