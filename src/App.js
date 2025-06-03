import React from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';


function App() {
  // Substitua essa data pela data que você quiser
  const targetDate = '2026-09-06T23:59:59';

return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="title">Contagem Regressiva para o encontro anual da Yakuza Paraense 🎉</h1>
        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
}

export default App;
