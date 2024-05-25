import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import PedidoView from '../views/PedidoView.vue'
import PromocionesView from '@/views/PromocionesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: '',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'Menú',
      component: MenuView
    },
    {
      path: '/pedido',
      name: 'Hacer pedido',
      component: PedidoView
    }, 
    {
      path: '/promociones',
      name: 'Promociones',
      component: PromocionesView
    }
  ]
})

export default router
