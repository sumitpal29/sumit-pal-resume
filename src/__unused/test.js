import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import firebase from "../firebase/firebaseLoad"

function Component() {
  const [messages, setMessages] = useState([])

  // useeffect hook to use React life-cycle methods inside a functional component
  // [] -> this function willbe called onece
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("reachouts").get()
      // at this moment I have all the messages
      // update state with new data
      setMessages(data.docs.map(msg => msg.data()))
    }
    // call fetchData method to get the data
    fetchData()
  }, [])

  return (
    <Layout>
      {messages.length ? (
        <ul>
          
          {messages.map((msg, i) => (
            <li key={`msg_${i}`}>{msg.name}</li>
          ))}{" "}
        </ul>
      ) : (
        "Loading..."
      )}
    </Layout>
  )
}

export default Component
