import React from 'react';
import { create } from 'react-test-renderer';
import Header, { HeaderBlockData } from '.';

describe('<Header />', () => {
  describe('when receives an header level 2 block', () => {
    const data: HeaderBlockData = {
      text: 'Editor.js',
      level: 2,
    };

    it('renders a <h2> tag', () => {
      expect(create(<Header data={data} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('when receives a header block with className', () => {
    const data: HeaderBlockData = {
      text: 'Editor.js',
      level: 2,
    };

    it('renders a <h2 className>', () => {
      expect(create(<Header data={data} className={'header-block'} />).toJSON()).toMatchSnapshot();
    });
  });
});
