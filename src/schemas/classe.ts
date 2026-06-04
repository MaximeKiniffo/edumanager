import { z } from 'zod'
import { isConsecutiveSchoolYear } from '@/utils/schoolYear'

export const ClasseSchema = z.object({
  id: z.string(),
  nom: z.string(),
  niveau: z.string(),
  anneeScolaire: z.string().refine(isConsecutiveSchoolYear),
})
