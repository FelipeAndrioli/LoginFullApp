import React from 'react'
import{ MainContainerStyle, LoginStyle, RegisterStyle, UserInputStyle, PassInputStyle, InputContainer, LoginButton } from './style'

function MainContainer() {

    return (
        <>
            <MainContainerStyle>
                <LoginStyle>Login</LoginStyle>
                <RegisterStyle>Register</RegisterStyle>
                <InputContainer>
                    <UserInputStyle placeholder = "Username"></UserInputStyle>
                    <PassInputStyle type = "password" placeholder = "Password"></PassInputStyle>
                </InputContainer>
                <LoginButton>Login</LoginButton>
            </MainContainerStyle>
        </>
    )
}

export default MainContainer