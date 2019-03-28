import React from 'react'
import { navigate } from "gatsby"
import Auth from '../utils/auth.js'

const auth = new Auth();

const LogOut = () => {
    {/*This component will Logout user and return them to landing page */}

    return (
        <a onClick={auth.logout}>LogOut</a>
    )
}

export default LogOut 