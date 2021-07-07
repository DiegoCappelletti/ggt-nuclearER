import React,{ useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { fetchSpegni } from '../api';

function Procedura() {

  const [stato, setStato] = useState("");
  const [value, setValue] = useState("");

  const fetchData = async ()=>{
    const data = await fetchSpegni();
    setStato(data.data.stato);
  }

  const spegni = () => {
    if(value == "741893526"){
      fetchData();
      
      if(stato == "SPENTO"){
        document.body.classList.add("emergency");
        const l = document.getElementById("torna");
        l.click();
      }
    }
  }

  return (
    <Container>
      <Link to="/mansioni"><Indietro/></Link>
      <Title>Procedura</Title>
      <Table>
        <BodyTable>
          <Riga>
            <Campo><Text>-Aprire valcola liquido refrigerante</Text></Campo>
            <Campo><Icon src="/icon/cold.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Portare barre plutonio dal 100% al 60%</Text></Campo>
            <Campo><Icon src="/icon/bars.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Diminuire la temperatura a 80 °C</Text></Campo>
            <Campo><Icon src="/icon/temp.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Ridurre la potenza a 3000 MW</Text></Campo>
            <Campo><Icon src="/icon/power.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Portare barre plutonio dal 60% al 40%</Text></Campo>
            <Campo><Icon src="/icon/bars.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Diminuire la pressione interna da 10 bar a 2 bar</Text></Campo>
            <Campo><Icon src="/icon/pressure.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Spegnere i generatori</Text></Campo>
            <Campo><Icon src="/icon/generator.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Spegnere le turbine</Text></Campo>
            <Campo><Icon src="/icon/turbine.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Portare barre plutonio dal 40% allo 0%</Text></Campo>
            <Campo><Icon src="/icon/bars.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Diminuire la temperatura a 80 °C</Text></Campo>
            <Campo><Icon src="/icon/temp.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Ridurre la potenza a 100 MW</Text></Campo>
            <Campo><Icon src="/icon/power.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Chiudere valcola liquido refrigerante</Text></Campo>
            <Campo><Icon src="/icon/cold.png"/></Campo>
          </Riga>
          <Riga>
            <Campo><Text>-Inserire la tessera e spegnere il nucleo</Text></Campo>
            <Campo><Icon src="/icon/profile_card.png"/></Campo>
          </Riga>
        </BodyTable>
      </Table>
      <br/><br/><br/><br/>
      <Text>Per poter spegnere il controllo automatico inserire il codice di sicurezza: </Text>
      <Input type="text" value={value} onChange={(event)=>{setValue(event.target.value)}}/>
      <Button onClick={spegni}>Spegni</Button>
      <Link to="/automatico" id="torna"/>
    </Container>
  );
}

export default Procedura;

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
const Table = styled.table`
`
const BodyTable = styled.tbody`
    text-align: left;
    font-size: 25px;
`
const Riga = styled.tr`
`
const Campo = styled.th`
    text-align: left;
    padding: 10px;
    font-weight: 100;
`
const Text = styled.h1`
  margin: 10px;
  color: #222222;
  font-size: 35px;
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  margin-left: 50px;
  height: 110px;
  width: 110px;
  filter: invert(0%) sepia(14%) saturate(2513%) hue-rotate(1deg) brightness(91%) contrast(73%);
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