import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ScoreContainer from './ScoreContainer';
import logo from './premier-league-logo-header.png';

const propTypes = {
  message: PropTypes.string,
  score: PropTypes.number,
  topScore: PropTypes.number
};

const StyledHeader = ({ message, score, topScore }) => (
  <Header>
    <a href="#">
      <img src={logo} alt="Premier League Memory Game" />
    </a>
    <ScoreContainer message={message} score={score} topScore={topScore} />
  </Header>
);

StyledHeader.propTypes = propTypes;

export default StyledHeader;
