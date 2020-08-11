import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export interface HeaderBlockData {
  text: string;
  level: number;
}

const Header = ({ data, className = '' }: { data: HeaderBlockData; className?: string }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  const Tag = `h${data.level || 1}` as keyof JSX.IntrinsicElements;
  return <Tag {...props}>{data?.text && ReactHtmlParser(data.text)}</Tag>;
};

export default Header;
