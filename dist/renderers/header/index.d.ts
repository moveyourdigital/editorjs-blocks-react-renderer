import { RenderFn } from '../..';
export interface HeaderBlockData {
    text: string;
    level: number;
}
declare const Header: RenderFn<HeaderBlockData>;
export default Header;
