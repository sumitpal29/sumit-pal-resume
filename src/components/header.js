import React from "react"

const header = () => {
  // returns some jsx code which is going to display in the homepage
  return (
    <header className="header-container">
      <div className="header card">
        <div className="card-header"></div>
        <div className="card-body">
          <div className="card-image"></div>
          <div className="card-content">
            <h1>
              <span className="text-name">Sumit</span>
              <span className="text-name">Pal</span>
              <span className="text-muted">Frontend developer</span>
            </h1>
          </div>
        </div>
        <nav className="card-footer">
            <ul>
                <li>Experience</li>
                <li>Skills</li>
                <li>Education</li>
                <li>Social</li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default header
