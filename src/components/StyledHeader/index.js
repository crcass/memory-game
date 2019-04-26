import React from 'react';
import Header from './Header';
import ScoreContainer from './ScoreContainer';
import logo from './premier-league-logo-header.png';

const StyledHeader = props => (
  <Header>
    <a href="/">
      <img src={logo} alt="Premier League Memory Game" />
    </a>
    <ScoreContainer>
      <span>{props.message}</span>
    </ScoreContainer>
    <ScoreContainer>
      <p>Score: {props.score}</p>
      <p>Top Score: {props.highestScore}</p>
    </ScoreContainer>
  </Header>
);

export default StyledHeader;
