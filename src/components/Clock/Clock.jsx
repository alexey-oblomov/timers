import React from 'react';

import './Clock.css';
import ClockDisplay from './ClockDisplay';

export default class Clock extends React.Component {
  state = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 17);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const newTime = new Date();
    this.setState({
      currentTime: newTime,
    });
  }

  render() {
    const { currentTime } = this.state;
    const ms = ('00' + currentTime.getMilliseconds().toString())
      .split('')
      .slice(-3)
      .join('');
    return (
      <div className="timer-container">
        <ClockDisplay
          currentTime={currentTime.toLocaleTimeString()}
          currentMs={ms}
        />
      </div>
    );
  }
}
