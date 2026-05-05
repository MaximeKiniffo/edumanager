import type { z } from 'zod'
import type { MatiereSchema } from '@/schemas'

export type Matiere = z.infer<typeof MatiereSchema>
