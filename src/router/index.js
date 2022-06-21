import { createWebHistory, createRouter } from "vue-router";
import TheWelcome from "@/components/TheWelcome.vue";
import Dashboard from "../views/Dashboard.vue";
import SignIn from "../views/SignIn.vue";
import { store } from "@/store"

const routes = [
    {
        path: "/",
        name: "home",
        component: TheWelcome,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if (!store.getters['auth/authenticated']) {
                return next({
                    name: 'signin'
                })
            }
            next()
        }
    },
    {
        path: "/signin",
        name: "signin",
        component: SignIn,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;