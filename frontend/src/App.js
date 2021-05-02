import './App.css';

import Start from './components/start'

function App() {
  return (
    <div className="container">
      <header>
        <div className="title">Vallelaghi Energy Product</div>
        <div className="subtitle">Terlago</div>
      </header> 
      <main>
        <Start></Start>
      </main>
      <footer>
      <div>Licenza sul Materiale - Proprietà GGT - @gruppogiovaniditerlago &copy; GGTerlago 2018-2021</div>
      </footer>    
    </div>
  );
}

export default App;
