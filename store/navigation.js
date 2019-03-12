export const state = () => ({
  routes: []
})

export const mutations = {
  PUT_ROUTE(state, routes) {
    state.routes = routes
  }
}

export const actions = {
  async getNavigation({ commit }) {
    try {
      const routesSnapshot = await this.$firestore.collection('pages').get()
      const routes = routesSnapshot.docChanges().map(change => {
        return { id: change.doc.id, ...change.doc.data() }
      })
      commit('PUT_ROUTE', routes)
    }
    catch(e) {
      console.error(e)
    }
  }
}