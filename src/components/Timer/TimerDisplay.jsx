import React from 'react';
import PropTypes from 'prop-types';

import './TimerDisplay.css';

export default function TimerDisplay(props) {
  const { timerValue } = props;

  const formatedMilliseconds = (item) => {
    const result = ('00' + item).split('').slice(-3).join('');
    return result;
  };

  const formatedTime = (item) => {
    const result = ('0' + item).split('').slice(-2).join('');
    return result;
  };

  let milliseconds = formatedMilliseconds(timerValue % 1000);
  let seconds = formatedTime(Math.trunc(timerValue / 1000));
  let minutes = formatedTime(Math.trunc(timerValue / (1000 * 60)));
  let hours = formatedTime(Math.trunc(timerValue / (1000 * 60 * 60)));

  const displayTimerValue = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;

  return (
    <div className="timer-display-wrapper">
      <span className="heading">Секундомер</span>
      <span className="current-time">{displayTimerValue}</span>
    </div>
  );
}

TimerDisplay.propTypes = {
  currentTime: PropTypes.number,
};
