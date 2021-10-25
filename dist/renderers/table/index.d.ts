import { RenderFn } from '../..';
export interface TableBlockData {
    content: string[][];
    header?: string[];
    footer?: string[];
    caption?: string;
}
declare const Table: RenderFn<TableBlockData>;
export default Table;
