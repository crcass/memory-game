import React, { Component, Fragment } from 'react';
import StyledHeader from '../components/StyledHeader';
import Hero from '../components/Hero';
import TeamContainer from '../components/TeamContainer';
import TeamLogo from '../components/TeamLogo';
import StyledFooter from '../components/StyledFooter';
import { deepClone } from '../helpers/deepClone';
import teams from './data/teams.js';

const clone = deepClone(teams);

class Game extends Component {
  constructor() {
    super();
    this.state = {
      clicked: [],
      topScore: 0,
      message: '',
      teams: clone
    };
  }

  shuffleTeams = teams => teams.sort(() => Math.random() - 0.5);

  handleClick = e => {
    const name = e.target.alt;
    const { clicked } = this.state;
    clicked.includes(name) ? this.resetGame() : this.correctGuess(e);
  };

  correctGuess = e => {
    const name = e.target.alt;
    const { clicked } = this.state;
    clicked.push(name);
    this.setState({ clicked, message: 'Good Guess!' });
    this.shuffleTeams(this.state.teams);
  };

  resetGame = () => {
    const { clicked } = this.state;
    let { topScore } = this.state;
    if (topScore < clicked.length) {
      topScore = clicked.length;
    }
    this.setState({
      clicked: [],
      topScore,
      message: 'You already guessed that!'
    });
    this.shuffleTeams(this.state.teams);
  };

  displayTeams = teams =>
    teams.map(team => (
      <TeamLogo
        key={team.name}
        color={team.color}
        name={team.name}
        image={team.image}
        handleClick={this.handleClick}
      />
    ));

  render() {
    return (
      <Fragment>
        <StyledHeader
          score={this.state.clicked.length}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Hero />
        <TeamContainer>{this.displayTeams(this.state.teams)}</TeamContainer>
        <StyledFooter />
      </Fragment>
    );
  }
}

export default Game;
