import React from 'react';
import PropTypes from 'prop-types';

import './CountdownInputBlock.css';
import { CountdownSlider } from './CountdownInputSlider';
import { InputMinutes } from './CountdownInputMinutes';
import { InputSeconds } from './CountdownInputSeconds';

export default function CountdownInputBlock(props) {
  const { timerValue, changeTimerValue, isDisabled } = props;
  return (
    <div className="input-block__wrapper">
      <div>
        <CountdownSlider
          changeTimerValue={changeTimerValue}
          timerValue={timerValue}
          isDisabled={isDisabled}
        />
      </div>
      <div className="input-minutes__container">
        <span className="input-minutes__label">Минуты:</span>
        <div className="input-minutes">
          <InputMinutes
            changeTimerValue={changeTimerValue}
            timerValue={timerValue}
            isDisabled={isDisabled}
          />
        </div>
      </div>
      <div className="input-seconds__container">
        <span className="input-seconds__label">Секунды:</span>
        <div className="input-seconds">
          <InputSeconds
            changeTimerValue={changeTimerValue}
            timerValue={timerValue}
            isDisabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
}

CountdownInputBlock.propTypes = {
  changeMinutes: PropTypes.func,
  changeSeconds: PropTypes.func,
  changeValueFromSlider: PropTypes.func,
  isDisabled: PropTypes.bool,
  timerValue: PropTypes.number,
};
