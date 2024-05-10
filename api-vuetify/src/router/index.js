
// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/pages/HomeView.vue";
import CardView from "@/pages/CardView.vue";
import SearchView from "@/pages/SearchView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView

    },
    {
      path: '/pageview',
      redirect: '/'
    },
    {
      path: '/cardview',
      name: 'Cards',
      component: CardView
    },
    {
      path: '/searchview',
      name: 'Search',
      component: SearchView
    }
  ]
})

export default router
