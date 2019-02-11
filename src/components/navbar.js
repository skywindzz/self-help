import { Link } from "gatsby"
import React, { useState } from "react"
import { FaHome } from 'react-icons/fa'

const Navbar = () => (

    <nav css={{
        display: 'flex',
        justifyContent: 'space-evenly',
        height: '50px',
        alignItems: 'center',
        background: 'white',
        fontSize: '1.2em'
    }}>
        <Link to="/"><FaHome /></Link>
        <Link to="/brainstorm/">Planning</Link>
        <Link to="/habit/">Habit</Link>
        <Link to="/daily/">Daily</Link>
    </nav>
)
export default Navbar