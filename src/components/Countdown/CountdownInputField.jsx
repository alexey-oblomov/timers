import './CountdownInputField.css';
import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export default function CountdownInputField(props) {
  const { funcMin, funcSec, min, sec } = props;
  return (
    <>
      <Minutes func={funcMin} min={min} />
      <Seconds func={funcSec} sec={sec} />
    </>
  );
}

class Minutes extends React.Component {
  onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    const { func } = this.props;
    func(value);
  };

  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={60}
            onChange={this.onChange}
            value={this.props.min}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={60}
            style={{ margin: '0 16px' }}
            value={this.props.min}
            onChange={this.onChange}
            step={1}
          />
        </Col>
      </Row>
    );
  }
}

class Seconds extends React.Component {
  onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    const { func } = this.props;
    func(value);
  };

  render() {
    const { sec } = this.props;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={60}
            onChange={this.onChange}
            value={sec}
            step={1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={60}
            style={{ margin: '0 16px' }}
            step={1}
            value={sec}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}
