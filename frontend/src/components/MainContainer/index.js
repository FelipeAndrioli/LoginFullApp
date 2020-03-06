import React from 'react'
import Login from '../Login'
import SignUp from '../SignUp'
import{ MainContainerStyle, LoginStyle, RegisterStyle } from './style'

function MainContainer() {

    function handleLoginClick(e) {
        console.log('Login Working!')
    }

    function handleSignInClick(e) {
        console.log('Sign In working!')
    }

    return (
        <>
            <MainContainerStyle>
                <LoginStyle onClick = {handleLoginClick} >Login</LoginStyle>
                <RegisterStyle onClick = {handleSignInClick} >Sign Up</RegisterStyle>
                <SignUp />
            </MainContainerStyle>
        </>
    )
}

export default MainContainer