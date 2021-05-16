import React,{useState}  from 'react'
import styled from 'styled-components';
import Button from './Button'
import WindowMansioni from './WindowMansioni'
import Modal from './Modal'
import { fetchStato } from '../api';

function Mansioni() {

    const [orari, setOrari] = useState(false);
    const [manuale, setManuale] = useState(false);
    const [modal, setModal] = useState(false);

    const showOrari = () => {
        setOrari(true)
    } 
    const showManuale = () => {
        setManuale(true)
    }
    const close = (i) => {
        switch(i){
            case 0:
                setOrari(false); 
                break;
            case 1:
                setManuale(false); 
                break;
        }
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
            {/* type=0 significa orari, type=1 significa manuale */}
            {orari && (<WindowMansioni nome={"Orari"} type={0} click={()=>{close(0)}}/>)}
            {manuale && (<WindowMansioni nome={"Manuale di emergenza"} type={1} click={()=>{close(1)}}/>)}
            {modal && (<Modal text={"Per procedere bisogna spegnere il controllo automatico"} click={()=>{setModal(false)}}/>)}
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
    image-rendering: crisp-edges;

    ${ManualContainer}:hover & {
        filter: var(--main-filter);
    }
`