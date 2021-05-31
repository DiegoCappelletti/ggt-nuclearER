import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { fetchStato } from '../api';
import Modal from './Modal'

function Start() {

  useEffect(() => {
    fetchData();
  },[])

  const [stato, setStato] = useState();
  const [frase, setFrase] = useState("");
  const [modal, setModal] = useState(false);

  const fetchData = async ()=>{
    const data = await fetchStato();
    setStato(data.data.stato);
  };

  const checkAcceso = () => {
    fetchData();
    if(stato == "ATTIVO"){
      setModal(true);
      setFrase("Il controllo automatico è già attivo")
    }else{
      setModal(true);
      setFrase("Siamo in uno stato d'emergenza, passa al controllo manuale")
    }
  }
  const checkSpento = (event) => {
    event.preventDefault();
    fetchData();
    if(stato == "ATTIVO"){
      const p = document.getElementById("procedura")
      p.click();
    }else{
      setModal(true);
      setFrase("Il controllo automatico è già spento")
    }
  }
  const hiddenModal = () => {
    setModal(false)
    setFrase("");
  }

  return (
    <Container>
      <Link to="/mansioni"><Indietro/></Link>
      <Link to="/procedura" id="procedura"/>
      <Text>STATO: {stato}</Text>
      <ButtonContainer onClick={checkAcceso} acceso>
          <ButtonImg src="/icon/off.png"/>
          <ButtonText acceso>Accendi</ButtonText>
      </ButtonContainer>
      <ButtonContainer onClick={checkSpento}>
          <ButtonImg src="/icon/off.png"/>
          <ButtonText>Spegni</ButtonText>
      </ButtonContainer>
      {modal && (<Modal text={frase} click={hiddenModal}/>)}
    </Container>
  );
}

export default Start;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Text = styled.h4`
  position: absolute;
  top: 16%;
  right: 7%;
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 200;
  color: var(--main-txt-color);
`
const shadowRed = "box-shadow: 0 0 15px rgba(255, 0, 0, 0.2), 0 0 35px rgba(255, 0, 0, 0.3), 0 0 75px rgba(255, 0, 0, 0.6);";
const shadowGreen = "box-shadow: 0 0 15px rgba(0, 170, 0, 0.7), 0 0 35px rgba(0, 170, 0, 0.5), 0 0 100px rgba(0, 170, 0, 0.7);";
const ButtonContainer = styled.div`
    margin: 40px;
    padding: 20px;
    height: 190px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border-radius: 5px;
    border: solid 2px #222222;
    color: var(--main-txt-color);
    background: #333333;

    &:hover{
      ${props => props.acceso ? shadowGreen : shadowRed};
        cursor: pointer;
    }
`
const ButtonImg = styled.img`
    height: 75px;
    width: 75px;
`
const colorRed = "color: #ff0000;";
const colorGreen = "color: #00aa00;";
const ButtonText = styled.h3`
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 100;
    ${props => props.acceso ? colorGreen : colorRed};
`
const Indietro = styled.div`
    top: 16%;
    left: 6%;
    position:absolute;
    width: 60px;
    height:60px;
    background-image: url("/icon/arrow_left.png");
    image-rendering: pixelated;
    background-size: 60px 60px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    &:hover{
        filter: var(--main-filter);
    }
`