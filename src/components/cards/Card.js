import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, image }) => {
  return (
    <>
      {name && <header><h3>{name}</h3></header>}
      <figure>
        <img src={image} alt={name} />
      </figure>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Card;
