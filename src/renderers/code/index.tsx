import React from 'react';

export interface CodeBlockData {
  code: string;
  lang?: string;
}

const Code = ({ data }: { data: CodeBlockData }) => {
  const codeprops: {
    [s: string]: string;
  } = {};

  if (data?.lang) codeprops.lang = data.lang;

  return <pre>{data?.code && <code {...codeprops}>{`${data.code}`}</code>}</pre>;
};

export default Code;
