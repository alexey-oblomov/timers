import React from 'react';
import './CountdownDisplay.css';

export default function CountdownDisplay(props) {
  const { min, sec } = props;

  return (
    <div className="countdownDisplayWrapper">
      <div className="class1">
        <h1>Счетчик обратного времени</h1>
        <h1>
          {min}:{sec}
        </h1>
      </div>
    </div>
  );
}
