import React from 'react';
import PropTypes from 'prop-types';

import './CountdownDisplay.css';

export default function CountdownDisplay(props) {
  const { minutes, seconds } = props;

  return (
    <div className="countdownDisplayWrapper">
      <div className="class1">
        <h1>
          {minutes}:{seconds}
        </h1>
      </div>
    </div>
  );
}

CountdownDisplay.propTypes = {
  minutes: PropTypes.string,
  seconds: PropTypes.string,
}