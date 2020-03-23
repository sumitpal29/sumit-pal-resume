import React from "react"
import { Helmet } from "react-helmet"

export default function head({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://www.sumitpal.in" />
      <meta name="description" content="Sumit Pal - resume - India based frontend web developer - available for hiring - nodejs developer" />
      <meta name="keywords" content="Sumit Pal, resume, frontend, web developer, nodejs developer, javascript" />
      <meta name="og:title" content="Sumit's resume" />
      <meta name="og:description" content="Sumit Pal, India based frontend web developer. Checkout my profile here." />
      <meta name="og:image" content="https://www.sumitpal.in/sumit-pal.jpg" />
      <meta name="og:url" content="http://www.sumitpal.in"></meta>
    </Helmet>
  )
}
