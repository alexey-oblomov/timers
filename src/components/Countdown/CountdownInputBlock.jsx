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
    <>
      <CountdownSlider
        changeValueFromSlider={changeValueFromSlider}
        value={valueSlider}
        isDisabled={isDisabled}
      />
      <InputMinutes
        changeMinutes={changeMinutes}
        value={valueInputMinutes}
        isDisabled={isDisabled}
      />
      <InputSeconds
        changeSeconds={changeSeconds}
        value={valueInputSeconds}
        isDisabled={isDisabled}
      />
    </>
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
