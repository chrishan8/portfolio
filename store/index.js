export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('navigation/getNavigation')
  }
}