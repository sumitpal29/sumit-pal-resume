import React, { useState } from "react"

import Layout from "../components/authLayout"
import { useFirebase } from "../firebase/firebase-context"

const LandingPage = () => {
  const [user, setUser] = useState([])

  useFirebase(firebase => {
    const db = firebase.firestore()
    db.collection("reachouts")
      .get()
      .then(res => {
        setUser(res.docs.map(msg => msg.data()))
      })
  }, [])

  return (
    <p>
      Hello{" "}
      {user.length
        ? user.map(data => (
            <p>{`name: ${data.name}, email: ${data.email}, comment: ${data.message}`}</p>
          ))
        : "there"}
    </p>
  )
}

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
)
