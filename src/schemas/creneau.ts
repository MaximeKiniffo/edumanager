import { z } from 'zod'
import { heureHHMM } from './common'

export const JourSchema = z.enum(['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'])

export const CreneauSchema = z.object({
  id: z.string(),
  jour: JourSchema,
  heureDebut: heureHHMM,
  heureFin: heureHHMM,
  salle: z.string(),
  matiereId: z.string(),
  professeurId: z.string(),
  classeId: z.string(),
})
