import { RenderFn } from '../..';
export interface CodeBlockData {
    code: string;
    lang?: string;
}
declare const Code: RenderFn<CodeBlockData>;
export default Code;
