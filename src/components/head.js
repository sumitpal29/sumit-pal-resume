import React from "react"
import { Helmet } from "react-helmet"

export default function head({ title }) {
  return <Helmet title={title}></Helmet>
}
