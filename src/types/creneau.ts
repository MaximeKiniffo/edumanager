import type { z } from 'zod'
import type { JourSchema, CreneauSchema } from '@/schemas'
import type { Matiere } from './matiere'
import type { Professeur } from './professeur'
import type { Classe } from './classe'

export type Jour = z.infer<typeof JourSchema>
export type Creneau = z.infer<typeof CreneauSchema>

export interface CreneauWithDetails extends Creneau {
  matiere: Matiere
  professeur: Professeur
  classe: Classe
}
