import React from 'react';
import PropTypes from 'prop-types';

import './CountdownInputSlider.css';
import { Slider } from 'antd';

export class CountdownSlider extends React.Component {
  onChange = (value) => {
    const { changeTimerValue } = this.props;
    const id = 'slider';
    changeTimerValue(value, id);
  };

  render() {
    const { isDisabled, timerValue } = this.props;
    return (
      <Slider
        min={0}
        max={3600}
        step={15}
        value={timerValue}
        onChange={this.onChange}
        disabled={isDisabled}
      />
    );
  }
}

CountdownSlider.propTypes = {
  isDisabled: PropTypes.bool,
  value: PropTypes.number,
};
