import { defineStore } from 'pinia'

interface SettingsState {
  isLoading: boolean
}

const settingsDefaultState: SettingsState = {
  isLoading: false
}

export const useSettingsStore = defineStore('settings', {
  state: (): SettingsState => ({
    ...settingsDefaultState
  }),

  actions: {
    setLoading(value: boolean) {
      this.isLoading = value
    },

    reset() {
      Object.assign(this, settingsDefaultState)
    }
  },

  getters: {
    isAppLoading: (state): boolean => state.isLoading
  }
})
