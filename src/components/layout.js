import React from "react"
import Footer from "./footer"
import Header from "./header"
import '../style/index.scss'

const layout = (props) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default layout
