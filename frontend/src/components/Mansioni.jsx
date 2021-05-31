import React,{useState}  from 'react'
import styled from 'styled-components';
import Button from './Button'
import Modal from './Modal'
import Orari from './Orari'
import Manuale from './Manuale'
import { fetchStato } from '../api';

function Mansioni() {

    const [modal, setModal] = useState(false);

    const showOrari = () => {
        new WinBox("Orari",{
            class: ["no-full","no-resize"],
            background: "#444444",
            width: "50%",
            height: "70%",
            x: "center",
            y: "center",
            mount: document.getElementById("orari").firstChild
        })
    } 
    const showManuale = () => {
        new WinBox("Orari",{
            class: ["no-full","no-resize"],
            background: "#444444",
            width: "50%",
            height: "70%",
            x: "center",
            y: "center",
            mount: document.getElementById("man").firstChild
        })
    }

    const checkStato = async() => {
        const data = await fetchStato();
        const stato = data.data.stato;
        if(stato == "ATTIVO"){
            setModal(true);
        }else{
            window.location.href = "http://localhost:3000/manuale";
        }
    }

    return (
        <Container>
            <ButtonContainer>
                <Button name="Controllo Automatico" scr='/icon/gears.png' to="/automatico"/>
                <Button name="Controllo Manuale" scr='/icon/power_plant.png' onclick={checkStato}/>
                <Button name="Orari" scr='/icon/clock.png' onclick={showOrari}/>
                <Button name="Inditro" scr='/icon/undo.png' to="/main"/>
            </ButtonContainer>
            <ManualContainer onClick={showManuale}>
                <ManualImage src='/icon/manual.png'/>
            </ManualContainer>
            {modal && (<Modal text={"Per procedere bisogna spegnere il controllo automatico"} click={()=>{setModal(false)}}/>)}
            <div id="orari" className="hidden"><Orari/></div>
            <div id="man" className="hidden"><Manuale/></div>
        </Container>
    )
}

export default Mansioni

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
const ManualContainer = styled.div`
    padding: 5px; 
    position: absolute;
    bottom: 8%;
    left: 7%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: solid 1px #222222;
    border-radius: 3px;
    background: #333333;

    &:hover{
        box-shadow: var(--main-txt-shadow);
        cursor: pointer;
    }
`
const ManualImage = styled.img`
    width: 40px;
    height: 40px;

    ${ManualContainer}:hover & {
        filter: var(--main-filter);
    }
`