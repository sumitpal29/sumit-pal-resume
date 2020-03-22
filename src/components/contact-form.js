import React from "react"
import ContactForm from "../forms/contactme"

const contactFormSection = () => {
  
  return (
    <section id="contact" className="contact-me-section ">
      <div className="form-conatiner">
        <div className="container">
          <p className="container-message">
            I am always excited to work on some awesome projects, message me and
            let's discuss over coffee.
          </p>
          <ContactForm />
          <img
            className="contact-form-svg"
            src="../../contact.svg"
            alt="contact sumit for hiring"
          />
        </div>
      </div>
    </section>
  )
}

export default contactFormSection
