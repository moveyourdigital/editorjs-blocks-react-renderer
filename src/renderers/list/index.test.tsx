import React from 'react';
import { create } from 'react-test-renderer';
import List, { ListBlockData } from '.';

describe('<List />', () => {
  describe('when receives a list unordered block', () => {
    const data: ListBlockData = {
      style: 'unordered',
      items: [
        'It is a block-styled editor',
        'It returns clean data output in JSON',
        'Designed to be extendable and pluggable with a simple API',
      ],
    };

    it('renders a <ul> block', () => {
      expect(create(<List data={data} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('when receives a list ordered block', () => {
    const data: ListBlockData = {
      style: 'ordered',
      items: [
        'It is a block-styled editor',
        'It returns clean data output in JSON',
        'Designed to be extendable and pluggable with a simple API',
      ],
    };

    it('renders a <ol> block', () => {
      expect(create(<List data={data} />).toJSON()).toMatchSnapshot();
    });
  });
});
