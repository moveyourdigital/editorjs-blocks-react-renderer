import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export interface EmbedBlockData {
  service: string;
  source: string;
  embed?: string;
  width?: number;
  height?: number;
  caption?: string;
}

const Embed = ({
  data,
  className = '',
  rel = 'noreferer nofollower external',
  sandbox,
}: {
  data: EmbedBlockData;
  className?: string;
  rel?: string;
  sandbox?: string | null;
}) => {
  const classNames: string[] = [];
  if (className) classNames.push(className);
  classNames.push(`embed-block-service-${data.service}`);

  const figureprops: {
    [s: string]: string;
  } = {};

  if (classNames.length > 0) {
    figureprops.className = classNames.join(' ');
  }

  if (data.width) {
    figureprops.width = data.width.toString();
  }

  if (data.height) {
    figureprops.height = data.height.toString();
  }

  if (sandbox) {
    figureprops.sandbox = sandbox.toString();
  }

  return (
    <figure>
      {data.embed ? (
        <iframe src={data.embed} {...figureprops} frameBorder="0" data-src={data.source}></iframe>
      ) : (
        <a href={data.source} target="_blank" rel={rel}>
          {data.source}
        </a>
      )}
      {data.caption && <figcaption>{ReactHtmlParser(data.caption)}</figcaption>}
    </figure>
  );
};

export default Embed;
