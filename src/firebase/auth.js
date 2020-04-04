import { auth, firebase } from "../firebase/firebaseLoad"

export default {
  signinWithGoogle: function() {
    console.log("called")
    debugger
    const provider = new firebase.auth.GoogleAuthProvider()
    console.log("called")
    return auth().signInWithPopup(provider)
  },
}
