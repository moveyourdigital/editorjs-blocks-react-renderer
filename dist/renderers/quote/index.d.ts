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
declare const Quote: RenderFn<QuoteBlockData, QuoteBlockConfig>;
export default Quote;
