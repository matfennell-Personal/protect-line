import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Ctas from '../components/Ctas';
import Faqs from '../components/Faqs';
import Explanation from '../components/Explanation';
import Content from '../components/Content';
import Form from '../components/Form';
import Video from '../components/Video';

describe('<Header />', () => {
  it('should have header component', () => {
    const header = shallow(<Header />)

    expect(
      header.find('header').hasClass('header')
    ).toEqual(true);

    expect(
      header.find('.header__banner h1').text()
    ).toEqual("Life Insurance Made Simple.");

    expect(
      header.find('.header__banner h2').text()
    ).toEqual(
      "You're just a few moments away from seeing the best quote for you and your family."
    );
  });
});

describe('<Footer />', () => {
  it('should have footer component', () => {
    const footer = shallow(<Footer />)

    expect(
      footer.find('footer').hasClass('footer')
    ).toEqual(true);
  });
});

describe('<Ctas />', () => {
  it('should have Ctas components', () => {
    const ctas = shallow(<Ctas />)

    expect(
      ctas.find('.cta')
    ).toHaveLength(3);
  });
});

describe('<Faqs />', () => {
  it('should have Faqs component', () => {
    const faqs = shallow(<Faqs />)

    expect(
      faqs.find('button').text()
    ).toEqual(
      "Click to view our frequently asked questions ↓"
    );

    expect(
      faqs.find('.faqs__answers p')
    ).toHaveLength(4);
  });
});

describe('<Explanation />', () => {
  it('should have Explanation component', () => {
    const explanation = shallow(<Explanation />)

    expect(
      explanation.find('h4').text()
    ).toEqual(
      "What is life insurance? Let us explain..."
    );

    expect(
      explanation.find('p')
    ).toHaveLength(3);

    expect(
      explanation.find('form')
    ).toHaveLength(1);
  });
});

describe('<Content />', () => {
  it('should have Content component', () => {
    const content = shallow(<Content />)

    expect(
      content.find('h1').text()
    ).toEqual(
      "Whole of Life Insurance"
    );

    expect(
      content.find('h2').text()
    ).toEqual(
      "Peace of mind for your whole life."
    );

    expect(
      content.find('p')
    ).toHaveLength(4);
  });
});

describe('<Form />', () => {
  it('should have Form component', () => {
    const form = shallow(<Form />)

    expect(
      form.find('h3').text()
    ).toEqual(
      "Quick Quote"
    );

    expect(
      form.find('p').text()
    ).toEqual(
      "Fill in the below for a free, instant quick quote:"
    );

    expect(
      form.find('form')
    ).toHaveLength(1);
  });
});

describe('<Video />', () => {
  it('should have Video component', () => {
    const video = shallow(<Video />)

    expect(
      video.find('video')
    ).toHaveLength(1); 
  });
});
