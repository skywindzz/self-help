import React from "react"
import {Link} from 'gatsby'

import SEO from "../components/seo"
import "../style/index.css"
import Navbar from "../components/navbar"


const IndexPage = () => (
  <div css={{
    display: 'grid'
  }}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header css={{
      height: '200px',
      backgroundColor: 'blue'
    }}>SELF</header>

    {/*navbar is here before we split this page into three sections
    Daily, habit, brainstorm at the footer we'll have the about page */}
    
    <Navbar></Navbar>

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
    <footer>
      <Link to="./about">About</Link>
    </footer>
  </div>
)

export default IndexPage
