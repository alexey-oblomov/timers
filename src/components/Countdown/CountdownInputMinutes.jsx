import React from 'react';
import PropTypes from 'prop-types';

import './CountdownInputMinutes.css';
import { InputNumber, Row } from 'antd';

export class InputMinutes extends React.Component {
  onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    const { changeTimerValue } = this.props;
    const id = 'minutes';

    changeTimerValue(value, id);
  };

  render() {
    const { isDisabled, timerValue } = this.props;
    const value = Math.trunc(timerValue / 60);
    return (
      <Row>
        <InputNumber
          min={0}
          max={720}
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

InputMinutes.propTypes = {
  isDisabled: PropTypes.bool,
  value: PropTypes.number,
};
