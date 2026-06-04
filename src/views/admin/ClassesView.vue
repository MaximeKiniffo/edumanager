<template>
  <v-container>
    <!-- Titre + bouton Nouvelle classe -->
    <h1>Classes</h1>
    <v-btn color="primary" @click="openCreate">Nouvelle classe</v-btn>
    <!-- v-text-field search -->
    <v-text-field v-model="search" label="Rechercher" variant="outlined" density="compact"></v-text-field>
    <!-- v-data-table :headers :items="store.classes" :search -->
    <v-data-table :headers="headers" :items="store.classes" :search="search">
      <template #item.actions="{ item }">
        <v-btn color="primary" @click="openEdit(item)">Modifier</v-btn>
        <v-btn color="error" @click="store.remove(item.id)">Supprimer</v-btn>
      </template>
    </v-data-table>
    <!-- ClasseDialog v-model:open="dialogOpen" :classe="editingClasse" -->
    <ClasseDialog v-model:open="dialogOpen" :classe="editingClasse" />
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useClassesStore } from '@/stores/classes'
import type { Classe } from '@/types'
import ClasseDialog from '@/components/classes/ClasseDialog.vue'

const store = useClassesStore()
const search = ref('')
const dialogOpen = ref(false)
const editingClasse = ref<Classe | null>(null)

const headers = [
  { title: 'Nom',           key: 'nom' },
  { title: 'Niveau',        key: 'niveau' },
  { title: 'Année scolaire',key: 'anneeScolaire' },
  { title: 'Actions',       key: 'actions', sortable: false },
]

function openCreate() {
  editingClasse.value = null
  dialogOpen.value = true
}
function openEdit(classe: Classe) {
  editingClasse.value = classe
  dialogOpen.value = true
}
</script>