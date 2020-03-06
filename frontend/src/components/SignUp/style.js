import styled from 'styled-components'

const colors = {
    letters: "#B9D6F2",
    selectedButton: "#006DAA",
    unselectedButton: "#B9D6F2",
    LoginRegisterButton: "#003559",
    borderColor: "#B9D6F2",
    backgroundColor: "#003559"
}

export const InputContainer = styled.div`
    height: 50px;
    width: 100%;
    background: transparent;
`

export const FirstNameInput = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    border-left: none;
    border-right: none;
    border-top: none;
    font-size: 25px;
    border-color: ${colors.borderColor};
    color: ${colors.letters};
    text-align: center;

    &&::placeholder {
        text-align: center;
        font-size: 25px;
        color: ${colors.letters};
    }
`

export const LastNameInput = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    border-left: none;
    border-right: none;
    border-top: none;
    font-size: 25px;
    border-color: ${colors.borderColor};
    color: ${colors.letters};
    text-align: center;

    &&::placeholder {
        text-align: center;
        font-size: 25px;
        color: ${colors.letters};
    }

`

export const PassSignIn = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    border-left: none;
    border-right: none;
    border-top: none;
    font-size: 25px;
    border-color: ${colors.borderColor};
    color: ${colors.letters};
    text-align: center;

    &&::placeholder {
        text-align: center;
        font-size: 25px;
        color: ${colors.letters};
    }

`

export const EmailSignIn = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    border-left: none;
    border-right: none;
    border-top: none;
    font-size: 25px;
    border-color: ${colors.borderColor};
    color: ${colors.letters};
    text-align: center;

    &&::placeholder {
        text-align: center;
        font-size: 25px;
        color: ${colors.letters};
    }

`   

export const SignUpButton = styled.button`
    display: flex;
    justify-content: center;
    align-self: flex-end;
    width: 100%;
    height: 70px;
    outline: 0;
    background: ${colors.backgroundColor};
    border: none;
    color: ${colors.letters};
    font-size: 25px;
    cursor: pointer;
`
