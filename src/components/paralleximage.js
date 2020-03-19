import React from "react"
// import { Parallax } from "react-scroll-parallax"

class ParallaxImage extends React.Component {
  imageUrl = this.props.imageName || `percentages.svg`

  render() {
    return <img src={`../../${this.imageUrl}`} alt={this.props.imageAlt} />
  }
}

/* <Parallax className="parallex-image-class" x={[0, 20]} tagOuter="figure">
                <img src={`../../${this.imageUrl}`} alt={this.props.imageAlt} />
            </Parallax> */

export default ParallaxImage
