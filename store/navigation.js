export const state = () => ({
  routes: {}
})

export const mutations = {
  PUT_ROUTE (state, route) {
    state.routes[route.id] = route;
    state.routes = Object.assign({}, state.routes);
  }
}

export const actions = {
  async getNavigation({ commit }) {
    const routes = await this.$firestore.collection('pages').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        const route = { id: change.doc.id, ...change.doc.data() }
        commit('PUT_ROUTE', route)
      })
    })
  }
}