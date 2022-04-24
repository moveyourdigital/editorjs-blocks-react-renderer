import React from 'react';
import { create } from 'react-test-renderer';
import Image, { ImageBlockData } from '.';

describe('<Image />', () => {
  describe('when receives a Image block with actions', () => {
    const data: ImageBlockData = {
      file: {
        url: 'https://cdn.directions.pt/uploads/2020/08/681-2000x1300-2.jpg',
        name: '681-2000x1300-2',
      },
      caption: 'Deep in the <b>universe</b>',
      withBorder: true,
      stretched: true,
      withBackground: true,
    };

    it('renders a <figure> block with <img> and <figcaption>', () => {
      expect(create(<Image data={data} className="special-image" />).toJSON()).toMatchSnapshot();
    });
  });

  describe('when receives a Image block without actions', () => {
    const data: ImageBlockData = {
      file: {
        url: 'https://cdn.directions.pt/uploads/2020/08/681-2000x1300-2.jpg',
        name: '681-2000x1300-2',
      },
      caption: 'Deep in the universe',
      withBorder: false,
      stretched: false,
      withBackground: false,
    };

    it('renders a <figure> block with <img> and <figcaption>', () => {
      expect(create(<Image data={data} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('when receives a SimpleImage block', () => {
    const data: ImageBlockData = {
      url: 'https://cdn.directions.pt/uploads/2020/08/681-2000x1300-2.jpg',
      caption: 'Deep in the universe',
      withBorder: false,
      stretched: false,
      withBackground: false,
    };

    it('renders a <figure> block with <img> and <figcaption>', () => {
      expect(create(<Image data={data} />).toJSON()).toMatchSnapshot();
    });
  });



  describe('when receives a Image block', () => {
    const data: ImageBlockData = {
      file: {
        url: '/uploads/2020/08/681-2000x1300-2.jpg',
        name: '681-2000x1300-2',
      },
      caption: 'Deep in the universe',
      withBorder: false,
      stretched: false,
      withBackground: false,
    };

    it('renders with file base href', () => {
      expect(create(<Image data={data} fileBaseHref={'https://google.com'} />).toJSON()).toMatchSnapshot();
    });

    it('renders without file base href', () => {
      expect(create(<Image data={data} />).toJSON()).toMatchSnapshot();
    });
  });
});
