import React from 'react';
import PropTypes from 'prop-types';

import './CountdownInputSeconds.css';
import { InputNumber, Row } from 'antd';

export class InputSeconds extends React.Component {
    onChange = (value) => {
      if (isNaN(value)) {
        return;
      }
      const { changeSeconds } = this.props;
      changeSeconds(value);
    };
  
    render() {
      const { isDisabled, value } = this.props;
      return (
        <Row>
          <InputNumber
            min={0}
            max={60}
            style={{ margin: '0 16px' }}
            step={1}
            value={value}
            onChange={this.onChange}
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