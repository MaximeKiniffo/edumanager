import type { z } from 'zod'
import type { ClasseSchema } from '@/schemas'

export type Classe = z.infer<typeof ClasseSchema>
