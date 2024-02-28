import React from 'react';
import './cardStyles.css';

function Card({ title, quote }) {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p>{quote}</p>
    </div>
  );
}

export default Card;

