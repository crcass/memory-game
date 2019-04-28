import styled from 'styled-components';
import teamsBg from './teamsBg.svg';

const TeamsBg = styled.div`
  background: linear-gradient(
      rgba(5, 255, 134, 0.3),
      rgba(233, 0, 82, 0.3),
      rgba(56, 0, 59, 1)
    ),
    url(${teamsBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default TeamsBg;
