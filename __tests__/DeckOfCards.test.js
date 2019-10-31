import React from 'react';
import { shallow } from 'enzyme';
import Deck from '../src/components/decks/Deck';
import Card from '../src/components/cards/Card';
import DeckOfCards from '../src/components/decksOfCards/DeckOfCards';

describe('DeckOfCards', () => {
  it('renders a deck of cards', () => {
    const characters = [{ name: 'Ollie', image: 'Ollie.png', _id:'you' }, { name: 'Ryan', image: 'Ryan.txt', _id:'sir' }];
    const wrapper = shallow(<DeckOfCards cards={characters}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
