import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAnalytics from "vue-analytics";
// import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-117140802-2",
  router,
  // checkDuplicatedScript: true,
  autoTracking: {
    pageView: true
    //screenview: true
  },
  set: [
    { field: "dimension1", value: "2" },
    { field: "dimension2", value: "5" },
    { field: "dimension3", value: "x1" },
    { field: "userId", value: "3" }
    // { field: "productId", value: "1" },
    // { field: "role", value: "2" } // admin, manager, employee
  ],
  debug: {
    enabled: true,
    trace: true,
    sendHitTask: true
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
