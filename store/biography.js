export const state = () => ({
  longSummary: '',
  shortSummary: '',
  profileImgSrc: ''
})

export const mutations = {
  PUT_BIO(state, bio) {
    state.longSummary = bio['longSummary']
    state.shortSummary = bio['shortSummary']
    state.profileImgSrc = bio['profileImgSrc']
  }
}

export const actions = {
  async getBio({ commit }) {
    try {
      const bioDoc = await this.$firestore.collection('biography').doc('chrishan').get();
      if (bioDoc.exists) {
        commit('PUT_BIO', bioDoc.data())
      }
    }
    catch(e) {
      console.error(e)
    }
  }
}