import React from 'react';
import PropTypes from 'prop-types';
import Card from '../cards/Card';
import Deck from '../decks/Deck';

const DeckOfCards = ({ cards }) => {
  const cardElements = cards.map(card => (
    <div key={`${card._id}`}>
      <Card title={card.name} image={card.image || card.gifLink} />
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
    image: PropTypes.string,
    gifLink: PropTypes.string,
    _id: PropTypes.string.isRequired
  }))
};

export default DeckOfCards;
