import React from "react"

export const social = () => {
  return (
    <section className="social light-white">
      <div className="container content">
        <div className="content-image">
          <img src="../../social.svg" alt="Sumit's social life" />
        </div>
        <div className="content-box">
            <h2>Social</h2>
            <p><b>Cinematography</b> and <b>Photography</b> are one of my hobbies, so definitely checkout my creative contents over here. </p>
            <div className="icon-container">
                <a rel="noopener noreferrer" href="https://www.youtube.com/c/sumitpal" target="_blank"><i className="icon_youtube"></i></a>
                <a rel="noopener noreferrer" href="https://www.instagram.com/sumitpal.29/?hl=en" target="_blank"><i className="icon_instagram"></i></a>
            </div>
            
            <p>Also, you can find me on below places</p>
            <div className="icon-container">
                <a rel="noopener noreferrer" href="https://www.facebook.com/sumitwithyou" target="_blank"><i className="icon_facebook"></i></a>
                <a rel="noopener noreferrer" href="https://twitter.com/sumitpal29" target="_blank"><i className="icon_twitter"></i></a>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/sumit-pal-3b520183/" target="_blank"><i className="icon_linkedin"></i></a>
                <a rel="noopener noreferrer" href="https://github.com/sumitpal29" target="_blank"><i className="icon_github"></i></a>
            </div>
            <span className="icon-inline city"><i className="icon_location"></i>Bengaluru, Karnataka, India</span>
        </div>
      </div>
    </section>
  )
}

export default social
