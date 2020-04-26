import React from 'react';
import PropTypes from 'prop-types';

import './CountdownInputSeconds.css';
import { InputNumber, Row } from 'antd';

export class InputSeconds extends React.Component {
  onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    const { changeTimerValue } = this.props;
    const id = 'seconds';
    changeTimerValue(value, id);
  };

  render() {
    const { isDisabled, timerValue } = this.props;
    const value = Math.trunc(timerValue % 60);
    return (
      <Row>
        <InputNumber
          min={0}
          max={59}
          style={{ margin: '0 16px' }}
          value={value}
          onChange={this.onChange}
          step={1}
          disabled={isDisabled}
        />
      </Row>
    );
  }
}

InputSeconds.propTypes = {
  isDisabled: PropTypes.bool,
  value: PropTypes.number,
};
