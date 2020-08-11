import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export interface ParagraphBlockData {
  text: string;
}

const Paragraph = ({ data }: { data: ParagraphBlockData }) => {
  return <p>{data?.text && ReactHtmlParser(data.text)}</p>;
};

export default Paragraph;
