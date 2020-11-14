import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Ctas from '../components/Ctas';
import Faqs from '../components/Faqs';
import Explanation from '../components/Explanation';

describe('<Header />', () => {
  it('should have header components', () => {
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
  it('should have footer components', () => {
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
  it('should have Faqs components', () => {
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
  it('should have Faqs components', () => {
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
