import { computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { ZodType } from 'zod'

export interface EntityCrud<T extends { id: string }> {
  getById: ComputedRef<(id: string) => T | undefined>
  add: (item: T) => void
  update: (item: T) => boolean
  remove: (id: string) => boolean
}

export function useEntityCrud<T extends { id: string }>(
  items: Ref<T[]>,
  schema?: ZodType<T>,
): EntityCrud<T> {
  const validate = (item: T): T => (schema ? schema.parse(item) : { ...item })

  const getById = computed(() => (id: string) =>
    items.value.find((item) => item.id === id),
  )

  const add = (item: T): void => {
    items.value.push(validate(item))
  }

  const update = (item: T): boolean => {
    const index = items.value.findIndex((i) => i.id === item.id)
    if (index === -1) return false
    items.value[index] = validate(item)
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
