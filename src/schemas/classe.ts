import { z } from 'zod'

export const ClasseSchema = z.object({
  id: z.string(),
  nom: z.string(),
  niveau: z.string(),
  anneeScolaire: z.string(),
})