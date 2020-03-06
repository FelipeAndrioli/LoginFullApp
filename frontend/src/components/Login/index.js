import React from 'react'
import{ UserInputStyle, PassInputStyle, InputContainer, LoginButton } from './style'

function Login() {

    function handleLogin(e) {
        console.log('Login function working!')
    }

    return(
        <>
            <InputContainer>
            <UserInputStyle placeholder = "Username"></UserInputStyle>
            <PassInputStyle type = "password" placeholder = "Password"></PassInputStyle>
            </InputContainer>
            <LoginButton>Login</LoginButton>
        </>
    )
}

export default Login