import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Matiere } from '@/types'
import { MatiereSchema } from '@/schemas'
import { useEntityCrud } from './useEntityCrud'

export const useMatieresStore = defineStore('matieres', () => {
  const matieres = ref<Matiere[]>([])
  const { getById, add, update, remove } = useEntityCrud(matieres, MatiereSchema)

  return { matieres, getById, add, update, remove }
}, { persist: true })
