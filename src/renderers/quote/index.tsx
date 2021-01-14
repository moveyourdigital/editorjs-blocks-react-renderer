import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export interface QuoteBlockData {
  text: string;
  caption?: string;
  alignment?: 'left' | 'center';
}

const Quote = ({
  data,
  className = '',
  actionsClassNames = {
    alignment: 'text-align-{alignment}',
  },
}: {
  data: QuoteBlockData;
  className?: string;
  actionsClassNames?: {
    [s: string]: string;
  };
}) => {
  const classNames: string[] = [];

  if (data.alignment) {
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
      {data.text &&
        data.text
          .split('\n\n')
          .map((paragraph, i) => (
            <p key={i}>
              {ReactHtmlParser(paragraph.split('\n').reduce((total, line) => [total, '<br />', line].join('')))}
            </p>
          ))}
      {data.caption && <footer>{ReactHtmlParser(data.caption)}</footer>}
    </blockquote>
  );
};

export default Quote;
