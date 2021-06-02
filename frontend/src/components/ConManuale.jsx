import React,{ useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Loading from './Loading'

function Start() {

  const [s,setS] = useState(true)

  const vai = () => {
    setS(false)
    setTimeout(()=>{document.getElementById("delay").click()},5000)
  }

  return (
    <>
      <Link to="/controllo-manuale" id="delay"/>
      {s && (
        <Container>
          <Text>Benvenuto. Sei entrato nella modalità di controllo manuale per spegnere questa centrale. Scegliendo questa opzione ti sarà concesso spegnere la centrale nucleare. Ti ricordiamo che questo comporterà una enorme perdita all'azienda VEP (Vallelaghi Energy Product) e probabilmente comporterà il tuo licenziamento.<br/>Sicuro di voler continuare?</Text>
          <ButtonContainer>
            <Button onClick={vai}>No</Button>
            <Button onClick={vai}>Si</Button>
          </ButtonContainer>
        </Container>
      )}
      {!s && (<Container>
        <Text>Attendere</Text>
        <Loading/>
        <Text>Passaggio a controllo manuale...</Text>
      </Container>)}
    </>
  );
}

export default Start;

const Container = styled.div`
  padding: 10%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Text = styled.h1`
  text-transform: uppercase;
  font-size: 35px;
  line-height: 42px;
  font-weight: 100;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
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