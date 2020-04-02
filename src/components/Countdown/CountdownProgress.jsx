import { Progress } from 'antd';
import React from 'react';

export default (props) => {
  const { percentTime } = props;
  const displayPercentTime = percentTime === 100 ? 99 : percentTime;
  return <Progress type="circle" percent={displayPercentTime} />;
};
