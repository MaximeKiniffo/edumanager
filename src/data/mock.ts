import type { User, LoginCredentials } from '@/types'

export const MOCK_CREDENTIALS: Array<LoginCredentials & { user: User }> = [
  {
    email: 'admin@edu.fr',
    password: 'admin123',
    user: { id: '1', nom: 'Admin', prenom: 'Super', email: 'admin@edu.fr', role: 'admin' },
  },
]
