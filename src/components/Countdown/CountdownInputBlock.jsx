import React from 'react';
import PropTypes from 'prop-types';

import './CountdownInputBlock.css';
import { CountdownSlider } from './CountdownInputSlider';
import { InputMinutes } from './CountdownInputMinutes';
import { InputSeconds } from './CountdownInputSeconds';

export default function CountdownInputBlock(props) {
  const {
    changeMinutes,
    changeSeconds,
    changeValueFromSlider,
    valueInputMinutes,
    valueInputSeconds,
    isDisabled,
    valueSlider,
  } = props;

  return (
    <div className="input-block__wrapper">
      <div>
        <CountdownSlider
          changeValueFromSlider={changeValueFromSlider}
          value={valueSlider}
          isDisabled={isDisabled}
        />
      </div>
      <div className="input-minutes__container">
        <span className="input-minutes__label">Минуты:</span>
        <div className="input-minutes">
          <InputMinutes
            changeMinutes={changeMinutes}
            value={valueInputMinutes}
            isDisabled={isDisabled}
          />
        </div>
      </div>
      <div className="input-seconds__container">
        <span className="input-seconds__label">Секунды:</span>
        <div className="input-seconds">
          <InputSeconds
            changeSeconds={changeSeconds}
            value={valueInputSeconds}
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
  valueInputMinutes: PropTypes.number,
  valueInputSeconds: PropTypes.number,
  isDisabled: PropTypes.bool,
  valueSlider: PropTypes.number,
};
