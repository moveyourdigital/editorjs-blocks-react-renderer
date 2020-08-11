import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export interface ListBlockData {
  style: 'ordered' | 'unordered';
  items: string[];
}

const List = ({ data, className = '' }: { data: ListBlockData; className?: string }) => {
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
        <li key={i}>{ReactHtmlParser(item)}</li>
      ))}
    </Tag>
  );
};

export default List;
