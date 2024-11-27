
import {createRouter, createWebHistory} from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import Formulaire from "@/components/Formulaire.vue";
import NotFound from "@/components/NotFound.vue";
import Projets from "@/components/Projets.vue";
import Modale from '@/components/Modale.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/projets',
      name: 'projets',
      component: Projets,
    },

    {
      path: '/projets/modal',
      name: 'modal',
      component: Modale,
      props: true,
    },

    {
      path: '/contact',
      name: 'contact',
      component: Formulaire,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
     },
  ],
})

export default router