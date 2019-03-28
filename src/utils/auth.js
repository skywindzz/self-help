import auth0 from 'auth0-js'
import {navigate} from 'gatsby'

const AUTH0_DOMAIN = 'aliang.auth0.com'
const AUTH0_CLIENT_ID = 'VTXLCtdH7q-9NwTWUD0ObP88cC_zC0yN'

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: AUTH0_DOMAIN,
        clientID: AUTH0_CLIENT_ID,
        redirectUri: 'http://localhost:8000/auth0_callback',
        audience: `https://${AUTH0_DOMAIN}/api/v2/`,
        responseType: 'token id_token',
        scope: 'openid profile email'
    })

    login = () => {
        this
            .auth0
            .authorize();
        navigate('/auth0_callback')
    }

    logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expires_at')
        localStorage.removeItem('user')
        navigate('/')
    }

    handleAuthentication = () => {
        if (typeof window !== 'undefined') {
            // this must've been the trick
            this
                .auth0
                .parseHash((err, authResult) => {
                    if (authResult && authResult.accessToken && authResult.idToken) {
                        this.setSession(authResult)
                        console.log('i am in')
                    } else if (err) {
                        console.log(err)
                    }

                    // get to loggedIn page after auth
                    navigate('loggedIn')
                })
        }
    }

    isAuthenticated = () => {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
        return new Date().getTime() < expiresAt
    }

    setSession = authResult => {
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.idToken)
        localStorage.setItem('expires_at', expiresAt)

        this
            .auth0
            .client
            .userInfo(authResult.accessToken, (err, user) => {
                localStorage.setItem('user', JSON.stringify(user))
            })
    }

    getUser = () => {
        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user'))
        }
    }

    getUserName = () => {
        if (this.getUser()) {
            return this
                .getUser()
                .name
        }
    }
}