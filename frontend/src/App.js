import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Start from './components/Start';
import Inizio from './components/Inizio';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <div className="title">Vallelaghi Energy Product</div>
          <div className="subtitle">Terlago</div>
        </header> 
        <main>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/inizio" component={Inizio} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </main>
        <footer>
        <div>Licenza sul Materiale - Proprietà GGT - @gruppogiovaniditerlago &copy; GGTerlago 2018-2021</div>
        </footer>    
      </div>
    </Router>
  );
}

export default App;
