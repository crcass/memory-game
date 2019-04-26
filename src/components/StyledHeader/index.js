import React from 'react';
import Header from './Header';

const StyledHeader = props => (
  <Header>
    <p>Score: {props.score}</p>
    <p>Highest Score: {props.highestScore}</p>
    <p>{props.message}</p>
  </Header>
);

export default StyledHeader;
