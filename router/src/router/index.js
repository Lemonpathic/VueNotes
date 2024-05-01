import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component:HomeView
        },
        {
            path:"/about",
            name:"About",
            component:About
        }
    ]
})

export default router