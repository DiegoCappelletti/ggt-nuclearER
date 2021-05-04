import axios from 'axios';

const urlHome = 'http://localhost:5555/api/v1/'

export const fetchInizio = () => axios.get(urlHome + 'inizio');