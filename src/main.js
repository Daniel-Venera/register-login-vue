import Vue from "vue";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSignOutAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
