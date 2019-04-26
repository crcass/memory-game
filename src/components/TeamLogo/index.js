import React from 'react';
import Button from './Button';

const TeamLogo = props => (
  <Button onClick={props.handleClick}>
    <img src={props.image} alt={props.name} />
  </Button>
);

export default TeamLogo;
