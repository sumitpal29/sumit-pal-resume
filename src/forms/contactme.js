import React, { useState, useEffect } from "react"
import AuthLayout from "../components/authLayout"
import { useFirebase } from "../firebase/firebase-context"
import validator from "validator"

const useMessageHook = callback => {
  const _initialState = {
    name: "",
    email: "",
    message: "",
  }
  const [userMessage, setUserMessage] = useState(_initialState)
  const [updateForm, setUpdateForm] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    setErrorMsg("") 
    updateForm && setUpdateForm(false)
  }, [userMessage])

  const formSubmitHandler = e => {
    e.preventDefault()
    setUserMessage({ ...userMessage, ...{ date: Date() } })
    setUpdateForm(true)
  }
  // function to handle user inputs
  const handleInputChange = ob => {
    setUserMessage({ ...userMessage, ...ob })
  }

  // const validateEmail = mail => {
  //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   return re.test(String(mail).toLowerCase())
  // }

  const isValidForm = () => {
    let testResult = true

    if (userMessage.name.length < 2) {
      testResult = false
      setErrorMsg("Name length too short")
    } else if (!validator.isEmail(userMessage.email)) {
      testResult = false
      setErrorMsg("Invalid email id!!")
    } else if (userMessage.message.length < 2) {
      setErrorMsg(`Isn't the message is too short?`)
      testResult = false
    } else if (userMessage.message.length > 300) {
      setErrorMsg(`Please contain the message within 300 letters!!`)
      testResult = false
    }
    return testResult
  }

  useFirebase(
    firebase => {
      if (updateForm && isValidForm()) {
        console.log("called db update")
        const db = firebase.firestore()
        db.collection("reachouts")
          .add({ ...userMessage })
          .then(() => {
            setSuccessMsg(`Thanks! ${userMessage.name} for reaching out.`)
            setUserMessage(_initialState)
            callback && callback()
            setUpdateForm(false)
          })
          .catch(err => {
            console.error(`Error in adding data in database - ${err}`)
          })
      }
    },
    [updateForm]
  )

  return {
    formSubmitHandler,
    handleInputChange,
    userMessage,
    successMsg,
    errorMsg,
  }
}

const ContactMeForm = () => {
  const {
    userMessage,
    formSubmitHandler,
    handleInputChange,
    successMsg,
    errorMsg,
  } = useMessageHook()

  return (
    <div className="form">
      {successMsg.length ? (
        <div className="feedback-box">{successMsg}</div>
      ) : (
        <form
          className={`contact-form-wrapper ${errorMsg && "error"}`}
          onSubmit={formSubmitHandler}
        >
          <h4>Write a message for me</h4>
          <div className="form-group">
            <label className="active" htmlFor="person">
              Name
            </label>
            <input
              type="text"
              name="person"
              value={userMessage.name}
              onChange={e => {
                e.persist()
                handleInputChange({ name: e.target.value })
              }}
            />
          </div>
          <div className="form-group">
            <label className="active" htmlFor="Email">
              Email
            </label>
            <input
              type="text"
              name="Email"
              value={userMessage.email}
              onChange={e => {
                e.persist()
                handleInputChange({ email: e.target.value })
              }}
            />
          </div>
          <div className="form-group">
            <label className="active" htmlFor="message">
              Your message
            </label>
            <textarea
              name="message"
              value={userMessage.message}
              onChange={e => {
                e.persist()
                handleInputChange({ message: e.target.value })
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary__orange">
            Contact Me
          </button>
          {errorMsg && <span className="error-msg">{errorMsg}</span>}
        </form>
      )}
    </div>
  )
}

export default () => (
  <AuthLayout>
    <ContactMeForm />
  </AuthLayout>
)
