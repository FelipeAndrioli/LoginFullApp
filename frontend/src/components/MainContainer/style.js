import styled from 'styled-components'

const colors = {
    letters: "#B9D6F2",
    selectedButton: "#006DAA",
    unselectedButton: "#003559",
    LoginRegisterButton: "#003559",
    borderColor: "#B9D6F2",
    backgroundColor: "#003559"
}

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
    background: ${props => props.state ? colors.selectedButton : colors.unselectedButton};
    margin: 0;
    outline: 0;
    border: 0;
    color: ${colors.letters};
    font-size: 25px;
    cursor: pointer;

    &:hover {
        opacity: 0.85
    }
`


//background: ${colors.selectedButton};
export const RegisterStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 50%;
    background: ${props => props.state == false ? colors.selectedButton : colors.unselectedButton};
    text-align: center;
    margin: 0;
    outline: 0;
    border: 0;
    color: ${colors.letters};
    font-size: 25px;
    cursor: pointer;

    &:hover {
        opacity: 0.85
    }
` 
