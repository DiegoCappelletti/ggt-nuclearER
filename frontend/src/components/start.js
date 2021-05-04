import React from 'react';
import {Link} from 'react-router-dom';

function Start() {
  return (
    <div className="start-container">
      <Link to="/inizio">
        <h1>start</h1>
      </Link>
    </div>
  );
}

export default Start;