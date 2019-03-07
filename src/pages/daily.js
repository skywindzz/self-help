import React from "react"
import { Link } from "gatsby"
import Navbar from '../components/navbar'

const Daily = () => (
    <div>
        <Navbar></Navbar>
        <p>This is daily page</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export default Daily