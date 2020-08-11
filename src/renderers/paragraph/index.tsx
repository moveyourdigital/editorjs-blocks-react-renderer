import React from 'react';
import ReactHtmlParser from 'react-html-parser';

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

  return <p {...props}>{data?.text && ReactHtmlParser(data.text)}</p>;
};

export default Paragraph;
