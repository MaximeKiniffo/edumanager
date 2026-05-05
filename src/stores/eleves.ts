import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Eleve } from '@/types'
import { EleveSchema } from '@/schemas'
import { useEntityCrud } from './useEntityCrud'

export const useElevesStore = defineStore('eleves', () => {
  const eleves = ref<Eleve[]>([])
  const { getById, add, update, remove } = useEntityCrud(eleves, EleveSchema)

  const getByClasse = computed(() => (classeId: string) =>
    eleves.value.filter(e => e.classeId === classeId),
  )

  return { eleves, getById, getByClasse, add, update, remove }
}, { persist: true })
