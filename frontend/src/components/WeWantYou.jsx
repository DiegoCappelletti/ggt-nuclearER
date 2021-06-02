import React from 'react'
import styled from 'styled-components';

function Manuale() {
    return (
        <Container>
            <Title>Sono aperte le iscrizioni al GGT!!!</Title>
            <Image src="/we-want-you.png"/>
            <Social>
                <Instagram><ImageQR src="/social/IG.png"/><ImageSocial src="/social/instagram.png"/>gruppo_giovani_trelago</Instagram>
                <Mail><ImageQR/><ImageSocial src="/social/mail.png"/>gruppogiovaniterlago@gmial.com</Mail>
                <Facebook><ImageQR src="/social/FB.png"/><ImageSocial src="/social/facebook.png"/>GGTerlago</Facebook>
            </Social>
        </Container>
    )
}

export default Manuale

const Container = styled.div`
    padding: 5%;
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    justify-content: center;
`
const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 80px;
    font-weight: 500;
    color: var(--main-txt-color);
`
const Image = styled.img`
    height: 300px;
`
const Social = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 25px;
`
const Instagram = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Mail = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Facebook = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ImageSocial = styled.img`
    height: 50px;
    margin-right: 10px;
`
const ImageQR = styled.img`
    margin-bottom: 20px;
    height: 150px;
`