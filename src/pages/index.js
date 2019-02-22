import React, { useState } from "react"
import { setConfig /* , cold */ } from 'react-hot-loader'
import {Link} from 'gatsby'
import SEO from "../components/seo"
import "../style/index.css"
import NewAccount from '../components/newAccount'
import SignIn from '../components/signIn'
import Img from "gatsby-image"

setConfig({
  pureSFC: true,
});
/*This is your landing page should contain signup and sign in options, */
const IndexPage = () => {
  const [logged, changeLogin] = useState(false)

  /* this page is only for looks and intro, top navbar has logo login or new account
  button rest of page will be occupied by slideshow with pictures and quotes, upon
  clicking sign in or sign up modal will appear and ask user to enter information */

  return (
    <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <nav css={{ display: 'flex', justifyContent: 'flex-end', flexFlow: 'row wrap', height: '50px', backGroundColor: 'green', alignItems: 'center' }}>
          <Link to="/loggedIn" className="navItem">loggedIn Page</Link>
          <Link to="/about" className="navItem">About Origin</Link>
          <SignIn></SignIn>
          <NewAccount></NewAccount>
      </nav>
      <div css={{ display: 'flex', justifyContent: 'center', fontFamily: 'Billy Ohio', fontSize: '300px', color: 'orange', marginTop: '200px' }}>
        ORIGIN
      </div>
    </div>
  )
}

export default IndexPage
