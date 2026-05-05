import type { z } from 'zod'
import type { EleveSchema } from '@/schemas'
import type { Classe } from './classe'

export type Eleve = z.infer<typeof EleveSchema>

export interface EleveWithDetails extends Eleve {
  classe: Classe
}
