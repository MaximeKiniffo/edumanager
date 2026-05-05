import { computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { ZodType } from 'zod'

export interface EntityCrud<T extends { id: string }> {
  getById: ComputedRef<(id: string) => T | undefined>
  add: (item: T) => boolean
  update: (item: T) => boolean
  remove: (id: string) => boolean
}

export function useEntityCrud<T extends { id: string }>(
  items: Ref<T[]>,
  schema?: ZodType<T>,
): EntityCrud<T> {
  const validate = (item: T): { success: true; data: T } | { success: false } => {
    if (!schema) return { success: true, data: { ...item } }
    const result = schema.safeParse(item)
    return result.success ? { success: true, data: result.data } : { success: false }
  }

  const getById = computed(() => (id: string) =>
    items.value.find((item) => item.id === id),
  )

  const add = (item: T): boolean => {
    const result = validate(item)
    if (!result.success) return false
    items.value.push(result.data)
    return true
  }

  const update = (item: T): boolean => {
    const index = items.value.findIndex((i) => i.id === item.id)
    if (index === -1) return false
    const result = validate(item)
    if (!result.success) return false
    items.value[index] = result.data
    return true
  }

  const remove = (id: string): boolean => {
    const index = items.value.findIndex((i) => i.id === id)
    if (index === -1) return false
    items.value.splice(index, 1)
    return true
  }

  return { getById, add, update, remove }
}
