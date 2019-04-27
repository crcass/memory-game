import React from 'react';
import TeamLogo from '../TeamLogo';

const Teams = ({ teams, handleClick }) =>
  teams.map(team => (
    <TeamLogo
      key={team.name}
      color={team.color}
      name={team.name}
      image={team.image}
      handleClick={handleClick}
    />
  ));

export default Teams;
