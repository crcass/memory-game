import React from 'react';
import Button from './Button';

const TeamLogo = ({ color, name, image, handleClick }) => (
  <Button color={color} onClick={handleClick}>
    <img src={image} alt={name} />
  </Button>
);

export default TeamLogo;
