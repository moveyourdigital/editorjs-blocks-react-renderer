import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export interface TableBlockData {
  content: string[][];
  header?: string[];
  footer?: string[];
  caption?: string;
}

const Table = ({ data, className = '' }: { data: TableBlockData; className?: string }) => {
  const tableprops: {
    [s: string]: string;
  } = {};

  if (className) {
    tableprops.className = className;
  }

  return (
    <table {...tableprops}>
      {data.caption && <caption>{ReactHtmlParser(data.caption)}</caption>}
      {data.header && (
        <thead>
          <tr>
            {data.header.map((cell, i) => (
              <th key={`${i}`}>{ReactHtmlParser(cell)}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.content.map((row, i) => (
          <tr key={`${i}`}>
            {row.map((cell, j) => {
              const Tag = `t${j === 0 ? 'h' : 'd'}` as keyof JSX.IntrinsicElements;
              return <Tag key={`${i}${j}`}>{ReactHtmlParser(cell)}</Tag>;
            })}
          </tr>
        ))}
      </tbody>
      {data.header && (
        <tfoot>
          <tr>
            {data.header.map((cell, i) => (
              <th key={`${i}`}>{ReactHtmlParser(cell)}</th>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default Table;
