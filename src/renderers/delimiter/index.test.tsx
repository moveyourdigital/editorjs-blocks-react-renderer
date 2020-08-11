import React from 'react';
import { create } from 'react-test-renderer';
import Delimiter from '.';

describe('<Delimiter />', () => {
  describe('when receives a Delimiter block', () => {
    it('renders a <hr /> tag', () => {
      expect(create(<Delimiter className="paragraph-delimiter" />).toJSON()).toMatchSnapshot();
    });
  });
});
