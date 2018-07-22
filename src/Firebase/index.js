import firebase from 'firebase'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC-8hrlE0u5cDro8hICUlPldBykIf3aRIk',
  authDomain: 'richii-3047d.firebaseapp.com',
  databaseURL: 'https://richii-3047d.firebaseio.com',
  projectId: 'richii-3047d',
  storageBucket: 'richii-3047d.appspot.com',
  messagingSenderId: '548926932655'
})

const db = firebaseApp.firestore()

export default firebaseApp

export { db }
