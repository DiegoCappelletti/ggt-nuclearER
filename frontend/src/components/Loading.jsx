import React from 'react'
import styled, { keyframes } from 'styled-components';

export default function Loading() {
    return (
        <Load>
            <Block i="1" ></Block>
            <Block i="2" ></Block>
            <Block i="3" ></Block>
            <Block i="4" ></Block>
            <Block i="5" ></Block>
            <Block i="6" ></Block>
            <Block i="7" ></Block>
            <Block i="8" ></Block>
            <Block i="9" ></Block>
            <Block i="10" ></Block>
            <Block i="11" ></Block>
            <Block i="12" ></Block>
            <Block i="13" ></Block>
            <Block i="14" ></Block>
            <Block i="15" ></Block>
            <Block i="16" ></Block>
            <Block i="17" ></Block>
            <Block i="18" ></Block>
            <Block i="19" ></Block>
            <Block i="20" ></Block>
        </Load>
    )
}

const Load = styled.div`
    margin: 70px;
    position: relative;
    width: 250px;
    height: 250px;
`
const animate = keyframes`
    0%,50%{
        background: #222222;
        box-shadow: none;
    }
    50.1%,100%{
        background: var(--main-txt-color);
        box-shadow: var(--main-txt-shadow);
    }
`
const Block = styled.div`
    position: absolute;
    width: 8px;
    height: 25px;
    background: #222222;
    left: 50%;
    border-radius: 8px;
    transform: rotate(calc(18deg * ${p => p.i})); // 360deg/20block = 18deg
    transform-origin: 0 125px;
    animation: ${animate} 1.5s ease-in-out infinite;
    animation-delay: calc(0.05s * ${p => p.i}); // 1s/20block = 0.05s
`