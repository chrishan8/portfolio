import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// set in nuxt.config.js
const config = process.env.firebaseConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default ({ app }, inject) => {
  inject('auth', firebase.auth())
  inject('authProvider', new firebase.auth.GoogleAuthProvider())
  inject('firestore', firebase.firestore())
}
//firestore.settings({timestampsInSnapshots: true});