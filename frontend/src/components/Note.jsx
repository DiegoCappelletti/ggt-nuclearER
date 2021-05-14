import React,{ useState, useEffect } from 'react'
import styled from 'styled-components';
import { fetchNote } from '../api';

function Note() {

    useEffect(() => {
        fetchData();
    },[])

    const [note, setNote] = useState([]);
    const [xNote, setXNote] = useState(1000); //350
    const [text, setText] = useState({});

    const fetchData = async ()=>{
        const data = await fetchNote();
        setNote(data.data.note);
    };

    const noteText = (text) => {
        if(xNote==1000){
            setXNote(350);
            setText(text);
        }else{
            setXNote(1000);
            setText("");
        }
    }

    return (
        <Container>
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
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
`
const Table = styled.table`
    position: absolute;
    top: 40px;
    left: 50px;
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
    top: 40px;
    left: ${props => props.left};
    width: 400px;
    height: 400px;
    color: #333333;
    background: #dddddd;
    border-radius: 10px;
    transition: 0.5s all linear;
    overflow-y: scroll;
`
const Data = styled.h1`
    font-size: 40px;
    margin-bottom: 50px;
    color: #00aa00;
`
const Testo = styled.p`
    font-size: 25px;
    white-space: pre-wrap;
`