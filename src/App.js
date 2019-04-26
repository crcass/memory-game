import React, { Component, Fragment } from 'react';
import { Normalize } from 'styled-normalize';
import StyledHeader from './components/StyledHeader';
import Hero from './components/Hero';
import TeamContainer from './components/TeamContainer';
import TeamLogo from './components/TeamLogo';
import StyledFooter from './components/StyledFooter';
import teams from './data/teams.js';

class App extends Component {
  state = {
    clicked: [],
    topScore: 0,
    message: ''
  };

  handleClick = e => {
    const name = e.target.alt;
    const { clicked } = this.state;
    clicked.includes(name) ? this.resetGame() : this.correctGuess(e);
  };

  correctGuess = e => {
    const name = e.target.alt;
    const { clicked } = this.state;
    let { message } = this.state;
    clicked.push(name);
    message = 'Good Guess!';
    this.setState({ clicked, message });
    this.winGame();
    teams.sort(() => Math.random() - 0.5);
  };

  resetGame = () => {
    const { clicked } = this.state;
    let { message, topScore } = this.state;
    if (topScore < clicked.length) topScore = clicked.length;
    message = 'You already guessed that!';
    this.setState({ clicked: [], topScore, message });
    teams.sort(() => Math.random() - 0.5);
  };

  winGame = () => {
    if (this.state.clicked.length === 20) console.log('Winner');
  };

  displayTeams = teams =>
    teams
      .sort(() => Math.random() - 0.5)
      .map(team => (
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
        <Normalize />
        <StyledHeader
          score={this.state.clicked.length}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Hero />
        <TeamContainer>{this.displayTeams(teams)}</TeamContainer>
        <StyledFooter />
      </Fragment>
    );
  }
}

export default App;
