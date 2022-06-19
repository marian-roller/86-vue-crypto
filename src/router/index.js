import { createWebHistory, createRouter } from "vue-router";
import TheWelcome from "@/components/TheWelcome.vue";
import Dashboard from "../views/Dashboard.vue";
import SignIn from "../views/SignIn.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: TheWelcome,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/signin",
        name: "Sign in",
        component: SignIn,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;