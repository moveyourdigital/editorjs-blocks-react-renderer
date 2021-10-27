import React, { FC } from 'react';
import HTMLReactParser from 'html-react-parser';
import { RenderFn } from '../..';

type Row = string[];
type Content = Row[];

export interface TableBlockData {
  content: Content;
  withHeadings?: boolean;
  header?: string[];
  footer?: string[];
  caption?: string;
}

const THead: FC<{
  row: Row;
}> = ({ row }) => (
  <thead>
    <tr>
      {row?.map((cell, i) => (
        <th key={`${i}`} scope="col">
          {HTMLReactParser(cell)}
        </th>
      ))}
    </tr>
  </thead>
);

const Tr: FC<{
  row: Row;
  withHeadings: boolean;
}> = ({ row, withHeadings }) => (
  <tr>
    {row.map((cell, i) =>
      i === 0 && withHeadings ? (
        <th key={i} scope="row">
          {HTMLReactParser(cell)}
        </th>
      ) : (
        <td key={i}>{HTMLReactParser(cell)}</td>
      ),
    )}
  </tr>
);

const Table: RenderFn<TableBlockData> = ({ data, className = '' }) => {
  const tableprops: {
    [s: string]: string;
  } = {};

  if (className) {
    tableprops.className = className;
  }

  const content = data?.withHeadings ? data?.content.slice(1) : data?.content;
  const header = data?.withHeadings ? data?.content[0] : data?.header;
  const withRowHeadings = !!data?.header;

  return (
    <table {...tableprops}>
      <>
        {data?.caption && <caption>{HTMLReactParser(data.caption)}</caption>}
        {header && <THead row={header} />}
      </>
      <tbody>
        {content?.map((row, i) => (
          <Tr key={i} row={row} withHeadings={withRowHeadings} />
        ))}
      </tbody>
      {data?.footer && (
        <tfoot>
          <Tr row={data?.footer} withHeadings={withRowHeadings} />
        </tfoot>
      )}
    </table>
  );
};

export default Table;
