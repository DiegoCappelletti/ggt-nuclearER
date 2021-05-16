import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Button({name, scr, to, onclick=()=>{}}) {
    return(
        <>
            {to ? (
                <Link to={to}>
                    <Container>
                        <ButtonImg src={scr}/>
                        <Text>{name}</Text>
                    </Container>
                </Link>
                ) : (
                    <Container onClick={onclick}>
                        <ButtonImg src={scr}/>
                        <Text>{name}</Text>
                    </Container>
                )}
        </>
    );
}

export default Button;

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    height: 190px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border-radius: 5px;
    border: solid 2px #222222;
    color: var(--main-txt-color);
    background: #333333;

    &:hover{
        box-shadow: var(--main-txt-shadow);
        cursor: pointer;
    }
`
const ButtonImg = styled.img`
    height: 75px;
    width: 75px;
    image-rendering: crisp-edges;

    ${Container}:hover & {
        filter: var(--main-filter);
    }
`
const Text = styled.h3`
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 100;
`