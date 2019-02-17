import React, { useState } from "react"
import { setConfig /* , cold */ } from 'react-hot-loader'
import {Link} from 'gatsby'
import SEO from "../components/seo"
import "../style/index.css"
import NewAccount from '../components/newAccount'
import SignIn from '../components/signIn'

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
      <div>
        <Link to="/loggedIn">loggedIn Page</Link>
        <Link to="/about">About Origin</Link>
       <SignIn></SignIn>
       <NewAccount></NewAccount>


        
      </div>
    
    </div>
  )
}

export default IndexPage
