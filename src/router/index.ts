import { createRouter, createWebHistory } from 'vue-router'
import { setupGuards } from './guards'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/admin/dashboard' },
    { path: '/admin/dashboard', component: () => import('@/views/admin/DashboardView.vue') },
    { path: '/admin/emploi-du-temps', component: () => import('@/views/admin/EmploiDuTempsView.vue') },
    { path: '/admin/classes', component: () => import('@/views/admin/ClassesView.vue') },
    { path: '/admin/eleves', component: () => import('@/views/admin/ElevesView.vue') },
    { path: '/admin/professeurs', component: () => import('@/views/admin/ProfesseursView.vue') },
     { path: '/eleve/dashboard', component: () => import('@/views/eleve/DashboardView.vue') },
     { path: '/eleve/emploi-du-temps', component: () => import('@/views/eleve/EmploiDuTempsView.vue') },
     { path: '/eleve/notes', component: () => import('@/views/eleve/NotesView.vue') },
     { path: '/eleve/cours', component: () => import('@/views/eleve/CoursView.vue') },
     { path: '/professeur/dashboard', component: () => import('@/views/professeur/DashboardView.vue') },
     { path: '/professeur/emploi-du-temps', component: () => import('@/views/professeur/EmploiDuTempsView.vue') },
     { path: '/professeur/notes', component: () => import('@/views/professeur/NotesView.vue') },
     { path: '/professeur/cours', component: () => import('@/views/professeur/CoursView.vue') },
  ],
})

setupGuards(router)

export default router
