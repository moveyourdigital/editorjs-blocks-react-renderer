import React from 'react';
import { create } from 'react-test-renderer';
import List, { ListBlockData } from '.';

describe('<List />', () => {
  describe.each([
    ['unordered', '<ul>'],
    ['ordered', '<ol>'],
  ])('when receives a list %p block', (style, tag) => {
    const data: ListBlockData = {
      // @ts-expect-error
      style,
      items: [
        'It is a block-styled editor',
        'It returns clean <b>data output</b> in JSON',
        'Designed to be extendable and pluggable with a simple API',
      ],
    };

    it(`renders a ${tag} block`, () => {
      expect(create(<List data={data} />).toJSON()).toMatchSnapshot();
    });
  });

  describe.each([
    ['unordered', '<ul>'],
    ['ordered', '<ol>'],
  ])('when receives a nested list %p block', (style, tag) => {
    const data: ListBlockData = {
      // @ts-expect-error
      style,
      items: [
        {
          content: 'It is a block-styled editor',
          items: [],
        },
        {
          content: 'It returns clean data output in JSON',
          items: [
            {
              content: 'Designed to be extendable and pluggable with a simple API',
              items: [
                {
                  content: 'Red',
                  items: [],
                },
                {
                  content: 'Green',
                  items: [],
                },
              ],
            },
          ],
        },
        {
          content: 'It returns clean data output in JSON',
          items: [],
        },
        {
          content: 'Designed to be extendable and pluggable with a simple API',
          items: [],
        },
      ],
    };

    it(`renders a ${tag} block`, () => {
      expect(create(<List data={data} />).toJSON()).toMatchSnapshot();
    });

    describe('and when className is provided', () => {
      it.each(['list', 'list-ul px-3 py-2'])(`renders className to all ${tag} blocks`, (className) => {
        expect(create(<List data={data} className={className} />).toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('when receives a list with meta property', () => {
    describe('with custom start value', () => {
      const data: ListBlockData = {
        style: 'ordered',
        items: [
          'First item',
          'Second item',
          'Third item',
        ],
        meta: {
          start: 5,
          counterType: 'numeric',
        },
      };

      it('renders an <ol> block with start attribute', () => {
        const tree = create(<List data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
        // @ts-expect-error - accessing props for testing
        expect(tree.props.start).toBe(5);
      });
    });

    describe('with lower-roman counter type', () => {
      const data: ListBlockData = {
        style: 'ordered',
        items: [
          'First item',
          'Second item',
          'Third item',
        ],
        meta: {
          start: 1,
          counterType: 'lower-roman',
        },
      };

      it('renders an <ol> block with lower-roman list style', () => {
        const tree = create(<List data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
        // @ts-expect-error - accessing props for testing
        expect(tree.props.style.listStyleType).toBe('lower-roman');
      });
    });

    describe('with upper-roman counter type', () => {
      const data: ListBlockData = {
        style: 'ordered',
        items: [
          'First item',
          'Second item',
          'Third item',
        ],
        meta: {
          start: 3,
          counterType: 'upper-roman',
        },
      };

      it('renders an <ol> block with upper-roman list style and custom start', () => {
        const tree = create(<List data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
        // @ts-expect-error - accessing props for testing
        expect(tree.props.start).toBe(3);
        // @ts-expect-error - accessing props for testing
        expect(tree.props.style.listStyleType).toBe('upper-roman');
      });
    });

    describe('with lower-alpha counter type', () => {
      const data: ListBlockData = {
        style: 'ordered',
        items: [
          'First item',
          'Second item',
          'Third item',
        ],
        meta: {
          start: 1,
          counterType: 'lower-alpha',
        },
      };

      it('renders an <ol> block with lower-alpha list style', () => {
        const tree = create(<List data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
        // @ts-expect-error - accessing props for testing
        expect(tree.props.style.listStyleType).toBe('lower-alpha');
      });
    });

    describe('with upper-alpha counter type', () => {
      const data: ListBlockData = {
        style: 'ordered',
        items: [
          'First item',
          'Second item',
          'Third item',
        ],
        meta: {
          start: 2,
          counterType: 'upper-alpha',
        },
      };

      it('renders an <ol> block with upper-alpha list style and custom start', () => {
        const tree = create(<List data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
        // @ts-expect-error - accessing props for testing
        expect(tree.props.start).toBe(2);
        // @ts-expect-error - accessing props for testing
        expect(tree.props.style.listStyleType).toBe('upper-alpha');
      });
    });

    describe('with nested lists and meta properties', () => {
      const data: ListBlockData = {
        style: 'ordered',
        items: [
          {
            content: 'First level item 1',
            items: [],
          },
          {
            content: 'First level item 2',
            items: [
              {
                content: 'Nested item 1',
                items: [],
              },
              {
                content: 'Nested item 2',
                items: [],
              },
            ],
          },
        ],
        meta: {
          start: 3,
          counterType: 'upper-roman',
        },
      };

      it('renders nested <ol> blocks with inherited meta properties', () => {
        const tree = create(<List data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('backward compatibility', () => {
    it('renders ordered list without meta property (default behavior)', () => {
      const data: ListBlockData = {
        style: 'ordered',
        items: [
          'Item without meta',
          'Another item',
        ],
      };

      const tree = create(<List data={data} />).toJSON();
      expect(tree).toMatchSnapshot();
      // Should not have start attribute when start is 1 (default)
      // @ts-expect-error - accessing props for testing
      expect(tree.props.start).toBeUndefined();
    });

    it('renders unordered list without meta property', () => {
      const data: ListBlockData = {
        style: 'unordered',
        items: [
          'Bullet item',
          'Another bullet',
        ],
      };

      const tree = create(<List data={data} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});