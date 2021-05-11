import React,{ useState } from 'react'
import styled from 'styled-components';
import {fetchLogin} from '../api/index';

function Login() {

    const [id, setId] = useState(false);
    const [frase, setFrase] = useState("");
    const [value, setValue] = useState("");
    const [pws, setPws] = useState("");

    const checkUsername = async () => {
        
        const res = await fetchLogin("id",value);
        
        if(res.data.msg=="ok"){
            setId(true)
            setFrase("")
        }else{
            setFrase(res.data.msg);
        }
        
        setValue("")
        setPws("")
    }
    const checkPws = async () => {

        const res = await fetchLogin("password",pws);
        
        if(res.data.msg=="ok"){
            window.location.href = "http://localhost:3000/main";
        }else{
            setFrase(res.data.msg);
        }
        
        setValue("")
        setPws("")
    }
    
    return (
        <>
        {!id ? (
            <Container>
                <FormContainer>
                    <Form>
                        <Text>username</Text>
                        <Input type="text" value={value} onChange={(event)=>{setValue(event.target.value)}}/>
                        <Button onClick={checkUsername}>continua</Button>
                    </Form>
                </FormContainer>
                <MsgContainer>
                    <Msg>{frase}</Msg>
                </MsgContainer>
            </Container>
        ):(
            <Container>
                <FormContainer>
                    <Form>
                        <Text>Password</Text>
                        <Input type="text" value={pws} onChange={(event)=>{setPws(event.target.value)}}/>
                        <Button onClick={checkPws}>accedi</Button>
                    </Form>
                </FormContainer>
                <MsgContainer>
                    <Msg>{frase}</Msg>
                </MsgContainer>
            </Container>
        )}
        </>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`
const FormContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Form = styled.div`
    width: 75%;
    height: 50%;
    background: #444444;
    border: solid 3px #222222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Text = styled.label`
    margin-bottom: 20px;
    font-size: 80px;
    font-weight: 400;
    text-transform: uppercase;
`
const Input = styled.input`
    width: 70%;
    margin: 20px;
    padding: 5px;
    color: #d4d4d4;
    font-size: 50px;
    background: #333333;
    text-align: center;
`
const Button = styled.button`
    width: 50%;
    margin-top: 30px;
    padding:5px;
    background: #333333;
    text-transform: uppercase;
    font-size: 30px;

    &:hover{
        color: var(--main-txt-color);
    }
`
const MsgContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Msg = styled.div`
    width: 85%;
    height: 90%;
    padding: 4% 7%;
    background: #333333;
    border: solid 3px #222222;
    font-size: 1.5rem;
    color: var(--main-txt-color);
    letter-spacing: 1px;
    line-height: 1.9rem;
    overflow-y: scroll;
    white-space: pre-wrap;
`
