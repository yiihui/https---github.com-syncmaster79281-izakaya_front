import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import * as Icons from "@ant-design/icons-vue";
const icons = Icons;
for (const i in icons) {
  app.component(i, icons[i]);
}

import vuetify from "@/plugins/vuetify";
app.use(vuetify);

app.use(createPinia());
app.use(router);

app.mount("#app");
