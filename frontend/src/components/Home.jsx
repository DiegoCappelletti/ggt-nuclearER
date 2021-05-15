import React,{useState}  from 'react'
import styled from 'styled-components';
import Button from './Button'
import WindowHome from './WindowHome'

function Home() {

    const [mail, setMail] = useState(false);
    const [note, setNote] = useState(false);

    const showMail = () => {
        setMail(true)
    } 
    const showNote = () => {
        setNote(true)
    }
    const close = (i) => {
        switch(i){
            case 0:
                setMail(false); 
                break;
            case 1:
                setNote(false); 
                break;
        }
    }

    return (
        <Container>
            <ButtonContainer>
                <Button name="Mansioni Odierne" scr='/icon/workflow.png' to="/mansioni"/>
                <Button name="Nuclear Mail" scr='/icon/mail.png' onclick={showMail}/>
                <Button name="Note" scr='/icon/note.png' onclick={showNote}/>
                <Button name="Exit" scr='/icon/door_exit.png' to="/inizio"/>
            </ButtonContainer>
            {/* type=true significa mail, type=false significa note */}
            {mail && (<WindowHome nome={"Nuclear-Mail"} type={true} click={()=>{close(0)}}/>)}
            {note && (<WindowHome nome={"Note Personali"} type={false} click={()=>{close(1)}}/>)}
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