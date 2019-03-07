import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const aboutPage = () => (
  <div>
    <SEO title="Page two" />
    <h1>This is the about page</h1>
    <Link to="/">Back to home</Link>
  </div>
)

export default aboutPage
