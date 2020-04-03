import React from 'react';
import PropTypes from 'prop-types';

import './CountdownInputMinutes.css';
import { InputNumber, Row } from 'antd';

export class InputMinutes extends React.Component {
    onChange = (value) => {
      if (isNaN(value)) {
        return;
      }
      const { changeMinutes } = this.props;
      changeMinutes(value);
    };
  
    render() {
      const { isDisabled, value } = this.props;
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