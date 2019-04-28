import styled from 'styled-components';

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 511px;

  @media (min-width: 576px) {
    max-width: 638px;
  }

  @media (min-width: 768px) {
    max-width: 748px;
  }
`;

export default TeamContainer;
