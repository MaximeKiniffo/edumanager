import type { Router } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export const setupGuards = (router: Router) => {
  router.beforeEach((to) => {
    const auth = useAuthStore()
    const role = auth.role
    
    if(to.path.startsWith('/admin') && role !== 'admin') {
      return `/${role}/dashboard` 
    }

    if(to.path.startsWith('/eleve') && role !== 'eleve') {
      return `/${role}/dashboard` 
    }

    if(to.path.startsWith('/professeur') && role !== 'professeur') {
      return `/${role}/dashboard` 
    }

    if (!role) return `/`
  })
}