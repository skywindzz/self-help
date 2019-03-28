import React, {useState} from "react"
import {
  setConfig/* , cold */
} from 'react-hot-loader'
import {Link} from 'gatsby'
import "../style/index.css"
import Logout from '../components/logout'

setConfig({pureSFC: true});

const IndexPage = () => {
  const [test,
    changeTest] = useState('hello')

  function sayCheese() {
    changeTest('Cheese');
  }

  return (
    <div css={{
      fontFamily: 'Helvetica Neue'
    }}>
      <div
        css={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '100vh',
        gridTemplateAreas: ` 'profile plan habit daily' `
      }}
        onClick={sayCheese}>

        {/* will need to make a index page navbar which have sign in, new account on top
      and a faq link on bottom for intro
      it will need 3 photos each seperate the planning, habit, daily page which is
      acessable once signed in if not signed in direct to new account page */}

        <header
          css={{
          backgroundColor: 'blue',
          gridArea: 'profile'
        }}>
          <span css={{
            display: 'block'
          }}>user profile</span>
          <Logout></Logout>
        </header>

        <div
          css={{
          backgroundColor: 'hotpink',
          '&:hover': {
            color: 'lightgreen'
          },
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          gridArea: 'plan'
        }}>

          <Link to="/planning">Planning</Link>
        </div>

        <div
          css={{
          backgroundColor: 'lightGreen',
          gridArea: 'habit'
        }}>
          <Link to="/habit">Habit page</Link>
        </div>

        <div css={{
          gridArea: 'daily'
        }}>
          <Link to="/daily">Daily page</Link>
        </div>
      </div>
    </div>

  )
}

export default IndexPage
