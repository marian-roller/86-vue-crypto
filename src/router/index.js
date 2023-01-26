import { createWebHistory, createRouter } from "vue-router";
import TheWelcome from "@/components/TheWelcome.vue";
import Hash from "@/components/hash/Hash.vue";
import Block from "@/components/blockchain/Block.vue";
import Blockchain from "@/components/blockchain/Blockchain.vue";
import Dashboard from "../views/Dashboard.vue";
import SignIn from "../views/SignIn.vue";
import Register from "../views/Register.vue";
import Crypt from "../components/crypt/Crypt.vue";
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
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/hash",
        name: "hash",
        component: Hash,
    },
    {
        path: "/block",
        name: "block",
        component: Block,
    },
    {
        path: "/blockchain",
        name: "blockchain",
        component: Blockchain,
    },
    {
        path: "/crypt",
        name: "crypt",
        component: Crypt,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;