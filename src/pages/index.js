import React from "react"
import { Link } from "gatsby"

import indexStyle from "../style/index.css"
import SEO from "../components/seo"

const IndexPage = () => (
  <indexStyle>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header css={{
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0
    }}>
    </header>
    <nav css={{
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0
    }}>
      <Link to="/">Home</Link>
      <Link to="/brainstorm/">Planning</Link>
      <Link to="/habit/">Habit</Link>
      <Link to="/daily/">Daily</Link>
      <Link to="/about/">About</Link>
    </nav>
    <div
    css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen'
      },
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0
    }}
  >
    This has a hotpink background.
  </div>
    
  </indexStyle>
)

export default IndexPage
