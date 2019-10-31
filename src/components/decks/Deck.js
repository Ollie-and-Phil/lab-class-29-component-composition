import React from 'react';
import PropTypes from 'prop-types';

const Deck = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  );
};

Deck.propTypes = {
  children: PropTypes.node.isRequired
};

export default Deck;
