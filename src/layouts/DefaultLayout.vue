<template>
  <v-app>
    <v-navigation-drawer permanent>
      <!-- Logo -->
      <div class="pa-4 d-flex justify-center">
        <v-img
          src="@/assets/logo/edumanager-logo-1024.png"
          max-height="56"
          class="d-none d-sm-block"
        />
        <v-img
          src="@/assets/logo/edumanager-icon-256.png"
          max-height="40"
          max-width="40"
          class="d-sm-none"
        />
      </div>

      <v-divider />

      <!-- Info utilisateur -->
      <v-list>
        <v-list-item
          :title="`${authStore.currentUser?.prenom} ${authStore.currentUser?.nom}`"
          :subtitle="authStore.currentUser?.email"
          prepend-icon="mdi-account-circle"
        />
      </v-list>

      <v-divider />

      <!-- Toggle rôle (démo) -->
      <div class="pa-3">
        <v-select
          :model-value="authStore.role"
          :items="roles"
          label="Rôle (démo)"
          density="compact"
          variant="outlined"
          hide-details
          @update:model-value="authStore.loginAs($event)"
        />
      </div>

      <v-divider />

      <!-- Navigation -->
      <v-list nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          rounded="lg"
        />
      </v-list>

      <!-- Déconnexion en bas -->
      <template #append>
        <v-divider />
        <v-list nav>
          <v-list-item
            prepend-icon="mdi-logout"
            title="Déconnexion"
            rounded="lg"
            @click="authStore.logout()"
          />
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import type { Role } from '@/types'

const authStore = useAuthStore()

const roles: Role[] = ['admin', 'professeur', 'eleve']

const navItems = computed(() => {
  if (authStore.role === 'admin') {
    return [
      { title: 'Dashboard',      to: '/admin/dashboard',       icon: 'mdi-view-dashboard' },
      { title: 'Classes',        to: '/admin/classes',          icon: 'mdi-school' },
      { title: 'Élèves',         to: '/admin/eleves',           icon: 'mdi-account-group' },
      { title: 'Professeurs',    to: '/admin/professeurs',      icon: 'mdi-account-tie' },
      { title: 'Emploi du temps',to: '/admin/emploi-du-temps',  icon: 'mdi-calendar-month' },
    ]
  }
  if (authStore.role === 'professeur') {
    return [
      { title: 'Dashboard',      to: '/professeur/dashboard',       icon: 'mdi-view-dashboard' },
      { title: 'Mes cours',      to: '/professeur/cours',           icon: 'mdi-book-open-variant' },
      { title: 'Saisie notes',   to: '/professeur/notes',           icon: 'mdi-notebook-edit' },
      { title: 'Emploi du temps',to: '/professeur/emploi-du-temps', icon: 'mdi-calendar-month' },
    ]
  }
  return [
    { title: 'Dashboard',      to: '/eleve/dashboard',       icon: 'mdi-view-dashboard' },
    { title: 'Mes cours',      to: '/eleve/cours',           icon: 'mdi-book-open-variant' },
    { title: 'Mes notes',      to: '/eleve/notes',           icon: 'mdi-notebook' },
    { title: 'Emploi du temps',to: '/eleve/emploi-du-temps', icon: 'mdi-calendar-month' },
  ]
})
</script>

