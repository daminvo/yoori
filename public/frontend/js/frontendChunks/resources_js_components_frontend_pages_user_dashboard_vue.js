(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_user_dashboard_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../partials/orders */ "./resources/js/components/frontend/partials/orders.vue");
/* harmony import */ var _partials_user_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/user_sidebar */ "./resources/js/components/frontend/partials/user_sidebar.vue");
/* harmony import */ var _partials_shimmer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
/* harmony import */ var _payment_partials_paystack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../payment_partials/paystack */ "./resources/js/components/frontend/payment_partials/paystack.vue");
/* harmony import */ var _payment_partials_flutter_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../payment_partials/flutter_wave */ "./resources/js/components/frontend/payment_partials/flutter_wave.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "dashboard",
  data: function data() {
    return {
      current: 'dashboard',
      amount: 0,
      offline_methods: [],
      indian_currency: {},
      form: {
        total: ''
      },
      ssl: {
        name: null,
        email: null,
        phone: null
      },
      razor_form: {
        name: null,
        email: null,
        phone: null,
        description: null
      },
      loading: false,
      jazz_data: [],
      jazz_url: '',
      offline_method: {
        id: '',
        name: '',
        image: '',
        instructions: ''
      },
      trx_id: "",
      code: "",
      payment_component_load: false
    };
  },
  components: {
    user_sidebar: _partials_user_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"],
    orders: _partials_orders__WEBPACK_IMPORTED_MODULE_1__["default"],
    shimmer: _partials_shimmer__WEBPACK_IMPORTED_MODULE_3__["default"],
    paystack: _payment_partials_paystack__WEBPACK_IMPORTED_MODULE_4__["default"],
    Flutter_wave: _payment_partials_flutter_wave__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mounted: function mounted() {
    this.getProfileOrders();
    this.takeData();

    if (this.settings.is_paypal_activated == 1) {
      this.loadPaypal();
    }
  },
  computed: {
    authUser: function authUser() {
      return this.$store.getters.getUser;
    },
    profileOrders: function profileOrders() {
      return this.$store.getters.getProfileOrders;
    },
    carts: function carts() {
      return this.$store.getters.getCarts;
    },
    wishlists: function wishlists() {
      return this.$store.getters.getTotalWishlists;
    },
    activeCurrency: function activeCurrency() {
      return this.$store.getters.getActiveCurrency;
    },
    totalReward: function totalReward() {
      return this.$store.getters.getTotalReward === '' ? null : this.$store.getters.getTotalReward;
    },
    shimmer: function shimmer() {
      return this.$store.state.module.shimmer;
    },
    default_shipping: function default_shipping() {
      return this.authUser ? this.$store.getters.getUser.shipping_address : null;
    },
    default_billing: function default_billing() {
      return this.authUser ? this.$store.getters.getUser.billing_address : null;
    }
  },
  methods: {
    getProfileOrders: function getProfileOrders() {
      var _this = this;

      var url = this.getUrl('user/profile-orders');
      axios.get(url).then(function (response) {
        _this.$store.commit('setShimmer', false);

        _this.$store.commit("getProfileOrders", response.data.orders);
      });
    },
    payment: function payment() {
      var _this2 = this;

      var payment_type = this.payment_form.payment_type;

      if (!payment_type) {
        toastr.warning(this.lang.please_choose_a_payment_method, this.lang.Warning + ' !!');
        return false;
      }

      var form = {
        id: this.offline_method.id,
        file: this.product_form.image,
        payment_type: payment_type,
        amount: this.form.total
      };
      var url = this.getUrl('user/recharge-wallet');

      if (this.offline_method.id) {
        this.loading = true;
        axios.post(url, form, {
          transformRequest: [function (data, headers) {
            return objectToFormData(data);
          }]
        }).then(function (response) {
          _this2.loading = false;

          if (response.data.error) {
            toastr.error(response.data.error, _this2.lang.Error + ' !!');
          } else {
            $('#offline').modal('hide');
            var unshift = 1;

            _this2.$store.commit("getWalletRecharges", {
              unshift: unshift,
              data: response.data.recharges.data
            });

            var image_selector = document.getElementById('upload-image');

            if (image_selector) {
              image_selector.innerHTML = '';
            }

            _this2.$router.push({
              name: 'wallet.history'
            });
          }
        })["catch"](function (error) {
          _this2.loading = false;
        });
      } else if (payment_type == 'stripe') {
        return window.location.href = this.getUrl("stripe/recharge/?amount=" + this.form.total);
      } else if (payment_type == 'paytm') {
        return window.location.href = this.getUrl("user/payment/paytmRedirect?amount=" + this.form.total);
      } else if (payment_type == 'jazz_cash') {
        return window.location.href = this.getUrl('jazz/redirect');
      } else if (payment_type == 'ssl_commerze') {
        window.location.href = this.getUrl('get/ssl-response?payment_type=ssl_commerze&type=wallet&amount=' + this.form.total);
      }
    },
    takeData: function takeData() {
      var _this3 = this;

      this.$Progress.start();
      var url = this.getUrl('user/wallet-data');
      axios.get(url).then(function (response) {
        if (response.data.error) {
          _this3.$Progress.fail();

          toastr.error(response.data.error, _this3.lang.Error + ' !!');
          ;
        } else {
          _this3.$Progress.finish();

          _this3.indian_currency = response.data.indian_currency;
          _this3.offline_methods = response.data.offline_methods;
          _this3.jazz_data = response.data.jazz_data;
          _this3.jazz_url = response.data.jazz_url;
        }
      });
    },
    integrateRazorPay: function integrateRazorPay() {
      this.razorPayRemove();

      if (this.payment_form.payment_type == 'razor_pay' && this.indian_currency) {
        var razorKeys = document.querySelectorAll('.razorpay-payment-button');

        for (var i = 0; i < razorKeys.length; i++) {
          razorKeys[i].style.display = "none";
        }

        var myScript = document.createElement('script');
        myScript.setAttribute('type', 'text/javascript');
        myScript.setAttribute('language', 'javascript');
        myScript.setAttribute('data-key', this.settings.razor_key);
        myScript.setAttribute('data-amount', parseInt(this.form.total * 100 * this.indian_currency.exchange_rate));
        myScript.setAttribute('data-name', 'Yoori');
        myScript.setAttribute('data-description', 'Rozerpay');
        myScript.setAttribute('data-image', this.settings.dark_logo);
        myScript.setAttribute('data-prefill.name', 'name');
        myScript.setAttribute('data-prefill.email', 'email');
        myScript.setAttribute('data-prefill.address', 'address');
        myScript.setAttribute('data-theme.color', '#ff7529');
        myScript.setAttribute('src', this.defaultAssets.razor_pay_js); // Append script

        this.$refs.razor_pay.insertAdjacentElement('afterend', myScript);
      }

      if (this.payment_form.payment_type == 'ssl_commerze') {
        var ssl_keys = document.getElementById('sslczPayBtn');

        if (ssl_keys) {
          ssl_keys.setAttribute("endpoint", this.getUrl('user/recharge-wallet?payment_type=ssl_commerze&amount=' + this.form.total));
        }
      }
    },
    razorPayRemove: function razorPayRemove() {
      var razorKeys = document.querySelectorAll('.razorpay-payment-button');

      for (var i = 0; i < razorKeys.length; i++) {
        razorKeys[i].style.display = "none";
      }

      this.offline_method.name = '';
      this.offline_method.image = '';
      this.offline_method.instructions = '';
    },
    loadPaypal: function loadPaypal() {
      var script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=" + this.settings.paypal_key;
      script.setAttribute('data-namespace', 'paypal_sdk');
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
    setLoaded: function setLoaded() {
      var _this4 = this;

      window.paypal_sdk.Buttons({
        createOrder: function createOrder(data, actions) {
          return actions.order.create({
            purchase_units: [{
              description: "Product Purchase",
              amount: {
                currency_code: "USD",
                value: _this4.round(_this4.form.total / _this4.activeCurrency.exchange_rate, 2)
              }
            }]
          });
        },
        onApprove: function () {
          var _onApprove = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data, actions) {
            var order, url;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return actions.order.capture();

                  case 2:
                    order = _context.sent;
                    // this.data;
                    _this4.loading = true;
                    url = _this4.getUrl('user/recharge-wallet');
                    data.amount = _this4.form.total;
                    data.payment_type = _this4.payment_form.payment_type;
                    data.order = order;

                    _this4.axios.post(url, data).then(function (response) {
                      if (response.data.error) {
                        toastr.error(response.data.error, _this4.lang.Error + ' !!');
                      } else {
                        _this4.loading = false;
                        $('#recharge_wallet').modal('hide');
                        var unshift = 1;

                        _this4.$store.commit("getWalletRecharges", {
                          unshift: unshift,
                          data: response.data.recharges.data
                        });

                        _this4.$router.push({
                          name: 'wallet.history'
                        });

                        toastr.success(response.data.success, _this4.lang.Success + ' !!');
                      }
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onApprove(_x, _x2) {
            return _onApprove.apply(this, arguments);
          }

          return onApprove;
        }(),
        onError: function onError(err) {
          alert('Error');
        }
      }).render(this.$refs.paypal);
    },
    removeData: function removeData() {
      this.payment_form.payment_type = '';
      this.razorPayRemove();
    },
    offlineCheck: function offlineCheck(offline) {
      this.razorPayRemove();
      this.offline_method.id = offline.id;
      this.offline_method.name = offline.name;
      this.offline_method.image = offline.image;
      this.offline_method.instructions = offline.instructions;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/orders.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/orders.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "orders",
  props: ['orders', 'user_dashboard'],
  data: function data() {
    return {
      url: "",
      order_dropdown: "",
      page: 2
    };
  },
  mounted: function mounted() {},
  computed: {
    orderUrls: function orderUrls() {
      return this.$store.getters.getOrderUrl;
    }
  },
  methods: {
    removeOrder: function removeOrder(order_id, i) {
      var _this = this;

      var url = this.getUrl('user/remove-order/' + order_id.id);
      this.$Progress.start();
      axios.get(url).then(function (response) {
        if (response.data.error) {
          toastr.error(response.data.error, _this.lang.Error + ' !!');
        } else {
          toastr.success(response.data.success, _this.lang.Success + ' !!');
          _this.show_load_more = _this.orders.next_page_url;
          _this.page--;
          _this.orders[i].order.is_deleted = 1;
        }

        _this.order_dropdown = "";

        _this.$Progress.finish();
      });
    },
    cancelOrder: function cancelOrder(order_id, i) {
      var _this2 = this;

      var url = this.getUrl('user/cancel-order/' + order_id.id);

      if (confirm("Are you sure?")) {
        this.$Progress.start();
        axios.get(url).then(function (response) {
          if (response.data.error) {
            toastr.error(response.data.error, _this2.lang.Error + ' !!');
          } else {
            _this2.orders[i].order.delivery_status = 'canceled';
            _this2.orders[i].order.payment_status = _this2.orders[i].order.payment_status == 'unpaid' ? 'unpaid' : _this2.lang.refunded_to_wallet;

            _this2.$store.dispatch('user', response.data.user);
          }

          _this2.order_dropdown = "";

          _this2.$Progress.finish();
        });
      }
    },
    orderDropdown: function orderDropdown(id) {
      if (this.order_dropdown == '') {
        this.order_dropdown = id;
      } else {
        this.order_dropdown = '';
      }
    },
    download: function download(id, code) {
      var _this3 = this;

      axios.get(this.getUrl('user/invoice/download/' + id), {
        responseType: 'arraybuffer'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = code + '.pdf';
        link.click();
        _this3.order_dropdown = '';
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

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shimmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "user_sidebar",
  props: ['current', 'addresses'],
  data: function data() {
    return {
      loading: false,
      download_url: false
    };
  },
  mounted: function mounted() {
    this.checkAuth();
  },
  computed: {
    totalReward: function totalReward() {
      return this.$store.getters.getTotalReward;
    },
    modalType: function modalType() {
      return this.$store.getters.getModalType;
    }
  },
  components: {
    shimmer: _shimmer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    checkAuth: function checkAuth() {
      var _this = this;

      var url = this.getUrl('home/check-auth');
      axios.get(url).then(function (response) {
        _this.$store.dispatch('user', response.data.user);

        _this.$store.commit('getOrderUrl', response.data.order_urls);

        if (!_this.authUser) {
          _this.$router.push({
            name: 'login'
          });
        } else if (_this.authUser.user_type == 'admin') {
          _this.$router.push({
            name: 'home'
          });
        }

        if (response.data.reward) {
          _this.$store.commit('setTotalReward', response.data.reward);
        }

        if (response.data.download_urls) {
          _this.download_url = true;
        }
      });
    },
    convertReward: function convertReward() {
      var _this2 = this;

      var url = this.getUrl('user/convert-reward');
      var form = {
        amount: this.converted_reward / this.settings.reward_convert_rate,
        reward: this.converted_reward
      };

      if (form.amount > 0 && this.totalReward.rewards >= this.converted_reward && confirm('Are You Sure! You want to Convert ?')) {
        this.loading = true;
        axios.post(url, form).then(function (response) {
          _this2.loading = false;

          if (response.data.error) {
            toastr.error(response.data.error, _this2.lang.Error + ' !!');
          } else {
            toastr.success(response.data.success, _this2.lang.Success + '!!');
            $('#convert_reward').modal('hide');
            _this2.converted_reward = '';

            _this2.$store.dispatch('user', response.data.user);

            _this2.$store.commit('setTotalReward', response.data.reward);
          }
        })["catch"](function (error) {
          _this2.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
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
  name: "flutter_wave",
  props: ['trx_id', 'code', 'amount', 'transaction_type'],
  data: function data() {
    return {
      name: '',
      email: '',
      phone: ''
    };
  },
  mounted: function mounted() {
    var script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    document.body.appendChild(script);
  },
  methods: {
    initiatePopup: function initiatePopup() {
      var that = this;
      alert('hii');
      FlutterwaveCheckout({
        public_key: this.settings.flw_public_key,
        tx_ref: that.reference(),
        amount: that.round(that.amount * that.settings.ngn_exchange_rate, 2),
        currency: "NGN",
        payment_options: "card, banktransfer,mobilemoneyghana, ussd",
        // redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
        callback: function callback(payment) {
          that.verifyTransaction(payment);
        },
        meta: {
          consumer_id: 23,
          consumer_mac: "92a3-912ba-1192a"
        },
        customer: {
          email: that.email,
          phone_number: that.phone,
          name: that.name
        },
        customizations: {
          title: that.settings.system_name,
          description: "Payment for an awesome cruise",
          logo: that.settings.dark_logo
        }
      });
    },
    reference: function reference() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    },
    verifyTransaction: function verifyTransaction(payment) {
      var _this = this;

      var form = {
        transaction_id: payment.transaction_id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        payment_type: 'flutter_wave',
        trx_id: this.trx_id,
        amount: this.amount,
        // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
        code: this.code
      };

      if (this.transaction_type == 'wallet_recharge') {
        var url = this.getUrl('user/recharge-wallet');
        axios.post(url, form).then(function (response) {
          if (response.data.error) {
            toastr.error(_this.lang.something_went_wrong, _this.lang.Error + ' !!');
          } else {
            toastr.success(response.data.success, _this.lang.Success + ' !!');
          }
        })["catch"](function (error) {
          alert(_this.lang.something_went_wrong);
        });
      } else {
        var _url = this.getUrl('user/complete-order');

        axios.post(_url, form).then(function (response) {
          if (response.data.error) {
            toastr.error(_this.lang.something_went_wrong, _this.lang.Error + ' !!');
          } else {
            toastr.success(response.data.success, _this.lang.Success + ' !!');

            if (_this.code) {
              window.location.href = _this.getUrl('get-invoice/' + _this.code);
            } else {
              window.location.href = _this.getUrl('invoice/' + _this.trx_id);
            }
          }
        })["catch"](function (error) {
          alert(_this.lang.something_went_wrong);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_paystack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-paystack */ "./node_modules/vue-paystack/dist/paystack.min.js");
/* harmony import */ var vue_paystack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_paystack__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "pay-stack",
  props: ['trx_id', 'code', 'amount', 'type', 'paystack_key', 'ngn_exchange_rate', 'transaction_type'],
  components: {
    paystack: (vue_paystack__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      name: '',
      email: '',
      phone: '',
      channels: ['card', 'bank', 'ussd', 'mobile_money']
    };
  },
  mounted: function mounted() {},
  computed: {
    reference: function reference() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    }
  },
  methods: {
    callback: function callback(response) {
      var _this = this;

      $('#paystack_modal').modal('hide');

      if (response.status == 'success') {
        var form = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          payment_type: this.type,
          trx_id: this.trx_id,
          amount: this.amount,
          // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
          code: this.code,
          ref: response.reference
        };

        if (this.transaction_type == 'wallet_recharge') {
          var url = this.getUrl('user/recharge-wallet');
          axios.post(url, form).then(function (response) {
            if (response.data.error) {
              toastr.error(_this.lang.something_went_wrong, _this.lang.Error + ' !!');
            } else {
              toastr.success(response.data.success, _this.lang.Success + ' !!');
            }
          })["catch"](function (error) {
            alert(_this.lang.something_went_wrong);
          });
        } else {
          var _url = this.getUrl('user/complete-order');

          axios.post(_url, form).then(function (response) {
            if (response.data.error) {
              toastr.error(_this.lang.something_went_wrong, _this.lang.Error + ' !!');
            } else {
              toastr.success(response.data.success, _this.lang.Success + ' !!');

              if (_this.code) {
                _this.$router.push({
                  name: 'get.invoice',
                  params: {
                    orderCode: _this.code
                  }
                });
              } else {
                _this.$router.push({
                  name: 'invoice.list',
                  params: {
                    trx_id: _this.trx_id
                  }
                });
              }
            }
          })["catch"](function (error) {
            alert(_this.lang.something_went_wrong);
          });
        }
      } else {
        alert(this.lang.something_went_wrong);
      }
    },
    close: function close() {
      console.log("Payment closed");
    }
  }
});

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

/***/ "./resources/js/components/frontend/pages/user/dashboard.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/dashboard.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_7ded76c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=7ded76c6& */ "./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=template&id=7ded76c6&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_7ded76c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashboard_vue_vue_type_template_id_7ded76c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/user/dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/orders.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/frontend/partials/orders.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _orders_vue_vue_type_template_id_beaf8960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.vue?vue&type=template&id=beaf8960& */ "./resources/js/components/frontend/partials/orders.vue?vue&type=template&id=beaf8960&");
/* harmony import */ var _orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/orders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orders_vue_vue_type_template_id_beaf8960___WEBPACK_IMPORTED_MODULE_0__.render,
  _orders_vue_vue_type_template_id_beaf8960___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/orders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/shimmer.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/frontend/partials/shimmer.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/components/frontend/partials/user_sidebar.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/frontend/partials/user_sidebar.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_sidebar.vue?vue&type=template&id=cdcc10da& */ "./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&");
/* harmony import */ var _user_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__.render,
  _user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/user_sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/flutter_wave.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/flutter_wave.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true& */ "./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true&");
/* harmony import */ var _flutter_wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flutter_wave.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _flutter_wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7eeea8ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/payment_partials/flutter_wave.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/paystack.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/paystack.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paystack.vue?vue&type=template&id=07bd6cdc&scoped=true& */ "./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true&");
/* harmony import */ var _paystack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paystack.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paystack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "07bd6cdc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/payment_partials/paystack.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/orders.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/orders.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/orders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shimmer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user_sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flutter_wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./flutter_wave.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flutter_wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paystack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./paystack.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paystack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=template&id=7ded76c6&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=template&id=7ded76c6& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7ded76c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7ded76c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7ded76c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=template&id=7ded76c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=template&id=7ded76c6&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/orders.vue?vue&type=template&id=beaf8960&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/orders.vue?vue&type=template&id=beaf8960& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_template_id_beaf8960___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_template_id_beaf8960___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_template_id_beaf8960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./orders.vue?vue&type=template&id=beaf8960& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/orders.vue?vue&type=template&id=beaf8960&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shimmer.vue?vue&type=template&id=44ada926& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user_sidebar.vue?vue&type=template&id=cdcc10da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&");


/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./paystack.vue?vue&type=template&id=07bd6cdc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=template&id=7ded76c6&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/dashboard.vue?vue&type=template&id=7ded76c6& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.authUser && _vm.authUser.user_type == "customer"
    ? _c(
        "div",
        { staticClass: "sg-page-content" },
        [
          _c("section", { staticClass: "sg-global-content" }, [
            _c("div", { staticClass: "container" }, [
              _c(
                "div",
                { staticClass: "row" },
                [
                  _c("user_sidebar", { attrs: { current: _vm.current } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-9" }, [
                    _c("div", { staticClass: "profile-banner-image" }, [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("img", {
                          directives: [
                            {
                              name: "lazy",
                              rawName: "v-lazy",
                              value: _vm.settings.user_dashboard_banner,
                              expression: "settings.user_dashboard_banner",
                            },
                          ],
                          attrs: { alt: "profile-banner" },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "title justify-between" }, [
                      _c("h1", [_vm._v(_vm._s(_vm.lang.dashboard))]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "order.history" } } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card text-center profile-card d-flex justify-center profile-card-red",
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "profile-card-title mb-3" },
                                    [_vm._v(_vm._s(_vm.lang.total_order))]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", { staticClass: "text-white " }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.profileOrders
                                          ? _vm.profileOrders.total
                                          : 0
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "cart" } } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card text-center profile-card d-flex justify-center profile-card-gray",
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "profile-card-title mb-3" },
                                    [_vm._v(_vm._s(_vm.lang.product_cart))]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", { staticClass: "text-white" }, [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.carts ? _vm.carts.length : 0)
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "wishlist" } } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card text-center profile-card d-flex justify-center profile-card-green",
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "profile-card-title mb-3" },
                                    [_vm._v(_vm._s(_vm.lang.product_you_love))]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", { staticClass: "text-white" }, [
                                    _vm._v(_vm._s(_vm.wishlists)),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.settings.wallet_system == 1
                        ? _c(
                            "div",
                            { staticClass: "col-md-4" },
                            [
                              _c(
                                "router-link",
                                { attrs: { to: { name: "wallet.history" } } },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "card text-center profile-card d-flex justify-center profile-card-white",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "profile-card-title text-black mb-3",
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.lang.wallet_balance)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("h3", { staticClass: "text-black" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.priceFormat(
                                              _vm.authUser.balance
                                            )
                                          )
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.settings.wallet_system == 1
                        ? _c("div", { staticClass: "col-md-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card text-center profile-card d-flex justify-center profile-card-white",
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "profile-card-title mb-3 text-black",
                                  },
                                  [_vm._v(_vm._s(_vm.lang.last_recharge))]
                                ),
                                _vm._v(" "),
                                _c("h3", { staticClass: "text-black" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.priceFormat(
                                        _vm.authUser.last_recharge
                                      )
                                    )
                                  ),
                                ]),
                              ]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.settings.wallet_system == 1
                        ? _c("div", { staticClass: "col-md-4" }, [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "#",
                                  "data-bs-target": "#recharge_wallet",
                                  "data-bs-toggle": "modal",
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "card text-center profile-card d-flex justify-center profile-card-white-outline-dashed",
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "profile-card-title mb-3",
                                      },
                                      [_vm._v(_vm._s(_vm.lang.recharge_wallet))]
                                    ),
                                    _vm._v(" "),
                                    _vm._m(0),
                                  ]
                                ),
                              ]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.addons.includes("reward")
                        ? _c(
                            "div",
                            { staticClass: "col-md-4" },
                            [
                              _c(
                                "router-link",
                                { attrs: { to: { name: "reward.history" } } },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "card text-center profile-card d-flex justify-center profile-card-white",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "profile-card-title mb-3 text-black",
                                        },
                                        [_vm._v(_vm._s(_vm.lang.total_rewards))]
                                      ),
                                      _vm._v(" "),
                                      _c("h3", { staticClass: "text-black" }, [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.totalReward
                                                ? _vm.totalReward.reward_sum
                                                : 0
                                            )
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.addons.includes("reward")
                        ? _c(
                            "div",
                            { staticClass: "col-md-4" },
                            [
                              _c(
                                "router-link",
                                { attrs: { to: { name: "reward.history" } } },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "card text-center profile-card d-flex justify-center profile-card-white",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "profile-card-title mb-3 text-black",
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.lang.current_rewards)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("h3", { staticClass: "text-black" }, [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.totalReward
                                                ? _vm.totalReward.rewards
                                                : 0
                                            )
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.settings.reward_convert_rate > 0 &&
                      _vm.totalReward &&
                      _vm.totalReward.rewards > 0 &&
                      _vm.addons.includes("reward") &&
                      _vm.settings.wallet_system == 1
                        ? _c("div", { staticClass: "col-md-4" }, [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "#",
                                  "data-bs-target": "#convert_reward",
                                  "data-bs-toggle": "modal",
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "card text-center profile-card d-flex justify-center profile-card-white",
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "profile-card-title mb-3",
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.lang.convert_reward_wallet)
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._m(1),
                                  ]
                                ),
                              ]
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _vm.authUser
                      ? _c("div", { staticClass: "sg-shipping" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "title mt-3 mb-0 b-0" },
                                [
                                  _c("h1", [
                                    _vm._v(_vm._s(_vm.lang.default_shipping)),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _vm.default_shipping
                                ? _c(
                                    "div",
                                    { staticClass: "sg-card address" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "justify-content-between d-flex",
                                        },
                                        [
                                          _c("div", { staticClass: "text" }, [
                                            _c(
                                              "ul",
                                              { staticClass: "global-list" },
                                              [
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(_vm.lang.name) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_shipping
                                                          .name
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(_vm.lang.email) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_shipping
                                                          .email
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(_vm.lang.phone) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_shipping
                                                          .phone_no
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.lang.street_address
                                                    ) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_shipping
                                                          .default_shipping
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(_vm.lang.city) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_shipping
                                                          .city
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(_vm.lang.country) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_shipping
                                                          .country
                                                      )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "title mt-3 mb-0 b-0" },
                                [
                                  _c("h1", [
                                    _vm._v(_vm._s(_vm.lang.default_billing)),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _vm.default_billing
                                ? _c(
                                    "div",
                                    { staticClass: "sg-card address" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "justify-content-between d-flex",
                                        },
                                        [
                                          _c("div", { staticClass: "text" }, [
                                            _c(
                                              "ul",
                                              { staticClass: "global-list" },
                                              [
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(_vm.lang.name) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_billing.name
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(_vm.lang.email) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_billing
                                                          .email
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(_vm.lang.phone) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_billing
                                                          .phone_no
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.lang.street_address
                                                    ) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_billing
                                                          .default_shipping
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(_vm.lang.city) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_billing.city
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(_vm.lang.country) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm.default_billing
                                                          .country
                                                      )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.profileOrders && _vm.profileOrders.total > 0
                      ? _c("div", { staticClass: "col-lg-12" }, [
                          _c(
                            "div",
                            { staticClass: "sg-table" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "title justify-content-between",
                                },
                                [
                                  _c("h1", [
                                    _vm._v(_vm._s(_vm.lang.order_history)),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c("orders", {
                                attrs: {
                                  orders: _vm.profileOrders.data,
                                  user_dashboard: false,
                                },
                              }),
                            ],
                            1
                          ),
                        ])
                      : _vm._e(),
                  ]),
                ],
                1
              ),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "recharge_wallet",
                tabindex: "-1",
                "aria-labelledby": "recharge_wallet",
                "aria-hidden": "true",
              },
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable",
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("h5", { staticClass: "modal-title" }, [
                        _vm._v(_vm._s(_vm.lang.wallet_recharge)),
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("div", { staticClass: "sg-shipping" }, [
                            _c("div", { staticClass: "sg-card" }, [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-md-12" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", { attrs: { for: "amount" } }, [
                                      _vm._v(_vm._s(_vm.lang.amount)),
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.total,
                                          expression: "form.total",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "amount",
                                        placeholder: _vm.lang.enter_amount,
                                      },
                                      domProps: { value: _vm.form.total },
                                      on: {
                                        input: [
                                          function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "total",
                                              $event.target.value
                                            )
                                          },
                                          _vm.removeData,
                                        ],
                                      },
                                    }),
                                  ]),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "card-list",
                                class: { disable_section: _vm.form.total == 0 },
                              },
                              [
                                _c(
                                  "ul",
                                  { staticClass: "global-list grid-3" },
                                  [
                                    _vm.settings.is_paypal_activated == 1
                                      ? _c("li", [
                                          _c(
                                            "div",
                                            { staticClass: "input-checkbox" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.payment_form
                                                        .payment_type,
                                                    expression:
                                                      "payment_form.payment_type",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  value: "paypal",
                                                  id: "paypal",
                                                  name: "radio",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.payment_form
                                                      .payment_type,
                                                    "paypal"
                                                  ),
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.payment_form,
                                                        "payment_type",
                                                        "paypal"
                                                      )
                                                    },
                                                    _vm.razorPayRemove,
                                                  ],
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                { attrs: { for: "paypal" } },
                                                [
                                                  _c("img", {
                                                    staticClass: "img-fluid",
                                                    attrs: {
                                                      src: _vm.getUrl(
                                                        "public/images/payment-method/paypal.svg"
                                                      ),
                                                      alt: _vm.payment_form
                                                        .payment_type,
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        _vm.lang.pay_with_payPal
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.settings.is_stripe_activated == 1
                                      ? _c("li", [
                                          _c(
                                            "div",
                                            { staticClass: "input-checkbox" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.payment_form
                                                        .payment_type,
                                                    expression:
                                                      "payment_form.payment_type",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  id: "stripe",
                                                  value: "stripe",
                                                  name: "radio",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.payment_form
                                                      .payment_type,
                                                    "stripe"
                                                  ),
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.payment_form,
                                                        "payment_type",
                                                        "stripe"
                                                      )
                                                    },
                                                    _vm.razorPayRemove,
                                                  ],
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                { attrs: { for: "stripe" } },
                                                [
                                                  _c("img", {
                                                    staticClass: "img-fluid",
                                                    attrs: {
                                                      src: _vm.getUrl(
                                                        "public/images/payment-method/stripe.svg"
                                                      ),
                                                      alt: _vm.payment_form
                                                        .payment_type,
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        _vm.lang.pay_with_stripe
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.settings.is_sslcommerz_activated == 1
                                      ? _c("li", [
                                          _c(
                                            "div",
                                            { staticClass: "input-checkbox" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.payment_form
                                                        .payment_type,
                                                    expression:
                                                      "payment_form.payment_type",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  name: "radio",
                                                  id: "ssl_commerze",
                                                  value: "ssl_commerze",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.payment_form
                                                      .payment_type,
                                                    "ssl_commerze"
                                                  ),
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.payment_form,
                                                        "payment_type",
                                                        "ssl_commerze"
                                                      )
                                                    },
                                                    _vm.razorPayRemove,
                                                  ],
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                {
                                                  attrs: {
                                                    for: "ssl_commerze",
                                                  },
                                                },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src: _vm.getUrl(
                                                        "public/images/payment-method/sslcommerze.svg"
                                                      ),
                                                      alt: _vm.payment_form
                                                        .payment_type,
                                                      width: "90",
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        _vm.lang
                                                          .pay_with_sSLCOMMERZE
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.settings.is_paytm_activated == 1
                                      ? _c("li", [
                                          _c(
                                            "div",
                                            { staticClass: "input-checkbox" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.payment_form
                                                        .payment_type,
                                                    expression:
                                                      "payment_form.payment_type",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  id: "paytm",
                                                  value: "paytm",
                                                  name: "radio",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.payment_form
                                                      .payment_type,
                                                    "paytm"
                                                  ),
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.payment_form,
                                                        "payment_type",
                                                        "paytm"
                                                      )
                                                    },
                                                    _vm.razorPayRemove,
                                                  ],
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                { attrs: { for: "paytm" } },
                                                [
                                                  _c("img", {
                                                    staticClass: "img-fluid",
                                                    attrs: {
                                                      src: _vm.getUrl(
                                                        "public/images/payment-method/paytm.svg"
                                                      ),
                                                      alt: _vm.payment_form
                                                        .payment_type,
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        _vm.lang.pay_with_paytm
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.settings.is_razorpay_activated == 1
                                      ? _c("li", [
                                          _c(
                                            "div",
                                            { staticClass: "input-checkbox" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.payment_form
                                                        .payment_type,
                                                    expression:
                                                      "payment_form.payment_type",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  id: "razor_pay",
                                                  value: "razor_pay",
                                                  name: "radio",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.payment_form
                                                      .payment_type,
                                                    "razor_pay"
                                                  ),
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.payment_form,
                                                        "payment_type",
                                                        "razor_pay"
                                                      )
                                                    },
                                                    _vm.integrateRazorPay,
                                                  ],
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                { attrs: { for: "razor_pay" } },
                                                [
                                                  _c("img", {
                                                    staticClass: "img-fluid",
                                                    attrs: {
                                                      src: _vm.getUrl(
                                                        "public/images/payment-method/razorpay.svg"
                                                      ),
                                                      alt: _vm.payment_form
                                                        .payment_type,
                                                      width: "90",
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        _vm.lang
                                                          .pay_with_razorpay
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.settings.is_jazz_cash_activated == 1
                                      ? _c("li", [
                                          _c(
                                            "div",
                                            { staticClass: "input-checkbox" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.payment_form
                                                        .payment_type,
                                                    expression:
                                                      "payment_form.payment_type",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  id: "jazzCash",
                                                  value: "jazz_cash",
                                                  name: "radio",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.payment_form
                                                      .payment_type,
                                                    "jazz_cash"
                                                  ),
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.payment_form,
                                                        "payment_type",
                                                        "jazz_cash"
                                                      )
                                                    },
                                                    _vm.razorPayRemove,
                                                  ],
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                { attrs: { for: "jazzCash" } },
                                                [
                                                  _c("img", {
                                                    staticClass: "img-fluid",
                                                    attrs: {
                                                      src: _vm.getUrl(
                                                        "public/images/payment-method/jazzCash.svg"
                                                      ),
                                                      alt: _vm.payment_form
                                                        .payment_type,
                                                      width: "90",
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        _vm.lang
                                                          .pay_with_jazzCash
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.settings.is_paystack_activated == 1
                                      ? _c("li", [
                                          _c(
                                            "div",
                                            { staticClass: "input-checkbox" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.payment_form
                                                        .payment_type,
                                                    expression:
                                                      "payment_form.payment_type",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  id: "paystack",
                                                  value: "paystack",
                                                  name: "radio",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.payment_form
                                                      .payment_type,
                                                    "paystack"
                                                  ),
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.payment_form,
                                                        "payment_type",
                                                        "paystack"
                                                      )
                                                    },
                                                    _vm.razorPayRemove,
                                                  ],
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                { attrs: { for: "paystack" } },
                                                [
                                                  _c("img", {
                                                    staticClass: "img-fluid",
                                                    attrs: {
                                                      src: _vm.getUrl(
                                                        "public/images/payment-method/paystack.svg"
                                                      ),
                                                      alt: _vm.payment_form
                                                        .payment_type,
                                                      width: "90",
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        _vm.lang
                                                          .pay_with_paystack
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.settings.is_flutterwave_activated == 1
                                      ? _c("li", [
                                          _c(
                                            "div",
                                            { staticClass: "input-checkbox" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.payment_form
                                                        .payment_type,
                                                    expression:
                                                      "payment_form.payment_type",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  id: "flutter_wave",
                                                  value: "flutter_wave",
                                                  name: "radio",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.payment_form
                                                      .payment_type,
                                                    "flutter_wave"
                                                  ),
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.payment_form,
                                                        "payment_type",
                                                        "flutter_wave"
                                                      )
                                                    },
                                                    _vm.razorPayRemove,
                                                  ],
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                {
                                                  attrs: {
                                                    for: "flutter_wave",
                                                  },
                                                },
                                                [
                                                  _c("img", {
                                                    staticClass: "img-fluid",
                                                    attrs: {
                                                      src: _vm.getUrl(
                                                        "public/images/payment-method/fw.svg"
                                                      ),
                                                      alt: _vm.payment_form
                                                        .payment_type,
                                                      width: "90",
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        _vm.lang
                                                          .pay_with_flutter
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.settings.is_mollie_activated == 1
                                      ? _c("li", [
                                          _c(
                                            "div",
                                            { staticClass: "input-checkbox" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.payment_form
                                                        .payment_type,
                                                    expression:
                                                      "payment_form.payment_type",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  id: "mollie",
                                                  value: "mollie",
                                                  name: "radio",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.payment_form
                                                      .payment_type,
                                                    "mollie"
                                                  ),
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.payment_form,
                                                        "payment_type",
                                                        "mollie"
                                                      )
                                                    },
                                                    _vm.razorPayRemove,
                                                  ],
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                { attrs: { for: "mollie" } },
                                                [
                                                  _c("img", {
                                                    staticClass: "img-fluid",
                                                    attrs: {
                                                      src: _vm.getUrl(
                                                        "public/images/payment-method/mollie.svg"
                                                      ),
                                                      alt: _vm.payment_form
                                                        .payment_type,
                                                      width: "90",
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        _vm.lang.pay_with_mollie
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm._l(
                                      _vm.offline_methods,
                                      function (offline, index) {
                                        return _vm.addons.includes(
                                          "offline_payment"
                                        )
                                          ? _c("li", { key: index }, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "input-checkbox",
                                                },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.payment_form
                                                            .payment_type,
                                                        expression:
                                                          "payment_form.payment_type",
                                                      },
                                                    ],
                                                    attrs: {
                                                      type: "radio",
                                                      id:
                                                        "offline" + offline.id,
                                                      value: "offline_method",
                                                      name: "radio",
                                                    },
                                                    domProps: {
                                                      checked: _vm._q(
                                                        _vm.payment_form
                                                          .payment_type,
                                                        "offline_method"
                                                      ),
                                                    },
                                                    on: {
                                                      change: [
                                                        function ($event) {
                                                          return _vm.$set(
                                                            _vm.payment_form,
                                                            "payment_type",
                                                            "offline_method"
                                                          )
                                                        },
                                                        function ($event) {
                                                          return _vm.offlineCheck(
                                                            offline
                                                          )
                                                        },
                                                      ],
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: {
                                                        for:
                                                          "offline" +
                                                          offline.id,
                                                      },
                                                    },
                                                    [
                                                      _c("img", {
                                                        directives: [
                                                          {
                                                            name: "lazy",
                                                            rawName: "v-lazy",
                                                            value:
                                                              offline.image,
                                                            expression:
                                                              "offline.image",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "img-fluid",
                                                        attrs: {
                                                          alt: offline.name,
                                                        },
                                                      }),
                                                      _vm._v(
                                                        "\n                          " +
                                                          _vm._s(offline.name) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ])
                                          : _vm._e()
                                      }
                                    ),
                                  ],
                                  2
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "row justify-content-center text-end mt-3",
                              class: { disable_section: !_vm.form.total },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "col-lg-5",
                                  attrs: { id: "payment_buttons" },
                                },
                                [
                                  _c("div", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          _vm.payment_form.payment_type ==
                                          "paypal",
                                        expression:
                                          "payment_form.payment_type == 'paypal'",
                                      },
                                    ],
                                    ref: "paypal",
                                    staticClass: "mx-auto",
                                    attrs: { id: "paypal-button-container" },
                                  }),
                                  _vm._v(" "),
                                  !_vm.payment_form.payment_type
                                    ? _c(
                                        "a",
                                        {
                                          staticClass:
                                            "btn btn-primary w-100 disable_btn",
                                          attrs: { href: "javascript:void(0)" },
                                        },
                                        [_vm._v(_vm._s(_vm.lang.pay_now))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.payment_form.payment_type == "stripe"
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-primary w-100",
                                          attrs: { href: "javascript:void(0)" },
                                          on: { click: _vm.payment },
                                        },
                                        [_vm._v(_vm._s(_vm.lang.pay_now))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.payment_form.payment_type ==
                                  "ssl_commerze"
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-primary w-100",
                                          attrs: { href: "javascript:void(0)" },
                                          on: { click: _vm.payment },
                                        },
                                        [_vm._v(_vm._s(_vm.lang.pay_now))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.payment_form.payment_type == "paytm"
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-primary w-100",
                                          attrs: { href: "javascript:void(0)" },
                                          on: { click: _vm.payment },
                                        },
                                        [_vm._v(_vm._s(_vm.lang.pay_now))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.offline_method.name
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-primary w-100",
                                          attrs: {
                                            href: "javascript:void(0)",
                                            "data-bs-toggle": "modal",
                                            "data-bs-target": "#offline",
                                          },
                                        },
                                        [_vm._v(_vm._s(_vm.lang.pay_now))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.payment_form.payment_type == "paystack"
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-primary w-100",
                                          attrs: {
                                            href: "#",
                                            "data-bs-toggle": "modal",
                                            "data-bs-target": "#paystack_modal",
                                          },
                                          on: {
                                            click: function ($event) {
                                              _vm.payment_component_load = true
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(_vm.lang.pay_now)
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.payment_form.payment_type ==
                                  "flutter_wave"
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-primary w-100",
                                          attrs: {
                                            href: "#",
                                            "data-bs-toggle": "modal",
                                            "data-bs-target": "#fw_modal",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(_vm.lang.pay_now)
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.payment_form.payment_type == "mollie"
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            href: _vm.getUrl(
                                              "mollie/recharge-payment/?amount=" +
                                                _vm.form.total
                                            ),
                                          },
                                        },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src: _vm.defaultAssets.mollie,
                                              width: "30",
                                              alt: "mollie",
                                            },
                                          }),
                                          _vm._v(_vm._s(_vm.lang.pay_now)),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "form",
                                    {
                                      attrs: {
                                        name: "jsform",
                                        action: _vm.jazz_url,
                                        method: "get",
                                      },
                                    },
                                    [
                                      _vm._l(
                                        _vm.jazz_data,
                                        function (value, name) {
                                          return _c("input", {
                                            key: name,
                                            attrs: {
                                              type: "hidden",
                                              name: name,
                                            },
                                            domProps: { value: value },
                                          })
                                        }
                                      ),
                                      _vm._v(" "),
                                      _vm.payment_form.payment_type ==
                                      "jazz_cash"
                                        ? _c(
                                            "button",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: !_vm.loading,
                                                  expression: "!loading",
                                                },
                                              ],
                                              staticClass:
                                                "btn btn-primary w-100",
                                              attrs: { type: "submit" },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.lang.pay_now) +
                                                  "\n                    "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "form",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            _vm.payment_form.payment_type ==
                                            "razor_pay",
                                          expression:
                                            "payment_form.payment_type == 'razor_pay'",
                                        },
                                      ],
                                      attrs: {
                                        action: _vm.getUrl(
                                          "user/recharge-wallet"
                                        ),
                                        method: "post",
                                      },
                                    },
                                    [
                                      _c("input", {
                                        attrs: {
                                          type: "hidden",
                                          name: "_token",
                                        },
                                        domProps: { value: _vm.token },
                                      }),
                                      _vm._v(" "),
                                      _c("input", {
                                        attrs: {
                                          type: "hidden",
                                          name: "payment_type",
                                        },
                                        domProps: {
                                          value: _vm.payment_form.payment_type,
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("input", {
                                        attrs: {
                                          type: "hidden",
                                          name: "amount",
                                        },
                                        domProps: { value: _vm.form.total },
                                      }),
                                      _vm._v(" "),
                                      _c("div", { ref: "razor_pay" }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "offline",
                tabindex: "-1",
                "aria-labelledby": "offline_modal",
                "aria-hidden": "true",
              },
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable",
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("h5", { staticClass: "modal-title" }, [
                        _vm._v(
                          _vm._s(_vm.lang.pay_with) +
                            _vm._s(_vm.offline_method.name)
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._m(3),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v(_vm._s(_vm.lang.upload_file))]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group" }, [
                              _c("div", { staticClass: "custom-file d-flex" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "upload-image form-control",
                                    attrs: { for: "upload-1" },
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "file", id: "upload-1" },
                                      on: {
                                        change: function ($event) {
                                          return _vm.imageUp($event)
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("i", { attrs: { id: "upload-image" } }, [
                                      _vm._v(_vm._s(_vm.lang.upload_file)),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "upload-image upload-text",
                                    attrs: { for: "upload-2" },
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "file", id: "upload-2" },
                                      on: {
                                        change: function ($event) {
                                          return _vm.imageUp($event)
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: _vm.defaultAssets.review_image,
                                          expression:
                                            "defaultAssets.review_image",
                                        },
                                      ],
                                      staticClass: "img-fluid",
                                      attrs: {
                                        alt: _vm.defaultAssets.preloader,
                                      },
                                    }),
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(_vm.lang.upload) +
                                        "\n                    "
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm.offline_method.instructions
                          ? _c("div", { staticClass: "col-lg-12" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.lang.instructions)),
                              ]),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "instruction",
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.offline_method.instructions
                                  ),
                                },
                              }),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-12 text-center mt-3" },
                          [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !_vm.loading,
                                    expression: "!loading",
                                  },
                                ],
                                staticClass: "btn btn-primary",
                                on: { click: _vm.payment },
                              },
                              [_vm._v(_vm._s(_vm.lang.proceed))]
                            ),
                            _vm._v(" "),
                            _c("loading_button", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.loading,
                                  expression: "loading",
                                },
                              ],
                              attrs: { class_name: "btn btn-primary" },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "paystack_modal",
                tabindex: "-1",
                "aria-labelledby": "paystack_modal",
                "aria-hidden": "true",
              },
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable",
                },
                [
                  _c(
                    "div",
                    { staticClass: "modal-content" },
                    [
                      _c("div", { staticClass: "modal-header" }, [
                        _c("h5", { staticClass: "modal-title" }, [
                          _vm._v(_vm._s(_vm.lang.pay_with_paystack)),
                        ]),
                        _vm._v(" "),
                        _vm._m(4),
                      ]),
                      _vm._v(" "),
                      _vm.payment_component_load
                        ? _c("paystack", {
                            attrs: {
                              trx_id: _vm.trx_id,
                              transaction_type: "wallet_recharge",
                              paystack_key: _vm.settings.paystack_pk,
                              ngn_exchange_rate: _vm.settings.ngn_exchange_rate,
                              code: _vm.code,
                              amount: _vm.form.total,
                              type: _vm.payment_form.payment_type,
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c("flutter_wave", {
            ref: "flutter_wave",
            attrs: {
              trx_id: _vm.trx_id,
              code: _vm.code,
              transaction_type: "wallet_recharge",
              amount: _vm.form.total,
              type: _vm.payment_form.payment_type,
            },
          }),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [_c("i", { staticClass: "mdi mdi-plus" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [_c("i", { staticClass: "mdi mdi-transfer" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close modal_close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close modal_close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close modal_close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/orders.vue?vue&type=template&id=beaf8960&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/orders.vue?vue&type=template&id=beaf8960& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "order-table" }, [
    _c("table", { staticClass: "table" }, [
      _c("thead", [
        _c("tr", [
          _c("th", { attrs: { scope: "col" } }, [
            _vm._v(_vm._s(_vm.lang.product)),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [
            _vm._v(_vm._s(_vm.lang.date)),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [
            _vm._v(_vm._s(_vm.lang.delivery_status)),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [
            _vm._v(_vm._s(_vm.lang.pay_status)),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [
            _vm._v(_vm._s(_vm.lang.total)),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [
            _vm._v(_vm._s(_vm.lang.action)),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.orders, function (orderDetails, i) {
          return orderDetails.is_deleted == 0
            ? _c("tr", { key: i }, [
                _c("th", { attrs: { scope: "row" } }, [
                  _c("div", { staticClass: "product" }, [
                    _c("div", { staticClass: "text pl-1" }, [
                      orderDetails.product_name
                        ? _c("p", { staticClass: "text-ellipse" }, [
                            _vm._v(_vm._s(orderDetails.product_name)),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      orderDetails.variation
                        ? _c("span", [
                            _vm._v(" " + _vm._s(orderDetails.variation)),
                          ])
                        : _c("span", [_vm._v(" " + _vm._s(orderDetails.sku))]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(orderDetails.order_date))]),
                _vm._v(" "),
                _c("td", { staticClass: "text-capitalize" }, [
                  _c(
                    "div",
                    {
                      class:
                        orderDetails.delivery_status == "pending"
                          ? "pending"
                          : orderDetails.delivery_status == "delivered"
                          ? "complete"
                          : orderDetails.delivery_status == "canceled"
                          ? "cancel"
                          : "delivery-info",
                    },
                    [
                      _c("span", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              orderDetails.delivery_status == "pending"
                                ? _vm.lang.Pending
                                : orderDetails.delivery_status == "delivered"
                                ? _vm.lang.delivered
                                : orderDetails.delivery_status == "canceled"
                                ? _vm.lang.Canceled
                                : orderDetails.delivery_status == "confirmed"
                                ? _vm.lang.Confirmed
                                : orderDetails.delivery_status == "picked_up"
                                ? _vm.lang.picked_up
                                : orderDetails.delivery_status == "on_the_way"
                                ? _vm.lang.on_the_way
                                : ""
                            ) +
                            "\n                "
                        ),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "div",
                    {
                      staticClass: "paid od_payment_status",
                      class:
                        orderDetails.payment_status == "paid"
                          ? "paid"
                          : "unpaid",
                    },
                    [
                      _c("span", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              orderDetails.payment_status == "paid"
                                ? _vm.lang.Paid
                                : orderDetails.payment_status == "unpaid"
                                ? _vm.lang.Unpaid
                                : _vm.lang.refunded_to_wallet
                            ) +
                            "\n                "
                        ),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm.priceFormat(orderDetails.total_payable))),
                  ]),
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("div", { staticClass: "dropdown" }, [
                    _c(
                      "button",
                      {
                        staticClass: "dropdown-toggle btn-primary",
                        class:
                          orderDetails.order_id == _vm.order_dropdown
                            ? "show"
                            : "",
                        attrs: {
                          type: "button",
                          id: "",
                          "data-bs-toggle": "dropdown",
                          "aria-expanded": "false",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.orderDropdown(orderDetails.order_id)
                          },
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.lang.Actions) + "\n                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      {
                        staticClass: "dropdown-menu text-capitalize",
                        class:
                          orderDetails.order_id == _vm.order_dropdown
                            ? "show"
                            : "",
                      },
                      [
                        orderDetails.delivery_status == "pending"
                          ? _c("li", [
                              _c(
                                "a",
                                {
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.cancelOrder(
                                        orderDetails.order_id,
                                        i
                                      )
                                    },
                                  },
                                },
                                [_vm._v(_vm._s(_vm.lang.cancel))]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            orderDetails.payment_status == "unpaid" &&
                            orderDetails.payment_type != "cash_on_delivery" &&
                            orderDetails.delivery_status != "cancelled" &&
                            orderDetails.delivery_status != "offline_method"
                              ? _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "payment",
                                        params: { code: orderDetails.code },
                                      },
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.lang.pay_now))]
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "get.invoice",
                                    params: { orderCode: orderDetails.code },
                                  },
                                },
                              },
                              [_vm._v(_vm._s(_vm.lang.view))]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: {
                                click: function ($event) {
                                  return _vm.download(
                                    orderDetails.order_id,
                                    orderDetails.code
                                  )
                                },
                              },
                            },
                            [_vm._v(_vm._s(_vm.lang.download))]
                          ),
                        ]),
                        _vm._v(" "),
                        orderDetails.product_file_id &&
                        orderDetails.payment_status == "paid"
                          ? _c(
                              "li",
                              _vm._l(_vm.orderUrls, function (url, index) {
                                return index == orderDetails.id
                                  ? _c(
                                      "a",
                                      { key: index, attrs: { href: url } },
                                      [_vm._v(_vm._s(_vm.lang.download_file))]
                                    )
                                  : _vm._e()
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        orderDetails.delivery_status == "delivered" ||
                        orderDetails.delivery_status == "canceled"
                          ? _c("li", [
                              _c(
                                "a",
                                {
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.removeOrder(
                                        orderDetails.order,
                                        i
                                      )
                                    },
                                  },
                                },
                                [_vm._v(_vm._s(_vm.lang.delete))]
                              ),
                            ])
                          : _vm._e(),
                      ]
                    ),
                  ]),
                ]),
              ])
            : _vm._e()
        }),
        0
      ),
    ]),
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

"use strict";
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.authUser
    ? _c("div", { staticClass: "col-lg-3" }, [
        _c(
          "div",
          { staticClass: "profile-details position-relative" },
          [
            _c("div", { staticClass: "profile-thumb" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  src: _vm.authUser.profile_image,
                  alt: _vm.authUser.full_name,
                },
              }),
            ]),
            _vm._v(" "),
            _c(
              "h2",
              [
                _vm._v(_vm._s(_vm.authUser.full_name) + " "),
                _c(
                  "router-link",
                  {
                    staticClass: "d-inline",
                    attrs: { to: { name: "edit.profile" } },
                  },
                  [_c("span", { staticClass: "mdi mdi-name mdi-pencil" })]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _vm._v(_vm._s(_vm.authUser.email)),
            ]),
            _vm._v(" "),
            _vm.settings.seller_system == 1
              ? _c(
                  "router-link",
                  {
                    staticClass: "be_seller base",
                    attrs: { to: { name: "migrate.seller" } },
                  },
                  [
                    _vm._v(
                      "\n            " + _vm._s(_vm.lang.be_a_seller) + " "
                    ),
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-store-outline",
                    }),
                  ]
                )
              : _vm._e(),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar-menu" }, [
          _c("ul", { staticClass: "global-list" }, [
            _c(
              "li",
              { class: { active: _vm.current === "dashboard" } },
              [
                _c("router-link", { attrs: { to: { name: "dashboard" } } }, [
                  _c("span", {
                    staticClass: "mdi mdi-name mdi-view-dashboard-outline",
                  }),
                  _vm._v(
                    " " + _vm._s(_vm.lang.dashboard) + "\n                "
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { class: { active: _vm.current === "addresses" } },
              [
                _c("router-link", { attrs: { to: { name: "addresses" } } }, [
                  _c("span", {
                    staticClass: "mdi mdi-name mdi-map-marker-outline",
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.lang.addresses) +
                      "\n                "
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { class: { active: _vm.current === "notification" } },
              [
                _c("router-link", { attrs: { to: { name: "notification" } } }, [
                  _c("span", { staticClass: "mdi mdi-name mdi-bell-outline" }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.lang.notification) +
                      "\n                "
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { class: { active: _vm.current === "order_history" } },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "order.history" } } },
                  [
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-cart-outline",
                    }),
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.lang.order_history) +
                        "\n                "
                    ),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.download_url
              ? _c(
                  "li",
                  {
                    class: {
                      active: _vm.current === "digital_product_order_history",
                    },
                  },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "orders.digital.product" } } },
                      [
                        _c("span", {
                          staticClass: "mdi mdi-name mdi-cart-arrow-down",
                        }),
                        _vm._v(
                          " " +
                            _vm._s(_vm.lang.digital_product_order) +
                            "\n                "
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.settings.coupon_system == 1
              ? _c(
                  "li",
                  { class: { active: _vm.current === "gift_voucher" } },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "gift.voucher" } } },
                      [
                        _c("span", {
                          staticClass: "mdi mdi-name mdi-wallet-giftcard",
                        }),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.lang.gift_voucher) +
                            "\n                "
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "li",
              { class: { active: _vm.current === "change_password" } },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "change.password" } } },
                  [
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-lock-outline",
                    }),
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.lang.change_password) +
                        "\n                "
                    ),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.settings.wallet_system == 1
              ? _c(
                  "li",
                  { class: { active: _vm.current === "wallet_history" } },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "wallet.history" } } },
                      [
                        _c("span", { staticClass: "mdi mdi-wallet-outline" }),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.lang.my_wallet) +
                            "\n                "
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.addons.includes("reward")
              ? _c(
                  "li",
                  { class: { active: _vm.current === "reward_history" } },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "reward.history" } } },
                      [
                        _c("span", { staticClass: "mdi mdi-vector-point" }),
                        _vm._v(
                          _vm._s(_vm.lang.my_rewards) + "\n                "
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.settings.seller_system == 1
              ? _c(
                  "li",
                  { class: { active: _vm.current === "followed_shop" } },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "shop.followed" } } },
                      [
                        _c("span", { staticClass: "mdi mdi-home-heart" }),
                        _vm._v(_vm._s(_vm.lang.shop) + "\n                "),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade reward",
            attrs: {
              id: "convert_reward",
              tabindex: "-1",
              "aria-labelledby": "exampleModalLabel",
              "aria-hidden": "true",
            },
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable",
              },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header" }, [
                    _c("h5", { staticClass: "modal-title" }, [
                      _vm._v(_vm._s(_vm.lang.reward_point)),
                    ]),
                    _vm._v(" "),
                    _vm._m(0),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body reward_modal" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.convertReward.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-12 text-center" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "reward" } }, [
                                  _vm._v(_vm._s(_vm.lang.reward_point) + " "),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.converted_reward,
                                      expression: "converted_reward",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "reward",
                                    placeholder:
                                      _vm.lang.enter_point_you_want_convert,
                                  },
                                  domProps: { value: _vm.converted_reward },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.converted_reward = $event.target.value
                                    },
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _vm.totalReward != null
                                ? _c("div", { staticClass: "text-start" }, [
                                    _c("p", [
                                      _vm._v(
                                        "Available Points to Convert : " +
                                          _vm._s(_vm.totalReward.rewards)
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.settings.reward_convert_rate
                                        ) +
                                          _vm._s(_vm.lang.reward_points) +
                                          _vm._s(_vm.priceFormat(1))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _vm.totalReward.rewards > 0
                                      ? _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.lang.total_amount_you_will_get
                                            ) +
                                              "\n                                        " +
                                              _vm._s(
                                                _vm.priceFormat(
                                                  _vm.converted_reward /
                                                    _vm.settings
                                                      .reward_convert_rate
                                                )
                                              )
                                          ),
                                        ])
                                      : _vm._e(),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.loading
                                ? _c("loading_button", {
                                    attrs: {
                                      class_name: "btn btn-primary mt-3",
                                    },
                                  })
                                : _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary mt-3",
                                      class: {
                                        disable_btn:
                                          _vm.converted_reward <
                                            _vm.settings.reward_convert_rate ||
                                          _vm.totalReward.rewards <
                                            _vm.converted_reward,
                                      },
                                      attrs: { type: "submit" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(_vm.lang.covert_rewards) +
                                          "\n                                "
                                      ),
                                    ]
                                  ),
                            ],
                            1
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]
            ),
          ]
        ),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close modal_close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "fw_modal",
        tabindex: "-1",
        "aria-labelledby": "fw_modal",
        "aria-hidden": "true",
      },
    },
    [
      _c(
        "div",
        {
          staticClass:
            "modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable",
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h5", { staticClass: "modal-title" }, [
                _vm._v(_vm._s(_vm.lang.pay_with_flutter)),
              ]),
              _vm._v(" "),
              _vm._m(0),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.name,
                          expression: "name",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: _vm.lang.name,
                        required: "",
                      },
                      domProps: { value: _vm.name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.name = $event.target.value
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.email,
                        expression: "email",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      placeholder: _vm.lang.email,
                      required: "",
                    },
                    domProps: { value: _vm.email },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.email = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.phone,
                          expression: "phone",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "tel",
                        placeholder: _vm.lang.phone,
                        required: "",
                      },
                      domProps: { value: _vm.phone },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.phone = $event.target.value
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-12 text-center" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-primary flutter_wave",
                    attrs: { href: "javascript:void(0)" },
                    on: { click: _vm.initiatePopup },
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.lang.pay) +
                        " " +
                        _vm._s(_vm.priceFormat(_vm.amount)) +
                        "\n                    "
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
        ]
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close modal_close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal-body" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: _vm.lang.name, required: "" },
            domProps: { value: _vm.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              },
            },
          }),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-12" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.email,
              expression: "email",
            },
          ],
          staticClass: "form-control",
          attrs: { type: "email", placeholder: _vm.lang.email, required: "" },
          domProps: { value: _vm.email },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.email = $event.target.value
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.phone,
                expression: "phone",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "tel", placeholder: _vm.lang.phone, required: "" },
            domProps: { value: _vm.phone },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.phone = $event.target.value
              },
            },
          }),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-12 text-center" },
      [
        _c(
          "paystack",
          {
            class: { overlay_btn: !_vm.name || !_vm.email || !_vm.phone },
            attrs: {
              amount: _vm.round(_vm.amount * 100 * _vm.ngn_exchange_rate),
              email: _vm.email,
              phone: _vm.phone,
              name: _vm.name,
              paystackkey: _vm.paystack_key,
              callback: _vm.callback,
              reference: _vm.reference,
              channels: _vm.channels,
              currency: "GHS",
              close: _vm.close,
              embed: false,
            },
          },
          [
            _c("i", { staticClass: "bx bx-money" }),
            _vm._v(
              "\n            " +
                _vm._s(_vm.lang.pay) +
                " " +
                _vm._s(_vm.priceFormat(_vm.amount)) +
                "\n        "
            ),
          ]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-paystack/dist/paystack.min.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-paystack/dist/paystack.min.js ***!
  \********************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,function(){return a={},r.m=n=[function(t,e,n){"use strict";n.r(e);var a,r,i,o,c,u,s,d,l,p,f,n=(o=!(i=[]),s=u=c=null,f="function"==typeof(a={props:{embed:{type:Boolean,default:!1},paystackkey:{type:String,required:!0},email:{type:String,required:!0},firstname:{type:String,default:""},lastname:{type:String,default:""},amount:{type:Number,required:!0},reference:{type:String,required:!0},channels:{type:Array,default:function(){return["card","bank"]}},accessCode:{type:String,default:""},callback:{type:Function,required:!0,default:function(){}},close:{type:Function,required:!0,default:function(){}},metadata:{type:Object,default:function(){return{}}},currency:{type:String,default:"NGN"},plan:{type:String,default:""},quantity:{type:String,default:""},subaccount:{type:String,default:""},split:{type:Object,default:function(){return{}}},splitCode:{type:String,default:""},transactionCharge:{type:Number,default:0},bearer:{type:String,default:""}},data:function(){return{scriptLoaded:null}},created:function(){var e=this;this.scriptLoaded=new Promise(function(t){e.loadScript(function(){t()})})},mounted:function(){this.embed&&this.payWithPaystack()},methods:{loadScript:function(t){var e=document.createElement("script");e.src="https://js.paystack.co/v1/inline.js",document.getElementsByTagName("head")[0].appendChild(e),e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()}},isDynamicSplit:function(){return this.split.constructor===Object&&0<Object.keys(this.split).length},payWithPaystack:function(){var e=this;this.scriptLoaded&&this.scriptLoaded.then(function(){var t={key:e.paystackkey,email:e.email,firstname:e.firstname,lastname:e.lastname,channels:e.channels,amount:e.amount,access_code:e.accessCode,ref:e.reference,callback:function(t){e.callback(t)},onClose:function(){e.close()},metadata:e.metadata,currency:e.currency,plan:e.plan,quantity:e.quantity,subaccount:e.isDynamicSplit()?"":e.subaccount,split:e.isDynamicSplit()?e.split:null,split_code:e.isDynamicSplit()?"":e.splitCode,transaction_charge:e.isDynamicSplit()?0:e.transactionCharge,bearer:e.isDynamicSplit()?"":e.bearer};e.embed&&(t.container="paystackEmbedContainer");t=window.PaystackPop.setup(t);e.embed||t.openIframe()})}}})?a.options:a,(r=function(){var t=this,e=t._self._c||t.$createElement;return t.embed?e("div",{attrs:{id:"paystackEmbedContainer"}}):e("button",{staticClass:"payButton",on:{click:t.payWithPaystack}},[t._t("default",[t._v("Make Payment")])],2)})&&(f.render=r,f.staticRenderFns=i,f._compiled=!0),o&&(f.functional=!0),u&&(f._scopeId="data-v-"+u),s?f._ssrRegister=l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),c&&c.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)}:c&&(l=d?function(){c.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:c),l&&(f.functional?(f._injectStyles=l,p=f.render,f.render=function(t,e){return l.call(e),p(t,e)}):f.beforeCreate=(d=f.beforeCreate)?[].concat(d,l):[l]),{exports:a,options:f});e.default=n.exports}],r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=0);function r(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,a});

/***/ })

}]);