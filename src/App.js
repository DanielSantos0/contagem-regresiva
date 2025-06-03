import React from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';


function App() {
  // Substitua essa data pela data que você quiser
  const targetDate = '2026-09-06T23:59:59';
    const imageUrl = 'https://imgur.com/mjvHG0c.jpg'; // coloque o link da sua imagem aqui


return (
    <div className="app-container">
            <img src={imageUrl} alt="Logo" className="corner-logo" />
      <div className="content-wrapper">
        <h1 className="title">Contagem Regressiva para o encontro anual da Yakuza Paranaense em Assis - SP 🎉</h1>
        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
}

export default App;
