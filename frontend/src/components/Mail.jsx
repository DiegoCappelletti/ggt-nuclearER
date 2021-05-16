import React,{ useState, useEffect } from 'react'
import styled from 'styled-components';
import { fetchMail } from '../api';

function Mail() {

    useEffect(() => {
        fetchData();
    },[])

    const [mail, setMail] = useState([]);
    const [showMail, setShowMail] = useState(false);
    const [text, setText] = useState({});

    const fetchData = async ()=>{
        const data = await fetchMail();
        setMail(data.data.mail);
    };

    const mailText = (text) => {
        setShowMail(true);
        setText(text);
    }

    const closeMail = () => {
        setShowMail(false);
        setText("");
    }

    return (
        <Container>
            {!showMail ? (
                <Table>
                    <HeaderTable>
                        <Riga>
                            <Campo>Mittente</Campo>
                            <Campo>Destinatario</Campo>
                            <Campo>Oggetto</Campo>
                        </Riga>
                    </HeaderTable>
                    <BodyTable>
                        {mail.map((m,i) => (
                            <Riga key={i} onClick={()=>{mailText(m)}}>
                                <Campo>{m.da}</Campo>
                                <Campo>{m.a}</Campo>
                                <Campo>{m.oggetto}</Campo>
                            </Riga>
                        ))}
                    </BodyTable>
                </Table>
            ) : (
                <MailContainer>
                    <Indietro onClick={()=>{closeMail()}}/>
                    <Oggetto>OGG: {text.oggetto}</Oggetto>
                    <Mittente>da: {text.da}</Mittente>
                    <Destinatario>a: {text.a}</Destinatario>
                    <MailText>{text.mail}</MailText>
                </MailContainer>
            )}
            
        </Container>
    )
}

export default Mail

const Container = styled.div`
    height: 100%;
    width: 100%;
`
const Table = styled.table`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:90%;
    border-collapse: collapse;
`
const HeaderTable = styled.thead`
    text-transform: uppercase;
    text-align: center;
    font-size: 40px;
    color: #00aa00;
`
const BodyTable = styled.tbody`
    text-align: left;
    font-size: 25px;
`
const Riga = styled.tr`
`
const Campo = styled.th`
    border: 1px solid #777777;
    text-align: left;
    padding: 10px;
    font-weight: 100;

    ${BodyTable} & {
        cursor: pointer;
    }
`
const MailContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Indietro = styled.div`
    top: 60px;
    left: 30px;
    position:absolute;
    width: 30px;
    height:30px;
    background-image: url("/icon/arrow_left.png");
    image-rendering: pixelated;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`
const Oggetto = styled.h1`
    margin-bottom: 40px;
    font-size: 55px;
    color: var(-main-txt-color);
`
const Mittente = styled.h2`
    font-size: 35px;
    font-weight: 100;
`
const Destinatario = styled.h2`
    font-size: 35px;
    font-weight: 100;
`
const MailText = styled.p`
    margin-top: 70px;
    width: 70%;
    font-size: 23px;
    white-space: pre-wrap;
`