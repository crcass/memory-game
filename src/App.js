import React, { Component } from 'react';
import Picture from './components/Picture';
import Header from './components/Header';
import teams from './data/teams.js';

class App extends Component {
  state = {
    clicked: []
  };

  handleClick = e => {
    const name = e.target.alt;
    const { clicked } = this.state;
    clicked.includes(name) ? this.resetGame() : this.handleChange(e);
  };

  handleChange = e => {
    const name = e.target.alt;
    const { clicked } = this.state;
    clicked.push(name);
    this.setState({ clicked });
    teams.sort(() => Math.random() - 0.5);
  };

  resetGame = () => {
    this.setState({ clicked: [] });
    teams.sort(() => Math.random() - 0.5);
  };

  displayTeams = teams => {
    return teams
      .sort(() => Math.random() - 0.5)
      .map((team, i) => (
        <Picture
          key={i}
          name={team.name}
          image={team.image}
          handleClick={this.handleClick}
        />
      ));
  };

  render() {
    return (
      <div>
        <Header score={this.state.clicked.length} />
        {this.displayTeams(teams)}
      </div>
    );
  }
}

export default App;
