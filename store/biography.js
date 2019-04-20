export const state = () => ({
  chrishan: {
    aboutSplash: '',
    address1: '',
    address2: '',
    city: '',
    homeSplash: '',
    phone: '',
    profileImageUrl: '',
    profileImageBannerUrl: '',
    profile: '',
    state: '',
    title: '',
    zipCode: ''
  }
})

export const mutations = {
  PUT_BIO(state, bio) {
    state.chrishan = { ...bio }
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