import React, { useState } from "react"

import Layout from "../components/authLayout"
import { useFirebase } from "../firebase/firebase-context"

const AllMessages = () => {
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
    <ul>
      Hello{" "}
      {user.length
        ? user.map((data, key) => (
            <li key={key}>{`name: ${data.name}, email: ${data.email}, comment: ${data.message}`}</li>
          ))
        : "there"}
    </ul>
  )
}

export default () => (
  <Layout>
    <AllMessages />
  </Layout>
)
