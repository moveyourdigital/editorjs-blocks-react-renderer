import React from 'react';
import Code from './renderers/code';
import Delimiter from './renderers/delimiter';
import Embed from './renderers/embed';
import Header from './renderers/header';
import Image from './renderers/image';
import List from './renderers/list';
import Paragraph from './renderers/paragraph';
import Quote from './renderers/quote';
import Table from './renderers/table';

export interface ConfigProp {
  [s: string]: {
    [s: string]: any;
  };
}

export interface RenderersProp {
  [s: string]: any;
}

export interface Block {
  type: string;
  data: {
    [s: string]: any;
  };
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
  };

  const availableRenderers = {
    ...defaultRenderers,
    ...renderers,
  };

  return (
    <>
      {data.blocks.map((block, i) => {
        if (block.type.toString() in availableRenderers) {
          // @ts-ignore Todo: find a fix
          const Tag = availableRenderers[block.type];
          return <Tag key={i} data={block.data} {...config[block.type]} />;
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
};
