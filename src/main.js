import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./routes";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

loadFonts();

createApp(App)
  .use(vuetify)
  .use(router)
  .component("Datepicker", Datepicker)
  .mount("#app");
