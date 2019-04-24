import React from 'react';

const Header = props => {
  return (
    <header>
      <p>Score: {props.score}</p>
    </header>
  );
};

export default Header;
