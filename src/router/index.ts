import { createRouter, createWebHistory } from 'vue-router'
// eslint-disable-next-line import/no-unresolved
import { setupLayouts } from 'layouts-generated'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
    {
      path: '',
      redirect: ROUTE.PRODUCTS.PATH,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  if (!authStore.isLoggedIn && to.name !== ROUTE.LOGIN.NAME) {
    next({
      path: ROUTE.LOGIN.PATH,
      replace: true,
    })
  }
  else if (authStore.isLoggedIn && to.name === ROUTE.LOGIN.NAME) {
    next({
      path: '',
      replace: true,
    })
  }
  else {
    next()
  }
})
export default router
