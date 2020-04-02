import './CountdownInputField.css';
import React from 'react';
import { Slider, InputNumber, Row } from 'antd';

export default function CountdownInputField(props) {
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
      <SliderTimer
        changeValueFromSlider={changeValueFromSlider}
        value={valueSlider}
        isDisabled={isDisabled}
      />
      <Minutes
        changeMinutes={changeMinutes}
        value={valueInputMinutes}
        isDisabled={isDisabled}
      />
      <Seconds
        changeSeconds={changeSeconds}
        value={valueInputSeconds}
        isDisabled={isDisabled}
      />
    </>
  );
}

class SliderTimer extends React.Component {
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

class Minutes extends React.Component {
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

class Seconds extends React.Component {
  onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    const { changeSeconds } = this.props;
    changeSeconds(value);
  };

  render() {
    const { value, isDisabled } = this.props;
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
