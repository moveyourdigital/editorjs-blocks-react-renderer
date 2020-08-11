import React from 'react';

const Delimiter = ({ className = '' }: { className?: string }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  return <hr {...props} />;
};

export default Delimiter;
