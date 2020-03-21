import React, { useState } from "react"

const ContactMeForm = () => {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
  })

  return (
    <form className="contact-form-wrapper" action="/new-contact-request">
      <h4>Write a message for me</h4>
      <div className="form-group">
        <label className="active" htmlFor="person">
          Name
        </label>
        <input
          type="text"
          name="person"
          value={userMessage.name}
          onChange={e =>
            setUserMessage({ ...userMessage, name: e.target.value })
          }
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
          onChange={e =>
            setUserMessage({ ...userMessage, email: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label className="active" htmlFor="message">
          Your message
        </label>
        <textarea
          name="message"
          value={userMessage.message}
          onChange={e =>
            setUserMessage({ ...userMessage, message: e.target.value })
          }
        />
      </div>
      <button type="submit" className="btn btn-primary__orange">
        Contact Me
      </button>
    </form>
  )
}

export default ContactMeForm
