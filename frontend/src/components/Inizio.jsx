import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button'
import Modal from './Modal'
import { fetchInizio } from '../api';

function Inizio() {

    useEffect(() => {
        fetchData();
    },[])

    const [frase, setFrase] = useState("");
    const [modal, setModal] = useState(false);

    const [txt, setTxt] = useState();

    const fetchData = async ()=>{
        const data = await fetchInizio();
        setTxt(data.data.modal);
    };

    const showModal = (i) => {
        setModal(true)
        switch(i){
            case 0:
                setFrase(txt.spegnimentoCentrale); 
                break;
            case 1:
                setFrase(txt.exit); 
                break;
            default :
                setFrase("Errore...");
        }
    }
    const hiddenModal = () => {
        setModal(false)
        setFrase("");
    }

    const spegnimentoCentrale = () => {
        showModal(0);
    }
    const exit = () => {
        showModal(1);
    }

  return (
    <Container>
        <ButtonContainer>
            <Button name="LogIn" scr='/icon/logIn.png' to="/login"/>
            <Button name="Spegnimento Centrale" scr='/icon/off.png' onclick={spegnimentoCentrale}/>
            <Button name="Exit" scr='/icon/door_exit.png' onclick={exit}/>
        </ButtonContainer>
        {modal && (<Modal text={frase} click={hiddenModal}/>)}
    </Container>
  );
}

export default Inizio;

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