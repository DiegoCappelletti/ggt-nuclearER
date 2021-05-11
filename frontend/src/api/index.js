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