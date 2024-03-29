import React from 'react';
import { create } from 'react-test-renderer';
import Blocks, { ConfigProp, DataProp, RenderersProp, RenderFn } from '.';

describe('<Block />', () => {
  describe('when receives an EditorJS 2.19 blocks data', () => {
    const data: DataProp = {
      time: 1610632160642,
      blocks: [
        {
          type: 'paragraph',
          data: {
            text: 'Mollit deserunt culpa fugiat ea do laboris minim ex do. Elit cillum qui aute sint irure aliqua excepteur minim. Eiusmod velit cupidatat ea culpa magna magna id consectetur enim irure ex excepteur tempor quis. Veniam incididunt ullamco adipisicing dolor ex proident ex amet dolor. Nisi in adipisicing non quis id Lorem consectetur.',
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Nulla pariatur proident cillum consequat cupidatat ex reprehenderit nisi quis mollit laboris dolore ex. Laborum sint duis elit proident. Aliquip id mollit commodo excepteur.',
          },
        },
        {
          type: 'header',
          data: {
            text: 'Quis consectetur nostrud eu officia aute laborum labore nulla?',
            level: 3,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Non pariatur deserunt elit proident. Reprehenderit cupidatat velit veniam ut pariatur minim culpa in ex commodo do sint magna cillum. Eiusmod enim officia et ipsum exercitation veniam veniam ad minim ad minim. Eiusmod dolore dolor minim magna velit officia ut est occaecat magna in.',
          },
        },
        {
          type: 'header',
          data: {
            text: 'Do laboris magna quis nisi consequat!',
            level: 4,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Sunt elit labore consequat proident ullamco minim cupidatat. Exercitation reprehenderit ut ad irure eiusmod proident. Culpa culpa nulla eiusmod reprehenderit est officia Lorem id. Aliqua non commodo sint sunt ex nulla. Nulla esse irure eiusmod dolor nisi aliqua do cillum dolor amet officia. Veniam aliqua aliquip eu voluptate commodo sint ut. Sit nostrud Lorem aliquip ex culpa irure nulla deserunt consequat nulla ea velit in.',
          },
        },
        {
          type: 'image',
          data: {
            file: {
              id: 1382,
              url: 'https://cdn.directions.pt/uploads/2020/08/681-2000x1300-2.jpg',
              size: 257878,
              extension: 'image/jpeg',
            },
            caption: 'Deep in the universe',
            withBorder: false,
            stretched: false,
            withBackground: true,
          },
        },
        {
          type: 'quote',
          data: {
            text: 'Esse ea consectetur est fugiat ut dolor pariatur ex voluptate ad Lorem Lorem sit sunt. Eiusmod voluptate ullamco laborum minim elit. Cillum ullamco fugiat tempor dolore enim. Excepteur exercitation amet aliqua proident labore qui sint do dolore sint nulla aute.',
            caption: 'Carpe Diem',
            alignment: 'center',
          },
        },
        {
          type: 'delimiter',
          data: {},
        },
        {
          type: 'list',
          data: {
            style: 'ordered',
            items: [
              'Reprehenderit fugiat proident eiusmod proident.',
              'Velit enim duis fugiat excepteur.',
              'Qui incididunt nostrud ipsum in officia cillum esse officia incididunt id consequat quis.',
              'Fugiat quis qui sit velit sit tempor.',
              'Tempor sit aute eiusmod reprehenderit irure ea laborum.',
              'Sit do do cillum sit quis. Culpa adipisicing sunt nostrud ad labore enim.',
            ],
          },
        },
        {
          type: 'embed',
          data: {
            service: 'youtube',
            source: 'https://www.youtube.com/watch?v=yDiD8F9ItX0',
            embed: 'https://www.youtube.com/embed/yDiD8F9ItX0',
            width: 580,
            height: 320,
            caption: '',
          },
        },
        {
          type: 'table',
          data: {
            header: ['Name', 'Qtd', 'Price'],
            content: [
              ['Kine', '1 pcs', '100$'],
              ['Pigs', '3 pcs', '200$'],
              ['Chickens', '12 pcs', '150$'],
            ],
            footer: ['Total', '16 pcs', '$450'],
            caption: 'The stock on our store.',
          },
        },
      ],
      version: '2.19.0',
    };

    it('renders all known block tags', () => {
      expect(create(<Blocks data={data} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('when receives an EditorJS 2.21 blocks data', () => {
    const data: DataProp = {
      time: 1610632160642,
      blocks: [
        {
          id: 'IT0_8EfkWJ',
          type: 'paragraph',
          data: {
            text: 'Mollit deserunt culpa fugiat ea do laboris minim ex do. Elit cillum qui aute sint irure aliqua excepteur minim. Eiusmod velit cupidatat ea culpa magna magna id consectetur enim irure ex excepteur tempor quis. Veniam incididunt ullamco adipisicing dolor ex proident ex amet dolor. Nisi in adipisicing non quis id Lorem consectetur.',
          },
        },
        {
          id: 'uFx9tcT6q7',
          type: 'paragraph',
          data: {
            text: 'Nulla pariatur proident cillum consequat cupidatat ex reprehenderit nisi quis mollit laboris dolore ex. Laborum sint duis elit proident. Aliquip id mollit commodo excepteur.',
          },
        },
        {
          id: 'syMVjPY5jD',
          type: 'header',
          data: {
            text: 'Quis consectetur nostrud eu officia aute laborum labore nulla?',
            level: 3,
          },
        },
        {
          id: 'Xg-XG8USBG',
          type: 'paragraph',
          data: {
            text: 'Non pariatur deserunt elit proident. Reprehenderit cupidatat velit veniam ut pariatur minim culpa in ex commodo do sint magna cillum. Eiusmod enim officia et ipsum exercitation veniam veniam ad minim ad minim. Eiusmod dolore dolor minim magna velit officia ut est occaecat magna in.',
          },
        },
        {
          id: 'SUT6iK8yjz',
          type: 'header',
          data: {
            text: 'Do laboris magna quis nisi consequat!',
            level: 4,
          },
        },
        {
          id: 'N32lcCYsaX',
          type: 'paragraph',
          data: {
            text: 'Sunt elit labore consequat proident ullamco minim cupidatat. Exercitation reprehenderit ut ad irure eiusmod proident. Culpa culpa nulla eiusmod reprehenderit est officia Lorem id. Aliqua non commodo sint sunt ex nulla. Nulla esse irure eiusmod dolor nisi aliqua do cillum dolor amet officia. Veniam aliqua aliquip eu voluptate commodo sint ut. Sit nostrud Lorem aliquip ex culpa irure nulla deserunt consequat nulla ea velit in.',
          },
        },
        {
          id: 'VHVMTtqZUR',
          type: 'image',
          data: {
            file: {
              id: 1382,
              url: 'https://cdn.directions.pt/uploads/2020/08/681-2000x1300-2.jpg',
              size: 257878,
              extension: 'image/jpeg',
            },
            caption: 'Deep in the universe',
            withBorder: false,
            stretched: false,
            withBackground: true,
          },
        },
        {
          id: '_eyxYQhtQl',
          type: 'quote',
          data: {
            text: 'Esse ea consectetur est fugiat ut dolor pariatur ex voluptate ad Lorem Lorem sit sunt. Eiusmod voluptate ullamco laborum minim elit. Cillum ullamco fugiat tempor dolore enim. Excepteur exercitation amet aliqua proident labore qui sint do dolore sint nulla aute.',
            caption: 'Carpe Diem',
            alignment: 'center',
          },
        },
        {
          id: 'RHt0_4RnwX',
          type: 'delimiter',
          data: {},
        },
        {
          id: 'oY9PKxf-R6',
          type: 'list',
          data: {
            style: 'ordered',
            items: [
              'Reprehenderit fugiat proident eiusmod proident.',
              'Velit enim duis fugiat excepteur.',
              'Qui incididunt nostrud ipsum in officia cillum esse officia incididunt id consequat quis.',
              'Fugiat quis qui sit velit sit tempor.',
              'Tempor sit aute eiusmod reprehenderit irure ea laborum.',
              'Sit do do cillum sit quis. Culpa adipisicing sunt nostrud ad labore enim.',
            ],
          },
        },
        {
          id: 'bRWmjgU9gf',
          type: 'embed',
          data: {
            service: 'youtube',
            source: 'https://www.youtube.com/watch?v=yDiD8F9ItX0',
            embed: 'https://www.youtube.com/embed/yDiD8F9ItX0',
            width: 580,
            height: 320,
            caption: '',
          },
        },
        {
          id: 'XDxWYO53JC',
          type: 'table',
          data: {
            header: ['Name', 'Qtd', 'Price'],
            content: [
              ['Kine', '1 pcs', '100$'],
              ['Pigs', '3 pcs', '200$'],
              ['Chickens', '12 pcs', '150$'],
            ],
            footer: ['Total', '16 pcs', '$450'],
            caption: 'The stock on our store.',
          },
        },
      ],
      version: '2.21.0',
    };

    it('renders all known block tags', () => {
      expect(create(<Blocks data={data} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('when receives a Config object with className', () => {
    const data: DataProp = {
      time: 1610632160642,
      blocks: [
        {
          type: 'paragraph',
          data: {
            text: 'Mollit deserunt culpa fugiat ea do laboris minim ex do. Elit cillum qui aute sint irure aliqua excepteur minim. Eiusmod velit cupidatat ea culpa magna magna id consectetur enim irure ex excepteur tempor quis. Veniam incididunt ullamco adipisicing dolor ex proident ex amet dolor. Nisi in adipisicing non quis id Lorem consectetur.',
          },
        },
        {
          type: 'header',
          data: {
            text: 'Quis consectetur nostrud eu officia aute laborum labore nulla?',
            level: 3,
          },
        },
      ],
      version: '2.19.0',
    };

    const config: ConfigProp = {
      paragraph: {
        className: 'lead',
      },
    };

    it('only applies className to specified block', () => {
      expect(create(<Blocks data={data} config={config} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('when receives a Renderers object', () => {
    const data: DataProp = {
      time: 1610632160642,
      blocks: [
        {
          type: 'paragraph',
          data: {
            text: 'Mollit deserunt culpa fugiat ea do laboris minim ex do. Elit cillum qui aute sint irure aliqua excepteur minim. Eiusmod velit cupidatat ea culpa magna magna id consectetur enim irure ex excepteur tempor quis. Veniam incididunt ullamco adipisicing dolor ex proident ex amet dolor. Nisi in adipisicing non quis id Lorem consectetur.',
          },
        },
        {
          type: 'header',
          data: {
            text: 'Do laboris magna quis nisi consequat!',
            level: 2,
          },
        },
        {
          type: 'code',
          data: {
            code: 'const foo = new Bar();',
            lang: 'text/javascript',
          },
        },
      ],
      version: '2.19.0',
    };

    it('uses the provided renderer for the specified block', () => {
      const CustomRenderCode: RenderFn<{
        code: string | number;
        lang: 'text/javascript' | 'text/typescript';
      }> = ({ data: d, className }) => (
        <div>
          <pre>{d?.code && <code lang={d.lang} className={className}>{`${d.code}`}</code>}</pre>
          <p>Warning: do not run this code in production</p>
        </div>
      );

      const renderers: RenderersProp = {
        code: CustomRenderCode,
      };

      expect(create(<Blocks data={data} renderers={renderers} />).toJSON()).toMatchSnapshot();
    });

    it('must maintan backward compatibility with 0.1.x format', () => {
      const CustomRenderHeader = ({ data: d, className }: { data: { [s: string]: any }; className?: string }) => {
        const Tag = `h${d?.level || 1}` as keyof JSX.IntrinsicElements;

        return <Tag className={className}>{d.text}</Tag>;
      };

      const renderers: RenderersProp = {
        header: CustomRenderHeader,
      };

      expect(create(<Blocks data={data} renderers={renderers} />).toJSON()).toMatchSnapshot();
    });
  });
});
