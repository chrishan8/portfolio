export const state = () => ({
  data: {}
})

export const mutations = {
  PUT_PROJECTS(state, projects) {
    state.data = projects
  }
}

export const actions = {
  async getProjects({ commit }) {
    const snapshot = await this.$firestore.collection('projects').get()
    const projects = snapshot.docChanges().reduce((obj, change) => ({...obj, [change.doc.id]: change.doc.data()}), {})
    commit('PUT_PROJECTS', projects)
  }
}