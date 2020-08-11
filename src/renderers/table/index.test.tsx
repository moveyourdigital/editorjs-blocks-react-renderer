import React from 'react';
import { create } from 'react-test-renderer';
import Table, { TableBlockData } from '.';

describe('<Table />', () => {
  describe('when receives a table block', () => {
    const data: TableBlockData = {
      header: ['Name', 'Qtd', 'Price'],
      content: [
        ['Kine', '1 pcs', '100$'],
        ['Pigs', '3 pcs', '200$'],
        ['Chickens', '12 pcs', '150$'],
      ],
      footer: ['Total', '16 pcs', '$450'],
      caption: 'The stock on our store.',
    };

    it('renders a <table> tag', () => {
      expect(create(<Table data={data} />).toJSON()).toMatchSnapshot();
    });
  });
});
