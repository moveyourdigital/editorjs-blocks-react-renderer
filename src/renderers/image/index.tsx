import React from 'react';
import HTMLReactParser from 'html-react-parser';

export interface ImageBlockData {
  file: {
    url: string;
    name?: string;
  };
  caption: string;
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
  [s: string]: any;
}

const Image = ({
  data,
  className = '',
  actionsClassNames = {
    stretched: 'image-block--stretched',
    withBorder: 'image-block--with-border',
    withBackground: 'image-block--with-background',
  },
}: {
  data: ImageBlockData;
  className?: string;
  actionsClassNames?: {
    [s: string]: string;
  };
}) => {
  const classNames: string[] = [];
  if (className) classNames.push(className);

  Object.keys(actionsClassNames).forEach((actionName) => {
    if (data[actionName] === true && actionName in actionsClassNames) {
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
      {data?.file?.url && <img src={data.file.url} alt={data.caption || data.file.name} />}
      {data.caption && <figcaption>{HTMLReactParser(data.caption)}</figcaption>}
    </figure>
  );
};

export default Image;
