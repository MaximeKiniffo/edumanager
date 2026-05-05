import { z } from 'zod'

export const MatiereSchema = z.object({
  id: z.string(),
  nom: z.string(),
  couleur: z.string(),
})