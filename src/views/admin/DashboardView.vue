<template>
  <v-container>
    <v-row>
      <v-col v-for="stat in stats" :key="stat.title" cols="12" sm="6" md="3">
        <StatCard v-bind="stat" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import StatCard from '@/components/common/StatCard.vue';
import { useClassesStore } from '@/stores/classes';
import { useElevesStore } from '@/stores/eleves';
import { useProfesseursStore } from '@/stores/professeurs';
import { useCoursStore } from '@/stores/cours';

const stats = computed(() => [
  { title: 'Classes',     value: useClassesStore().classes.length,  icon: 'mdi-school',          color: 'blue'   },
  { title: 'Élèves',      value: useElevesStore().eleves.length,  icon: 'mdi-account-group',   color: 'green'  },
  { title: 'Professeurs', value: useProfesseursStore().professeurs.length,  icon: 'mdi-account-tie',     color: 'orange' },
  { title: 'Cours',       value: useCoursStore().cours.length,  icon: 'mdi-book-open-variant',color: 'purple' },
])


</script>
