import React from 'react';
import { Button } from 'antd';
import './Countdown.css';
import CountdownDisplay from './CountdownDisplay';
import CountdownInputField from './CountdownInputField';
import CountdownProgress from './CountdownProgress';

export default class Countdown extends React.Component {
  state = {
    minutes: 0,
    seconds: 0,
    totalTime: 0,
    percentTime: 0,
    isPaused: true,
    isDisabled: false,
    isFinish: true,
  };

  displayMinValue = (value) => {
    return ('00' + value.toString()).split('').slice(-3).join('');
  };

  displaySecValue = (value) => {
    return ('0' + value.toString()).split('').slice(-2).join('');
  };

  changeValueMin = (min) => {
    this.setState({
      minutes: min,
    });
  };

  changeValueSec = (sec) => {
    this.setState({
      seconds: sec,
    });
  };

  changeValueFromSlider = (value) => {
    const min = Math.floor(value / 60);
    const sec = value % 60;
    this.setState({
      minutes: min,
      seconds: sec,
    });
  };

  handleStart = () => {
    if (!this.state.isPaused) {
      this.setState({
        isPaused: true,
      });
      return;
    }
    let totalTime = this.state.totalTime;
    if (this.state.isFinish) {
      totalTime = this.state.minutes * 60 + this.state.seconds;
    }
    this.setState({
      totalTime: totalTime,
      isDisabled: true,
      isPaused: false,
    });
    const timerID = setTimeout(this.tick, 1000);
  };

  tick = () => {
    let timerID;
    if (this.state.isPaused) {
      clearTimeout(timerID);
      return;
    }
    const currentTime = this.state.minutes * 60 + this.state.seconds;
    const newPercentTime = Math.floor(
      (currentTime * 100) / this.state.totalTime
    );
    this.setState({
      percentTime: newPercentTime,
    });
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      clearTimeout(timerID);
      this.setState({
        isPaused: true,
        isDisabled: false,
        isFinish: true,
      });
      return;
    }
    if (this.state.seconds === 0) {
      this.setState({
        seconds: 60,
        minutes: this.state.minutes - 1,
      });
    }
    this.setState({
      seconds: this.state.seconds - 1,
    });
    timerID = setTimeout(this.tick, 1000);
  };

  handleReset = () => {
    this.setState({
      minutes: 0,
      seconds: 0,
      totalTime: 0,
      percentTime: 0,
      isPaused: true,
      isDisabled: false,
      isFinish: true,
    });
  };

  render() {
    const valueInputMinutes = this.state.minutes;
    const valueInputSeconds = this.state.seconds;
    const valueSlider = valueInputMinutes * 60 + valueInputSeconds;
    const valueDisplayMinutes = this.displayMinValue(this.state.minutes);
    const valueDisplaySeconds = this.displaySecValue(this.state.seconds);
    const { percentTime, isDisabled } = this.state;

    return (
      <div className="Countdown-container">
        <h1>Счетчик обратного времени</h1>
        <div className="display-progress-container">
          <div className="diasplay-progress-flex-box">
            <CountdownDisplay
              min={valueDisplayMinutes}
              sec={valueDisplaySeconds}
            />
          </div>
          <div className="diasplay-progress-flex-box">
            <CountdownProgress percentTime={percentTime} />
          </div>
        </div>
        <div className="InputField-buttons-container">
          <div className="InputField-container">
            <CountdownInputField
              changeValueFromSlider={this.changeValueFromSlider}
              changeMinutes={this.changeValueMin}
              changeSeconds={this.changeValueSec}
              valueInputMinutes={valueInputMinutes}
              valueInputSeconds={valueInputSeconds}
              valueSlider={valueSlider}
              isDisabled={isDisabled}
            />
          </div>

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
      </div>
    );
  }
}
