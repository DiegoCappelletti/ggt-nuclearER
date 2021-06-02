import data from './data.js';
import express from 'express';
const routerApp = express.Router();

//stati del gioco
let stato = "ATTIVO";
let domanda = false;
let protocollo = false;

//richiesta dati della pagina iniziale
routerApp.get('/inizio', function(req,res){
    res.status(200).json({modal: data.inizio});
});

//richiesta dati e confronto di id e password durante il login
routerApp.get('/login', function(req,res){
    let message;
    
    //console.log(req.query)

    if(req.query.type == "id"){
        switch(req.query.value){
            case "524810":
                message = data.login.russa;
                break;
            case "123456":
                message = data.login.ita;
                break;
            case "MITICO":
            case "mitico":
                message = data.login.homer;
                break;
            case "734256":
                message = "ok";
                break;
            default:
                message = "Username Errato!";
                break;
        }

        return res.status(200).json({msg: message});
    }
    if(req.query.type == "password"){
        switch(req.query.value){
            case "coHw&4oM":
                message = "ok";
                break;
            default:
                message = "Password Errata!";
                break;
        }

        return res.status(200).json({msg: message});
    }

    return res.status(400).json({success: false, msg:"Errore, campi non validi."});
    
});

//richiesta dati delle mail
routerApp.get('/mail', function(req,res){
    res.status(200).json({mail: data.mail});
});
//richiesta dati delle note
routerApp.get('/note', function(req,res){
    res.status(200).json({note: data.note});
});
//richiesta dati degli orari
routerApp.get('/orari', function(req,res){
    res.status(200).json({orari: data.orari});
});

//richiesta degli stati
routerApp.get('/stato', function(req,res){
    res.status(200).json({ 
        stato: stato,
        domanda: domanda,
        protocollo: protocollo
    });
});

//modifica stato
routerApp.get('/spegni', function(req,res){
    stato = "SPENTO"
    res.status(200).json({stato:stato})
});
//modifica domanda
routerApp.get('/risposta', function(req,res){
    domanda = true
    res.status(200).json({domanda:domanda})
});
//modifica protocollo
routerApp.get('/convalida', function(req,res){
    protocollo = true
    res.status(200).json({protocollo:protocollo})
});

//reset stati
routerApp.get('/reset', function(req,res){
    stato = "ATTIVO";
    domanda = false;
    protocollo = false;
    res.status(200).json({
        stato: stato,
        domanda: domanda,
        protocollo: protocollo
    })
});


export default routerApp;