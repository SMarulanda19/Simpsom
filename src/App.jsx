import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setQuotes(data);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Simpsons Quotes</h1>
      <div className="card-container">
        {quotes.map((quote, index) => (
          <Card key={index} title={quote.character} quote={quote.quote} />
        ))}
      </div>
    </div>
  );
}

export default App;
