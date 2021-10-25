import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { RenderFn } from '../..';

export interface ListBlockData {
  style: 'ordered' | 'unordered';
  items: string[];
}

const List: RenderFn<ListBlockData> = ({ data, className = '' }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  const Tag = (data?.style === 'ordered' ? `ol` : `ul`) as keyof JSX.IntrinsicElements;
  return (
    <Tag {...props}>
      {data?.items.map((item, i) => (
        <li key={i}>{HTMLReactParser(item)}</li>
      ))}
    </Tag>
  );
};

export default List;
