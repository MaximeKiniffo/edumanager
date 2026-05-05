import type { z } from 'zod'
import type { TypeNoteSchema, NoteSchema } from '@/schemas'
import type { Eleve } from './eleve'
import type { Matiere } from './matiere'
import type { Professeur } from './professeur'

export type TypeNote = z.infer<typeof TypeNoteSchema>
export type Note = z.infer<typeof NoteSchema>

export interface NoteWithDetails extends Note {
  eleve: Eleve
  matiere: Matiere
  professeur: Professeur
}
