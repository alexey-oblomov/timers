import React from 'react';

import './Countdown.css';
import { Button } from 'antd';
import CountdownDisplay from './CountdownDisplay';
import CountdownInputBlock from './CountdownInputBlock';
import CountdownProgress from './CountdownProgress';

export default class Countdown extends React.Component {
  state = {
    timerValue: 0,
    totalTime: 0,
    percentTime: 0,
    isPaused: true,
    isDisabled: false,
    isFinish: true,
  };

  changeTimerValue = (value, id) => {
    let { timerValue } = this.state;
    let minutes = Math.trunc(timerValue / 60);
    let seconds = Math.trunc(timerValue % 60);

    switch (id) {
      case 'minutes':
        minutes = value;
        break;
      case 'seconds':
        seconds = value;
        break;
      case 'slider':
        minutes = Math.trunc(value / 60);
        seconds = Math.trunc(value % 60);
        break;
      default:
        break;
    }

    if (minutes >= 720) {
      seconds = 0;
    }

    const newTimerValue = minutes * 60 + seconds;
    this.setState({
      timerValue: newTimerValue,
    });
  };

  calculateTimeProcent = () => {
    const { timerValue, totalTime } = this.state;
    const percentTime = Math.ceil(100 - (timerValue * 100) / totalTime);
    this.setState({
      percentTime,
    });
  };

  pauseToggle = () => {
    this.setState({
      isPaused: !this.state.isPaused,
    });
  };

  playAudio = () => {
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src = 'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3';
    audio.play();
  };

  handleStart = () => {
    const { timerValue, isFinish, isPaused } = this.state;

    if (timerValue === 0) {
      return;
    }

    switch (isFinish) {
      case true:
        if (isPaused) {
          const totalTime = timerValue;
          this.setState({
            totalTime,
            isDisabled: true,
            isPaused: false,
            isFinish: false,
          });
          this.timerID = setTimeout(() => this.tick(), 1000);
        } else {
          clearTimeout(this.timerID);
          this.pauseToggle();
        }
        break;
      case false:
        if (isPaused) {
          this.pauseToggle();
          this.timerID = setTimeout(() => this.tick(), 1000);
        } else {
          clearTimeout(this.timerID);
          this.pauseToggle();
        }
        break;
      default:
        break;
    }
  };

  tick = () => {
    const { isPaused, timerValue } = this.state;

    this.calculateTimeProcent();

    if (isPaused) {
      clearTimeout(this.timerID);
      return;
    }

    if (timerValue === 0) {
      clearTimeout(this.timerID);
      this.setState({
        isPaused: true,
        isDisabled: false,
        isFinish: true,
      });
      this.playAudio();
      return;
    }

    this.setState({
      timerValue: timerValue - 1,
    });

    this.timerID = setTimeout(this.tick, 1000);
  };

  handleReset = () => {
    this.setState({
      timerValue: 0,
      percentTime: 0,
      isPaused: true,
      isDisabled: false,
      isFinish: true,
    });
  };

  render() {
    const { timerValue, percentTime, isDisabled } = this.state;
    const inputBlockProps = {
      changeTimerValue: this.changeTimerValue,
      timerValue,
      isDisabled,
    };

    return (
      <div className="countdown-container">
        <span className="heading">Счетчик обратного времени</span>
        <div className="display-progress-container">
          <div className="display-progress-flex-box">
            <CountdownDisplay timerValue={timerValue} />
          </div>
          <div className="display-progress-flex-box">
            <CountdownProgress percentTime={percentTime} />
          </div>
        </div>
        <div className="input-field-buttons-container ">
          <div className="input-field-container">
            <CountdownInputBlock {...inputBlockProps} />
          </div>

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
      </div>
    );
  }
}
