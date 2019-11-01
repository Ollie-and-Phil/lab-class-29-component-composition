import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, image }) => {
  return (
    <>
      {title && <header><h3>{title}</h3></header>}
      <figure>
        <img src={image} />
      </figure>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
