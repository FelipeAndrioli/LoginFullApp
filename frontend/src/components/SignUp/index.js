import React from 'react'
import { InputContainer, SignUpButton, FirstNameInput, LastNameInput,  PassSignIn, EmailSignIn } from './style'

function SignUp() {

    function handleSignUp(e) {
        console.log('Sign Up function!')
    }

    return(
        <>
            <InputContainer>
                <FirstNameInput placeholder = "First Name" />
                <LastNameInput placeholder = "Last Name" />
                <EmailSignIn placeholder = "Email" />
                <PassSignIn placeholder = "Password" type = "password" />
            </InputContainer>
            <SignUpButton onClick = {handleSignUp} >Sign Up</SignUpButton>
        </>
    )
}

export default SignUp