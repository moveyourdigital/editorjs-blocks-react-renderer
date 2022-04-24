import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { RenderFn } from '../..';

export interface ImageBlockData {
  file?: {
    url: string;
    name?: string;
  };
  url?: string;
  caption: string;
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
  [s: string]: any;
}

export interface ImageBlockConfig {
  fileBaseHref?: string;
  actionsClassNames?: {
    [s: string]: string;
  };
}

const Image: RenderFn<ImageBlockData, ImageBlockConfig> = ({
  data,
  fileBaseHref = null,
  className = '',
  actionsClassNames = {
    stretched: 'image-block--stretched',
    withBorder: 'image-block--with-border',
    withBackground: 'image-block--with-background',
  },
}) => {
  const classNames: string[] = [];
  if (className) classNames.push(className);

  Object.keys(actionsClassNames).forEach((actionName) => {
    if (data && data[actionName] === true && actionName in actionsClassNames) {
      // @ts-ignore
      classNames.push(actionsClassNames[actionName]);
    }
  });

  const figureprops: {
    [s: string]: string;
  } = {};

  if (classNames.length > 0) {
    figureprops.className = classNames.join(' ');
  }

  return (
    <figure {...figureprops}>
      {data?.file?.url && <img src={fileBaseHref ? fileBaseHref + data.file.url : data.file.url} alt={data.caption || data.file.name} />}
      {data?.url && <img src={data.url} alt={data.caption} />}
      {data?.caption && <figcaption>{HTMLReactParser(data.caption)}</figcaption>}
    </figure>
  );
};

export default Image;
