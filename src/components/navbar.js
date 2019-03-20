import {Link} from "gatsby"
import React, {useState} from "react"
import {FaHome} from 'react-icons/fa'
import Logout from '../components/logout'
import Auth from '../utils/auth'

const auth = new Auth()

const Login = () => {
    const {isAuthenticated} = auth

    if (isAuthenticated()) {
        return <button onClick={auth.logout}>Logout {auth.getUserName()}</button>
    } else {
        return <button onClick={auth.login}>Login</button>
    }
}

const Navbar = props => {

    return (
        <nav
            css={{
            display: 'flex',
            justifyContent: 'space-evenly',
            height: '50px',
            alignItems: 'center',
            backgroundColor: 'white',
            fontSize: '1.2em',
            marginRight: '20px',
            opacity: '0.3'
        }}>
            {props.children}
            <Login>Login</Login>
            <Link to="/planning/">Planning</Link>
            <Link to="/habit/">Habit</Link>
            <Link to="/daily/">Daily</Link>
            <Logout></Logout>
        </nav>
    )
}
export default Navbar