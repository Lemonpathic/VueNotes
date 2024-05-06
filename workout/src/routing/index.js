import {createRouter, createWebHistory} from "vue-router";
import WorkoutsTypeView from "../views/WorkoutsTypeView.vue";
import MuscleView from "../views/MuscleView.vue";
import WorkoutView from "../views/WorkoutView.vue";
import InfoView from "../views/InfoView.vue";
import NotFoundView from "../views/404View.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: "/",
            name: "muscle-groups",
            component: WorkoutsTypeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/muscle/:id",
            name: "muscle",
            component: MuscleView

        },
        {
            path: "/workout/:musclename/:workoutid",
            name: "workout",
            component: WorkoutView,
            children: [
                {
                    path: "info",
                    component: InfoView
                }
            ]
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView
        }
    ]
})

export default router