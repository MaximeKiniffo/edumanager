import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Cours } from '@/types'
import { CoursSchema } from '@/schemas'
import { useEntityCrud } from './useEntityCrud'

export const useCoursStore = defineStore('cours', () => {
  const cours = ref<Cours[]>([])
  const { getById, add, update, remove } = useEntityCrud(cours, CoursSchema)

  const getByClasse = computed(() => (classeId: string) =>
    cours.value.filter(c => c.classeId === classeId),
  )

  const getByProfesseur = computed(() => (professeurId: string) =>
    cours.value.filter(c => c.professeurId === professeurId),
  )

  return { cours, getById, getByClasse, getByProfesseur, add, update, remove }
}, { persist: true })
