import React  from 'react'
import styled from 'styled-components';
import Button from './Button'

function Home() {
    return (
        <Container>
            <ButtonContainer>
                <Button name="Mansioni Odierne" scr='/icon/workflow.png' to="/mansioni"/>
                <Button name="Nuclear Mail" scr='/icon/mail.png' to="/mail"/>
                <Button name="Note" scr='/icon/note.png' to="/note"/>
                <Button name="Exit" scr='/icon/door_exit.png' to="/inizio"/>
            </ButtonContainer>
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;

    a{
        text-decoration:none;
    }
`