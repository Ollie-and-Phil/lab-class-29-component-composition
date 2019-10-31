import React from 'react';
import PropTypes from 'prop-types';
import Card from '../cards/Card';
import Deck from '../decks/Deck';

const DeckOfCards = ({ cards }) => {
  const cardElements = cards.map(card => (
    <div key={`${card._id}`}>
      <Card name={card.name} image={card.image} />
    </div>
  ));

  return (
    <Deck>
      {cardElements}
    </Deck>
  );
};

DeckOfCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }))
};

export default DeckOfCards;
