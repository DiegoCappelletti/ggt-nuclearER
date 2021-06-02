import React from 'react'
import styled from 'styled-components';

function Modal({text, click}) {
    return (
        <Container onClick={click}>
            <ModalContainer>
                <p id="testo">{text}</p>
            </ModalContainer>
        </Container>
    )
}

export default Modal

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    cursor: pointer;
`
const ModalContainer = styled.div`
    height: 50vh;
    width: 50vw;
    padding: 40px;
    background-color: #555555;
    border: solid 10px #222222;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 50px;
    color: var(--main-txt-color);
    cursor: default;
`
