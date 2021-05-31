import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Start from './components/Start';
import Inizio from './components/Inizio';
import Login from './components/Login';
import Home from './components/Home';
import Mail from './components/Mail';
import Note from './components/Note';
import Mansioni from './components/Mansioni';
import ConAutomatico from './components/ConAutomatico';
import ConManuale from './components/ConManuale';
import Procedura from './components/Procedura';

function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Title>Vallelaghi Energy Product</Title>
          <Subtitle>Terlago</Subtitle>
        </Header> 
        <Main>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/inizio" component={Inizio} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/main" component={Home} />
            <Route exact path="/mail" component={Mail} />
            <Route exact path="/note" component={Note} />
            <Route exact path="/mansioni" component={Mansioni} />
            <Route exact path="/automatico" component={ConAutomatico} />
            <Route exact path="/manuale" component={ConManuale} />
            <Route exact path="/procedura" component={Procedura} />
          </Switch>
        </Main>
        <Footer>
          <div>Licenza sul Materiale - Proprietà GGT - @gruppogiovaniditerlago &copy; GGTerlago 2018-2021</div>
        </Footer>    
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
`
const Header = styled.header`
  padding: 0.75rem 0;
  width: 100%;
  height: 10%;
  background-color: #444444;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const pulse = keyframes`
  0%,
  100% {
    color: #cccccc;;
    text-shadow: none;
  }
  50% {
    color: var(--main-txt-color);
    text-shadow: var(--main-txt-shadow);
  }
`
const Title = styled.div`
  font-size: 35px;
  letter-spacing: 4px;
  text-align: center;
  animation: ${pulse} 2s linear infinite;
`
const Subtitle = styled.div`
  font-size: 25px;
  letter-spacing: 3px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  animation: ${pulse} 2s linear infinite;
`
const Main = styled.main`
  width: 100%;
  height: 92%;
  background-color: #555555;
`

const Footer = styled.footer`
  padding-top: 1px;
  color: #ffffff;
  font-size: 15px;
  letter-spacing: 1px;
`