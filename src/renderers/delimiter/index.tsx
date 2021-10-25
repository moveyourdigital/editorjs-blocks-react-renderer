import React from 'react';
import { RenderFnWithoutData } from '../..';

const Delimiter: RenderFnWithoutData = ({ className = '' }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  return <hr {...props} />;
};

export default Delimiter;
