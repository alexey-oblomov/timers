import React from 'react';
import propTypes from 'prop-types';

import { Progress } from 'antd';

export default function CountdownProgress(props) {
  const { percentTime } = props;
  return <Progress type="circle" percent={percentTime} />;
}

CountdownProgress.propTypes = {
  percentTime: propTypes.number,
};
