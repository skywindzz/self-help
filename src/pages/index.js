import React, { useState } from "react"
import { setConfig /* , cold */ } from 'react-hot-loader'
import {Link} from 'gatsby'
import SEO from "../components/seo"
import "../style/index.css"
import Navbar from "../components/navbar"

setConfig({
  pureSFC: true,
});

const IndexPage = () => {
  const [test, changeTest] = useState('hello')

  function sayCheese() {
    changeTest('Cheese');
  }

  return (

  <div css={{
    display: 'grid'
  }} onClick={sayCheese}>
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
      <Link to="./about">just {test}</Link>
    </footer>
  </div>
  )
  }

export default IndexPage
