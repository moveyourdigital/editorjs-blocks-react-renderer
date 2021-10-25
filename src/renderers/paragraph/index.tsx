import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { RenderFn } from '../..';

export interface ParagraphBlockData {
  text: string;
}

const Paragraph: RenderFn<ParagraphBlockData> = ({ data, className = '' }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  return <p {...props}>{data?.text && HTMLReactParser(data.text)}</p>;
};

export default Paragraph;
