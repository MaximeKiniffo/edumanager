export type TypeNote = 'devoir' | 'controle' | 'examen'

export interface Note {
  id: string
  eleveId: string
  matiereId: string
  professeurId: string
  valeur: number
  commentaire: string
  date: string
  type: TypeNote
}
