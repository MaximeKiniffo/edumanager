import type { User, Role } from '@/types'

export const MOCK_USERS: Record<Role, User> = {
  admin: {
    id: '1',
    nom: 'Admin',
    prenom: 'Super',
    email: 'admin@edu.fr',
    role: 'admin',
  },
  professeur: {
    id: '2',
    nom: 'Prof',
    prenom: 'Test',
    email: 'prof@edu.fr',
    role: 'professeur',
  },
  eleve: {
    id: '3',
    nom: 'Eleve',
    prenom: 'Test',
    email: 'eleve@edu.fr',
    role: 'eleve',
  },
}
