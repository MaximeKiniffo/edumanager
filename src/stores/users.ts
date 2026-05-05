import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/types'
import { UserSchema } from '@/schemas'
import { useEntityCrud } from './useEntityCrud'

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([])
  const { getById, add, update, remove } = useEntityCrud(users, UserSchema)

  return { users, getById, add, update, remove }
}, { persist: true })
