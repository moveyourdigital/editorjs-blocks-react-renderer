import { RenderFn } from '../..';
export interface ListBlockData {
    style: 'ordered' | 'unordered';
    items: string[];
}
declare const List: RenderFn<ListBlockData>;
export default List;
