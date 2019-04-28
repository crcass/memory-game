import React from 'react';
import PropTypes from 'prop-types';
import TeamLogo from '../TeamLogo';
import TeamsContainer from './TeamsContainer';
import TeamsBg from './TeamsBg';

const propTypes = {
  teams: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

const renderTeams = (teams, handleClick) =>
  teams.map(team => (
    <TeamLogo
      key={team.name}
      color={team.color}
      name={team.name}
      image={team.image}
      handleClick={handleClick}
    />
  ));

const Teams = ({ teams, handleClick }) => (
  <TeamsBg>
    <TeamsContainer>{renderTeams(teams, handleClick)}</TeamsContainer>
  </TeamsBg>
);

Teams.propTypes = propTypes;

export default Teams;
