import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/91c22a97034233.5ebbf8e0e48f6.png" alt="logo" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
