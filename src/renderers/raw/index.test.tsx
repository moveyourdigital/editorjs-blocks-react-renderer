import React from 'react';
import { create } from 'react-test-renderer';
import Raw, { RawBlockData } from '.';

describe('<Raw />', () => {
  describe('when receives a raw block', () => {
    const data: RawBlockData = {
      html: '<div style="background: #000; color: #fff; font-size: 30px; padding: 50px;">Any HTML code</div>',
    };

    it('renders content as HTML', () => {
      expect(create(<Raw data={data} />).toJSON()).toMatchSnapshot();
    });
  });
});
