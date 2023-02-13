"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_user_get-invoice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_shimmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "get-invoice.vue",
  data: function data() {
    return {
      orders: [],
      is_shimmer: false,
      loading: false
    };
  },
  mounted: function mounted() {
    this.getInvoices();
  },
  components: {
    shimmer: _partials_shimmer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    shimmer: function shimmer() {
      return this.$store.state.module.shimmer;
    }
  },
  methods: {
    getInvoices: function getInvoices() {
      var _this = this;

      this.$Progress.start();
      var url = this.getUrl('user/get-invoices/' + this.$route.params.trx_id);
      axios.get(url).then(function (response) {
        _this.is_shimmer = true;

        if (response.data.error) {
          _this.$Progress.fail();

          toastr.error(response.data.error, _this.lang.Error + ' !!');
          ;
        } else {
          _this.$Progress.finish();

          if (!response.data.guest) {
            _this.$store.dispatch('user', response.data.user);
          }

          _this.$store.dispatch('compareList', response.data.compare_list);

          _this.$store.dispatch('wishlists', response.data.wishlists);

          _this.$store.dispatch('carts', 0);

          var orders = response.data.orders;
          _this.orders = orders;

          if (orders) {
            for (var i = 0; i < orders.length; i++) {
              _this.payment_form.sub_total += orders[i].total_amount;
              _this.payment_form.discount_offer += orders[i].discount;
              _this.payment_form.shipping_tax += orders[i].shipping_cost;
              _this.payment_form.tax += orders[i].total_tax;

              if (_this.settings.coupon_system == 1) {
                _this.payment_form.coupon_discount += orders[i].coupon_discount;
              }

              _this.trx_id = orders[i].trx_id;
            }

            if (orders[0].is_mailed == 0) {
              _this.sendMail();
            }

            _this.payment_form.total = _this.payment_form.sub_total + _this.payment_form.tax + _this.payment_form.shipping_tax - (_this.payment_form.discount_offer + _this.payment_form.coupon_discount);
          }
        }
      })["catch"](function (error) {
        _this.$Progress.finish();
      });
    },
    sendMail: function sendMail() {
      var url = this.getUrl('user/mail-order/' + this.trx_id);
      axios.get(url).then(function (response) {// this.sendMailSeller();
      });
    },
    sendMailSeller: function sendMailSeller() {
      var url = this.getUrl('user/mail-order-seller/' + this.trx_id);
      axios.get(url).then(function (response) {});
    },
    download: function download(id, code) {
      var _this2 = this;

      this.loading = true;
      axios.get(this.getUrl('user/invoice/download/' + id), {
        responseType: 'arraybuffer'
      }).then(function (response) {
        _this2.loading = false;
        1;

        if (response.data.error) {
          toastr.error(response.data.error, _this2.lang.Error + ' !!');
        } else {
          var blob = new Blob([response.data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = code + '.pdf';
          link.click();
        }
      })["catch"](function (error) {
        _this2.loading = false;
        toastr.error(error.response.statusText, _this2.lang.Error + ' !!');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "shimmer.vue",
  props: ['height'],
  data: function data() {
    return {
      style: {
        height: this.height + 'px'
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/pages/user/get-invoice.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/get-invoice.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-invoice.vue?vue&type=template&id=59913f02& */ "./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02&");
/* harmony import */ var _get_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-invoice.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _get_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__.render,
  _get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/user/get-invoice.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/shimmer.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/frontend/partials/shimmer.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shimmer.vue?vue&type=template&id=44ada926& */ "./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&");
/* harmony import */ var _shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shimmer.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.render,
  _shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/shimmer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_get_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./get-invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_get_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shimmer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./get-invoice.vue?vue&type=template&id=59913f02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shimmer.vue?vue&type=template&id=44ada926& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    _vm.is_shimmer
      ? _c(
          "section",
          { staticClass: "after-track-order text-center" },
          _vm._l(_vm.orders, function (order, index) {
            return _c("div", { key: index, staticClass: "container" }, [
              _c("div", { staticClass: "invoice_border mt-2" }, [
                _c("div", { staticClass: "page-title" }, [
                  _c("h1", [_vm._v(_vm._s(_vm.lang.thank_you_for_purchase))]),
                  _vm._v(" "),
                  _vm.authUser
                    ? _c("p", [
                        _vm._v(
                          _vm._s(_vm.lang.a_copy_summary_has_been_sent_to) + " "
                        ),
                        _c(
                          "a",
                          { attrs: { href: "mailto" + _vm.authUser.email } },
                          [_vm._v(_vm._s(_vm.authUser.email))]
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("h2", [
                    _vm._v(
                      _vm._s(_vm.lang.order_id) + " " + _vm._s(order.code)
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "step-content" }, [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c("table", { staticClass: "table" }, [
                      _c("thead", [
                        _c("tr", [
                          _c(
                            "th",
                            {
                              staticClass: "text-start",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.product_name))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-start",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.quantity))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-start",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.price))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-start",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.sub_total))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-start",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.tax))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-start",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.discount))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-start",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.coupon_discount))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-start",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.shipping_cost))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-start",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.total_amount))]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(
                          order.order_details,
                          function (order_detail, index) {
                            return _c("tr", { key: "order" + index }, [
                              _c("td", [
                                _c("div", { staticClass: "product-name" }, [
                                  _c("p", [
                                    _vm._v(_vm._s(order_detail.product_name)),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(_vm._s(order_detail.variation)),
                                  ]),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-start" }, [
                                _vm._v(_vm._s(order_detail.quantity)),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-start" }, [
                                _vm._v(
                                  _vm._s(_vm.priceFormat(order_detail.price))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-start" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.priceFormat(
                                      order_detail.price * order_detail.quantity
                                    )
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-start" }, [
                                _vm._v(
                                  _vm._s(_vm.priceFormat(order_detail.tax))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-start" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.priceFormat(
                                      order_detail.discount *
                                        order_detail.quantity
                                    )
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _vm.settings.coupon_system == 1
                                ? _c("td", { staticClass: "text-start" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.priceFormat(
                                          order_detail.coupon_discount.discount
                                        )
                                      )
                                    ),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-start" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.priceFormat(
                                      order_detail.shipping_cost.total_cost
                                    )
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-start" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.priceFormat(
                                      order_detail.price *
                                        order_detail.quantity +
                                        order_detail.tax +
                                        order_detail.shipping_cost.total_cost -
                                        (order_detail.discount *
                                          order_detail.quantity +
                                          order_detail.coupon_discount.discount)
                                    )
                                  )
                                ),
                              ]),
                            ])
                          }
                        ),
                        0
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "account-table" }, [
                    _c("div", { staticClass: "title" }, [
                      _c("h1", [_vm._v(_vm._s(_vm.lang.account_details))]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive" }, [
                      _c("table", { staticClass: "table text-start" }, [
                        _c("tbody", [
                          _c("tr", [
                            _c("td", [
                              _c("ul", { staticClass: "global-list" }, [
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.order_code) + " "),
                                ]),
                                _vm._v(" "),
                                _vm.authUser
                                  ? _c("li", [
                                      _vm._v(_vm._s(_vm.lang._name) + " "),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.authUser
                                  ? _c("li", [_vm._v(_vm._s(_vm.lang._email))])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.shipping_address)),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.billing_address)),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("ul", { staticClass: "global-list" }, [
                                _c("li", [_vm._v(_vm._s(order.code))]),
                                _vm._v(" "),
                                _vm.authUser
                                  ? _c("li", [
                                      _vm._v(_vm._s(_vm.authUser.full_name)),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.authUser
                                  ? _c("li", [
                                      _vm._v(_vm._s(_vm.authUser.email)),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    _vm._s(order.shipping_address.address)
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(order.billing_address.address)),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("ul", { staticClass: "global-list" }, [
                                _c("li", [_vm._v(_vm._s(_vm.lang.order_date))]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.order_status)),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.payment_status)),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.payment_type)),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("ul", { staticClass: "global-list" }, [
                                _c("li", [_vm._v(_vm._s(order.date))]),
                                _vm._v(" "),
                                _c("li", { staticClass: "text-capitalize" }, [
                                  _vm._v(_vm._s(order.delivery_status)),
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "text-capitalize" }, [
                                  _vm._v(_vm._s(order.payment_status)),
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "text-capitalize" }, [
                                  _vm._v(
                                    _vm._s(
                                      order.payment_type.replaceAll("_", " ")
                                    )
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4 offset-md-8" }, [
                        _c("div", { staticClass: "order-summary" }, [
                          _c("div", { staticClass: "sg-card" }, [
                            _c("ul", { staticClass: "global-list" }, [
                              _c("li", [
                                _vm._v(_vm._s(_vm.lang.subtotal) + " "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.priceFormat(order.sub_total))
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(_vm._s(_vm.lang.discount_offer)),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.priceFormat(order.discount))
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _vm.settings.coupon_system == 1
                                ? _c("li", [
                                    _vm._v(
                                      _vm._s(_vm.lang.coupon_discount) + " "
                                    ),
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.priceFormat(order.coupon_discount)
                                        )
                                      ),
                                    ]),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(_vm._s(_vm.lang.tax) + " "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.priceFormat(order.total_tax))
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(_vm._s(_vm.lang.shipping_cost) + " "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.priceFormat(order.shipping_cost))
                                  ),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "order-total mb-0" }, [
                              _c("p", [
                                _vm._v("Total "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.priceFormat(order.total_payable))
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row justify-content-center" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _vm.loading
                      ? _c("loading_button", {
                          attrs: { class_name: "btn btn-primary" },
                        })
                      : _c(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function ($event) {
                                return _vm.download(order.id, order.code)
                              },
                            },
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.lang.download) +
                                " " +
                                _vm._s(_vm.lang.invoice)
                            ),
                          ]
                        ),
                  ],
                  1
                ),
              ]),
            ])
          }),
          0
        )
      : _vm.shimmer
      ? _c("section", [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "page-title" },
              _vm._l(3, function (order, index) {
                return _c("shimmer", {
                  key: index,
                  staticClass: "mb-3",
                  attrs: { height: 20 },
                })
              }),
              1
            ),
            _vm._v(" "),
            _c("table", { staticClass: "table" }, [
              _c("div", { staticClass: "step-content" }, [
                _c(
                  "div",
                  { staticClass: "table-responsive" },
                  [_c("shimmer", { attrs: { height: 50 } })],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "account-table" }, [
                  _c(
                    "div",
                    { staticClass: "table-responsive" },
                    [_c("shimmer", { attrs: { height: 155 } })],
                    1
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-4 offset-md-8" },
                [_c("shimmer", { attrs: { height: 288 } })],
                1
              ),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("img", {
    staticClass: "shimmer",
    style: [_vm.height ? _vm.style : null],
    attrs: { src: _vm.defaultAssets.shimmer, alt: "shimmer" },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);