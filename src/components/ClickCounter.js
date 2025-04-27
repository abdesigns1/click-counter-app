import { useState } from 'react';
import './ClickCounter.css';

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const limit = 10;

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Click Counter</h1>
      
      <div className="counter-value">{count}</div>
      
      <div className="button-container">
        <button
          onClick={decrement}
          className={`decrease-button ${count === 0 ? 'disabled' : ''}`}
          disabled={count === 0}
        >
          Decrease
        </button>
        
        <button
          onClick={increment}
          className="increase-button"
        >
          Increase
        </button>
      </div>
      
      {count >= limit && (
        <div className="limit-message">
          You've reached the limit!
        </div>
      )}
      
      {count === 0 && (
        <div className="zero-message">
          Counter cannot go below zero
        </div>
      )}
    </div>
  );
}