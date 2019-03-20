import React from 'react'
import {ClipLoader} from 'react-spinners'

import Auth from '../utils/auth'
import useComponentDidMount from '../components/useComponentDidMount'

const Auth0CallbackPage = () => {
    useComponentDidMount(() => {
        const auth = new Auth()
        auth.handleAuthentication()
    })

    return (
        <div>
            <h1>
                This is the auth callback page, you should be redirected immediately.
            </h1>
            <ClipLoader sizeUnit="px" size={150}/>
        </div>
    )
}

export default Auth0CallbackPage