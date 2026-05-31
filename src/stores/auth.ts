import { defineStore } from 'pinia'
import { ref, computed, readonly, watch } from 'vue'
import type { User, Role } from '@/types'
import { LoginCredentialsSchema, UserSchema } from '@/schemas'
import { MOCK_USERS } from '@/data/mock'

const AUTH_STORAGE_KEY = 'edumanager:auth:currentUser'
const DEMO_ADMIN_EMAIL = import.meta.env.VITE_DEMO_ADMIN_EMAIL ?? MOCK_USERS.admin.email
const DEMO_ADMIN_PASSWORD = import.meta.env.VITE_DEMO_ADMIN_PASSWORD

const copyUser = (user: User): User => ({ ...user })

const readPersistedUser = (): User | null => {
  if (typeof window === 'undefined') return null
  const rawUser = window.localStorage.getItem(AUTH_STORAGE_KEY)
  if (!rawUser) return null

  try {
    const result = UserSchema.safeParse(JSON.parse(rawUser))
    return result.success ? copyUser(result.data) : null
  } catch {
    return null
  }
}

const persistUser = (user: User | null): void => {
  if (typeof window === 'undefined') return
  if (!user) {
    window.localStorage.removeItem(AUTH_STORAGE_KEY)
    return
  }

  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(copyUser(user)))
}

export const useAuthStore = defineStore(
  'auth',
  () => {
    const _currentUser = ref<User | null>(readPersistedUser() ?? copyUser(MOCK_USERS.admin))
    const currentUser = readonly(_currentUser)

    const isAuthenticated = computed((): boolean => !!_currentUser.value)
    const role = computed((): Role | null => _currentUser.value?.role ?? null)

    watch(_currentUser, persistUser, { deep: true })

    const login = (credentials: unknown): boolean => {
      const result = LoginCredentialsSchema.safeParse(credentials)
      if (!result.success) return false
      if (!DEMO_ADMIN_PASSWORD) return false
      if (result.data.email !== DEMO_ADMIN_EMAIL || result.data.password !== DEMO_ADMIN_PASSWORD) {
        return false
      }
      _currentUser.value = copyUser(MOCK_USERS.admin)
      return true
    }

    const loginAs = (role: Role): void => {
      _currentUser.value = copyUser(MOCK_USERS[role])
    }

    const logout = (): void => {
      _currentUser.value = copyUser(MOCK_USERS.admin)
    }

    return { currentUser, isAuthenticated, role, login, loginAs, logout }
  },
)
