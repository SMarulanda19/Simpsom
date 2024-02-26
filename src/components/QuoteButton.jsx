import React from 'react';

function QuoteButton({ refreshFn,buttonClass }) {
  return (
    <button className= {buttonClass} onClick={refreshFn}>New Quote</button>
  );
}

export default QuoteButton;
