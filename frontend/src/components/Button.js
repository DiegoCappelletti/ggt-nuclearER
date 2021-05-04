import React from 'react';
import {Link} from 'react-router-dom';

function Button({name: name, scr: scr, to: to, onclick: onclick}) {
  
    let bottone;

    if(to){
        bottone=(
            <Link to={to}>
            <div className="btn-container">
                <img src={scr}/>
                <h3>{name}</h3>
            </div>
        </Link>
        )
    }
    if(onclick){
        bottone=(
            <div className="btn-container" onClick={onclick}>
                <img src={scr}/>
                <h3>{name}</h3>
            </div>
        )
    }

    return (
        <>
            {bottone}
        </>
  );
}

export default Button;