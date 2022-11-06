import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import HelpView from "@/views/HelpView.vue";
import ImportPoints from "@/views/ImportPoints";
import ExportPoints from "@/views/ExportPoints";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/help",
    name: "help",
    component: HelpView,
  },
  {
    path: "/import",
    name: "import",
    component: ImportPoints,
  },
  {
    path: "/export",
    name: "export",
    component: ExportPoints,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
