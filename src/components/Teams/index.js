import React from 'react';
import PropTypes from 'prop-types';
import TeamLogo from '../TeamLogo';
import TeamsContainer from './TeamsContainer';

const propTypes = {
  teams: PropTypes.array,
  handleClick: PropTypes.func
};

const Teams = ({ teams, handleClick }) => (
  <TeamsContainer>
    {teams.map(team => (
      <TeamLogo
        key={team.name}
        color={team.color}
        name={team.name}
        image={team.image}
        handleClick={handleClick}
      />
    ))}
  </TeamsContainer>
);

Teams.propTypes = propTypes;

export default Teams;
