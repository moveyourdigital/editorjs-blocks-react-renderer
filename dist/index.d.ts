/// <reference types="react" />
import Code from './renderers/code';
import Delimiter from './renderers/delimiter';
import Embed from './renderers/embed';
import Header from './renderers/header';
import Image from './renderers/image';
import List from './renderers/list';
import Paragraph from './renderers/paragraph';
import Quote from './renderers/quote';
import Table from './renderers/table';
export declare type ConfigProp = Record<string, RenderConfig>;
export declare type RenderConfig = Record<string, any>;
export declare type RenderFn<T = undefined, K = Record<string, any> | undefined> = (_: {
    data: T;
    className?: string;
} & K) => JSX.Element;
export declare type RenderFnWithoutData<K = Record<string, any> | undefined> = (_: {
    className?: string;
} & K) => JSX.Element;
export declare type RenderersProp = Record<string, RenderFn<any>>;
export interface Block {
    type: string;
    data: Record<string, any>;
}
export interface DataProp {
    time: number;
    version: string;
    blocks: Block[];
}
declare const Blocks: ({ data, config, renderers, }: {
    data: DataProp;
    config?: ConfigProp | undefined;
    renderers?: RenderersProp | undefined;
}) => JSX.Element;
export { Blocks as default, Code as CodeBlock, Delimiter as DelimiterBlock, Embed as EmbedBlock, Header as HeaderBlock, Image as ImageBlock, List as ListBlock, Paragraph as ParagraphBlock, Quote as QuoteBlock, Table as TableBlock, };
