import data from './data.js';
import express from 'express';
const routerApp = express.Router();

routerApp.get('/inizio', function(req,res){
    res.status(200).json({success: true, modal: data.inizio});
});

export default routerApp;