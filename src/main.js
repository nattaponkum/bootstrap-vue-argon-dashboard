/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { sync } from 'vuex-router-sync'
import VueResource from 'vue-resource'
import store from './store'
import DashboardPlugin from './plugins/dashboard-plugin';

Vue.config.productionTip = false;

// plugin setup
Vue.use(VueResource);
Vue.use(DashboardPlugin);


sync(store, router)
console.log("VueJs version:"+Vue.version)
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  store,
}).$mount('#app');

