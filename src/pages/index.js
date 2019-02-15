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
  <div>
    <div css={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '50px 100vh',
      !! work out how to do this gridTemplateAreas: '
        Navbar
        header div footer ',
    }} onClick={sayCheese}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Navbar></Navbar>
      {/* will need to make a index page navbar which have sign in, new account on top
      and a faq link on bottom for intro
      it will need 3 photos each seperate the planning, habit, daily page which is 
      acessable once signed in if not signed in direct to new account page*/}
      
      <header css={{
        backgroundColor: 'blue'
      }}>ORIGIN</header>

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
      <footer css={{ backgroundColor: 'lightGreen'}}>
        <Link to="./about">just {test}</Link>
      </footer>
    </div>
  </div>
  )
  }

export default IndexPage
