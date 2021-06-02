import React,{ useState, useEffect } from 'react'
import styled from 'styled-components';
import { fetchNote } from '../api';
import {Link} from 'react-router-dom';

function Note() {

    useEffect(() => {
        fetchData();
    },[])

    const [note, setNote] = useState([]);
    const [xNote, setXNote] = useState(1500); //350
    const [text, setText] = useState({});

    const fetchData = async ()=>{
        const data = await fetchNote();
        setNote(data.data.note);
        console.log("ok")
    };

    const noteText = (text) => {
        console.log(xNote)
        if(xNote==1500){
            setXNote(500);
            setText(text);
        }else{
            setXNote(1500);
            setText("");
        }
    }

    return (
        <Container>
            <Link to="/main"><Indietro/></Link>
            <Table>
                <BodyTable>
                    {note.map((n,i) => (
                        <Riga key={i} onClick={()=>{noteText(n)}}>
                            <Campo>{n.nome}</Campo>
                        </Riga>
                    ))}
                </BodyTable>
            </Table>
            <Nota left={xNote+"px"}>
                <Data>{text.data}</Data>
                <Testo>{text.nota}</Testo>
            </Nota>
        </Container>
    )
}

export default Note

const Container = styled.div`
    padding: 10rem;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
`
const Indietro = styled.div`
    top: 60px;
    left: 60px;
    position:absolute;
    width: 60px;
    height:60px;
    background-image: url("/icon/arrow_left.png");
    image-rendering: pixelated;
    background-size: 60px 60px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    &:hover{
        filter: var(--main-filter);
    }
`
const Table = styled.table`
    border-collapse: collapse;
`
const BodyTable = styled.tbody`
    font-size: 40px;
`
const Riga = styled.tr`
`
const Campo = styled.th`
    border: 1px solid #777777;
    text-align: left;
    padding: 10px 20px;
    font-weight: 100;

    ${BodyTable} & {
        cursor: pointer;
    }
`
const Nota = styled.div`
    padding: 50px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: ${props => props.left};
    width: 45%;
    height: 75%;
    color: #333333;
    background: #dddddd;
    border-radius: 10px;
    transition: 0.5s all linear;
`
const Data = styled.h1`
    font-size: 40px;
    margin-bottom: 50px;
    color: var(--main-txt-color);
`
const Testo = styled.p`
    font-size: 25px;
    white-space: pre-wrap;
`