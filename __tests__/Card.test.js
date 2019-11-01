import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/components/cards/Card';

describe('Card component', () => {
  it('renders Card', () => {
    const wrapper = shallow(<Card title="Phil" image="Phil.jpg" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders gifCard', () => {
    const wrapper = shallow(<Card image="Phil.jpg" />);
    expect(wrapper).toMatchSnapshot();
  });
});
