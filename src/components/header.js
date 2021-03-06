import React from "react"
// import headeStyles from '../style/header.module.scss'
import Sticky from "react-stickynode"

const handleStateChange = status => {
  if (status.status === Sticky.STATUS_FIXED) {
    console.log("the component is sticky")
  }
}

const header = () => {
  // returns some jsx code which is going to display in the homepage
  return (
    <header className="header">
      <div className=" container">
        <div className="card-header "></div>
        <div className="card-body">
          <div className="card-body__image round">
            <img src={`../../sumit-pal.jpg`} alt="Sumit Pal - web developer" />
          </div>
          <div className="card-body__content">
            <h1>
              <span className="text-name">Sumit</span>
              <span className="text-name m-b-4">Pal</span>
              <span className="text-muted">Frontend developer</span>
            </h1>
          </div>
        </div>
      </div>
      <Sticky
        onStateChange={handleStateChange}
        activeClass="show-name"
        innerZ="99"
      >
        <nav className="card-footer">
          <div className="container">
            <span>Sumit Pal</span>
            <ul>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>

              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </Sticky>
    </header>
  )
}

export default header
