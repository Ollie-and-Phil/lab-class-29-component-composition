import React from 'react';
import { shallow } from 'enzyme';
import Deck from '../src/components/decks/Deck';
import Card from '../src/components/cards/Card';


describe('Deck component', () => {
  it('renders Deck', () => {
    const wrapper = shallow(<Deck><Card name="Phil" image="Phil.jpg" alt="Phil" /></Deck>);
    expect(wrapper).toMatchSnapshot();
  });
});
