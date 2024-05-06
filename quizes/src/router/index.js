import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizView.vue";
import QuestionView from "@/views/QuestionView.vue";
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView
        },
        {
            path: "/:subject",
            name: "Quiz",
            component: QuizView,
            children: [{
                path: "question",
                component: QuestionView
            }]
        }
    ]
})

export default router