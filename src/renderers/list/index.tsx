import React, { FC, PropsWithChildren } from 'react';
import HTMLReactParser from 'html-react-parser';
import { RenderFn } from '../..';

export interface ListBlockData {
  style: 'ordered' | 'unordered';
  items: NestedListItem[];
  meta?: {
    start?: number;
    counterType?: 'numeric' | 'lower-roman' | 'upper-roman' | 'lower-alpha' | 'upper-alpha';
  };
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
  start?: number;
  counterType?: 'numeric' | 'lower-roman' | 'upper-roman' | 'lower-alpha' | 'upper-alpha';
}> = ({ Tag, items, className, start = 1, counterType = 'numeric', ...props }) => {
  const listProps: {
    [key: string]: any;
  } = { ...props };

  if (className) {
    listProps.className = className;
  }

  // Handle ordered list attributes
  if (Tag === 'ol') {
    if (start && start !== 1) {
      listProps.start = start;
    }
    // Apply counter type styling
    if (counterType && counterType !== 'numeric') {
      const counterTypeMap: Record<string, string> = {
        'lower-roman': 'lower-roman',
        'upper-roman': 'upper-roman',
        'lower-alpha': 'lower-alpha',
        'upper-alpha': 'upper-alpha',
      };
      const styleType = counterTypeMap[counterType] || counterType;
      listProps.style = { listStyleType: styleType };
    }
  }

  return (
    <Tag {...listProps}>
      {items.map((item, i) => (
        <Bullet key={i}>
          {typeof item === 'string' ? (
            HTMLReactParser(item)
          ) : (
            <>
              {HTMLReactParser(item?.content)}
              {item?.items?.length > 0 && (
                <Group
                  Tag={Tag}
                  items={item.items}
                  className={className}
                  start={start}
                  counterType={counterType}
                  {...props}
                />
              )}
            </>
          )}
        </Bullet>
      ))}
    </Tag>
  );
};

const List: RenderFn<ListBlockData> = ({ data, className = '' }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  const { start = 1, counterType = 'numeric' } = data?.meta || {};
  const Tag = (data?.style === 'ordered' ? `ol` : `ul`) as keyof JSX.IntrinsicElements;

  return (
    data && (
      <Group
        Tag={Tag}
        items={data.items}
        start={start}
        counterType={counterType}
        {...props}
      />
    )
  );
};

export default List;