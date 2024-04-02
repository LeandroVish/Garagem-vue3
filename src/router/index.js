import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AcessoriosView from "../views/AcessoriosView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import CorView from "../views/CorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/acessorios",
      name: "acessorios",
      component: AcessoriosView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/cor",
      name: "cores",
      component: CorView,
    },
  ],
});

export default router;
