import { z } from 'zod'
import { isoDateString } from './common'

export const TypeNoteSchema = z.enum(['devoir', 'controle', 'examen'])

export const NoteSchema = z.object({
  id: z.string(),
  eleveId: z.string(),
  matiereId: z.string(),
  professeurId: z.string(),
  valeur: z.number().min(0).max(20),
  commentaire: z.string(),
  date: isoDateString,
  type: TypeNoteSchema,
})
