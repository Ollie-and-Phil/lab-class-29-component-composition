import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/components/cards/Card';

describe('Card component', () => {
  it('renders Card', () => {
    const wrapper = shallow(<Card name="Phil" image="Phil.jpg" alt="Phil" />);
    expect(wrapper).toMatchSnapshot();
  });
});
