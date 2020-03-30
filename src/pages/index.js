import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import ContactSection from "../components/contact-form"
import Social from "../components/social"
import Head from "../components/head"
import sections from "../components/data"

class homepage extends React.Component {
  state = {
    sections
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
