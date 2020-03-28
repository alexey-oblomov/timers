import React from 'react';
import './ClockDisplay.css';

export default function ClockDisplay(props) {
  const { currentTime, currentMs } = props;
  return (
    <>
      <h1>Текущее время</h1>
      <div className="timerDisplayWrapper">
        <div className="class1">
          <h1>{currentTime}:</h1>
        </div>
        <div className="class2">
          <h1>{currentMs}</h1>
        </div>
      </div>
    </>
  );
}
