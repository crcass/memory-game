import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

const propTypes = {
  message: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired
};

const ScoreContainer = ({ message, score, topScore }) => (
  <Container message={message}>
    <span>{message}</span>
    <div>
      <p>Score: {score}</p>
      <p>Top Score: {topScore}</p>
    </div>
  </Container>
);

ScoreContainer.propTypes = propTypes;

export default ScoreContainer;
