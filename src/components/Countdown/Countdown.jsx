import React from 'react';

import './Countdown.css';
import { Button } from 'antd';
import CountdownDisplay from './CountdownDisplay';
import CountdownInputBlock from './CountdownInputBlock';
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

  changeValueMin = (minutes) => {
    this.setState({
      minutes,
    });
  };

  changeValueSec = (seconds) => {
    this.setState({
      seconds,
    });
  };

  changeValueFromSlider = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    this.setState({
      minutes,
      seconds,
    });
  };

  calculateTimeProcent = () => {
    const { totalTime, minutes, seconds } = this.state;
    const currentTime = minutes * 60 + seconds;
    const percentTime = Math.ceil(100 - (currentTime * 100) / totalTime);
    this.setState({
      percentTime,
    });
  };

  pauseOn = () => {
    clearTimeout(this.timerID);
    this.setState({
      isPaused: true,
    });
  };

  pauseOff = () => {
    this.setState({
      isPaused: false,
    });
  };

  playAudio = () => {
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src =
      'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3';
    audio.play();
  };

  handleStart = () => {
    const { isFinish, isPaused, minutes, seconds } = this.state;

    if (minutes === 0 && seconds === 0) {
      return;
    }

    switch (isFinish) {
      case true:
        if (isPaused) {
          const totalTime = minutes * 60 + seconds;
          this.setState({
            totalTime,
            isDisabled: true,
            isPaused: false,
            isFinish: false,
          });
          this.timerID = setTimeout(() => this.tick(), 1000);
        } else {
          this.pauseOn();
        }
        break;
      case false:
        if (isPaused) {
          this.pauseOff();
          this.timerID = setTimeout(() => this.tick(), 1000);
        } else {
          this.pauseOn();
        }
        break;
      default:
        break;
    }
  };

  tick = () => {
    const { isPaused, minutes, seconds } = this.state;

    this.calculateTimeProcent();

    if (isPaused) {
      clearTimeout(this.timerID);
      return;
    }

    if (minutes === 0 && seconds === 0) {
      clearTimeout(this.timerID);
      this.setState({
        isPaused: true,
        isDisabled: false,
        isFinish: true,
      });
      this.playAudio();
      return;
    }

    if (seconds === 0) {
      this.setState({
        seconds: 60,
        minutes: this.state.minutes - 1,
      });
    }

    this.setState({
      seconds: this.state.seconds - 1,
    });

    this.timerID = setTimeout(this.tick, 1000);
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
    const { percentTime, isDisabled } = this.state;
    const valueInputMinutes = this.state.minutes;
    const valueInputSeconds = this.state.seconds;
    const valueSlider = valueInputMinutes * 60 + valueInputSeconds;
    const valueDisplayMinutes = this.displayMinValue(this.state.minutes);
    const valueDisplaySeconds = this.displaySecValue(this.state.seconds);

    return (
      <div className="countdown-container">
        <span className="heading">Счетчик обратного времени</span>
        <div className="display-progress-container">
          <div className="display-progress-flex-box">
            <CountdownDisplay
              minutes={valueDisplayMinutes}
              seconds={valueDisplaySeconds}
            />
          </div>
          <div className="display-progress-flex-box">
            <CountdownProgress percentTime={percentTime} />
          </div>
        </div>
        <div className="input-field-buttons-container ">
          <div className="input-field-container">
            <CountdownInputBlock
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
