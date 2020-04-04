import React, { useEffect, useState } from "react"
import firebase from "../firebase/firebaseLoad"

function Component() {
  const [messages, setMessages] = useState([])
  const [status, setStatus] = useState("Authenticating")
  
  const handleMessageDelete = () => {
    // function to handle delete operation
  }

  useEffect(() => {
    const auth = firebase.auth
    const authentication = async () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      return await auth().signInWithPopup(provider)
    }
    !user &&
      authentication()
        .then(res => {
          if (res.user && res.user.uid === process.env.KEY_ADMIN) {
            const userDetails = {
              displayName: res.user.displayName,
              photoURL: res.user.displayName,
              email: res.user.email,
            }
            setUser(userDetails)
          } else {
            setStatus(`Only admin can access this page!!`)
          }
        })
        .catch(err => {
          setStatus(`${err}`)
        })
  }, [])

  const [user, setUser] = useState(null)
  // useeffect hook to use React life-cycle methods inside a functional component
  // [] -> this function willbe called onece
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("reachouts").get()
      // at this moment I have all the messages
      // update state with new data
      setMessages(data.docs.map(msg => msg.data()))
      setStatus(`Success Authentication`)
    }

    // call fetchData method to get the data
    user && fetchData()
  }, [user])

  return (
    <ul className="messages">
      {messages.length ? (
        <>
          {messages.map((msg, i) => (
            <li className="shadow" key={`data_${i}`}>
              <span onClick={handleMessageDelete} className="cross">
                <i className="icon_cross"></i>
              </span>
              <h3>{msg.name}</h3>
              <h5>{msg.email}</h5>
              <p>{msg.message}</p>
              <span>{msg.date}</span>
            </li>
          ))}
        </>
      ) : (
        <li className="shadow"><h3>{status}</h3></li>
      )}
    </ul>
  )
}

export default Component
