import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

function Start() {
  return (
    <Container>
      <Text>automatico</Text>
    </Container>
  );
}

export default Start;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a{
    text-decoration: none;
  }
`
const pulse = keyframes`
  0%,
  100% {
    color: #cccccc;
    text-shadow: none;
  }
  50% {
    color: var(--main-txt-color);
    text-shadow: var(--main-txt-shadow);
  }
`
const Text = styled.h1`
  text-transform: uppercase;
  font-size: 150px;
  animation: ${pulse} 5s linear infinite;
`