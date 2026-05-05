import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Classe } from '@/types'
import { ClasseSchema } from '@/schemas'
import { useEntityCrud } from './useEntityCrud'

export const useClassesStore = defineStore('classes', () => {
  const classes = ref<Classe[]>([])
  const { getById, add, update, remove } = useEntityCrud(classes, ClasseSchema)

  return { classes, getById, add, update, remove }
}, { persist: true })
