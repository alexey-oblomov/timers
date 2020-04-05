import React from 'react';
import PropTypes from 'prop-types';

import './ClockDisplay.css';

export default function ClockDisplay(props) {
  const { currentTime, currentMs } = props;
  return (
    <>
      <span className="heading">Текущее время</span>
      <div className="clock-display-wrapper">
        <div className="current-time-wrapper">
          <span className="current-time">{currentTime}:</span>
        </div>
        <div className="current-ms-wrapper">
          <span className="current-time">{currentMs}</span>
        </div>
      </div>
    </>
  );
}

ClockDisplay.propTypes = {
  currentTime: PropTypes.string,
  currentMs: PropTypes.string,
};
