import React from 'react';
import PropTypes from 'prop-types';

import './CountdownDisplay.css';

export default function CountdownDisplay(props) {
  let { timerValue } = props;

  const displayValue = (value) => {
    const valueToString = String(value);
    const result = valueToString.length < 2 ? '0' + valueToString : valueToString;
    return result;
  };
  const minutes = displayValue(Math.trunc(timerValue / 60));
  const seconds = displayValue(Math.trunc(timerValue % 60));

  return (
    <div className="countdownDisplayContainer">
      <h1>
        {minutes}:{seconds}
      </h1>
    </div>
  );
}

CountdownDisplay.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};
