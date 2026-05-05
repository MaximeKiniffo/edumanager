import { z } from 'zod'

export const isoDateString = z.string().regex(
  /^\d{4}-\d{2}-\d{2}(T[\d:.Z+-]+)?$/,
  'Format ISO 8601 attendu',
)

export const heureHHMM = z.string().regex(/^\d{2}:\d{2}$/, 'Format HH:MM attendu')
