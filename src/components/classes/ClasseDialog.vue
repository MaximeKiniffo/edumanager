<template>
  <v-dialog :model-value="open" max-width="500" @update:model-value="$emit('update:open', $event)">
    <v-card>
      <v-card-title>{{ props.classe ? 'Modifier la classe' : 'Nouvelle classe' }}</v-card-title>
      <v-card-text>
        <!-- v-form avec ref permet d'appeler .validate() depuis le script -->
        <v-form ref="formRef">
          <!-- Nom de la classe, obligatoire -->
          <v-text-field
            v-model="form.nom"
            label="Nom"
            variant="outlined"
            density="compact"
            class="mb-3"
            :rules="[rules.required]"
          />
          <!-- Niveau scolaire, choix parmi une liste fixe -->
          <v-select
            v-model="form.niveau"
            :items="niveaux"
            label="Niveau"
            variant="outlined"
            density="compact"
            class="mb-3"
            :rules="[rules.required]"
          />
          <!-- Année scolaire au format YYYY-YYYY -->
          <v-text-field
            v-model="form.anneeScolaire"
            label="Année scolaire"
            placeholder="2025-2026"
            variant="outlined"
            density="compact"
            :rules="[rules.required, rules.anneeScolaire]"
          />
        </v-form>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn @click="$emit('update:open', false)">Annuler</v-btn>
        <v-btn color="primary" @click="submit">Enregistrer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useClassesStore } from '@/stores/classes'
import type { Classe } from '@/types'

// Props reçues depuis ClassesView : état du dialog + classe à éditer (null = création)
const props = defineProps<{ open: boolean; classe: Classe | null }>()
// Permet de fermer le dialog depuis l'intérieur en émettant update:open
const emit = defineEmits(['update:open'])

// Accès au store pour créer ou modifier une classe
const store = useClassesStore()

// Référence sur le composant v-form pour déclencher la validation au submit
const formRef = ref()

// Liste fixe des niveaux scolaires proposés dans le v-select
const niveaux = ['6ème', '5ème', '4ème', '3ème', '2nde', '1ère', 'Terminale']

// Règles de validation réutilisables sur les champs du formulaire
const rules = {
  required: (v: string) => !!v || 'Ce champ est obligatoire',
  anneeScolaire: (v: string) => /^\d{4}-\d{4}$/.test(v) || 'Format attendu : 2025-2026',
}

// Objet réactif qui représente les valeurs du formulaire
const form = reactive({ nom: '', niveau: '', anneeScolaire: '' })

// Quand le dialog s'ouvre, on initialise le formulaire :
// - en mode édition : on copie les valeurs de la classe existante
// - en mode création : on remet les champs à vide
watch(() => props.open, (val) => {
  if (!val) return
  if (props.classe) {
    form.nom = props.classe.nom
    form.niveau = props.classe.niveau
    form.anneeScolaire = props.classe.anneeScolaire
  } else {
    form.nom = ''
    form.niveau = ''
    form.anneeScolaire = ''
  }
})

// Appelée au clic sur "Enregistrer" :
// 1. On valide le formulaire — si invalide, on s'arrête
// 2. Selon le mode, on appelle update() ou add() sur le store
// 3. On ferme le dialog
async function submit() {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  if (props.classe) {
    store.update({ id: props.classe.id, ...form })
  } else {
    store.add({ id: crypto.randomUUID(), ...form })
  }
  emit('update:open', false)
}
</script>
