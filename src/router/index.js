import { createWebHistory, createRouter } from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
import Product from "../pages/Product.vue";
import Add from "../pages/Add.vue";
import Cart from "../pages/Cart.vue";

const routes = [
    {
        path: "/cart",
        name: "cart",
        component: Cart,
    },
    {
        path: "/add",
        name: "add",
        component: Add,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/product/:id",
        name: "product",
        component: Product,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;