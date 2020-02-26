import React, { useState } from 'react';
import { setConfig /* , cold */ } from 'react-hot-loader';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import '../style/index.css';
import Login from '../components/login';
import Auth from '../utils/auth';
import video from '../images/originBackground.mp4';

/* import Img from "gatsby-image" */

setConfig({ pureSFC: true });
/*This is your landing page should contain signup and sign in options, */
const IndexPage = () => {
  /* this page is only for looks and intro, top navbar has logo login or new account
  button rest of page will be occupied by slideshow with pictures and quotes, upon
  clicking sign in or sign up modal will appear and ask user to enter information
  at center of the page will be a short sentence on what the site will help you to do*/

  return (
    <div>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <section className='header'>
        <video
          autoPlay
          loop
          className='video-background'
          muted
          plays-inline='true'
        >
          <source src={video} type='video/mp4' />
        </video>
        <nav
          className='nav'
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexFlow: 'row wrap',
            height: '50px',
            backGroundColor: 'green',
            alignItems: 'center',
            opacity: '0.5'
          }}
        >
          {/*figure out importing auth0 stuff here and make the login work*/}
          <Link to='/about' className='navItem'>
            About Origin
          </Link>
          <Login className='loginStyle navItem'>login</Login>
        </nav>
        <div
          className='body'
          css={{
            display: 'grid',
            justifyContent: 'center',
            fontFamily: 'Billy Ohio',
            fontSize: '200px',
            color: 'orange',
            opacity: '1',
            marginTop: '20vh',
            minWidth: '600px'
          }}
        >
          <span>Origin</span>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
