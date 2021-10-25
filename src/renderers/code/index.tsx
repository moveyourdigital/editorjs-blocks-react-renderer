import React, { FC } from 'react';
import { RenderFn } from '../..';

export interface CodeBlockData {
  code: string;
  lang?: string;
}

const Code: RenderFn<CodeBlockData> = ({ data, className = '' }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  if (data?.lang) props.lang = data.lang;

  return <pre>{data?.code && <code {...props}>{`${data.code}`}</code>}</pre>;
};

export default Code;
