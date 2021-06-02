import axios from 'axios';

const urlHome = 'http://localhost:5555/api/v1/'

//richiesta frasi pagina iniziale
export const fetchInizio = () => axios.get(urlHome + 'inizio');

//richiesta confronto parametri login, ritorna frasi specifiche
export const fetchLogin = (type, value) => axios.get(urlHome + 'login', { 
    header: { 'content-type':'application/json'},
    params: { 
        type: type,
        value: value,
    }
});

//richiesta delle mail
export const fetchMail = () => axios.get(urlHome + 'mail');
//richiesta delle note
export const fetchNote = () => axios.get(urlHome + 'note');
//richiesta degli orari
export const fetchOrari = () => axios.get(urlHome + 'orari');

//richiesta stato
export const fetchStato = () => axios.get(urlHome + 'stato');
//modifica stato
export const fetchSpegni = () => axios.get(urlHome + 'spegni');
//modifica stato
export const fetchRisposta = () => axios.get(urlHome + 'risposta');
//modifica stato
export const fetchConvalida = () => axios.get(urlHome + 'convalida');