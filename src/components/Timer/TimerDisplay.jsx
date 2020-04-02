import React from 'react';
import './TimerDisplay.css';

export default function ClockDisplay(props) {
  const { currentTime } = props;
  return (
    <div className="timerDisplayWrapper">
      <div className="class1">
        <h1>Секундомер</h1>
        <h1>{currentTime}</h1>
      </div>
    </div>
  );
}