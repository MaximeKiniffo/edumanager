import type { User, LoginCredentials, Role } from '@/types'

export const MOCK_CREDENTIALS: Array<LoginCredentials & { user: User }> = [
  {
    email: 'admin@edu.fr',
    password: 'admin123',
    user: { id: '1', nom: 'Admin', prenom: 'Super', email: 'admin@edu.fr', role: 'admin' },
  },
]

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
