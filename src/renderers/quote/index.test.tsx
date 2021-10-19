import React from 'react';
import { create } from 'react-test-renderer';
import Quote, { QuoteBlockData } from '.';

describe('<Quote />', () => {
  describe('when receives a Quote block', () => {
    const data: QuoteBlockData = {
      text: '<i>Esse ea consectetur est fugiat ut dolor pariatur ex voluptate ad Lorem Lorem sit sunt.</i>\n\n<i>Eiusmod voluptate <b>ullamco</b> laborum minim elit.</i><i><br></i>Cillum ullamco fugiat tempor dolore enim.\nExcepteur exercitation amet aliqua proident labore qui sint do dolore sint nulla aute.</i>',
      caption: 'Carpe Diem, <cite>Lorem ipusm dolor</cite>.',
      alignment: 'center',
    };

    it('renders a <blockquote> block with text and <footer>', () => {
      expect(create(<Quote data={data} className="special-quote" />).toJSON()).toMatchSnapshot();
    });
  });
});
