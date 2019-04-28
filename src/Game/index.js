import React, { Component, Fragment } from 'react';
import StyledHeader from '../components/StyledHeader';
import Hero from '../components/Hero';
import Teams from '../components/Teams';
import StyledFooter from '../components/StyledFooter';
import { shuffleArray, deepClone } from '../helpers';
import teams from './data/teams.js';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      clicked: [],
      topScore: 0,
      message: '',
      teams: shuffleArray(deepClone(teams))
    };
  }

  handleClick = e => {
    const name = e.target.alt;
    const { clicked, topScore } = this.state;
    clicked.includes(name)
      ? this.resetGame()
      : this.correctGuess(name, clicked, topScore);
  };

  correctGuess = (name, clicked, topScore) => {
    clicked.push(name);
    if (topScore < clicked.length) {
      topScore = clicked.length;
    }
    this.setState({
      clicked,
      topScore,
      message: 'Good Guess!',
      teams: shuffleArray(this.state.teams)
    });
  };

  resetGame = () => {
    this.setState({
      clicked: [],
      message: 'You already guessed that!',
      teams: shuffleArray(this.state.teams)
    });
  };

  render() {
    return (
      <Fragment>
        <StyledHeader
          score={this.state.clicked.length}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Hero />
        <Teams teams={this.state.teams} handleClick={this.handleClick} />
        <StyledFooter />
      </Fragment>
    );
  }
}

export default Game;
