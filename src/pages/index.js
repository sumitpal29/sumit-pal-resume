import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import ContactSection from "../components/contact-form"
import Social from "../components/social"
import Head from "../components/head"

class homepage extends React.Component {
  state = {
    sections: [
      {
        h2: "Skills",
        list: [
          "Expertise in JavaScript",
          "Familiar with Frontend frameworks like Vue, React",
          "Familiar with JavaScript preprocessor tools like Gulp, Webpack",
          "Fluency in CSS(SASS/SCSS) architecture writing reusable, scalable and maintainable code",
          "Knowledge in responsive frameworks like Bootstrap, Ant",
          "Knowledge in Content Management Systems such as Contentful.",
          "Experience working with version control services such as Bitbucket, Git",
          "BackEnd development with NodeJS",
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
              {
                h3: "Contributions",
                list: [
                  "Build FusionCharts design system",
                  "Frontend architechture for FusionCharts Web applications",
                  "FusionStore as chart store",
                  "Implemented visual regression on web for consistent and pixel perfect deployments",
                  "Page speed, SEO improvements - by implementing SSR",
                  "Contributed in the core product of FusionCharts",
                ],
              },
            ],
          },
        ],
        imageName: "experience.svg",
      },
      {
        h2: "Education",
        sections: [
          {
            h3: "Jalpaiguri Government Engineering College",
            h5: "2012 - 2016",
            h4: "B-Tech in Information Technology",
          },
          {
            h3: "Purandarpur High School",
            h5: "2003-2011",
            sections: [
              {
                h4: "Secondary | Board - WBBSE",
              },
              {
                h4: "Higher Secondary | Board - WBCHSE",
              },
            ],
          },
        ],
        imageName: "certificate.svg",
      },
      {
        h2: "Hire me. Why?",
        list: [
          "Have more than 3 years’ of experience in a professional development environment.",
          "Have planned and implemented entire projects from design to launch.",
          "Worked on collaborative projects with designers, developers and Product managers.",
          "Build experiences using modern best practices for performance, accessibility and browser compatibility.",
          "Strong attention to detail – ability to execute designs at the pixel level",
          "Time management: ability to multi-task, prioritise workflow, and be flexible with changing priorities",
        ],
        button: {
          text: "Download Resume",
          action: "downloadResume",
          type: "btn-primary__orange",
        },
        imageName: "interview.svg",
      },
    ],
  }

  getSections() {
    return this.state.sections.map((section, i) => {
      // return <ParallaxProvider><Section sectionData={section} classData={i%2 && 'light-white'}/></ParallaxProvider>
      return (
        <Section
          key={`section_${i}`}
          sectionData={section}
          classData={i % 2 && "light-white"}
        />
      )
    })
  }

  render() {
    this.getSections()
    return (
      <Layout>
        <Head title="Sumit Pal | Profile | Resume" />
        {this.getSections()}
        <ContactSection />
        <Social />
      </Layout>
    )
  }
}

export default homepage
