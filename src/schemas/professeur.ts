import { z } from 'zod'

export const ProfesseurSchema = z.object({
  id: z.string(),
  nom: z.string(),
  prenom: z.string(),
  matiereIds: z.array(z.string()),
  userId: z.string(),
})