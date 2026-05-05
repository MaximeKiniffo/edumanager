import type { z } from 'zod'
import type { RoleSchema, UserSchema, LoginCredentialsSchema } from '@/schemas'

export type Role = z.infer<typeof RoleSchema>
export type User = z.infer<typeof UserSchema>
export type LoginCredentials = z.infer<typeof LoginCredentialsSchema>
