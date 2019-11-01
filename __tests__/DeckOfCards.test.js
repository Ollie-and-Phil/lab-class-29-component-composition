import React from 'react';
import { shallow } from 'enzyme';
import DeckOfCards from '../src/components/decksOfCards/DeckOfCards';

describe('DeckOfCards', () => {
  it('renders a deck of cards', () => {
    const characters = [{ name: 'Ollie', image: 'Ollie.png', _id:'you' }, { name: 'Ryan', image: 'Ryan.txt', _id:'sir' }];
    const wrapper = shallow(<DeckOfCards cards={characters}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a deck of gifCards', () => {
    const gifs = [{ gifLink: 'Ollie.png', _id:'you' }, { gifLink: 'Ryan.txt', _id:'sir' }];
    const wrapper = shallow(<DeckOfCards cards={gifs}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
