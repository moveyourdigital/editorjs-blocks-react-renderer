import React from 'react';
import { create } from 'react-test-renderer';
import Paragraph, { ParagraphBlockData } from '.';

describe('<Paragraph />', () => {
  describe('when receives a paragraph block', () => {
    const data: ParagraphBlockData = {
      text: 'Hey. Meet the new <b>Editor</b>. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.',
    };

    it('renders a <p> tag', () => {
      expect(create(<Paragraph data={data} />).toJSON()).toMatchSnapshot();
    });
  });
});
