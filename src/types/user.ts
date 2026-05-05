export type Role = 'admin' | 'professeur' | 'eleve'

export interface User {
  id: string
  nom: string
  prenom: string
  email: string
  password: string
  role: Role
}
