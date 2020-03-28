import React from 'react';
import './Clock.css';
import ClockDisplay from './ClockDisplay';

export default class Clock extends React.Component {
  state = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10);
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
    const time = this.state.currentTime;
    const ms = ('00' + time.getMilliseconds().toString())
      .split('')
      .slice(-3)
      .join('');
    return (
      <div className="timer-container">
        <ClockDisplay
          currentTime={this.state.currentTime.toLocaleTimeString()}
          currentMs={ms}
        />
      </div>
    );
  }
}
