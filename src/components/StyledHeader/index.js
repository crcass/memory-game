import React from 'react';
import Header from './Header';
import ScoreContainer from './ScoreContainer';
import logo from './premier-league-logo-header.png';

const StyledHeader = ({ message, score, topScore }) => (
  <Header>
    <a href="/">
      <img src={logo} alt="Premier League Memory Game" />
    </a>
    <ScoreContainer message={message} score={score} topScore={topScore} />
  </Header>
);

export default StyledHeader;
