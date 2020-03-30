import React from 'react';
import { Button } from 'antd';
import './Countdown.css';
import CountdownDisplay from './CountdownDisplay';
import CountdownInputField from './CountdownInputField';

export default class Countdown extends React.Component {
  state = {
    minutes: 0,
    seconds: 0,
  };

  displayValue = (value) => {
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

  render() {
    const min = this.displayValue(this.state.minutes);
    const sec = this.displayValue(this.state.seconds);

    return (
      <div className="Countdown-container">
        <CountdownDisplay min={min} sec={sec} />
        <CountdownInputField
          funcMin={this.changeValueMin}
          min={min}
          sec={sec}
          funcSec={this.changeValueSec}
        />
        <div className="btn-container">
          <div className="btn">
            <Button type="primary">Пуск/пауза</Button>
          </div>
          <div className="btn">
            <Button type="primary">Сбросить</Button>
          </div>
        </div>
      </div>
    );
  }
}
