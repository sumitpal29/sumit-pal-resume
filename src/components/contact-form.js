import React from "react"
import ContactForm from "../forms/contactme"

const contactFormSection = () => {
  
  return (
    <section id="contact" className="contact-me-section ">
      <div className="form-conatiner">
        <div className="container">
          <p className="container-message">
            I love a good chat about all some awesome projects, products and innovations. 
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
