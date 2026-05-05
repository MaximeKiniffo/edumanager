import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'
import type { User, Role } from '@/types'
import { LoginCredentialsSchema } from '@/schemas'
import { MOCK_CREDENTIALS, MOCK_USERS } from '@/data/mock'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const _currentUser = ref<User | null>(MOCK_USERS.admin)
    const currentUser = readonly(_currentUser)

    const isAuthenticated = computed((): boolean => !!_currentUser.value)
    const role = computed((): Role | null => _currentUser.value?.role ?? null)

    const login = (credentials: unknown): boolean => {
      const result = LoginCredentialsSchema.safeParse(credentials)
      if (!result.success) return false
      const match = MOCK_CREDENTIALS.find(
        (m) => m.email === result.data.email && m.password === result.data.password,
      )
      if (!match) return false
      _currentUser.value = MOCK_USERS[match.user.role]
      return true
    }

    const loginAs = (role: Role): void => {
      _currentUser.value = MOCK_USERS[role]
    }

    const logout = (): void => {
      _currentUser.value = MOCK_USERS.admin
    }

    return { currentUser, isAuthenticated, role, login, loginAs, logout }
  },
  { persist: true },
)
