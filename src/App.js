import React, { Component, Fragment } from 'react';
import LogoContainer from './components/LogoContainer';
import TeamLogo from './components/TeamLogo';
import StyledHeader from './components/StyledHeader';
import teams from './data/teams.js';

class App extends Component {
  state = {
    clicked: [],
    highestScore: 0,
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
    let { message, highestScore } = this.state;
    if (highestScore < clicked.length) highestScore = clicked.length;
    message = 'You already guessed that!';
    this.setState({ clicked: [], highestScore, message });
    teams.sort(() => Math.random() - 0.5);
  };

  winGame = () => {
    if (this.state.clicked.length === 20) console.log('Winner');
  };

  displayTeams = teams => {
    return teams
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
  };

  render() {
    return (
      <Fragment>
        <StyledHeader
          score={this.state.clicked.length}
          highestScore={this.state.highestScore}
          message={this.state.message}
        />
        <LogoContainer>{this.displayTeams(teams)}</LogoContainer>
      </Fragment>
    );
  }
}

export default App;
