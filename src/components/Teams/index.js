import React from 'react';
import PropTypes from 'prop-types';
import TeamLogo from '../TeamLogo';
import TeamsContainer from './TeamsContainer';

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
  <TeamsContainer>{renderTeams(teams, handleClick)}</TeamsContainer>
);

Teams.propTypes = propTypes;

export default Teams;
