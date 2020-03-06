import React from 'react'
import { InputContainer, SignUpButton, FirstNameInput, LastNameInput,  PassSignIn, EmailSignIn } from './style'

function SignUp() {

    return(
        <>
            <InputContainer>
                <FirstNameInput placeholder = "First Name" />
                <LastNameInput placeholder = "Last Name" />
                <EmailSignIn placeholder = "Email" />
                <PassSignIn placeholder = "Password" type = "password" />
            </InputContainer>
            <SignUpButton>Sign Up</SignUpButton>
        </>
    )
}

export default SignUp