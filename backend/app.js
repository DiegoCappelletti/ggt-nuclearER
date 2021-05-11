import data from './data.js';
import express from 'express';
const routerApp = express.Router();

//richiesta dati della pagina iniziale
routerApp.get('/inizio', function(req,res){
    res.status(200).json({success: true, modal: data.inizio});
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

        return res.status(200).json({success: true, msg: message});
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

        return res.status(200).json({success: true, msg: message});
    }

    return res.status(400).json({success: false, msg:"Errore, campi non validi."});
    
});

//richiesta dati delle mail
routerApp.get('/mail', function(req,res){
    res.status(200).json({success: true, mail: data.mail});
});
//richiesta dati delle note
routerApp.get('/note', function(req,res){
    res.status(200).json({success: true, note: data.note});
});

export default routerApp;