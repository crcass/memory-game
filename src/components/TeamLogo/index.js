import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  handleClick: PropTypes.func
};

const TeamLogo = ({ color, name, image, handleClick }) => (
  <Button color={color} onClick={handleClick}>
    <img src={image} alt={name} />
  </Button>
);

TeamLogo.propTypes = propTypes;

export default TeamLogo;
