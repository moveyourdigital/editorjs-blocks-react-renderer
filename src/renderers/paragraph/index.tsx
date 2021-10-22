import React from 'react';
import HTMLReactParser from 'html-react-parser';

export interface ParagraphBlockData {
  text: string;
}

const Paragraph = ({ data, className = '' }: { data: ParagraphBlockData; className?: string }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  return <p {...props}>{data?.text && HTMLReactParser(data.text)}</p>;
};

export default Paragraph;
