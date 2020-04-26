import React from 'react';

import './Timer.css';
import { Button } from 'antd';
import TimerDisplay from './TimerDisplay';

export default class Timer extends React.Component {
  state = {
    timerValue: 0,
    startTime: 0,
    saveValue: 0,
    isPaused: true,
    isStart: true,
  };

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  tick() {
    let { startTime, timerValue, isPaused, saveValue } = this.state;

    if (isPaused) {
      clearTimeout(this.timerID);
      return;
    }

    const currentTime = Date.now();
    timerValue = saveValue + currentTime - startTime;
    this.setState({
      timerValue,
    });
    this.timerID = setTimeout(() => this.tick(), 17);
  }

  handleStart = () => {
    let { isPaused, isStart, timerValue, saveValue } = this.state;

    if (isPaused && isStart) {
      const startTime = Date.now();
      this.setState({
        isPaused: false,
        isStart: false,
        startTime,
      });
      this.timerID = setTimeout(() => this.tick(), 17);
    } else if (isPaused && !isStart) {
      const startTime = Date.now();
      this.setState({
        isPaused: false,
        startTime,
      });
      this.timerID = setTimeout(() => this.tick(), 17);
    } else if (!isPaused && !isStart) {
      saveValue = timerValue;
      this.setState({
        saveValue,
        startTime: 0,
        isPaused: true,
      });
    } else if (!isPaused && isStart) {
      this.setState({
        isPaused: true,
      });
    }
  };

  handleReset = () => {
    const startTime = Date.now();
    this.setState({
      timerValue: 0,
      startTime,
      saveValue: 0,
      isStart: true,
    });
  };

  render() {
    const { timerValue } = this.state;
    return (
      <div className="timer-container">
        <TimerDisplay timerValue={timerValue} />
        <div className="btn-container">
          <div className="btn">
            <Button type="primary" onClick={this.handleStart}>
              <span className="btn-span">Пуск/пауза</span>
            </Button>
          </div>
          <div className="btn">
            <Button type="primary" onClick={this.handleReset}>
              <span className="btn-span">&nbsp;&nbsp;Сбросить&nbsp;</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
