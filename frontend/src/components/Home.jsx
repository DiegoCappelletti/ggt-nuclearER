import React  from 'react'
import styled from 'styled-components';
import Button from './Button'

function Home() {
    return (
        <Container>
            <Profilo>Steven Olsson</Profilo>
            <ButtonContainer>
                <Button name="Mansioni Odierne" scr='/icon/workflow.png' to="/mansioni"/>
                <Button name="Nuclear Mail" scr='/icon/mail.png' to="/mail"/>
                <Button name="Note" scr='/icon/note.png' to="/note"/>
                <Button name="LogOut" scr='/icon/logOut.png' to="/inizio"/>
            </ButtonContainer>
        </Container>
    )
}

export default Home

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Profilo = styled.div`
    position: absolute;
    top: 3vh;
    right: 3vw;
    height: 100px;
    padding: 70px 10px 0 10px;
    background-color: #333333;
    border: solid 2px #222222;
    background-image: url("icon/profile.png");
    background-repeat: no-repeat;
    background-position: center 10px;
    background-size: 60px 60px;
    border-radius: 10px;
    color: var(--main-txt-color);
    font-size: 23px;
    image-rendering: pixelated;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;

    a{
        text-decoration:none;
    }
`