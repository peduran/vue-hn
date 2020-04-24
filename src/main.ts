import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import StoryListPage from '@/components/pages/StoryListPage.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: StoryListPage },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router, 
  render: (h) => h(App),
}).$mount("#app");
