import React from 'react';
import PropTypes from 'prop-types';

import './TimerDisplay.css';

export default function ClockDisplay(props) {
  const { currentTime } = props;
  return (
    <div className="timer-display-wrapper">
      <span className="heading">Секундомер</span>
      <span className="current-time">{currentTime}</span>
    </div>
  );
}

ClockDisplay.propTypes = {
  currentTime: PropTypes.string,
};
