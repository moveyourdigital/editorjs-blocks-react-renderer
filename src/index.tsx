import React from 'react';
import Code from './renderers/code';
import Delimiter from './renderers/delimiter';
import Embed from './renderers/embed';
import Header from './renderers/header';
import Image from './renderers/image';
import List from './renderers/list';
import Paragraph from './renderers/paragraph';
import Quote from './renderers/quote';
import Raw from './renderers/raw';
import Table from './renderers/table';

export type ConfigProp = Record<string, RenderConfig>;

export type RenderConfig = Record<string, any>;

export type RenderFn<T = undefined, K = Record<string, any> | undefined> = (
  _: {
    data: T;
    className?: string;
  } & K,
) => JSX.Element;

export type RenderFnWithoutData<K = Record<string, any> | undefined> = (
  _: {
    className?: string;
  } & K,
) => JSX.Element;

export type RenderersProp = Record<string, RenderFn<any>>;

export interface Block {
  id?: string;
  type: string;
  data: Record<string, any>;
}

export interface DataProp {
  time: number;
  version: string;
  blocks: Block[];
}

const Blocks = ({
  data,
  config = {},
  renderers = {},
}: {
  data: DataProp;
  config?: ConfigProp;
  renderers?: RenderersProp;
}) => {
  const defaultRenderers = {
    code: Code,
    delimiter: Delimiter,
    embed: Embed,
    header: Header,
    image: Image,
    list: List,
    paragraph: Paragraph,
    quote: Quote,
    table: Table,
    raw: Raw,
  };

  const availableRenderers = {
    ...defaultRenderers,
    ...renderers,
  };

  const hasBlockId = data.version.includes('2.21');

  return (
    <>
      {data.blocks.map((block, i) => {
        if (block.type.toString() in availableRenderers) {
          // @ts-ignore Todo: find a fix
          const Tag = availableRenderers[block.type];
          return <Tag key={hasBlockId && block.id ? block.id : i} data={block.data} {...config[block.type]} />;
        }
      })}
    </>
  );
};

export {
  Blocks as default,
  Code as CodeBlock,
  Delimiter as DelimiterBlock,
  Embed as EmbedBlock,
  Header as HeaderBlock,
  Image as ImageBlock,
  List as ListBlock,
  Paragraph as ParagraphBlock,
  Quote as QuoteBlock,
  Table as TableBlock,
  Raw as RawBlock,
};
