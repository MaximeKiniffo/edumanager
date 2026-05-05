import { z } from 'zod'
import { isoDateString } from './common'

export const CoursSchema = z.object({
  id: z.string(),
  titre: z.string(),
  description: z.string(),
  matiereId: z.string(),
  professeurId: z.string(),
  classeId: z.string(),
  dateCreation: isoDateString,
})
