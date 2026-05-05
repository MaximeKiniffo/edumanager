import type { z } from 'zod'
import type { ProfesseurSchema } from '@/schemas'

export type Professeur = z.infer<typeof ProfesseurSchema>
