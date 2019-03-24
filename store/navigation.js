export const state = () => ({
  menuIsActive: false,
  routes: {

  }
})

export const mutations = {
  TOGGLE_MOBILE_MENU(state) {
    state.menuIsActive = !state.menuIsActive;
  },
  PUT_ROUTE(state, routes) {
    state.routes = routes
  }
}

export const actions = {
  async getNavigation({ commit }) {
    try {
      const snapshot = await this.$firestore.collection('pages').get()
      const routes = snapshot.docChanges().reduce((obj, change) => ({...obj, [change.doc.id]: change.doc.data()}), {})
      commit('PUT_ROUTE', routes)
    }
    catch(e) {
      console.error(e)
    }
  }
}