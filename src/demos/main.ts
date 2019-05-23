import Vue from "vue";
import App from "./App";
import QIcon from "../packages/index";

Vue.config.productionTip = false;

Vue.use(QIcon, { size: 20 });
new Vue({
  render: h => h(App)
}).$mount("#app");
