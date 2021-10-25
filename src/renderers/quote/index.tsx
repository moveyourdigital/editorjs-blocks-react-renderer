import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { RenderFn } from '../..';

export interface QuoteBlockData {
  text: string;
  caption?: string;
  alignment?: 'left' | 'center';
}

export interface QuoteBlockConfig {
  actionsClassNames?: {
    [s: string]: string;
  };
}

const Quote: RenderFn<QuoteBlockData, QuoteBlockConfig> = ({
  data,
  className = '',
  actionsClassNames = {
    alignment: 'text-align-{alignment}',
  },
}) => {
  const classNames: string[] = [];

  if (data?.alignment) {
    classNames.push(actionsClassNames.alignment.replace('{alignment}', data.alignment));
  }

  if (className) classNames.push(className);

  const blockquoteprops: {
    [s: string]: string;
  } = {};

  if (classNames.length > 0) {
    blockquoteprops.className = classNames.join(' ');
  }

  return (
    <blockquote {...blockquoteprops}>
      {data?.text &&
        data.text
          .split('\n\n')
          .map((paragraph, i) => (
            <p key={i}>
              {HTMLReactParser(paragraph.split('\n').reduce((total, line) => [total, '<br />', line].join('')))}
            </p>
          ))}
      {data?.caption && <footer>{HTMLReactParser(data.caption)}</footer>}
    </blockquote>
  );
};

export default Quote;
