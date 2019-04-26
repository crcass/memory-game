import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 9em auto;

  @media (min-width: 576px) {
    max-width: 527px;
  }

  @media (min-width: 768px) {
    max-width: 659px;
  }

  @media (min-width: 982px) {
    max-width: 791px;
  }
`;

export default LogoContainer;
