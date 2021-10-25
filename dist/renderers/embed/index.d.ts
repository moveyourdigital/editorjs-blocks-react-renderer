import { RenderFn } from '../..';
export interface EmbedBlockData {
    service: string;
    source: string;
    embed?: string;
    width?: number;
    height?: number;
    caption?: string;
}
export interface EmbedBlockConfig {
    rel?: string;
    sandbox?: string | null;
}
declare const Embed: RenderFn<EmbedBlockData, EmbedBlockConfig>;
export default Embed;
