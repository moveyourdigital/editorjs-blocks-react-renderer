import { RenderFn } from '../..';
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
export interface ImageBlockConfig {
    actionsClassNames?: {
        [s: string]: string;
    };
}
declare const Image: RenderFn<ImageBlockData, ImageBlockConfig>;
export default Image;
