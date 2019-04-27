import React from 'react';
import TeamLogo from '../TeamLogo';
import TeamsContainer from './TeamsContainer';

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

export default Teams;
