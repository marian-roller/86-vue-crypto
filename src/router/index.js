import { createWebHistory, createRouter } from "vue-router";
import TheWelcome from "@/components/TheWelcome.vue";
import Home from "@/components/Home.vue";
import Hash from "@/components/hash/Hash.vue";
import Block from "@/components/blockchain/Block.vue";
import Blockchain from "@/components/blockchain/Blockchain.vue";
import PublicKey from "@/components/key/PublicKey.vue";
import EncryptedFile from "@/components/key/EncryptedFile.vue";
import EncryptedMessage from "@/components/key/EncryptedMessage.vue";
import SignedMessage from "@/components/key/SignedMessage.vue";
import Steganography from "@/components/crypt/Steganography.vue";
import Dashboard from "../views/Dashboard.vue";
import SignIn from "../views/SignIn.vue";
import Register from "../views/Register.vue";
import Crypt from "../components/crypt/Crypt.vue";
import { store } from "@/store"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
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
        path: "/public-key",
        name: "PublicKey",
        component: PublicKey,
    },
    {
        path: "/signed-message",
        name: "SignedMessage",
        component: SignedMessage,
    },
    {
        path: "/encrypted-message",
        name: "EncryptedMessage",
        component: EncryptedMessage,
    },
    {
        path: "/encrypted-file",
        name: "EncryptedFile",
        component: EncryptedFile,
    },
    {
        path: "/steganography",
        name: "Steganography",
        component: Steganography,
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