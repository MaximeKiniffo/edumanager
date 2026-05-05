import type { z } from 'zod'
import type { CoursSchema } from '@/schemas'
import type { Matiere } from './matiere'
import type { Professeur } from './professeur'
import type { Classe } from './classe'

export type Cours = z.infer<typeof CoursSchema>

export interface CoursWithDetails extends Cours {
  matiere: Matiere
  professeur: Professeur
  classe: Classe
}
