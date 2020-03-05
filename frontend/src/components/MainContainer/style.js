import styled from 'styled-components'

export const MainContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 500px;
    width: 400px;
    background: #006DAA;
`
    
export const LoginStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 50%;
    background: #006DAA;
    margin: 0;
    outline: 0;
    border: 0;
    color: #B9D6F2;
    font-size: 25px;
    cursor: pointer;
`

export const RegisterStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 50%;
    background: #003559;
    text-align: center;
    margin: 0;
    outline: 0;
    border: 0;
    color: #B9D6F2;
    font-size: 25px;
    cursor: pointer;
` 

export const InputContainer = styled.div`
    height: 100px;
    width: 100%;
    background: transparent;
`

export const UserInputStyle = styled.input`
    display: flex;
    height: 50%;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background: transparent;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1;
    border-color: #B9D6F2;
    font-size: 20px;
    color: #B9D6F2;

    &&::placeholder {
        text-align: center;
        font-size: 20px;
        color: #B9D6F2;
    }
`

export const PassInputStyle = styled.input`
    display: flex;
    height: 50%;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background: transparent;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1;
    border-color: #B9D6F2;
    font-size: 20px;
    color: #B9D6F2;

    &&::placeholder {
        text-align: center;
        font-size: 20px;
        color: #B9D6F2;
    }
`

export const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    align-self: flex-end;
    width: 100%;
    height: 70px;
    outline: 0;
    background: #003559;
    border: none;
    color: #B9D6F2;
    font-size: 25px;
    cursor: pointer;
`
