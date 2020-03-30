import React from "react"
import { Helmet } from "react-helmet"

export default function head({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" ></meta>
      <title>{title}</title>
      <meta
        name="description"
        content="Sumit Pal - resume - India based frontend web developer - available for hiring - nodejs developer"
      />
      <meta
        name="keywords"
        content="Sumit Pal, resume, frontend, web developer, nodejs developer, javascript"
      />
      <meta property="og:title" content="Sumit's resume" />
      <meta
        property="og:description"
        content="Sumit Pal, India based frontend web developer. Checkout my profile here."
      />
      <meta
        property="og:image"
        content="https://www.sumitpal.in/sumit-pal.jpg"
      />
      <meta property="og:url" content="http://www.sumitpal.in"></meta>
      <meta property="og:site_name" content="Sumit Pal - Web developer." />
      <meta name="twitter:card" content="Sumit Pal - Web developer" />
      <meta name="twitter:image:alt" content="Sumit Pal" />
      <meta name="twitter:site" content="@sumitpal29"></meta>
    </Helmet>
  )
}
