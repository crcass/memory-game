import React from 'react';

const Header = props => {
  return (
    <header>
      <p>Score: {props.score}</p>
      <p>Highest Score: {props.highestScore}</p>
      <p>{props.message}</p>
    </header>
  );
};

export default Header;
