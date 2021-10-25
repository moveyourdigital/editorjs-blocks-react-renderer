import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { RenderFn } from '../..';

export interface TableBlockData {
  content: string[][];
  header?: string[];
  footer?: string[];
  caption?: string;
}

const Table: RenderFn<TableBlockData> = ({ data, className = '' }) => {
  const tableprops: {
    [s: string]: string;
  } = {};

  if (className) {
    tableprops.className = className;
  }

  return (
    <table {...tableprops}>
      {data?.caption && <caption>{HTMLReactParser(data.caption)}</caption>}
      {data?.header && (
        <thead>
          <tr>
            {data.header.map((cell, i) => (
              <th key={`${i}`}>{HTMLReactParser(cell)}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data?.content.map((row, i) => (
          <tr key={`${i}`}>
            {row.map((cell, j) => {
              const Tag = `t${j === 0 ? 'h' : 'd'}` as keyof JSX.IntrinsicElements;
              return <Tag key={`${i}${j}`}>{HTMLReactParser(cell)}</Tag>;
            })}
          </tr>
        ))}
      </tbody>
      {data?.footer && (
        <tfoot>
          <tr>
            {data?.footer.map((cell, i) => (
              <th key={`${i}`}>{HTMLReactParser(cell)}</th>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default Table;
