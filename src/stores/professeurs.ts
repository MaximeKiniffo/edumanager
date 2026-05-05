import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Professeur } from '@/types'
import { ProfesseurSchema } from '@/schemas'
import { useEntityCrud } from './useEntityCrud'

export const useProfesseursStore = defineStore('professeurs', () => {
  const professeurs = ref<Professeur[]>([])
  const { getById, add, update, remove } = useEntityCrud(professeurs, ProfesseurSchema)

  const getByMatiere = computed(() => (matiereId: string) =>
    professeurs.value.filter(p => p.matiereIds.includes(matiereId)),
  )

  return { professeurs, getById, getByMatiere, add, update, remove }
}, { persist: true })
