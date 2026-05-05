import { z } from 'zod'
import { isoDateString } from './common'

export const EleveSchema = z.object({
  id: z.string(),
  nom: z.string(),
  prenom: z.string(),
  dateNaissance: isoDateString,
  classeId: z.string(),
  userId: z.string(),
})
