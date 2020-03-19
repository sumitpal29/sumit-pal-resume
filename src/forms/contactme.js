import React from "react"

class ContactMeForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  render() {
    return (
      <form className="contact-form-wrapper" action="/new-contact-request">
        <h4>Write a message for me</h4>
        <div className="form-group">
          <label className="active" htmlFor="person">
            Name
          </label>
          <input type="text" name="person" />
        </div>
        <div className="form-group">
          <label className="active" htmlFor="Email">
            Email
          </label>
          <input type="text" name="Email" />
        </div>
        <div className="form-group">
          <label className="active" htmlFor="message">
            Your message
          </label>
          <textarea name="message" />
        </div>
        <button type="submit" className="btn btn-primary__orange">
          Contact Me
        </button>
      </form>
    )
  }
}

export default ContactMeForm
