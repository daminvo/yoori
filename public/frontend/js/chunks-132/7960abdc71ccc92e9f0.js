"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[796],{5796:(t,a,s)=>{s.r(a),s.d(a,{default:()=>o});var e=s(3424),r=s(7982);const i={name:"notification",data:function(){return{current:"notification",loading:!1,is_shimmer:!1}},components:{user_sidebar:e.Z,shimmer:r.Z},mounted:function(){0==this.lengthCounter(this.notification.data)&&this.notification(),this.lengthCounter(this.notification.data)>0&&(this.is_shimmer=!0)},computed:{notifications:function(){return this.$store.getters.getNotifications},shimmer:function(){return this.$store.state.module.shimmer}},methods:{notification:function(){var t=this,a=this.getUrl("user-notification/all");this.$Progress.start(),axios.get(a).then((function(a){t.is_shimmer=!0,t.$store.commit("setShimmer",0),t.$Progress.finish(),t.$store.commit("setNotifications",a.data.notifications)})).catch((function(a){t.$Progress.fail()}))},seenAll:function(){var t=this,a=this.getUrl("user-notification/seen-all");axios.get(a).then((function(a){if(a.data.error)toastr.error(a.data.error,t.lang.Error+" !!");else for(var s=0;s<t.notifications.data.length;s++)t.notifications.data[s].status="seen"})).catch((function(a){t.$Progress.fail()}))},seen:function(t,a,s){var e=this,r=this.getUrl("notification/seen/"+t);axios.get(r).then((function(t){if(t.data.error)toastr.error(t.data.error,e.lang.Error+" !!");else if(e.notifications.data[a].status="seen","url"==s){var r=e.notifications.data[a].url.split("/");e.$router.push({name:"get.invoice",params:{orderCode:r[r.length-1]}})}}))},remove:function(t,a){var s=this,e=this.getUrl("notification/remove/"+t);axios.get(e).then((function(t){t.data.error?toastr.error(t.data.error,s.lang.Error+" !!"):(s.notifications.data[a].is_deleted=1,s.notifications.total-=1)}))}}};var n=(0,s(1900).Z)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sg-page-content"},[s("section",{staticClass:"sg-global-content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("user_sidebar",{attrs:{current:t.current}}),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("div",{staticClass:"sg-table sg-notification"},[s("div",{staticClass:"title justify-content-between"},[t.notifications.total>0?s("h1",[t._v(t._s(t.notifications.total)+" Notifications found")]):t.is_shimmer?s("h1",[t._v(t._s(t.lang.notification_found))]):s("h1",[t._v(t._s(t.lang.loading))]),t._v(" "),t.notifications.total>0?s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.seenAll}},[t._v(t._s(this.lang.seen_all))]):t._e()]),t._v(" "),t.is_shimmer?s("table",{staticClass:"table"},[s("thead",[s("tr",[s("td",[t._v("#")]),t._v(" "),s("td",[t._v(t._s(t.lang.Title))]),t._v(" "),s("td",[t._v(t._s(t.lang.time))]),t._v(" "),s("td",[t._v(t._s(t.lang.action))])])]),t._v(" "),s("tbody",t._l(t.notifications.data,(function(a,e){return 1!=a.is_deleted?s("tr",{key:e},[s("th",{attrs:{scope:"row"}},[t._v(t._s(++e))]),t._v(" "),"unseen"==a.status?s("td",{attrs:{scope:"row"}},[s("div",{staticClass:"product"},[s("a",{attrs:{href:t.getUrl(a.url)}},[s("div",{staticClass:"text"},[s("p",[t._v(t._s(a.title))])])])])]):s("td",[t._v(t._s(a.title))]),t._v(" "),s("td",[t._v(t._s(a.date)+" | "+t._s(a.time))]),t._v(" "),s("td",[s("div",{staticClass:"add-to-cart mb-2 mt-2"},["unseen"==a.status?s("a",{staticClass:"btn ",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.seen(a.id,e)}}},[t._v(t._s(t.lang.seen))]):t._e(),t._v(" "),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.remove(a.id,e)}}},[t._v(t._s(t.lang.remove))])])])]):t._e()})),0)]):t.shimmer?s("table",{staticClass:"table"},t._l(8,(function(t,a){return s("shimmer",{key:a,staticClass:"mb-3",attrs:{height:70}})})),1):t._e(),t._v(" "),t.notifications.next_page_url&&!t.loading?s("div",{staticClass:"show-more-button"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.lang.show_more))])]):t._e(),t._v(" "),t.loading?s("div",{staticClass:"show-more-button"},[s("loading_button",{attrs:{class_name:"btn btn-primary"}})],1):t._e()])])],1)])])])}),[],!1,null,null,null);const o=n.exports},7982:(t,a,s)=>{s.d(a,{Z:()=>r});const e={name:"shimmer.vue",props:["height"],data:function(){return{style:{height:this.height+"px"}}}};const r=(0,s(1900).Z)(e,(function(){var t=this,a=t.$createElement;return(t._self._c||a)("img",{staticClass:"shimmer",style:[t.height?t.style:null],attrs:{src:t.defaultAssets.shimmer,alt:"shimmer"}})}),[],!1,null,null,null).exports},3424:(t,a,s)=>{s.d(a,{Z:()=>r});const e={name:"user_sidebar",props:["current","addresses"],data:function(){return{loading:!1,download_url:!1}},mounted:function(){this.checkAuth()},computed:{totalReward:function(){return this.$store.getters.getTotalReward},modalType:function(){return this.$store.getters.getModalType}},components:{shimmer:s(7982).Z},methods:{checkAuth:function(){var t=this,a=this.getUrl("home/check-auth");axios.get(a).then((function(a){t.$store.dispatch("user",a.data.user),t.$store.commit("getOrderUrl",a.data.order_urls),t.authUser?"admin"==t.authUser.user_type&&t.$router.push({name:"home"}):t.$router.push({name:"login"}),a.data.reward&&t.$store.commit("setTotalReward",a.data.reward),a.data.download_urls&&(t.download_url=!0)}))},convertReward:function(){var t=this,a=this.getUrl("user/convert-reward"),s={amount:this.converted_reward/this.settings.reward_convert_rate,reward:this.converted_reward};s.amount>0&&this.totalReward.rewards>=this.converted_reward&&confirm("Are You Sure! You want to Convert ?")&&(this.loading=!0,axios.post(a,s).then((function(a){t.loading=!1,a.data.error?toastr.error(a.data.error,t.lang.Error+" !!"):(toastr.success(a.data.success,t.lang.Success+"!!"),$("#convert_reward").modal("hide"),t.converted_reward="",t.$store.dispatch("user",a.data.user),t.$store.commit("setTotalReward",a.data.reward))})).catch((function(a){t.loading=!1})))}}};const r=(0,s(1900).Z)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.authUser?s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"profile-details position-relative"},[s("div",{staticClass:"profile-thumb"},[s("img",{staticClass:"img-fluid",attrs:{src:t.authUser.profile_image,alt:t.authUser.full_name}})]),t._v(" "),s("h2",[t._v(t._s(t.authUser.full_name)+" "),s("router-link",{staticClass:"d-inline",attrs:{to:{name:"edit.profile"}}},[s("span",{staticClass:"mdi mdi-name mdi-pencil"})])],1),t._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.authUser.email))]),t._v(" "),1==t.settings.seller_system?s("router-link",{staticClass:"be_seller base",attrs:{to:{name:"migrate.seller"}}},[t._v("\n            "+t._s(t.lang.be_a_seller)+" "),s("span",{staticClass:"mdi mdi-name mdi-store-outline"})]):t._e()],1),t._v(" "),s("div",{staticClass:"sidebar-menu"},[s("ul",{staticClass:"global-list"},[s("li",{class:{active:"dashboard"===t.current}},[s("router-link",{attrs:{to:{name:"dashboard"}}},[s("span",{staticClass:"mdi mdi-name mdi-view-dashboard-outline"}),t._v(" "+t._s(t.lang.dashboard)+"\n                ")])],1),t._v(" "),s("li",{class:{active:"addresses"===t.current}},[s("router-link",{attrs:{to:{name:"addresses"}}},[s("span",{staticClass:"mdi mdi-name mdi-map-marker-outline"}),t._v("\n                    "+t._s(t.lang.addresses)+"\n                ")])],1),t._v(" "),s("li",{class:{active:"notification"===t.current}},[s("router-link",{attrs:{to:{name:"notification"}}},[s("span",{staticClass:"mdi mdi-name mdi-bell-outline"}),t._v("\n                    "+t._s(t.lang.notification)+"\n                ")])],1),t._v(" "),s("li",{class:{active:"order_history"===t.current}},[s("router-link",{attrs:{to:{name:"order.history"}}},[s("span",{staticClass:"mdi mdi-name mdi-cart-outline"}),t._v("\n                    "+t._s(t.lang.order_history)+"\n                ")])],1),t._v(" "),t.download_url?s("li",{class:{active:"digital_product_order_history"===t.current}},[s("router-link",{attrs:{to:{name:"orders.digital.product"}}},[s("span",{staticClass:"mdi mdi-name mdi-cart-arrow-down"}),t._v(" "+t._s(t.lang.digital_product_order)+"\n                ")])],1):t._e(),t._v(" "),1==t.settings.coupon_system?s("li",{class:{active:"gift_voucher"===t.current}},[s("router-link",{attrs:{to:{name:"gift.voucher"}}},[s("span",{staticClass:"mdi mdi-name mdi-wallet-giftcard"}),t._v("\n                    "+t._s(t.lang.gift_voucher)+"\n                ")])],1):t._e(),t._v(" "),s("li",{class:{active:"change_password"===t.current}},[s("router-link",{attrs:{to:{name:"change.password"}}},[s("span",{staticClass:"mdi mdi-name mdi-lock-outline"}),t._v("\n                    "+t._s(t.lang.change_password)+"\n                ")])],1),t._v(" "),1==t.settings.wallet_system?s("li",{class:{active:"wallet_history"===t.current}},[s("router-link",{attrs:{to:{name:"wallet.history"}}},[s("span",{staticClass:"mdi mdi-wallet-outline"}),t._v("\n                    "+t._s(t.lang.my_wallet)+"\n                ")])],1):t._e(),t._v(" "),t.addons.includes("reward")?s("li",{class:{active:"reward_history"===t.current}},[s("router-link",{attrs:{to:{name:"reward.history"}}},[s("span",{staticClass:"mdi mdi-vector-point"}),t._v(t._s(t.lang.my_rewards)+"\n                ")])],1):t._e(),t._v(" "),1==t.settings.seller_system?s("li",{class:{active:"followed_shop"===t.current}},[s("router-link",{attrs:{to:{name:"shop.followed"}}},[s("span",{staticClass:"mdi mdi-home-heart"}),t._v(t._s(t.lang.shop)+"\n                ")])],1):t._e()])]),t._v(" "),s("div",{staticClass:"modal fade reward",attrs:{id:"convert_reward",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.lang.reward_point))]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"modal-body reward_modal"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.convertReward.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 text-center"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"reward"}},[t._v(t._s(t.lang.reward_point)+" ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.converted_reward,expression:"converted_reward"}],staticClass:"form-control",attrs:{type:"text",id:"reward",placeholder:t.lang.enter_point_you_want_convert},domProps:{value:t.converted_reward},on:{input:function(a){a.target.composing||(t.converted_reward=a.target.value)}}})]),t._v(" "),null!=t.totalReward?s("div",{staticClass:"text-start"},[s("p",[t._v("Available Points to Convert : "+t._s(t.totalReward.rewards))]),t._v(" "),s("p",[t._v(t._s(t.settings.reward_convert_rate)+t._s(t.lang.reward_points)+t._s(t.priceFormat(1)))]),t._v(" "),t.totalReward.rewards>0?s("p",[t._v(t._s(t.lang.total_amount_you_will_get)+"\n                                        "+t._s(t.priceFormat(t.converted_reward/t.settings.reward_convert_rate)))]):t._e()]):t._e(),t._v(" "),t.loading?s("loading_button",{attrs:{class_name:"btn btn-primary mt-3"}}):s("button",{staticClass:"btn btn-primary mt-3",class:{disable_btn:t.converted_reward<t.settings.reward_convert_rate||t.totalReward.rewards<t.converted_reward},attrs:{type:"submit"}},[t._v("\n                                    "+t._s(t.lang.covert_rewards)+"\n                                ")])],1)])])])])])])]):t._e()}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"close modal_close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],!1,null,null,null).exports}}]);