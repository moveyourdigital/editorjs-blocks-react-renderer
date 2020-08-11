import React from 'react';
import { create } from 'react-test-renderer';
import Embed, { EmbedBlockData } from '.';

describe('<Embed />', () => {
  describe('when receives a Embed block with actions', () => {
    const data: EmbedBlockData = {
      service: 'youtube',
      source: 'https://www.youtube.com/watch?v=yDiD8F9ItX0',
      embed: 'https://www.youtube.com/embed/yDiD8F9ItX0',
      width: 580,
      height: 320,
      caption: 'Deep in the Universe',
    };

    it('renders a <figure> block with <iframe> and <figcaption>', () => {
      expect(create(<Embed data={data} className="special-embed" />).toJSON()).toMatchSnapshot();
    });
  });
});
