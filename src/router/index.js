/*import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router*/
import HomeView from "@/views/HomeView.vue";
import Formulaire from "@/components/Formulaire.vue";
import NotFound from "@/components/NotFound.vue";
import Projets from "@/components/Projets.vue";

export const routes = [
  {path: '/', component: HomeView},
  {path: '/projets', component: Projets, name: 'projets'},
  {path: '/contact', component: Formulaire, name: 'contact'},
  {path: '/:pathMatch(.*)*', component: NotFound}
  /*{path: '/contact/:id', component: Formulaire, props: true},*/
]
