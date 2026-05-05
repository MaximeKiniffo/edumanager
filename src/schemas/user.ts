import { z } from 'zod'

export const RoleSchema = z.enum(['admin', 'professeur', 'eleve'])

export const UserSchema = z.object({
  id: z.string(),
  nom: z.string(),
  prenom: z.string(),
  email: z.string().email(),
  role: RoleSchema,
})

export const LoginCredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})