export const state = () => ({
  data: {}
})

export const mutations = {
  PUT_PROJECT(state, { id, project }) {
    state.data[id] = project
  },
  PUT_PROJECTS(state, projects) {
    state.data = projects
  }
}

export const actions = {
  async getProject({ commit }, projectId) {
    const snapshot = await this.$firestore.collection('projects').doc(projectId).get()
    commit('PUT_PROJECT', { id: snapshot.id, project: snapshot.data() })
  },
  async getProjects({ commit }) {
    const snapshot = await this.$firestore.collection('projects').get()
    const projects = snapshot.docChanges().reduce((obj, change) => ({...obj, [change.doc.id]: change.doc.data()}), {})
    commit('PUT_PROJECTS', projects)
  }
}