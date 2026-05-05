export type Jour = 'lundi' | 'mardi' | 'mercredi' | 'jeudi' | 'vendredi'

export interface Creneau {
  id: string
  jour: Jour
  heureDebut: string
  heureFin: string
  salle: string
  matiereId: string
  professeurId: string
  classeId: string
}
