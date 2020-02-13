import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components/navbar';

const Planning = () => (
  <div>
    <Navbar></Navbar>
    <p>This is planning page</p>
    <Link to='/loggedIn'>Go back to Profile page</Link>
  </div>
);

export default Planning;
