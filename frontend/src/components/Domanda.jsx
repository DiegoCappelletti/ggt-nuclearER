import React,{ useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { fetchRisposta } from '../api';

function Domanda() {

  const [value, setValue] = useState("");

  const rispondi = async() => {
    if(value == "12"){
      const data = await fetchRisposta();
      
      if(data.data.domanda){
        document.getElementById("rispondi").click();
      }
    }
  }

  return (
    <Container>
      <Link to="/controllo-manuale" id="rispondi"><Indietro/></Link>
      <Title>Domanda di Sicurezza</Title>
      <Text>Per procedere, rispondere alla domanda di di sicurezza: </Text>
      <Text>Quante ciambelle ha mangiato Homer il 5 maggio 2021?</Text>
      <Input type="text" value={value} onChange={(event)=>{setValue(event.target.value)}}/>
      <Button onClick={rispondi}>Risopndi</Button>
    </Container>
  );
}

export default Domanda;

const Container = styled.div`
  position: relative;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`
const Indietro = styled.div`
    top: 20px;
    left: 20px;
    position:absolute;
    width: 50px;
    height:50px;
    background-image: url("/icon/arrow_left.png");
    image-rendering: pixelated;
    background-size: 50px 50px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    &:hover{
        filter: var(--main-filter);
    }
`
const Title = styled.h1`
  margin: 30px;
  font-size: 70px;
  color: var(--main-txt-color);
  text-transform: uppercase;
`
const Text = styled.h1`
  margin: 40px;
  color: #222222;
  font-size: 35px;
  display: flex;
  align-items: center;
`
const Input = styled.input`
    width: 70%;
    margin: 20px;
    padding: 5px;
    color: #cccccc;
    font-size: 50px;
    background: #333333;
    text-align: center;
`
const Button = styled.div`
  margin: 50px;
  padding: 10px 50px;
  font-size: 40px;
  background: #333333;
  border-radius: 4px;
  cursor: pointer;

  &:hover{
    background: #222222;
  }
`