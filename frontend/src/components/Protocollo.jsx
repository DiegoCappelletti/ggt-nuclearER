import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { fetchConvalida } from '../api';

function Protocollo() {

  const [value, setValue] = useState("");
  const [txt, setTxt] = useState("");

  const convalida = async() => {
    if(value == "8349"){
      const data = await fetchConvalida();
      
      if(data.data.protocollo){
        let frase = "-Attivazione allarme emergenza\n";
        setTxt(frase)
        setTimeout(()=>{
          frase = frase + "-Accensione allarme antincendio\n";
          setTxt(frase)
        },2000)
        setTimeout(()=>{
          frase = frase + "-Accensione sistema di ricircolo aria\n"
          setTxt(frase)
        },4000)
        setTimeout(()=>{
          frase = frase + "-Attivazione sistema scarico scorie nucleari nel lago\n"
          setTxt(frase)
        },6000)
        setTimeout(()=>{
          frase = frase + "-Evaquazione dirigenti\n"
          setTxt(frase)
        },8000)
        setTimeout(()=>{
          frase = frase + "-Evaquazione personale\n"
          setTxt(frase)
        },10000)
        setTimeout(()=>{
          frase = frase + "-Errore... L'evaquazione del peronale non verrà messa in atto\n"
          setTxt(frase)
        },12000)
        setTimeout(()=>{
          frase = frase + "-Protocollo evaquazione attivato\n"
          setTxt(frase)
        },14000)
        setTimeout(()=>{
          document.getElementById("convalida").click();
        },18000)
      }
    }
  }

  return (
    <Container>
      <Link to="/controllo-manuale" id="convalida"><Indietro/></Link>
      <Title>Protocollo di Emergenza</Title>
      <Text>Per attivare il protocollo di emergenza inserire il numero protocollo preswente nel manuale di emergenza:</Text>
      <Input type="text" value={value} onChange={(event)=>{setValue(event.target.value)}}/>
      <Button onClick={convalida}>Convalida</Button>
      <Text2>{txt}</Text2>
    </Container>
  );
}

export default Protocollo;

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
  margin: 10px;
  color: #222222;
  font-size: 35px;
  display: flex;
  text-align: center;
`
const Text2 = styled.h1`
  margin: 10px;
  color: #222222;
  font-size: 30px;
  font-weight: 100;
  display: flex;
  text-align: center;
  white-space: pre-wrap;
`
const Input = styled.input`
    width: 70%;
    margin: 17px;
    padding: 5px;
    color: #cccccc;
    font-size: 40px;
    background: #333333;
    text-align: center;
`
const Button = styled.div`
  margin: 30px;
  padding: 10px 50px;
  font-size: 40px;
  background: #333333;
  border-radius: 4px;
  cursor: pointer;

  &:hover{
    background: #222222;
  }
`