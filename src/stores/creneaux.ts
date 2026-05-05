import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Creneau } from '@/types'
import { CreneauSchema } from '@/schemas'
import { useEntityCrud } from './useEntityCrud'

export const useCreneauxStore = defineStore('creneaux', () => {
  const creneaux = ref<Creneau[]>([])
  const { getById, add, update, remove } = useEntityCrud(creneaux, CreneauSchema)

  const getByClasse = computed(() => (classeId: string) =>
    creneaux.value.filter(c => c.classeId === classeId),
  )

  const getByProfesseur = computed(() => (professeurId: string) =>
    creneaux.value.filter(c => c.professeurId === professeurId),
  )

  return { creneaux, getById, getByClasse, getByProfesseur, add, update, remove }
}, { persist: true })
