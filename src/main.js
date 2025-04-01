import Vue from 'vue';
import Vuex from 'vuex';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';

import router from './router';
import { sync } from 'vuex-router-sync';
import VueResource from 'vue-resource';
import store from './store'; // Ensure the store is imported

Vue.config.productionTip = false;

// Ensure Vuex is used before creating the Vue instance
Vue.use(Vuex);

// Sync Vuex store with the router
sync(store, router);
// plugin setup
Vue.use(VueResource);
Vue.use(DashboardPlugin);
Vue.use(Vuex); // Ensure Vuex is used before creating the Vue instance

// Debug logs
console.log("Imported Vuex store:", store);
console.log("VueJs version:", Vue.version);

/* eslint-disable no-new */
new Vue({
  router,
  store, // Ensure the store is registered here
  render: h => h(App),
  mounted() {
    console.log("Vue instance store:", this.$store); // Debug log to verify store injection
  },
}).$mount('#app');

