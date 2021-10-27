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
});
