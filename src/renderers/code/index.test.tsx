import React from 'react';
import { create } from 'react-test-renderer';
import Code, { CodeBlockData } from '.';

describe('<Code />', () => {
  describe('when receives a code block', () => {
    const data: CodeBlockData = {
      code: 'body {\n font-size: 14px;\n line-height: 16px;\n}',
      lang: 'text/html',
    };

    it('renders a <pre> tag with <code>', () => {
      expect(create(<Code data={data} />).toJSON()).toMatchSnapshot();
    });
  });
});
