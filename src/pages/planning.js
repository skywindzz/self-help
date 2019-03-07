import React from "react"
import { Link } from "gatsby"
import Navbar from '../components/navbar'

const Planning = () => (
    <div>
        <Navbar></Navbar>
        <p>This is planning page</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export default Planning