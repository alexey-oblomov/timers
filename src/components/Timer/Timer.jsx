import React from 'react';
import { Button } from 'antd';
import './Timer.css';
import TimerDisplay from './TimerDisplay';

export default class Timer extends React.Component {
  state = {
    currentTime: new Date(),
  };

  render() {
    return (
      <div className="timer-container">
        <TimerDisplay
          currentTime={this.state.currentTime.toLocaleTimeString()}
        />
        <div className="btn-container">
          <div className="btn">
            <Button type="primary">Запустить/пауза</Button>
          </div>
          <div className="btn">
            <Button type="primary">Сбросить</Button>
          </div>
        </div>
      </div>
    );
  }
}
