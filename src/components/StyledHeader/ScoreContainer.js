import styled from 'styled-components';

const ScoreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 33%;
  align-items: center;

  @media (min-width: 576px) {
    min-width: 0;
  }
`;

export default ScoreContainer;
