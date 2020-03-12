import React, { useState, useEffect } from 'react'
import Login from '../Login'
import SignUp from '../SignUp'
import{ MainContainerStyle, LoginStyle, RegisterStyle } from './style'

function MainContainer() {

    const [state, setState] = useState(true)

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