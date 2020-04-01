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

  const handleMessageDelete = () => {
    alert('a')
  }

  return (
    <ul className="messages">
      {user.length
        ? user.map((data, key) => (
            <li className="shadow" key={`data_${key}`}>
              <span onClick={handleMessageDelete} className="cross">
                <i className="icon_cross"></i>
              </span>
              <h3>{data.name}</h3>
              <h5>{data.email}</h5>
              <p>{data.message}</p>
              <span>{data.date}</span>
            </li>
          ))
        : "No Messages Yet!!"}
    </ul>
  )
}

export default () => (
  <Layout>
    <AllMessages />
  </Layout>
)
