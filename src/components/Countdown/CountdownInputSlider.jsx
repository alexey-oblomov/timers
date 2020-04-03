import React from 'react';
import PropTypes from 'prop-types';

import './CountdownInputSlider.css';
import { Slider } from 'antd';

export class CountdownSlider extends React.Component {
  onChange = (value) => {
    const { changeValueFromSlider } = this.props;
    changeValueFromSlider(value);
  };

  render() {
    const { isDisabled, value } = this.props;
    return (
      <Slider
        min={0}
        max={43200}
        step={15}
        value={value}
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
