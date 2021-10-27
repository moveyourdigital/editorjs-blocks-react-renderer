import React, { FC, PropsWithChildren } from 'react';
import HTMLReactParser from 'html-react-parser';
import { RenderFn } from '../..';

export interface ListBlockData {
  style: 'ordered' | 'unordered';
  items: NestedListItem[];
}

export type NestedListItem =
  | {
      content: string;
      items: NestedListItem[];
    }
  | string;

const Bullet: FC<PropsWithChildren<{}>> = ({ children }) => <li>{children}</li>;

const Group: FC<{
  Tag: keyof JSX.IntrinsicElements;
  items: NestedListItem[];
  className?: string;
}> = ({ Tag, items, ...props }) => (
  <Tag {...props}>
    {items.map((item, i) => (
      <Bullet key={i}>
        {typeof item === 'string' ? (
          HTMLReactParser(item)
        ) : (
          <>
            {HTMLReactParser(item?.content)}
            {item?.items?.length > 0 && <Group Tag={Tag} items={item.items} {...props} />}
          </>
        )}
      </Bullet>
    ))}
  </Tag>
);

const List: RenderFn<ListBlockData> = ({ data, className = '' }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  const Tag = (data?.style === 'ordered' ? `ol` : `ul`) as keyof JSX.IntrinsicElements;
  return data && <Group Tag={Tag} items={data.items} {...props} />;
};

export default List;
