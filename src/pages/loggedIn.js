import React, { useState } from 'react';
import { setConfig /* , cold */ } from 'react-hot-loader';
import { Link } from 'gatsby';
import '../style/index.css';
import Logout from '../components/logout';
import { FaAutoprefixer } from 'react-icons/fa';
import Img from 'gatsby-image';

setConfig({ pureSFC: true });

const IndexPage = () => {
  const [test, changeTest] = useState('hello');

  function sayCheese() {
    changeTest('Cheese');
  }

  return (
    <div
      css={{
        fontFamily: 'Helvetica Neue'
      }}
    >
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridTemplateRows: '100vh',
          gridTemplateAreas: ` 'profile plan habit daily' `
        }}
        onClick={sayCheese}
      >
        {/* will need to make a index page navbar which have sign in, new account on top
      and a faq link on bottom for intro
      it will need 3 photos each seperate the planning, habit, daily page which is
      acessable once signed in if not signed in direct to new account page */}

        <div
          css={{
            backgroundColor: 'blue',
            gridArea: 'profile',
            display: 'grid',
            justifyContent: 'center'
          }}
        >
          <span
            css={{
              margin: '0 auto'
            }}
          >
            user profile
          </span>

          {/*check for gatsby udemy example and fill this out  <Img /> */}
          <span
            css={{
              display: 'block',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              backgroundColor: 'white'
            }}
          ></span>
          <p css={{ margin: '0 auto' }}>Name</p>
        </div>

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
          }}
        >
          <Link to='/planning'>Planning</Link>
        </div>

        <div
          css={{
            backgroundColor: 'lightGreen',
            gridArea: 'habit'
          }}
        >
          <Link to='/habit'>Habit page</Link>
        </div>

        <div
          css={{
            display: 'flex',
            gridArea: 'daily',
            justifyContent: 'space-evenly'
          }}
        >
          <Link to='/daily' css={{ marginRight: '120px' }}>
            Daily page
          </Link>
          <Link to='/' css={{ marginLeft: '120px' }}>
            <Logout></Logout>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
