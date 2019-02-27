import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAnalytics from "vue-analytics";
// import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-135274739-1",
  router,
  // checkDuplicatedScript: true,
  autoTracking: {
    pageView: true
    //screenview: true
  },
  set: [
    { field: "dimension1", value: "1" }
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
