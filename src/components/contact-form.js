import React from "react"
import ContactForm from "../forms/contactme"

const contactFormSection = () => {
  
  return (
    <section id="contact" className="contact-me-section ">
      <div className="form-conatiner">
        <div className="container">
          <p className="container-message">
            I'll love to have a good chat about some awesome projects, collabs and discussions on products and innovations. 
            <br/>
            Call, email, come round for a coffee, or just stalk me on social media. Let's talk!
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
