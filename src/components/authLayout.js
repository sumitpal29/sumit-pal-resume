import React from "react"
import FirebaseContext from "../firebase/firebase-context"

function Index({ children }) {
  const [firebase, setFirebase] = React.useState()

  React.useEffect(() => {
    if (!firebase && typeof window !== "undefined") {
      
      const app = import("firebase/app")
      const database = import("firebase/database")
      const firestore = import("firebase/firestore")
      const auth = import("firebase/auth")

      Promise.all([app, database, firestore, auth]).then(values => {
        const firebaseInstance = values[0]
        if (!firebaseInstance.apps.length) {
          firebaseInstance.initializeApp({
            apiKey: process.env.GATSBY_API_KEY,
            authDomain: process.env.GATSBY_AUTH_DOMAIN,
            databaseURL: process.env.GATSBY_DATABASE_URL,
            projectId: process.env.GATSBY_PROJECT_ID,
            storageBucket: process.env.GATSBY_STORAGE_BUCKET,
            messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
            appId: process.env.GATSBY_APPID,
          })
        }

        setFirebase(firebaseInstance)
      })
    }
  }, [])

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default Index
