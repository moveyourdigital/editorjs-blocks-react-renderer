import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { RenderFn } from '../..';

export interface HeaderBlockData {
  text: string;
  level: number;
}

const Header: RenderFn<HeaderBlockData> = ({ data, className = '' }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  const Tag = `h${data?.level || 1}` as keyof JSX.IntrinsicElements;
  return <Tag {...props}>{data?.text && HTMLReactParser(data.text)}</Tag>;
};

export default Header;
