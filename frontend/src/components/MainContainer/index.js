import React, { useState, useEffect } from 'react'
import Login from '../Login'
import SignUp from '../SignUp'
import{ MainContainerStyle, LoginStyle, RegisterStyle } from './style'

function MainContainer() {

    const [state, setState] = useState(true)

/*
    useEffect(() => {
        if(this.state == 'Login') {
            <Login />
        } else if(this.state == 'SignUp') {
            <SignUp />
        }
    }, [state])
*/

    function handleLoginClick(e) {
        console.log('Login Working!')
        setState(true)
    }

    function handleSignInClick(e) {
        console.log('Sign In working!')
        setState(false)
    }

    return (
        <>

            <MainContainerStyle>
                <LoginStyle onClick = {handleLoginClick} >Login</LoginStyle>
                <RegisterStyle onClick = {handleSignInClick} >Sign Up</RegisterStyle>
                {state ? <Login /> : <SignUp />}
            </MainContainerStyle>
        </>
    )
}

export default MainContainer