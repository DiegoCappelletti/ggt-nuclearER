import React from 'react'
import styled from 'styled-components';
import { fetchMail } from '../api';

function Manuale() {
    return (
        <Container>
            <Title>Emergenza Homer</Title>
            <Contenuto>-Questo manuale spiega la procedura di emergenza nel caso Homer ne combinasse una delle sue. Prestare massima attenzione e seguire la procedura d'emergenza.</Contenuto>
            <Contenuto>-Passare da controllo automatico a controllo manuale [COD: 618]</Contenuto>
            <Contenuto>-Seguire procedura del software [COD: 777]</Contenuto>
            <Contenuto>-Attivare protocollo di evaquazione n°8349 [COD: 444]</Contenuto>
            <Contenuto>-Spegnere la centrale [COD: 000]</Contenuto>
        </Container>
    )
}

export default Manuale

const Container = styled.div`
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    margin-bottom: 50px;
    font-size: 90px;
    font-weight: 500;
    color: var(--main-txt-color);
`
const Contenuto = styled.p`
    margin: 10px;
    width: 80%;
    font-size: 25px;
    font-weight: 100;
`