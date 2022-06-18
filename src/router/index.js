import { createWebHistory, createRouter } from "vue-router";
import Test from "@/components/Test.vue";
import TheWelcome from "../components/TheWelcome.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: TheWelcome,
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;