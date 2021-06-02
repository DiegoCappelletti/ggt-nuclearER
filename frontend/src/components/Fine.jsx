import React from 'react';
import styled from 'styled-components';
import WeWantYou from './WeWantYou'

function Fine() {

  const showLocandina = () => {
    new WinBox("Iscrizioni",{
        class: ["no-full","no-resize"],
        background: "#444444",
        width: "90%",
        height: "90%",
        x: "center",
        y: "center",
        mount: document.getElementById("we-want-you").firstChild
    })
}

  return (
    <Container>
      <Text>Congratulazioni!!!</Text>
      <Text>Siete riusciti a spegnere la centrale e salvato la nostra amata valle da un disastro nucleare!</Text>
      <Text>Probabilemte avete perso il lavoro, causato una fuga di radiazioni, mandato in cortocircuito ogni dispositivo elettronico nel raggio di chilometri.</Text>
      <Text>Però questo non è importante.</Text>
      <Text>Tutto il Gruppo Giovani di Terlago spera di avervi intrattenuto e fatto divertire in questa stravagante esperienza!</Text>
      <Text>Alla prossima Escape Room!!!!</Text>
      <StarContainer onClick={showLocandina}>
          <StarImage src='/icon/star.png'/>
      </StarContainer>
      <div id="we-want-you" className="hidden"><WeWantYou/></div>
    </Container>
  );
}

export default Fine;

const Container = styled.div`
  padding: 5%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Text = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 55px;
  text-align: center;
`
const StarContainer = styled.div`
    padding: 5px; 
    position: absolute;
    bottom: 8%;
    right: 7%;
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
const StarImage = styled.img`
    width: 40px;
    height: 40px;

    ${StarContainer}:hover & {
        filter: var(--main-filter);
    }
`