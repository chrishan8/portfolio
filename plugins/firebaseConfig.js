import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// set in nuxt.config.js
const config = process.env.firebaseConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default ({ app }, inject) => {
  inject('auth', firebase.auth())
  inject('authProvider', new firebase.auth.GoogleAuthProvider())
  inject('firestore', firebase.firestore())
  inject('storage', firebase.storage())
}
//firestore.settings({timestampsInSnapshots: true});