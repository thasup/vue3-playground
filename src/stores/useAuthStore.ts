import type { LoginRequest } from '@/types/auth'

interface UserStore {
  username: string | null
  isLoggedIn: boolean
  isLoading: boolean
  errorMessage: string
}

export const useAuthStore = defineStore('auth', {

  state: (): UserStore => ({
    username: getLocalStorage(LOCAL_STORAGE_ITEMS.USERNAME),
    isLoggedIn: !!getLocalStorage(LOCAL_STORAGE_ITEMS.USERNAME),
    isLoading: false,
    errorMessage: '',
  }),

  actions: {
    async login(payload: LoginRequest) {
      this.errorMessage = ''

      // Login logic here
      if (payload.username === 'admin' && payload.password === '1234') {
        this.setUser(payload.username)
      }
      else {
        this.errorMessage = 'Username or Password is not correct'
      }
    },

    async logout() {
      this.removeUser()
    },

    setUser(username: string) {
      setLocalStorage(LOCAL_STORAGE_ITEMS.USERNAME, username)
      this.isLoggedIn = true
      this.isLoading = false
      this.username = username
    },

    removeUser() {
      removeLocalStorage(LOCAL_STORAGE_ITEMS.USERNAME)
      this.isLoggedIn = false
      this.username = null
    },
  },
})
