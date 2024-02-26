import React, { useState, useEffect } from 'react';
import './SimpsomStyles.css';

function Simpsom_quotes() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const quoteData = data[0];
        setQuote(`${quoteData.character}: ${quoteData.quote}`);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Ajusta la altura del contenedor al 100% de la ventana del navegador
  };

  return (
    <div style={containerStyle}>
      <h2 className="title">Simpsons Quote</h2>
      <p>{quote}</p>
    </div>
  );
}

export default Simpsom_quotes;