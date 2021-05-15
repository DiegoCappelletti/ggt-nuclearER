import React, { Component } from 'react'
import styled from 'styled-components';
import Orari from './Orari'
import Manuale from './Manuale'

function WindowMansioni({nome, type, click}){
    return (
        <Container>
            <Header>
                <Titolo>{nome}</Titolo>
                <Close onClick={click}/>
            </Header>
            <Main>
                {type ? <Manuale/> : <Orari/>}
            </Main>
        </Container>
    );
}

export default WindowMansioni;

const Container = styled.div`
    position: absolute;
    height: 600px;
    width: 800px;
    background: #666666;
    border-bottom: solid 5px #222222;
    border-left: solid 5px #222222;
    border-right: solid 5px #222222;
`
const Header = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    background: #222222;
`
const Titolo = styled.h2`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 100;
    color: var(--main-txt-color);
`
const Close = styled.div`
    position: absolute;
    top: 7px;
    right: 10px;
    height: 25px;
    width: 25px;
    border: solid 1px #111111;
    border-radius: 50%;
    background: #3b3b3b;
    background-image: url("/icon/close.png");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`
const Main = styled.div`
    width: 100%;
    height: 555px;
`