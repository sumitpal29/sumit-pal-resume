import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import { ParallaxProvider } from "react-scroll-parallax"

class homepage extends React.Component {
  state = {
    sections: [
      {
        h2: "Skills",
        list: [
          "Build experiences using modern best practices for performance, accessibility and browser compatibility.",
          "Familiar with JavaScript preprocessor tools like Gulp, Webpack",
          "Fluency in CSS(SASS/SCSS) architecture writing reusable, scalable and maintainable code",
          "Knowledge in responsive frameworks like Bootstrap, Ant",
          "Knowledge in Content Management Systems such as Contentful.",
          "Experience working with version control services such as Bitbucket, Git",
          "Strong attention to detail – ability to execute designs at the pixel level",
          "Time management: ability to multi-task, prioritise workflow, and be flexible with changing priorities",
        ],
        imageName: "percentages.svg",
      },
      {
        h2: "Experience",
        sections: [
          {
            h3: "FusionCharts",
            sections: [
              {
                h4: "Assistant Project Manager | June 2019 - Present",
              },
              {
                h4: "Software Engineer | July 2016 - May 2019",
              },
            ],
          },
        ],
        imageName: "experience.svg"
      },
    ],
  }

  getSections() {
    return this.state.sections.map((section, i) => {
      return <ParallaxProvider><Section sectionData={section} classData={i%2 && 'light-white'}/></ParallaxProvider>
    })
  }

  render() {
    this.getSections()
    return (
      <Layout>
        {this.getSections()}
      </Layout>
    )
  }
}

export default homepage
