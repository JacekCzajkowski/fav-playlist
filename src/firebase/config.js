import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB47wisl44v49NZm8oIPhUsWjuVqmF9528",
  authDomain: "fav-playlist.firebaseapp.com",
  projectId: "fav-playlist",
  storageBucket: "fav-playlist.appspot.com",
  messagingSenderId: "715367471095",
  appId: "1:715367471095:web:409c5eaa015e2a96d5c0f2"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }