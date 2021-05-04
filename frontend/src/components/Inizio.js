import React,{ useState, useEffect }from 'react';
import Button from './Button'

import loginImg from '../icon/logIn.png';
import scImg from '../icon/off.png';
import exitinImg from '../icon/door_exit.png';
import { fetchInizio } from '../api';

function Inizio() {

    useEffect(() => {
        fetchData();
    },[])
    const [frasi, setFrasi] = useState();

    const fetchData = async()=>{
        let data = await fetchInizio();
        setFrasi(data.data.modal[0])
    };

    const sowModal = (data) => {
        document.querySelector(".modal-container").classList.add("active");
        if(data == "spegnimentoCentrale")
            document.getElementById("testo").innerHTML = frasi.spegnimentoCentrale;
        if(data == "exit")
            document.getElementById("testo").innerHTML = frasi.exit;
    }
    const hiddenModal = () => {
        document.querySelector(".modal-container").classList.remove("active");
        document.getElementById("testo").innerHTML = "";
    }

    const spegnimentoCentrale = () => {
        sowModal("spegnimentoCentrale");
    }
    const exit = () => {
        sowModal("exit");
    }

  return (
    <div className="inizio-container">
        <div className="i-btn-container">
            <Button name="LogIn" scr={loginImg} to="/login"/>
            <Button name="Spegnimento Centrale" scr={scImg} onclick={spegnimentoCentrale}/>
            <Button name="Exit" scr={exitinImg} onclick={exit}/>
        </div>
        <div className="modal-container" onClick={hiddenModal}>
            <div className="modal">
                <p id="testo"></p>
            </div>
        </div>
    </div>
  );
}

export default Inizio;