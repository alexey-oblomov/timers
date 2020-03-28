import React from 'react';
import { Button } from 'antd';
import './Timer.css';
import TimerDisplay from './TimerDisplay';

export default class Timer extends React.Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    isPause: true,
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      millisecond: this.state.millisecond + 4,
    });
    if (this.state.millisecond === 1000) {
      this.setState({
        second: this.state.second + 1,
        millisecond: 0,
      });
    }
    if (this.state.second === 60) {
      this.setState({
        minute: this.state.minute + 1,
        second: 0,
      });
    }
    if (this.state.minute === 60) {
      this.setState({
        hour: this.state.hour + 1,
        minute: 0,
      });
    }
  }

  handleStart = () => {
    if (this.state.isPause) {
      this.timerID = setInterval(() => this.tick(), 4);
      this.setState({
        isPause: false,
      });
    } else {
      clearInterval(this.timerID);
      this.setState({
        isPause: true,
      });
    }
  };

  handleReset = () => {
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });
  };

  render() {
    const { hour, minute, second, millisecond } = this.state;
    const time =
      ('0' + hour).split('').slice(-2).join('') +
      ':' +
      ('0' + minute).split('').slice(-2).join('') +
      ':' +
      ('0' + second).split('').slice(-2).join('') +
      ':' +
      ('00' + millisecond).split('').slice(-3).join('');
    return (
      <div className="timer-container">
        <TimerDisplay currentTime={time} />
        <div className="btn-container">
          <div className="btn">
            <Button type="primary" onClick={this.handleStart}>
              Пуск/пауза
            </Button>
          </div>
          <div className="btn">
            <Button type="primary" onClick={this.handleReset}>
              Сбросить
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
