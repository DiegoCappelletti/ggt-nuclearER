import React,{useState, useEffect}  from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from './Button'
import Modal from './Modal'
import { fetchStato } from '../api';

function HomeManuale() {

    const [protocollo, setProtocollo] = useState(false);
    const [domanda, setDomanda] = useState(false);
    const [d, setD] = useState("");
    const [p, setP] = useState("");

    const [modal, setModal] = useState(false);
    const [frase, setFrase] = useState("");

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() => {
        const data = await fetchStato();
        setProtocollo(data.data.protocollo);
        setDomanda(data.data.domanda);

        setD(data.data.domanda ? "CORRETTA": "NON DATA")
        setP(data.data.protocollo ? "ESEGUITO": "NON ESEGUITO")
    }

    const showModal = (i) => {
        setModal(true)
        switch(i){
            case 0:
                setFrase("Rispondere prima alla domanda di sicurezza."); 
                break;
            case 1:
                setFrase("Rispondere alla domanda di sicurezza e avviare il protocollo di evaquazione prima di spegnere la centrale."); 
                break;
        }
    }

    const checkDomanda = () => {
        fetchData();
        if(domanda)
            document.getElementById("protocollo").click();
        else
            showModal(0)
    }

    const checkProtocollo = () => {
        fetchData();
        if(domanda && protocollo)
            document.getElementById("fine").click();
        else
            showModal(1)
    }

    const hiddenModal = () => {
        setModal(false)
        setFrase("");
    }

    return (
        <Container>
            <Table>
                <BodyTable>
                    <Riga i="1">
                        <Campo><Text>Domanda di sicurezza:</Text></Campo>
                        <Campo>{d}</Campo>
                    </Riga>
                    <Riga i="2">
                        <Campo><Text>Protocollo evaquazione:</Text></Campo>
                        <Campo>{p}</Campo>
                    </Riga>
                </BodyTable>
            </Table>
            <ButtonContainer>
                <Button name="Domanda Sicurezza" scr='/icon/question.png' to="/domanda"/>
                <Button name="Protocollo evaquazione" scr='/icon/door_exit.png' onclick={checkDomanda}/>
                <Link to="protocollo" id="protocollo"/>
                <Button name="Spegni Centrale" scr='/icon/off.png' onclick={checkProtocollo}/>
                <Link to="fine" id="fine"/>
                <Button name="Indietro" scr='/icon/undo.png' to="/mansioni"/>
            </ButtonContainer>
            {modal && (<Modal text={frase} click={hiddenModal}/>)}
        </Container>
    )
}

export default HomeManuale

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Table = styled.table`
    position: absolute;
    top: 15%;
    right: 6%;
`
const BodyTable = styled.tbody`
    text-align: left;
    font-size: 22px;
`
const Riga = styled.tr`
`
const Campo = styled.th`
    text-align: left;
    padding: 5px;
    font-weight: 100;
`
const Text = styled.h4`
    text-transform: uppercase;
    font-weight: 200;
    color: var(--main-txt-color);
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;

    a{
        text-decoration:none;
    }
`