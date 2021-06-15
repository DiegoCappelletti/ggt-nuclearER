import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
function Reattore() {

  const [combinazione, setCombinazione] = useState(false);
  const [value, setValue] = useState("");

  const check = () => {
    if(value == ""){
      setCombinazione(true)
    }
  }

  return (
    <Container>
      <Link to="/mansioni" id="convalida"><Indietro/></Link>
      {!combinazione? (
        <>
          <Title>Reattore 3</Title>
          <Text>Inserire il risultato della combinazione odierna: </Text>
          <Input type="text" value={value} onChange={(event)=>{setValue(event.target.value)}}/>
          <Button onClick={check}>Risposta</Button>
        </>
        ) : (
          <>Immagine</>
        )
      }
    </Container>
  );
}

export default Reattore;

const Container = styled.div`
  position: relative;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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