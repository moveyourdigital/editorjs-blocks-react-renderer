import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export interface HeaderBlockData {
  text: string;
  level: number;
}

const Header = ({ data }: { data: HeaderBlockData }) => {
  const Tag = `h${data.level || 1}` as keyof JSX.IntrinsicElements;
  return <Tag>{data?.text && ReactHtmlParser(data.text)}</Tag>;
};

export default Header;
