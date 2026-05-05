import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Note } from '@/types'
import { NoteSchema } from '@/schemas'
import { useEntityCrud } from './useEntityCrud'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([])
  const { getById, add, update, remove } = useEntityCrud(notes, NoteSchema)

  const getByEleve = computed(() => (eleveId: string) =>
    notes.value.filter(n => n.eleveId === eleveId),
  )

  const getByEleveAndMatiere = computed(() => (eleveId: string, matiereId: string) =>
    notes.value.filter(n => n.eleveId === eleveId && n.matiereId === matiereId),
  )

  return { notes, getById, getByEleve, getByEleveAndMatiere, add, update, remove }
}, { persist: true })
