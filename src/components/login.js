import React from 'react'
import Auth from '../utils/auth'

const auth = new Auth()

const Login = () => {
  const {isAuthenticated} = auth

  if (isAuthenticated()) {
    return <button className="loginSytle" onClick={auth.logout}>Logout {auth.getUserName()}</button>
  } else {
    return <button className="loginStyle" onClick={auth.login}>Login</button>
  }

}

export default Login