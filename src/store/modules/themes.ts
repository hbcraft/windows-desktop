import { Module } from 'vuex'

const themes: Module<ThemesState, RootState> = {
  namespaced: true,
  state: () => ({
    current: 'dark',
    dark: {
      background: 'desktop-background.jpg',
      themeColor: '#000'
    }
  }),
  getters: {
    'names' (state) {
      return Object.keys(state)
    }
  }
}

export default themes
