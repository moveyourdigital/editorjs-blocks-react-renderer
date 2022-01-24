import HTMLReactParser from 'html-react-parser';
import React from 'react';
import { RenderFn } from '../..';

export interface RawBlockData {
  html: string;
}

const Raw: RenderFn<RawBlockData> = ({ data }) => {
  return <>{data?.html && HTMLReactParser(data.html)}</>;
};

export default Raw;
