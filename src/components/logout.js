import React from 'react'
import { navigate } from "gatsby"

const LogOut = () => {
    {/*This component will Logout user and return them to landing page */}

    function homepage () {
        navigate("/")
    }

    return (
        <a onClick={homepage}>LogOut</a>
    )
}

export default LogOut