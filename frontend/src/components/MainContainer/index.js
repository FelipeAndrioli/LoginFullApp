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

    return (
        <>
            <MainContainerStyle>
                <LoginStyle $state = {state} onClick = { () => setState(true) } >Login</LoginStyle>
                <RegisterStyle $state = {state} onClick = { () => setState(false) } >Sign Up</RegisterStyle>
                {state ? <Login /> : <SignUp />}
            </MainContainerStyle>
        </>
    )
}

export default MainContainer