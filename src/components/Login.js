import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"

function Login() {
    const signIn= ()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <Avatar src="https://www.clipartmax.com/png/middle/293-2935006_icon-design-icon-set-utensils-clip-art-household-cooking-utensils-icon.png" className="avatar"/>
            <h1>LUSCIOUS</h1>
            <Button onClick={signIn} className="button">SIGN IN</Button>   
        </div>
    )
}

export default Login
