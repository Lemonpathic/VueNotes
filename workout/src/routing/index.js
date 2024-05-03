import {createRouter, createWebHistory} from "vue-router";
import TestView from "../views/TestView.vue";
import WorkoutsTypeView from "../views/WorkoutsTypeView.vue";
import MuscleView from "../views/MuscleView.vue";
import WorkoutView from "../views/WorkoutView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/test",
            name: "test",
            component: TestView
        },
        {
            path: "/muscle-groups",
            name: "muscle-groups",
            component: WorkoutsTypeView
        },
        {
            path: "/muscle/:id",
            name: "muscle",
            component: MuscleView

        },
        {
            path:"/workout/:id",
            name:"workout",
            component:WorkoutView
        }
    ]
})

export default router