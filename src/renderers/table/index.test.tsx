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

  describe('when receives a table block without footer', () => {
    const data: TableBlockData = {
      header: ['Name', 'Qtd', 'Price'],
      content: [
        ['Kine', '1 pcs', '100$'],
        ['Pigs', '3 pcs', '200$'],
        ['Chickens', '12 pcs', '150$'],
      ],
      caption: 'The stock on our store.',
    };

    it('renders a <table> tag without <tfoot>', () => {
      expect(create(<Table data={data} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('when receives a simple table', () => {
    const data: TableBlockData = {
      content: [
        ['Kine', '1 pcs', '100$'],
        ['Pigs', '3 pcs', '200$'],
        ['Chickens', '12 pcs', '150$'],
      ],
    };

    it('renders a <table> tag without <thead>, <tfoot> or <caption>', () => {
      expect(create(<Table data={data} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('when receives a table 2.20 format', () => {
    describe.each([
      [true, 'renders a <table> tag without <tfoot> or <caption>'],
      [false, 'renders a <table> tag without <thead>, <tfoot> or <caption>'],
    ])('withHeadings = %p', (withHeadings, display) => {
      const data: TableBlockData = {
        withHeadings,
        content: [
          ['Kine', 'Pigs', 'Chicken'],
          ['1 pcs', '3 pcs', '12 pcs'],
          ['100$', '200$', '150$'],
        ],
      };

      it(display, () => {
        expect(create(<Table data={data} />).toJSON()).toMatchSnapshot();
      });
    });
  });
});
