import React, { useState } from 'react';
import { setConfig /* , cold */ } from 'react-hot-loader';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import '../style/index.css';
import Login from '../components/login';
import video from '../images/originfinal.mp4';

/* import Img from "gatsby-image" */

setConfig({ pureSFC: true });
/*This is your landing page should contain signup and sign in options, */
const IndexPage = () => {
  return (
    <div className='container'>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <section>
        <video
          autoPlay
          loop
          className='video-background'
          muted
          plays-inline='true'
        >
          <source src={video} type='video/mp4' />
        </video>
      </section>
      <div className='nav'>
        <Link to='/about' className='navItem'>
          About Origin
        </Link>
        <Login className='loginStyle navItem'>login</Login>
      </div>
    </div>
  );
};

export default IndexPage;
