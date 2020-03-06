import React from 'react'
import{ UserInputStyle, PassInputStyle, InputContainer, LoginButton } from './style'

function Login() {
    
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