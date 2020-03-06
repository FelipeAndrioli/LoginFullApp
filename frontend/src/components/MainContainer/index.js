import React from 'react'
import Login from '../Login'
import SignUp from '../SignUp'
import{ MainContainerStyle, LoginStyle, RegisterStyle } from './style'

function MainContainer() {

    function toggleFunction() {

    }

    return (
        <>
            <MainContainerStyle>
                <LoginStyle>Login</LoginStyle>
                <RegisterStyle>Sign Up</RegisterStyle>
                <SignUp />
            </MainContainerStyle>
        </>
    )
}

export default MainContainer