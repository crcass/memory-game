import React from 'react';
import Container from './Container';

const ScoreContainer = ({ message, score, topScore }) => (
  <Container message={message}>
    <span>{message}</span>
    <div>
      <p>Score: {score}</p>
      <p>Top Score: {topScore}</p>
    </div>
  </Container>
);
export default ScoreContainer;
