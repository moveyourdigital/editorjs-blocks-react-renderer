import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export interface ListBlockData {
  style: 'ordered' | 'unordered';
  items: string[];
}

const List = ({ data }: { data: ListBlockData }) => {
  const Tag = (data?.style === 'ordered' ? `ol` : `ul`) as keyof JSX.IntrinsicElements;
  return (
    <Tag>
      {data?.items.map((item, i) => (
        <li key={i}>{ReactHtmlParser(item)}</li>
      ))}
    </Tag>
  );
};

export default List;
